import './style.css';
import { ROUTES } from './router/routes.js';
import { META } from './config/meta.js';
import { analytics } from './services/analytics.js';

const appElement = document.querySelector('#app');

// Global navigation helper for programmatically controlled SPA path transitions
window.navigateSPA = (path) => {
  window.history.pushState(null, '', path);
  router();
};

// Regex route matcher compiling path parameter checks
function matchRoute(routePath, currentPath) {
  // Escape slash characters and replace parameter tokens like :slug or :id with capturing groups
  const paramRegex = routePath.replace(/\//g, '\\/').replace(/:[a-zA-Z0-9_]+/g, '([^\\/]+)');
  const regex = new RegExp(`^${paramRegex}\\/?$`);
  const match = currentPath.match(regex);
  if (match) {
    return {
      matched: true,
      params: match.slice(1)
    };
  }
  return { matched: false };
}

// Redirects legacy hash-routing parameters automatically to clean paths
function resolveLegacyHashRoute() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#/')) {
    const cleanPath = hash.substring(1); // Strip the leading '#' symbol
    window.history.replaceState(null, '', cleanPath);
  }
}

// Resolves and updates HTML meta attributes dynamically
function updateMetadata(pathname) {
  let meta = META[pathname];

  // Match dynamic routes patterns for fallback metadata injection
  if (!meta) {
    if (pathname.startsWith('/events/view/')) {
      meta = {
        title: 'Event Details | Amaanitvam Foundation',
        description: 'Review active logistics, agenda, and roster check-ins for this upcoming drive.',
        image: '/og/events-og.jpg'
      };
    } else if (pathname.startsWith('/internships/domain/')) {
      meta = {
        title: 'Internship Domain Details | Amaanitvam Foundation',
        description: 'Prerequisites, skills catalog, and details for specialization streams.',
        image: '/og/internships-og.jpg'
      };
    } else if (pathname.startsWith('/internships/opportunity/')) {
      meta = {
        title: 'Opportunity Scope | Amaanitvam Foundation',
        description: 'Detailed internship position descriptors and application registers.',
        image: '/og/internships-og.jpg'
      };
    } else if (pathname.startsWith('/admin/people/')) {
      meta = {
        title: 'Person Registry Profile | Admin Hub',
        description: 'Operational operations profile tracking volunteer records and credentials.',
        image: '/og/home-og.jpg'
      };
    } else if (pathname.startsWith('/admin/certificates/view')) {
      meta = {
        title: 'Certificate Record Details | Admin Hub',
        description: 'View layout and template preview options for issued credentials.',
        image: '/og/home-og.jpg'
      };
    } else {
      meta = META['/']; // Fallback default
    }
  }

  // Inject title
  document.title = meta.title;

  // Inject meta description
  let descMeta = document.querySelector('meta[name="description"]');
  if (!descMeta) {
    descMeta = document.createElement('meta');
    descMeta.setAttribute('name', 'description');
    document.head.appendChild(descMeta);
  }
  descMeta.setAttribute('content', meta.description);

  // Inject Open Graph tags
  updateOgTag('og:title', meta.title);
  updateOgTag('og:description', meta.description);
  updateOgTag('og:image', meta.image);
  updateOgTag('og:url', window.location.href);
}

function updateOgTag(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

// Global Single Page Application Router Orchestrator
async function router() {
  const currentPath = window.location.pathname || '/';
  
  let matchedRoute = null;
  let params = [];

  for (const route of ROUTES) {
    const res = matchRoute(route.path, currentPath);
    if (res.matched) {
      matchedRoute = route;
      params = res.params;
      break;
    }
  }

  // Fallback to Home if path doesn't match any registered routes
  if (!matchedRoute) {
    matchedRoute = ROUTES.find(r => r.path === '/');
  }

  // Apply Auth Guards based on Role Scope
  if (matchedRoute.authRequired) {
    if (matchedRoute.roleScope === 'volunteer') {
      const isLoggedIn = localStorage.getItem('amaanitvam_volunteer_logged_in') === 'true';
      if (!isLoggedIn) {
        window.history.replaceState(null, '', '/volunteer');
        router();
        return;
      }
    } else if (matchedRoute.roleScope === 'admin') {
      const sessionStr = sessionStorage.getItem('amaanitvam_admin_session');
      let isLoggedIn = false;
      try {
        const sessionObj = JSON.parse(sessionStr);
        isLoggedIn = sessionObj && sessionObj.loggedIn === true;
      } catch (err) {}
      if (!isLoggedIn) {
        window.history.replaceState(null, '', '/admin/login');
        router();
        return;
      }
    } else if (matchedRoute.roleScope === 'intern') {
      const isLoggedIn = localStorage.getItem('amaanitvam_intern_logged_in') === 'true';
      if (!isLoggedIn) {
        window.history.replaceState(null, '', '/internships');
        router();
        return;
      }
    }
  }

  // Resolve verify redirection parameter
  if (currentPath === '/verify') {
    window.history.replaceState(null, '', '/verify-certificate');
    router();
    return;
  }

  try {
    // Dynamic import to support Vite code splitting
    const module = await matchedRoute.component();
    const PageClass = module.default;

    // Build page name slug to track view swapping and avoid reload loop
    const newPageName = window.location.pathname + window.location.search;
    const previousPage = appElement.dataset.currentPage;

    if (previousPage !== newPageName) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.body.style.overflow = ''; // Release scroll lock on page swap
      const pageInstance = new PageClass();
      appElement.innerHTML = pageInstance.render();
      appElement.dataset.currentPage = newPageName;
      pageInstance.init();
    }

    // Refresh active highlights and headings
    updateMetadata(currentPath);
    analytics.trackPageView(currentPath);

  } catch (err) {
    console.error('[Router] Lazy resolution failure:', err);
    appElement.innerHTML = `
      <div class="min-h-screen flex flex-col items-center justify-center bg-stone-50 select-none font-sans text-center">
        <h2 class="text-xl font-display font-semibold text-stone-900 mb-2">Failed to load content</h2>
        <p class="text-text-muted text-[14px] mb-6">A network error occurred while loading this section.</p>
        <button onclick="window.location.reload()" class="px-6 py-2.5 rounded bg-pink-ruby text-white font-interface font-bold text-[11px] uppercase tracking-wider shadow">
          Refresh Page
        </button>
      </div>
    `;
  }
}

// Intercepts local link clicks and redirects them to history stack
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a');
  if (!anchor) return;

  const href = anchor.getAttribute('href');

  // Handle smooth scroll for page anchor tags
  if (href && href.startsWith('#') && !href.startsWith('#/')) {
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  }

  // Intercept valid relative paths and push state to history
  if (href && href.startsWith('/') && !href.startsWith('//') && !anchor.target) {
    e.preventDefault();
    window.history.pushState(null, '', href);
    router();
  }
});

// Watch browser state triggers (like back and forward buttons)
window.addEventListener('popstate', router);

// Startup initializer
window.addEventListener('DOMContentLoaded', () => {
  resolveLegacyHashRoute();
  router();
});

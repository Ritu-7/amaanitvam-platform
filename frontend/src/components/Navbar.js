import { PATHS, NAVIGATION_MENU, UTILITY_MENU } from '../constants/navigation.js';

export default class Navbar {
  render() {
    const isLoggedIn = localStorage.getItem('amaanitvam_volunteer_logged_in') === 'true';

    return `
      <header class="absolute top-0 left-0 w-full z-[5000] transition-all duration-500 border-b border-white/5 text-stone-200 navigation-header bg-stone-950/15" id="nav-header">
        <div class="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          
          <!-- Elegant Serif Branding with Lotus Logo -->
          <a href="/" class="flex items-center gap-3.5 group select-none">
            <img src="/amaanitvam-logo.png" alt="Lotus logo" class="h-11 w-auto transition-all duration-300" id="nav-logo">
            <span class="font-display font-bold tracking-wide text-white text-xl md:text-2xl transition-colors duration-300" id="nav-title">Amaanitvam</span>
          </a>

          <!-- Horizontal Navigation Links (Breathable, Core 8 items) -->
          <nav class="hidden lg:flex items-center gap-5.5 font-interface font-semibold text-[10px] uppercase tracking-widest text-stone-300" id="nav-links">
            ${NAVIGATION_MENU.map(item => `<a href="${item.path}" class="hover:text-white transition-colors duration-300 py-1" id="${item.id}">${item.label}</a>`).join('')}
            ${isLoggedIn ? `<a href="${PATHS.VOLUNTEER_DASHBOARD}" class="hover:text-white transition-colors duration-300 py-1" id="link-dashboard">Dashboard</a>` : ''}
          </nav>
 
          <!-- CTA & Mobile Toggle & Utility Portals -->
          <div class="flex items-center gap-4">
            <div class="hidden xl:flex items-center gap-3.5 font-interface text-[9.5px] uppercase tracking-widest text-stone-400 font-bold" id="utility-links">
              <a href="${PATHS.VERIFY}" class="hover:text-white transition-colors duration-300 py-1" id="link-verify">Verify</a>
              <span class="text-stone-700 select-none">|</span>
              <a href="${PATHS.ADMIN}" class="hover:text-white transition-colors duration-300 py-1" id="link-admin">Admin Center</a>
            </div>

            <a href="${PATHS.DONATE}" class="hidden sm:inline-flex font-interface font-semibold text-[11px] uppercase tracking-widest px-5 py-2.5 rounded bg-pink-ruby text-white hover:bg-pink-ruby/90 shadow-sm transition-all duration-300" id="nav-donate">
              Donate
            </a>
            
            <button id="mobile-toggle" aria-expanded="false" aria-controls="mobile-menu" aria-label="Toggle Navigation" class="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none z-50">
              <span class="w-6 h-0.5 bg-white transition-all duration-300 ease-out origin-left hamburger-line" id="ham-line-1"></span>
              <span class="w-6 h-0.5 bg-white transition-all duration-300 ease-out hamburger-line" id="ham-line-2"></span>
              <span class="w-6 h-0.5 bg-white transition-all duration-300 ease-out origin-left hamburger-line" id="ham-line-3"></span>
            </button>
          </div>
        </div>

        <!-- Mobile Curtain Menu (True Fullscreen Overlay) -->
        <div id="mobile-menu" class="fixed inset-0 w-screen h-screen bg-white text-stone-600 z-[10000] translate-x-full transition-transform duration-500 lg:hidden flex flex-col p-8 overflow-y-auto">
          
          <!-- Header Inside Overlay (Branding + Close Button) -->
          <div class="flex items-center justify-between shrink-0 mb-6">
            <a href="/" class="flex items-center gap-3.5 select-none mobile-nav-link">
              <img src="/amaanitvam-logo.png" alt="Lotus logo" class="h-10 w-auto">
              <span class="font-display font-bold text-text-dark text-lg md:text-xl">Amaanitvam Foundation</span>
            </a>
            
            <!-- Dedicated Close Button (X) with 44px Minimum Touch Target -->
            <button id="mobile-close" aria-label="Close Navigation" class="w-11 h-11 flex items-center justify-center text-text-dark hover:text-pink-ruby transition-colors focus:outline-none focus:ring-2 focus:ring-pink-ruby rounded-full z-[10001]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Divider -->
          <div class="w-full h-px bg-stone-100 mb-6 shrink-0"></div>

          <!-- Navigation Links (Scrollable area, 48px minimum row height) -->
          <nav class="flex-grow flex flex-col gap-1 font-interface font-semibold uppercase tracking-wider text-stone-600 overflow-y-auto pr-2">
            <a href="/" class="mobile-nav-link min-h-[48px] flex items-center text-[13.5px] border-b border-stone-100/60 hover:text-pink-ruby hover:pl-2 transition-all duration-300">Home</a>
            <a href="${PATHS.ABOUT}" class="mobile-nav-link min-h-[48px] flex items-center text-[13.5px] border-b border-stone-100/60 hover:text-pink-ruby hover:pl-2 transition-all duration-300">About Us</a>
            <a href="${PATHS.PROGRAMS}" class="mobile-nav-link min-h-[48px] flex items-center text-[13.5px] border-b border-stone-100/60 hover:text-pink-ruby hover:pl-2 transition-all duration-300">Programs</a>
            <a href="${PATHS.IMPACT}" class="mobile-nav-link min-h-[48px] flex items-center text-[13.5px] border-b border-stone-100/60 hover:text-pink-ruby hover:pl-2 transition-all duration-300">Impact</a>
            <a href="${PATHS.EVENTS}" class="mobile-nav-link min-h-[48px] flex items-center text-[13.5px] border-b border-stone-100/60 hover:text-pink-ruby hover:pl-2 transition-all duration-300">Events</a>
            <a href="${PATHS.INTERNSHIPS}" class="mobile-nav-link min-h-[48px] flex items-center text-[13.5px] border-b border-stone-100/60 hover:text-pink-ruby hover:pl-2 transition-all duration-300">Internships</a>
            <a href="${PATHS.VOLUNTEER}" class="mobile-nav-link min-h-[48px] flex items-center text-[13.5px] border-b border-stone-100/60 hover:text-pink-ruby hover:pl-2 transition-all duration-300">Volunteer</a>
            <a href="${PATHS.CONTACT}" class="mobile-nav-link min-h-[48px] flex items-center text-[13.5px] border-b border-stone-100/60 hover:text-pink-ruby hover:pl-2 transition-all duration-300">Contact Us</a>
            ${isLoggedIn ? `<a href="${PATHS.VOLUNTEER_DASHBOARD}" class="mobile-nav-link min-h-[48px] flex items-center text-[13.5px] border-b border-stone-100/60 hover:text-pink-ruby hover:pl-2 transition-all duration-300">Dashboard</a>` : ''}
            <a href="${PATHS.VERIFY}" class="mobile-nav-link min-h-[48px] flex items-center text-[13.5px] border-b border-stone-100/60 hover:text-pink-ruby hover:pl-2 transition-all duration-300">Verify Certificate</a>
            <a href="${PATHS.ADMIN}" class="mobile-nav-link min-h-[48px] flex items-center text-[13.5px] border-b border-stone-100/60 hover:text-pink-ruby hover:pl-2 transition-all duration-300">Admin Center</a>
            <a href="${PATHS.DONATE}" class="mobile-nav-link min-h-[48px] flex items-center text-[13.5px] border-b border-stone-100/60 hover:text-pink-ruby hover:pl-2 transition-all duration-300 text-pink-ruby">Donate Support</a>
          </nav>

          <!-- Divider -->
          <div class="w-full h-px bg-stone-100 my-6 shrink-0"></div>

          <!-- Footer Actions inside Overlay -->
          <div class="flex flex-col gap-2 shrink-0 text-left">
            <div class="flex items-center gap-4 text-[11px] font-sans text-stone-400">
              <a href="mailto:amaanitvamfoundation@gmail.com" class="hover:text-pink-ruby transition-colors">amaanitvamfoundation@gmail.com</a>
              <span>•</span>
              <span>+91 98999 23266</span>
            </div>
            <p class="text-[10px] text-stone-400 font-sans tracking-wide">Copyright © 2026 Amaanitvam Foundation. All Rights Reserved.</p>
          </div>
        </div>
      </header>
    `;
  }

  static init() {
    const header = document.getElementById('nav-header');
    const logo = document.getElementById('nav-logo');
    const title = document.getElementById('nav-title');
    const navLinks = document.getElementById('nav-links');
    const utilityLinks = document.getElementById('utility-links');
    const toggleBtn = document.getElementById('mobile-toggle');
    const closeBtn = document.getElementById('mobile-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const hamburgerLines = document.querySelectorAll('.hamburger-line');

    if (!header || !toggleBtn || !mobileMenu) return;

    // Highlight active link based on pathname
    const path = window.location.pathname || '/';
    
    // Clear any previous active highlights
    document.querySelectorAll('.active-nav').forEach(el => el.classList.remove('active-nav'));

    if (path === '/about') {
      const link = document.getElementById('link-about');
      if (link) link.classList.add('active-nav');
    } else if (path === '/programs') {
      const link = document.getElementById('link-programs');
      if (link) link.classList.add('active-nav');
    } else if (path === '/impact') {
      const link = document.getElementById('link-impact');
      if (link) link.classList.add('active-nav');
    } else if (path === '/volunteer') {
      const link = document.getElementById('link-volunteer');
      if (link) link.classList.add('active-nav');
    } else if (path.startsWith('/events')) {
      const link = document.getElementById('link-events');
      if (link) link.classList.add('active-nav');
    } else if (path.startsWith('/internships')) {
      const link = document.getElementById('link-internships');
      if (link) link.classList.add('active-nav');
    } else if (path === '/contact') {
      const link = document.getElementById('link-contact');
      if (link) link.classList.add('active-nav');
    } else if (path === '/volunteer/dashboard') {
      const link = document.getElementById('link-dashboard');
      if (link) link.classList.add('active-nav');
    } else if (path === '/verify-certificate') {
      const link = document.getElementById('link-verify');
      if (link) link.classList.add('active-nav');
    } else if (path.startsWith('/admin')) {
      const link = document.getElementById('link-admin');
      if (link) link.classList.add('active-nav');
    } else if (path === '/') {
      const link = document.getElementById('link-home');
      if (link) link.classList.add('active-nav');
    }

    // Sticky Scroll Handler
    const handleScroll = () => {
      if (window.scrollY > 60) {
        header.classList.remove('absolute', 'text-stone-200', 'border-white/5', 'bg-stone-950/15');
        header.classList.add('fixed', 'glass-nav', 'h-16', 'md:h-20', 'shadow-sm', 'border-b', 'border-stone-200/40', 'text-stone-600');
        
        title.classList.remove('text-white');
        title.classList.add('text-pink-ruby');
        
        if (navLinks) {
          navLinks.classList.remove('text-stone-300');
          navLinks.classList.add('text-stone-600');
          navLinks.querySelectorAll('a').forEach(a => {
            a.classList.remove('hover:text-white');
            a.classList.add('hover:text-text-dark');
          });
        }

        if (utilityLinks) {
          utilityLinks.classList.remove('text-stone-400');
          utilityLinks.classList.add('text-stone-500');
          utilityLinks.querySelectorAll('a').forEach(a => {
            a.classList.remove('hover:text-white');
            a.classList.add('hover:text-text-dark');
          });
        }

        hamburgerLines.forEach(l => {
          l.classList.remove('bg-white');
          l.classList.add('bg-text-dark');
        });
      } else {
        header.classList.remove('fixed', 'glass-nav', 'h-16', 'md:h-20', 'shadow-sm', 'border-b', 'border-stone-200/40', 'text-stone-600');
        header.classList.add('absolute', 'text-stone-200', 'border-white/5', 'bg-stone-950/15');
        
        title.classList.add('text-white');
        title.classList.remove('text-pink-ruby');
        
        if (navLinks) {
          navLinks.classList.add('text-stone-300');
          navLinks.classList.remove('text-stone-600');
          navLinks.querySelectorAll('a').forEach(a => {
            a.classList.add('hover:text-white');
            a.classList.remove('hover:text-text-dark');
          });
        }

        if (utilityLinks) {
          utilityLinks.classList.add('text-stone-400');
          utilityLinks.classList.remove('text-stone-500');
          utilityLinks.querySelectorAll('a').forEach(a => {
            a.classList.add('hover:text-white');
            a.classList.remove('hover:text-text-dark');
          });
        }

        hamburgerLines.forEach(l => {
          l.classList.add('bg-white');
          l.classList.remove('bg-text-dark');
        });
      }
    };
    
    handleScroll();

    // Scroll Handler Leak Protection
    if (window.amaanitvam_scroll_handler) {
      window.removeEventListener('scroll', window.amaanitvam_scroll_handler);
    }
    window.amaanitvam_scroll_handler = handleScroll;
    window.addEventListener('scroll', handleScroll);

    // Mobile menu toggle
    let isOpen = false;
    const toggleMenu = () => {
      isOpen = !isOpen;
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      
      if (isOpen) {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        hamburgerLines[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
        hamburgerLines[1].style.opacity = '0';
        hamburgerLines[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
        
        // Force hamburger lines to be dark when menu is open
        hamburgerLines.forEach(l => {
          l.classList.remove('bg-white');
          l.classList.add('bg-text-dark');
        });
        // Scroll lock
        document.body.style.overflow = 'hidden';
      } else {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        hamburgerLines[0].style.transform = '';
        hamburgerLines[1].style.opacity = '';
        hamburgerLines[2].style.transform = '';
        
        // Restore scroll and navbar line classes
        document.body.style.overflow = '';
        handleScroll();
      }
    };

    toggleBtn.addEventListener('click', toggleMenu);

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        if (isOpen) toggleMenu();
      });
    }

    // Keyboard ESC Keypress Handler
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        toggleMenu();
      }
    };
    if (window.amaanitvam_keydown_handler) {
      window.removeEventListener('keydown', window.amaanitvam_keydown_handler);
    }
    window.amaanitvam_keydown_handler = handleKeyDown;
    window.addEventListener('keydown', handleKeyDown);

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (isOpen) toggleMenu();
      });
    });
  }
}


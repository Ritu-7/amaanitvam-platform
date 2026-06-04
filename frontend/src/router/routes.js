export const ROUTES = [
  // Public Core Pages
  {
    path: '/',
    component: () => import('../pages/HomePage.js'),
    roleScope: 'public',
    authRequired: false
  },
  {
    path: '/about',
    component: () => import('../pages/AboutPage.js'),
    roleScope: 'public',
    authRequired: false
  },
  {
    path: '/programs',
    component: () => import('../pages/ProgramsPage.js'),
    roleScope: 'public',
    authRequired: false
  },
  {
    path: '/impact',
    component: () => import('../pages/ImpactPage.js'),
    roleScope: 'public',
    authRequired: false
  },
  {
    path: '/events',
    component: () => import('../pages/EventsPage.js'),
    roleScope: 'public',
    authRequired: false
  },
  {
    path: '/events/view/:slug',
    component: () => import('../pages/EventDetailsPage.js'),
    roleScope: 'public',
    authRequired: false,
    isDynamic: true
  },
  {
    path: '/events/:slug',
    component: () => import('../pages/EventReportPage.js'),
    roleScope: 'public',
    authRequired: false,
    isDynamic: true
  },
  {
    path: '/internships',
    component: () => import('../pages/InternshipsPage.js'),
    roleScope: 'public',
    authRequired: false
  },
  {
    path: '/internships/domain/:id',
    component: () => import('../pages/DomainDetailsPage.js'),
    roleScope: 'public',
    authRequired: false,
    isDynamic: true
  },
  {
    path: '/internships/opportunity/:id',
    component: () => import('../pages/InternshipOpportunityPage.js'),
    roleScope: 'public',
    authRequired: false,
    isDynamic: true
  },
  {
    path: '/internships/apply',
    component: () => import('../pages/InternshipApplicationPage.js'),
    roleScope: 'public',
    authRequired: false
  },
  {
    path: '/internships/status',
    component: () => import('../pages/ApplicationStatusPage.js'),
    roleScope: 'public',
    authRequired: false
  },
  {
    path: '/contact',
    component: () => import('../pages/ContactPage.js'),
    roleScope: 'public',
    authRequired: false
  },
  {
    path: '/donate',
    component: () => import('../pages/DonatePage.js'),
    roleScope: 'public',
    authRequired: false
  },
  {
    path: '/verify-certificate',
    component: () => import('../pages/CertificateVerificationPage.js'),
    roleScope: 'public',
    authRequired: false
  },
  {
    path: '/privacy-policy',
    component: () => import('../pages/PrivacyPolicyPage.js'),
    roleScope: 'public',
    authRequired: false
  },
  {
    path: '/terms-and-conditions',
    component: () => import('../pages/TermsConditionsPage.js'),
    roleScope: 'public',
    authRequired: false
  },

  // Volunteer Workspace
  {
    path: '/volunteer',
    component: () => import('../pages/VolunteerPortal.js'),
    roleScope: 'public',
    authRequired: false
  },
  {
    path: '/volunteer/dashboard',
    component: () => import('../pages/VolunteerDashboard.js'),
    roleScope: 'volunteer',
    authRequired: true
  },

  // Intern Workspace
  {
    path: '/intern/dashboard',
    component: () => import('../pages/InternDashboardPage.js'),
    roleScope: 'intern',
    authRequired: true
  },

  // Admin Portal & CRM Subroutes
  {
    path: '/admin/login',
    component: () => import('../pages/AdminLoginPage.js'),
    roleScope: 'public',
    authRequired: false
  },
  {
    path: '/admin/request-access',
    component: () => import('../pages/AdminLoginPage.js'),
    roleScope: 'public',
    authRequired: false
  },
  {
    path: '/admin/forgot-password',
    component: () => import('../pages/AdminLoginPage.js'),
    roleScope: 'public',
    authRequired: false
  },
  {
    path: '/admin/reset-password',
    component: () => import('../pages/AdminLoginPage.js'),
    roleScope: 'public',
    authRequired: false
  },
  {
    path: '/admin',
    component: () => import('../pages/AdminDashboardPage.js'),
    roleScope: 'admin',
    authRequired: true
  },
  {
    path: '/admin/search',
    component: () => import('../pages/AdminGlobalSearchPage.js'),
    roleScope: 'admin',
    authRequired: true
  },
  {
    path: '/admin/people',
    component: () => import('../pages/AdminPeoplePage.js'),
    roleScope: 'admin',
    authRequired: true
  },
  {
    path: '/admin/people/:id',
    component: () => import('../pages/AdminPersonProfilePage.js'),
    roleScope: 'admin',
    authRequired: true,
    isDynamic: true
  },
  {
    path: '/admin/volunteers',
    component: () => import('../pages/AdminVolunteersPage.js'),
    roleScope: 'admin',
    authRequired: true
  },
  {
    path: '/admin/internships',
    component: () => import('../pages/AdminInternshipsPage.js'),
    roleScope: 'admin',
    authRequired: true
  },
  {
    path: '/admin/projects',
    component: () => import('../pages/AdminProjectsPage.js'),
    roleScope: 'admin',
    authRequired: true
  },
  {
    path: '/admin/certificates',
    component: () => import('../pages/AdminCertificatesPage.js'),
    roleScope: 'admin',
    authRequired: true
  },
  {
    path: '/admin/certificates/new',
    component: () => import('../pages/CertificateGeneratorPage.js'),
    roleScope: 'admin',
    authRequired: true
  },
  {
    path: '/admin/certificates/view',
    component: () => import('../pages/AdminCertificateDetailPage.js'),
    roleScope: 'admin',
    authRequired: true
  },
  {
    path: '/admin/events',
    component: () => import('../pages/AdminEventsPage.js'),
    roleScope: 'admin',
    authRequired: true
  },
  {
    path: '/admin/events/new',
    component: () => import('../pages/EventCreatorPage.js'),
    roleScope: 'admin',
    authRequired: true
  },
  {
    path: '/admin/events/report',
    component: () => import('../pages/EventReportPublisherPage.js'),
    roleScope: 'admin',
    authRequired: true
  },
  {
    path: '/admin/donations',
    component: () => import('../pages/AdminDonationsPage.js'),
    roleScope: 'admin',
    authRequired: true
  },
  {
    path: '/admin/partnerships',
    component: () => import('../pages/AdminPartnershipsPage.js'),
    roleScope: 'admin',
    authRequired: true
  },
  {
    path: '/admin/inquiries',
    component: () => import('../pages/AdminInquiriesPage.js'),
    roleScope: 'admin',
    authRequired: true
  },
  {
    path: '/admin/analytics',
    component: () => import('../pages/AdminAnalyticsPage.js'),
    roleScope: 'admin',
    authRequired: true
  },
  {
    path: '/admin/audit-logs',
    component: () => import('../pages/AdminAuditLogsPage.js'),
    roleScope: 'admin',
    authRequired: true
  },
  {
    path: '/admin/system-health',
    component: () => import('../pages/AdminSystemHealthPage.js'),
    roleScope: 'admin',
    authRequired: true
  }
];

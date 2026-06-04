export const PATHS = {
  HOME: '/',
  ABOUT: '/about',
  PROGRAMS: '/programs',
  IMPACT: '/impact',
  EVENTS: '/events',
  INTERNSHIPS: '/internships',
  VOLUNTEER: '/volunteer',
  CONTACT: '/contact',
  DONATE: '/donate',
  VERIFY: '/verify-certificate',
  VOLUNTEER_DASHBOARD: '/volunteer/dashboard',
  ADMIN: '/admin',
  PRIVACY_POLICY: '/privacy-policy',
  TERMS_CONDITIONS: '/terms-and-conditions',
};

export const NAVIGATION_MENU = [
  { label: 'Home', path: PATHS.HOME, id: 'link-home' },
  { label: 'About Us', path: PATHS.ABOUT, id: 'link-about' },
  { label: 'Programs', path: PATHS.PROGRAMS, id: 'link-programs' },
  { label: 'Impact', path: PATHS.IMPACT, id: 'link-impact' },
  { label: 'Events', path: PATHS.EVENTS, id: 'link-events' },
  { label: 'Internships', path: PATHS.INTERNSHIPS, id: 'link-internships' },
  { label: 'Volunteer', path: PATHS.VOLUNTEER, id: 'link-volunteer' },
  { label: 'Contact Us', path: PATHS.CONTACT, id: 'link-contact' },
];

export const UTILITY_MENU = [
  { label: 'Verify', path: PATHS.VERIFY, id: 'link-verify' },
  { label: 'Admin Center', path: PATHS.ADMIN, id: 'link-admin' },
];

export const LEGAL_MENU = [
  { label: 'Privacy Policy', path: PATHS.PRIVACY_POLICY },
  { label: 'Terms & Conditions', path: PATHS.TERMS_CONDITIONS },
];

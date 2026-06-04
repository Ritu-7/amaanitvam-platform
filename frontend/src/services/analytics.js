export const analytics = {
  // Track page transitions in the SPA router
  trackPageView(path) {
    console.log(`[Analytics - Telemetry] Page View: ${path}`);
    
    // Future: Google Analytics integration
    // if (typeof window.gtag === 'function') {
    //   window.gtag('config', 'GA_MEASUREMENT_ID', { page_path: path });
    // }
  },

  // Track user conversions or transactional activities
  trackEvent(action, category, label = '') {
    console.log(`[Analytics - Telemetry] Event: Action="${action}" | Category="${category}" | Label="${label}"`);
    
    // Future: Analytics service hook
    // if (typeof window.gtag === 'function') {
    //   window.gtag('event', action, {
    //     event_category: category,
    //     event_label: label
    //   });
    // }
  },

  // Pre-configured custom transaction events for developer usage
  trackVolunteerApplication() {
    this.trackEvent('volunteer_apply', 'Conversions', 'Volunteer Portal CTA Submit');
  },

  trackDonationClick(amount) {
    this.trackEvent('donate_click', 'Donations', `Amount Selected: ${amount}`);
  },

  trackCertificateVerify(code) {
    this.trackEvent('certificate_verify', 'Security Registry', `Code: ${code}`);
  },

  trackEventRegistration(eventId) {
    this.trackEvent('event_register', 'Engagement', `Event ID: ${eventId}`);
  },

  trackInternshipApplication(domain) {
    this.trackEvent('internship_apply', 'Conversions', `Domain: ${domain}`);
  }
};
export default analytics;

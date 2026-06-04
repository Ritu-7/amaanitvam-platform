import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

export default class PrivacyPolicyPage {
  constructor() {
    this.navbar = new Navbar();
    this.footer = new Footer();
  }

  render() {
    return `
      <div class="flex flex-col min-h-screen bg-stone-50 select-none">
        ${this.navbar.render()}

        <main class="flex-grow py-32">
          <div class="max-w-4xl mx-auto px-6 relative z-10">
            
            <!-- Header Section -->
            <div class="border-b border-stone-200 pb-8 mb-12 text-left">
              <span class="font-interface font-semibold text-[11px] uppercase tracking-widest text-pink-ruby block mb-3">Legal & Transparency</span>
              <h1 class="font-display font-semibold text-4xl md:text-5xl text-text-dark tracking-tight mb-4">
                Privacy Policy
              </h1>
              <p class="font-sans text-sm text-stone-500 font-light">
                Last Updated: June 4, 2026
              </p>
            </div>

            <!-- Content Section -->
            <div class="space-y-12 text-left">
              
              <!-- Section 1 -->
              <section class="space-y-4">
                <h2 class="type-h3 text-pink-ruby text-sm">1. Information Collection</h2>
                <p class="type-body text-[18px]">
                  Amaanitvam Foundation collects information directly provided by volunteers, internship applicants, donors, and system users. This includes identification parameters (such as names and email addresses), contact numbers, academic histories, skills, and areas of interest.
                </p>
              </section>

              <!-- Section 2 -->
              <section class="space-y-4">
                <h2 class="type-h3 text-pink-ruby text-sm">2. Data Usage</h2>
                <p class="type-body text-[18px]">
                  All gathered data is utilized exclusively to manage operations, coordinate active programs, process applications, issue certificates, and facilitate donation processing. We do not distribute, sell, or license personal data to external third parties.
                </p>
              </section>

              <!-- Section 3 -->
              <section class="space-y-4">
                <h2 class="type-h3 text-pink-ruby text-sm">3. Volunteer Data</h2>
                <p class="type-body text-[18px]">
                  Volunteer profile information, project contributions, event attendances, and performance metrics are managed securely. Access to these profiles is restricted to authorized operations leads and program coordinators for matching skills with outreach programs.
                </p>
              </section>

              <!-- Section 4 -->
              <section class="space-y-4">
                <h2 class="type-h3 text-pink-ruby text-sm">4. Internship Applications</h2>
                <p class="type-body text-[18px]">
                  Application data, including resumes and screening records, is treated with strict confidentiality. It is used solely to evaluate candidates for corresponding cohorts. Rejected application data is retained briefly for compliance purposes and then securely archived.
                </p>
              </section>

              <!-- Section 5 -->
              <section class="space-y-4">
                <h2 class="type-h3 text-pink-ruby text-sm">5. Certificate Registry</h2>
                <p class="type-body text-[18px]">
                  Certificates issued by Amaanitvam Foundation contain recipient names, project terms, and verification tracking IDs. These records are stored in a public-facing registry vault to prevent forgery and allow institutional verification. Recipients consent to this registry publishing during onboarding.
                </p>
              </section>

              <!-- Section 6 -->
              <section class="space-y-4">
                <h2 class="type-h3 text-pink-ruby text-sm">6. Contact</h2>
                <p class="type-body text-[18px]">
                  For questions regarding data processing, privacy choices, or rights requests, please contact our operational administration directly at:
                </p>
                <div class="p-5 rounded-lg bg-stone-100 border border-stone-200/60 max-w-md font-sans text-sm text-text-muted space-y-1.5 font-light">
                  <p class="font-semibold text-text-dark">Amaanitvam Foundation Secretariat</p>
                  <p>Email: amaanitvamfoundation@gmail.com</p>
                  <p>Phone: +91 98999 23266</p>
                  <p>Address: H. No 269 W.NO2, Gadaipur, Mehrauli, South Delhi - 110030</p>
                </div>
              </section>

            </div>

          </div>
        </main>

        ${this.footer.render()}
      </div>
    `;
  }

  init() {
    Navbar.init();
    Footer.init();
  }
}

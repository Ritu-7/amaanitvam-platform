import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

export default class TermsConditionsPage {
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
              <span class="font-interface font-semibold text-[11px] uppercase tracking-widest text-pink-ruby block mb-3">Legal & Terms</span>
              <h1 class="font-display font-semibold text-4xl md:text-5xl text-text-dark tracking-tight mb-4">
                Terms & Conditions
              </h1>
              <p class="font-sans text-sm text-stone-500 font-light">
                Last Updated: June 4, 2026
              </p>
            </div>

            <!-- Content Section -->
            <div class="space-y-12 text-left">
              
              <!-- Section 1 -->
              <section class="space-y-4">
                <h2 class="type-h3 text-pink-ruby text-sm">1. Platform Usage</h2>
                <p class="type-body text-[18px]">
                  By accessing the Amaanitvam Foundation platform, you agree to comply with these Terms and Conditions. This platform is provided to coordinate student-led social actions, educational support, volunteer operations, and certificate registry verifications. Users are prohibited from using the platform for any malicious or unauthorized purposes.
                </p>
              </section>

              <!-- Section 2 -->
              <section class="space-y-4">
                <h2 class="type-h3 text-pink-ruby text-sm">2. Certificate Verification</h2>
                <p class="type-body text-[18px]">
                  Our certificate verification vault is designed to allow institutions, employers, and administrators to verify issued credentials. Any attempt to modify, forge, bypass, or inject false certificate verification states will result in immediate termination of access and potential legal action.
                </p>
              </section>

              <!-- Section 3 -->
              <section class="space-y-4">
                <h2 class="type-h3 text-pink-ruby text-sm">3. Volunteer Programs</h2>
                <p class="type-body text-[18px]">
                  Participation in our volunteer programs is subject to alignment with our values of compassion and responsibility. Volunteers agree to conduct themselves professionally and represent the Amaanitvam Foundation ethically during all community actions and outreach campaigns.
                </p>
              </section>

              <!-- Section 4 -->
              <section class="space-y-4">
                <h2 class="type-h3 text-pink-ruby text-sm">4. Internships</h2>
                <p class="type-body text-[18px]">
                  Selected interns agree to perform their duties in accordance with the cohort guidelines. Intellectual property developed during the internship for foundation programs remains the property of the Amaanitvam Foundation to ensure it stays accessible to the public.
                </p>
              </section>

              <!-- Section 5 -->
              <section class="space-y-4">
                <h2 class="type-h3 text-pink-ruby text-sm">5. Donations</h2>
                <p class="type-body text-[18px]">
                  Donations made through this platform are voluntary and designated to support our active educational initiatives, student operations, and outreach campaigns. All transactions are securely recorded and mapped for programmatic transparency.
                </p>
              </section>

              <!-- Section 6 -->
              <section class="space-y-4">
                <h2 class="type-h3 text-pink-ruby text-sm">6. Liability</h2>
                <p class="type-body text-[18px]">
                  Amaanitvam Foundation strives to keep the platform available and accurate, but we provide it on an "as-is" basis. We are not liable for any operational delays, data inaccuracies, or service disruptions beyond our reasonable control.
                </p>
              </section>

              <!-- Section 7 -->
              <section class="space-y-4">
                <h2 class="type-h3 text-pink-ruby text-sm">7. Contact</h2>
                <p class="type-body text-[18px]">
                  If you have questions about these Terms and Conditions or want to report a violation, please contact us at:
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

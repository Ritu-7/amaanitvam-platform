import { PATHS, NAVIGATION_MENU } from '../constants/navigation.js';

export default class Footer {
  render() {
    return `

      <!-- ==========================================
           DEEP DARK FOOTER: NARRATIVE LOOP CLOSURE
           ========================================== -->
      <footer class="relative bg-stone-950 text-stone-400 py-20 px-6 border-t border-stone-900 z-20 overflow-hidden">
        
        <!-- Story tagline full circle -->
        <div class="max-w-5xl mx-auto text-center mb-16 select-none scroll-reveal">
          <h3 class="font-display italic text-2xl md:text-3xl text-amber-100/90 font-light leading-relaxed">
            "What Are We, If Not for One Another?"
          </h3>
          <div class="w-8 h-px bg-stone-800 mx-auto mt-6"></div>
        </div>

        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center justify-between text-left relative z-10 border-t border-stone-900 pt-12">
          
          <!-- Logo & Contact (6 cols) -->
          <div class="md:col-span-6 flex flex-col items-start gap-5">
            <div class="flex items-center gap-4">
              <img src="/amaanitvam-logo.png" alt="Amaanitvam Foundation Logo" class="h-14 w-auto select-none">
              <span class="font-display font-bold text-2xl md:text-3xl text-white tracking-wide">Amaanitvam</span>
            </div>
            <p class="font-sans text-[13.5px] text-stone-400 font-light max-w-md mt-2 leading-relaxed">
              A student-led movement inspiring learning, education, and collective action through compassion to build a stronger society.
            </p>
            <div class="font-sans text-[12.5px] text-stone-400 mt-4 space-y-2.5 font-light">
              <p class="text-stone-500"><strong class="font-semibold text-stone-400">Address:</strong> H. No 269 W.NO2, MEHRAULI, Gadaipur, Mehrauli, South Delhi - 110030</p>
              <p><strong class="font-semibold text-stone-400">Phone:</strong> +91 98999 23266</p>
              <p><strong class="font-semibold text-stone-400">Email:</strong> <a href="mailto:amaanitvamfoundation@gmail.com" class="hover:text-amber-100 transition-colors duration-300">amaanitvamfoundation@gmail.com</a></p>
              <p><strong class="font-semibold text-stone-400">Darpan ID:</strong> DL/2025/0817469</p>
            </div>
          </div>

          <!-- Utility Links Grid (6 cols) -->
            <div class="md:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-[12px] font-interface tracking-wider uppercase font-bold text-stone-300">
              
              <div class="flex flex-col gap-3">
                <span class="text-[9.5px] text-stone-600 font-bold uppercase tracking-widest">Foundation</span>
                ${NAVIGATION_MENU.map(item => `<a href="${item.path}" class="hover:text-amber-100 transition-colors duration-300">${item.label}</a>`).join('')}
              </div>

              <div class="flex flex-col gap-3">
                <span class="text-[9.5px] text-stone-600 font-bold uppercase tracking-widest">Services</span>
                <a href="${PATHS.VERIFY}" class="hover:text-amber-100 transition-colors duration-300">Verify Certificate</a>
                <a href="${PATHS.DONATE}" class="hover:text-amber-100 transition-colors duration-300">Donate Support</a>
              </div>

              <div class="flex flex-col gap-3">
                <span class="text-[9.5px] text-stone-600 font-bold uppercase tracking-widest">Portals</span>
                <a href="${PATHS.VOLUNTEER_DASHBOARD}" class="hover:text-amber-100 transition-colors duration-300">Volunteer Console</a>
                <a href="${PATHS.ADMIN}" class="hover:text-amber-100 transition-colors duration-300">Admin Operations</a>
              </div>

            </div>

        </div>

        <!-- Copyright -->
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between mt-16 pt-8 border-t border-stone-900/60 text-[11px] text-stone-600 font-light font-sans tracking-wide gap-4">
          <p>Copyright © 2026 Amaanitvam Foundation. All Rights Reserved.</p>
          <div class="flex gap-4">
            <a href="${PATHS.PRIVACY_POLICY}" class="hover:text-stone-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="${PATHS.TERMS_CONDITIONS}" class="hover:text-stone-400 transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </footer>
    `;
  }

  static init() {
    // Left empty deliberately as legacy form handlers are removed
  }
}

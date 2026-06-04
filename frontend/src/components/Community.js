import { PATHS } from '../constants/navigation.js';

export default class Community {
  render() {
    return `
      <section id="community" class="relative py-36 bg-stone-950 overflow-hidden flex items-center justify-center min-h-[650px] z-20 select-none">
        
        <!-- Full cover background image -->
        <div class="absolute inset-0 z-0">
          <img src="/field-children.jpg" alt="Children holding hands in a field at sunset looking at landscape" loading="lazy" class="w-full h-full object-cover opacity-50 filter brightness-95">
          <!-- Dark warm linear gradient overlay to ensure legibility -->
          <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40"></div>
        </div>

        <div class="max-w-6xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          
          <div class="max-w-3xl mb-16 scroll-reveal">
            <span class="font-interface font-semibold text-[11px] uppercase tracking-widest text-amber-200/90 mb-4 block">Participate in Our Work</span>
            <h2 class="type-section-heading text-white">
              Change is never created alone.
            </h2>
            <div class="w-12 h-px bg-amber-200/30 mx-auto mt-8"></div>
          </div>

          <!-- Three Spacious Paths of Participation -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left max-w-5xl stagger-container">
            
            <!-- Path 1: Volunteer -->
            <div class="p-8 rounded-xl bg-stone-900/60 backdrop-blur-md border border-stone-800/80 flex flex-col justify-between hover:bg-stone-900/85 transition-all duration-300 stagger-load">
              <div>
                <span class="font-interface font-bold text-xs uppercase tracking-widest text-amber-100/90 mb-3 block">Volunteer</span>
                <p class="type-card-content text-stone-300 mb-6 font-light">
                  Share your knowledge and mentor young minds. Direct our classroom activities, manage local distribution drives, or coordinate community workshops.
                </p>
              </div>
              <a href="${PATHS.VOLUNTEER}" class="inline-flex items-center gap-1 font-interface font-semibold text-[11px] uppercase tracking-widest text-amber-100/90 hover:text-white border-b border-amber-100/20 hover:border-white py-0.5 w-fit transition-colors duration-300 mt-4 focus:outline-none focus:text-white focus:border-white" aria-label="Apply to Volunteer with Amaanitvam">
                Apply to Volunteer
              </a>
            </div>

            <!-- Path 2: Support -->
            <div class="p-8 rounded-xl bg-stone-900/60 backdrop-blur-md border border-stone-800/80 flex flex-col justify-between hover:bg-stone-900/85 transition-all duration-300 stagger-load">
              <div>
                <span class="font-interface font-bold text-xs uppercase tracking-widest text-amber-100/90 mb-3 block">Support</span>
                <p class="type-card-content text-stone-300 mb-6 font-light">
                  Fuel our programmatic work on the ground. Your support directly funds study materials, classroom supplies, and program operations for Project Manthan.
                </p>
              </div>
              <a href="${PATHS.DONATE}" class="inline-flex items-center gap-1 font-interface font-semibold text-[11px] uppercase tracking-widest text-amber-100/90 hover:text-white border-b border-amber-100/20 hover:border-white py-0.5 w-fit transition-colors duration-300 mt-4 focus:outline-none focus:text-white focus:border-white" aria-label="Donate Now to Support Active Projects">
                Donate Now
              </a>
            </div>

            <!-- Path 3: Participate -->
            <div class="p-8 rounded-xl bg-stone-900/60 backdrop-blur-md border border-stone-800/80 flex flex-col justify-between hover:bg-stone-900/85 transition-all duration-300 stagger-load">
              <div>
                <span class="font-interface font-bold text-xs uppercase tracking-widest text-amber-100/90 mb-3 block">Get Involved</span>
                <p class="type-card-content text-stone-300 mb-6 font-light">
                  Become an active builder of this movement. Connect your school, college, or community group with our programs to scale our collective civic footprint.
                </p>
              </div>
              <a href="${PATHS.VOLUNTEER}" class="inline-flex items-center gap-1 font-interface font-semibold text-[11px] uppercase tracking-widest text-amber-100/90 hover:text-white border-b border-amber-100/20 hover:border-white py-0.5 w-fit transition-colors duration-300 mt-4 focus:outline-none focus:text-white focus:border-white" aria-label="Join the Movement as a Volunteer">
                Join the Movement
              </a>
            </div>

          </div>

        </div>
      </section>
    `;
  }
}


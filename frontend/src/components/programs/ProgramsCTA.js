import { PATHS } from '../../constants/navigation.js';

export default class ProgramsCTA {
  render() {
    return `
      <section id="programs-cta" class="relative py-36 bg-white overflow-hidden border-t border-stone-200/20 z-20">
        <!-- Thin background vertical thread connector -->
        <div class="absolute top-0 left-1/2 w-px h-full bg-stone-200/40 -translate-x-1/2 pointer-events-none z-0"></div>

        <div class="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div class="max-w-2xl mx-auto flex flex-col items-center scroll-reveal">
            
            <span class="font-interface font-semibold text-[11px] uppercase tracking-widest text-pink-ruby mb-4">The Invitation</span>
            
            <h2 class="type-section-heading mb-6 font-medium">
              Be the Change You Wish to See
            </h2>
            
            <p class="type-section-description mb-10 max-w-lg">
              Join our mission to empower lives through education, compassion, and community action.
            </p>

            <div class="flex flex-wrap items-center justify-center gap-4">
              <a href="${PATHS.DONATE}" class="inline-flex items-center gap-2 font-interface font-semibold text-[11px] uppercase tracking-widest px-8 py-4 rounded-md bg-gold-satin text-white hover:bg-gold-satin/95 shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-satin" aria-label="Donate Now to Support Amaanitvam">
                Donate Now
              </a>
              <a href="${PATHS.VOLUNTEER}" class="inline-flex items-center gap-2 font-interface font-semibold text-[11px] uppercase tracking-widest px-8 py-4 rounded-md border border-stone-200 text-stone-600 bg-white hover:border-pink-ruby hover:text-pink-ruby transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-ruby" aria-label="Get Involved as a Volunteer">
                Get Involved
              </a>
            </div>

          </div>
        </div>
      </section>
    `;
  }
}


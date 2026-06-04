export default class Challenge {
  render() {
    return `
      <section id="challenge" class="relative py-36 bg-white overflow-hidden z-20">
        <!-- Thin gray vertical thread connecting sections -->
        <div class="absolute top-0 left-1/2 w-px h-full bg-stone-200/80 -translate-x-1/2 pointer-events-none z-0"></div>

        <div class="max-w-4xl mx-auto px-6 text-center relative z-10 scroll-reveal">
          <span class="font-interface font-semibold text-[11px] uppercase tracking-widest text-stone-400 mb-6 block">The Reality We Address</span>
          
          <h2 class="type-section-heading italic font-light text-stone-800 leading-relaxed">
            "Across underserved communities, young minds are held back not by a lack of potential, but by a lack of resources to guide their growth."
          </h2>

          <div class="mt-8 flex flex-col items-center">
            <span class="w-6 h-px bg-pink-ruby/30 mb-6"></span>
            <span class="font-interface text-xs font-bold uppercase tracking-[0.2em] text-pink-ruby">
              Amaanitvam bridges this gap through sustained grassroots support.
            </span>
          </div>
        </div>
      </section>
    `;
  }
}


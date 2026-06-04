import { impactStories } from '../../content/impactStories.js';

export default class ImpactStories {
  render() {
    const cards = impactStories.map(story => `
      <div class="bg-white p-8 border border-stone-200/60 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-500 flex flex-col justify-between stagger-load min-h-[320px] revealed">
        <div>
          <span class="font-interface text-[9px] uppercase font-bold ${story.tagColorClass} tracking-widest block mb-4">${story.tag}</span>
          <h3 class="font-display italic text-xl text-text-dark font-medium leading-snug mb-3">${story.title}</h3>
          <p class="font-sans text-[13.5px] text-stone-400 font-light leading-relaxed">
            ${story.description}
          </p>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-interface uppercase font-semibold text-stone-400">
          <span>${story.dateLabel}</span>
          <span>•</span>
        </div>
      </div>
    `).join('');

    return `
      <section id="impact-stories" class="relative py-28 bg-stone-50/50 overflow-hidden border-t border-b border-stone-200/20 z-20 select-none">
        
        <!-- Faint vertical line background thread -->
        <div class="absolute top-0 left-1/2 w-px h-full bg-stone-200/40 -translate-x-1/2 pointer-events-none z-0"></div>

        <div class="max-w-6xl mx-auto px-6 relative z-10">
          
          <div class="max-w-2xl mx-auto mb-20 text-center scroll-reveal">
            <span class="font-interface font-semibold text-[11px] uppercase tracking-widest text-pink-ruby">First-Hand Accounts</span>
            <h2 class="font-display font-semibold text-3xl text-text-dark mt-2 tracking-tight">
              Stories From The Community
            </h2>
            <p class="font-sans text-[14.5px] text-text-muted mt-4 leading-relaxed font-light">
              As our initiatives continue to grow, this section will showcase experiences from learners, volunteers, and community members.
            </p>
          </div>

          <!-- Flexible Layout Grid for future stories -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-container select-none">
            ${cards}
          </div>

        </div>
      </section>
    `;
  }
}

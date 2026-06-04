import { impactGallery } from '../../content/impactGallery.js';

export default class JourneyGallery {
  render() {
    const cards = impactGallery.map(card => `
      <div class="break-inside-avoid bg-white p-4 border border-stone-200/60 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 gallery-card inline-block w-full text-left" data-category="${card.category}">
        <div class="overflow-hidden rounded-xl bg-stone-100">
          <img src="${card.image}" alt="${card.alt}" class="w-full rounded-xl object-cover hover:scale-101 transition-transform duration-500">
        </div>
        <div class="mt-4 px-1">
          <span class="font-interface text-[9px] uppercase font-bold ${card.tagColorClass} tracking-wider">${card.tag}</span>
          <p class="font-sans text-[16px] text-text-muted mt-2 font-light leading-[1.7]">
            ${card.description}
          </p>
        </div>
      </div>
    `).join('');

    return `
      <section id="journey-gallery" class="relative py-32 bg-stone-50/50 overflow-hidden border-t border-b border-stone-200/20 z-20 select-none">
        
        <!-- Faint vertical line background thread -->
        <div class="absolute top-0 left-1/2 w-px h-full bg-stone-200/40 -translate-x-1/2 pointer-events-none z-0"></div>

        <div class="max-w-6xl mx-auto px-6 relative z-10 text-center">
          
          <div class="max-w-2xl mx-auto mb-16 scroll-reveal">
            <span class="font-interface font-semibold text-[11px] uppercase tracking-widest text-pink-ruby">Visual Evidence</span>
            <h2 class="font-display font-semibold text-3xl lg:text-[42px] text-text-dark mt-2 tracking-tight leading-snug">
              Journey Gallery
            </h2>
            <p class="font-sans text-lg lg:text-[20px] text-text-muted mt-4 leading-[1.7] font-light">
              Browse visual archives documenting classroom sessions, outreach drives, and foundation activities.
            </p>
          </div>

          <!-- Category Buttons / Tabs -->
          <div class="flex flex-wrap justify-center gap-3 mb-12 scroll-reveal" id="gallery-filters">
            <button class="px-5 py-2 rounded-full border border-pink-ruby bg-pink-ruby text-white font-interface text-[10px] uppercase font-bold tracking-widest cursor-pointer filter-btn active-filter" data-filter="all">All</button>
            <button class="px-5 py-2 rounded-full border border-stone-200 text-stone-600 bg-white hover:border-pink-ruby hover:text-pink-ruby font-interface text-[10px] uppercase font-bold tracking-widest cursor-pointer filter-btn" data-filter="learning">Learning</button>
            <button class="px-5 py-2 rounded-full border border-stone-200 text-stone-600 bg-white hover:border-pink-ruby hover:text-pink-ruby font-interface text-[10px] uppercase font-bold tracking-widest cursor-pointer filter-btn" data-filter="community">Community</button>
            <button class="px-5 py-2 rounded-full border border-stone-200 text-stone-600 bg-white hover:border-pink-ruby hover:text-pink-ruby font-interface text-[10px] uppercase font-bold tracking-widest cursor-pointer filter-btn" data-filter="awareness">Awareness</button>
            <button class="px-5 py-2 rounded-full border border-stone-200 text-stone-600 bg-white hover:border-pink-ruby hover:text-pink-ruby font-interface text-[10px] uppercase font-bold tracking-widest cursor-pointer filter-btn" data-filter="volunteers">Volunteers</button>
          </div>

          <!-- Pinterest Style Masonry Grid (Images occupy ~60% of card height visually) -->
          <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-5xl mx-auto" id="gallery-grid">
            ${cards}
          </div>

        </div>
      </section>
    `;
  }

  static init() {
    const filters = document.getElementById('gallery-filters');
    if (!filters) return;

    const buttons = filters.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.gallery-card');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => {
          b.classList.remove('bg-pink-ruby', 'text-white', 'border-pink-ruby');
          b.classList.add('bg-white', 'text-stone-600', 'border-stone-200');
        });

        btn.classList.add('bg-pink-ruby', 'text-white', 'border-pink-ruby');
        btn.classList.remove('bg-white', 'text-stone-600', 'border-stone-200');

        const filter = btn.getAttribute('data-filter');

        cards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }
}

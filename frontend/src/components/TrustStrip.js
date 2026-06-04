import { foundationStats } from '../content/foundationStats.js';

export default class TrustStrip {
  render() {
    const statsHtml = foundationStats.map((stat, idx) => {
      const plClass = idx > 0 ? 'md:pl-4' : '';
      return `
        <div class="pt-4 md:pt-0 ${plClass} stagger-load">
          <div class="font-display font-bold text-3xl lg:text-4xl text-amber-100/90 tracking-tight">
            <span class="trust-counter" data-target="${stat.value}" data-suffix="${stat.suffix}">0</span>
          </div>
          <p class="font-interface font-semibold text-[11px] uppercase tracking-widest text-stone-400 mt-1.5">${stat.title}</p>
          <p class="font-sans text-[10px] text-stone-500 mt-0.5">${stat.description}</p>
        </div>
      `;
    }).join('');

    return `
      <section id="trust-strip" class="relative py-12 bg-stone-950 text-stone-100 border-y border-stone-900 z-20">
        <div class="max-w-7xl mx-auto px-6">
          
          <div class="text-center mb-8 scroll-reveal">
            <span class="font-display italic text-base md:text-lg text-amber-100/80 tracking-wide">
              "Real impact, built through sustained community action."
            </span>
          </div>

          <!-- Compact Horizontal Ribbon -->
          <div class="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 items-center justify-center divide-y md:divide-y-0 md:divide-x divide-stone-800 text-center select-none stagger-container">
            ${statsHtml}
          </div>

        </div>
      </section>
    `;
  }

  static init() {
    const counters = document.querySelectorAll('.trust-counter');
    if (!counters.length) return;

    const countUp = (el) => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const speed = 100;
      let current = 0;
      const increment = Math.ceil(target / speed);

      const update = () => {
        current += increment;
        if (current >= target) {
          el.textContent = target + suffix;
        } else {
          el.textContent = current + suffix;
          requestAnimationFrame(update);
        }
      };
      update();
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach(counter => countUp(counter));
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    const section = document.getElementById('trust-strip');
    if (section) observer.observe(section);
  }
}

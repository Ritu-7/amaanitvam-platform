import { opportunities } from '../../mocks/opportunities.js';

export default class VolunteerOpportunities {
  render() {
    const cardItems = opportunities.map(opp => {
      const statusBadgeColor = opp.status === 'Open' 
        ? 'bg-emerald-50 text-emerald-700 border-emerald-200/55' 
        : 'bg-stone-100 text-stone-500 border-stone-200';
        
      const modeBadgeColor = opp.mode === 'On-site' 
        ? 'bg-pink-blush text-pink-ruby border-pink-medium/30'
        : opp.mode === 'Hybrid'
          ? 'bg-amber-50 text-amber-800 border-amber-200'
          : 'bg-indigo-50 text-indigo-700 border-indigo-200';

      return `
        <div class="bg-white border border-stone-200/60 rounded p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300" data-opp-id="${opp.id}">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-4">
              <span class="font-interface font-semibold text-[10px] uppercase tracking-widest px-2.5 py-1 border rounded ${modeBadgeColor}">
                ${opp.mode}
              </span>
              <span class="font-interface font-semibold text-[10px] uppercase tracking-widest px-2.5 py-1 border rounded ${statusBadgeColor}">
                ${opp.status}
              </span>
              <span class="font-interface text-[11px] text-text-light ml-auto">
                ${opp.category}
              </span>
            </div>
            
            <h3 class="font-display font-semibold text-[22px] text-text-dark mb-3">
              ${opp.title}
            </h3>
            
            <p class="font-sans text-[16px] leading-[1.6] text-text-muted mb-6">
              ${opp.description}
            </p>
          </div>
          
          <div class="pt-6 border-t border-stone-100 flex flex-col gap-3">
            <div class="grid grid-cols-2 gap-4 text-[14px]">
              <div>
                <span class="block text-[11px] uppercase tracking-wider text-text-light">Location</span>
                <span class="font-medium text-text-dark">${opp.location}</span>
              </div>
              <div>
                <span class="block text-[11px] uppercase tracking-wider text-text-light">Duration</span>
                <span class="font-medium text-text-dark">${opp.duration}</span>
              </div>
            </div>
            
            <div class="mt-4 flex gap-3">
              <button class="flex-1 inline-flex items-center justify-center font-interface font-semibold text-[10px] uppercase tracking-widest py-3 rounded border border-pink-ruby/30 text-pink-ruby hover:bg-pink-ruby hover:text-white transition-all duration-300 btn-apply-opp" data-opp-title="${opp.title}">
                Apply For Role
              </button>
              <button class="flex-1 inline-flex items-center justify-center font-interface font-semibold text-[10px] uppercase tracking-widest py-3 rounded border border-stone-300 text-text-muted hover:border-text-dark hover:text-text-dark transition-all duration-300 btn-details-opp" data-opp-id="${opp.id}" data-opp-title="${opp.title}" data-opp-desc="${opp.description}">
                View Details
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    return `
      <section class="py-24 px-6 bg-stone-50 text-text-dark scroll-mt-20" id="opportunities-list">
        <div class="max-w-7xl mx-auto">
          <div class="max-w-3xl mb-16 scroll-reveal">
            <span class="font-interface font-semibold text-[11px] uppercase tracking-widest text-pink-ruby mb-2 block">
              Current Openings
            </span>
            <h2 class="font-display font-bold text-3xl sm:text-4xl md:text-[42px] leading-[1.2] mb-6 text-text-dark">
              Find Your Place in Our Circle
            </h2>
            <p class="font-sans text-[18px] leading-[1.7] text-text-muted">
              Select an initiative that aligns with your domain preference, location requirements, and availability. We support flexible commitment timelines for students and working professionals alike.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-load" id="opps-grid">
            ${cardItems}
          </div>
        </div>
      </section>

      <!-- Mock Opportunity Details Modal -->
      <div id="opp-details-modal" class="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
        <div class="bg-white border border-stone-200 rounded-xl max-w-lg w-full p-8 space-y-6 text-left shadow-2xl relative font-sans">
          <button id="close-modal-btn" class="absolute top-4 right-4 text-text-light hover:text-text-dark focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div class="space-y-1">
            <span class="px-2.5 py-0.5 rounded border border-pink-medium/35 text-[9.5px] font-bold font-interface uppercase tracking-widest bg-pink-blush text-pink-ruby" id="modal-mode">Hybrid</span>
            <h3 class="font-display font-semibold text-2xl text-text-dark mt-2" id="modal-title">Opportunity Title</h3>
            <p class="text-[12px] text-text-light font-interface uppercase tracking-wider" id="modal-category">Education & Mentorship</p>
          </div>

          <div class="space-y-4 text-[13.5px] leading-relaxed text-text-muted">
            <p id="modal-desc">Detailed descriptions of the volunteer opportunity...</p>
            <div class="p-4 bg-stone-50 border border-stone-200/50 rounded-lg space-y-2">
              <h5 class="font-interface font-bold text-[10px] uppercase tracking-wider text-text-dark">Mock Onboarding Requirements</h5>
              <ul class="list-disc pl-4 text-[12.5px] space-y-1 text-text-light">
                <li>Undergo standard volunteer background reviews.</li>
                <li>Complete 2-hour digital classroom orientation workspace.</li>
                <li>Coordinate directly with assigned center logistics mentor.</li>
              </ul>
            </div>
          </div>
          
          <div class="pt-2 flex gap-3">
            <button id="modal-apply-btn" class="flex-grow py-3 bg-pink-ruby text-white hover:bg-pink-ruby/90 font-interface font-bold text-[11px] uppercase tracking-widest rounded shadow">
              Apply For Role
            </button>
            <button id="modal-close-btn" class="px-5 py-3 border border-stone-300 text-text-muted hover:border-text-dark hover:text-text-dark font-interface font-bold text-[11px] uppercase tracking-widest rounded">
              Close
            </button>
          </div>
        </div>
      </div>
    `;
  }

  static init() {
    // Set up click handlers for 'Apply For Role' buttons
    const buttons = document.querySelectorAll('.btn-apply-opp');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const title = e.currentTarget.getAttribute('data-opp-title');
        
        // Scroll to the application form
        const formSection = document.getElementById('volunteer-apply-form');
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth' });
          
          // Try to select the preferred domain dropdown
          setTimeout(() => {
            const domainSelect = document.getElementById('form-domain');
            if (domainSelect) {
              // Try to match the title or category
              if (title.includes('Teaching') || title.includes('Mentoring')) {
                domainSelect.value = 'Education & Mentorship';
              } else if (title.includes('Tech') || title.includes('Computer')) {
                domainSelect.value = 'Technology';
              } else if (title.includes('Outreach') || title.includes('Logistics')) {
                domainSelect.value = 'Community Outreach';
              } else if (title.includes('Content') || title.includes('Design')) {
                domainSelect.value = 'Communications & Content';
              }
              // Dispatch change event to let any handlers know
              domainSelect.dispatchEvent(new Event('change'));
              domainSelect.focus();
            }
          }, 600);
        }
      });
    });

    // Modal Details handler
    const modal = document.getElementById('opp-details-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalMode = document.getElementById('modal-mode');
    const modalCategory = document.getElementById('modal-category');

    const detailBtns = document.querySelectorAll('.btn-details-opp');
    detailBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const title = e.currentTarget.getAttribute('data-opp-title');
        const desc = e.currentTarget.getAttribute('data-opp-desc');
        const oppId = e.currentTarget.getAttribute('data-opp-id');

        const card = e.currentTarget.closest('[data-opp-id]');
        const modeBadge = card ? card.querySelector('span:nth-child(1)') : null;
        const catBadge = card ? card.querySelector('span:nth-child(3)') : null;

        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        modalMode.textContent = modeBadge ? modeBadge.textContent.trim() : "On-site";
        modalCategory.textContent = catBadge ? catBadge.textContent.trim() : "Education & Mentorship";

        // Setup apply action inside modal
        const modalApply = document.getElementById('modal-apply-btn');
        if (modalApply && card) {
          modalApply.onclick = () => {
            modal.classList.add('hidden');
            const applyBtn = card.querySelector('.btn-apply-opp');
            if (applyBtn) applyBtn.click();
          };
        }

        modal.classList.remove('hidden');
      });
    });

    const closeModal = () => {
      if (modal) modal.classList.add('hidden');
    };

    document.getElementById('close-modal-btn')?.addEventListener('click', closeModal);
    document.getElementById('modal-close-btn')?.addEventListener('click', closeModal);
  }
}

import { profile } from '../../../mocks/profile.js';

export default class MyContributions {
  render() {
    return `
      <section class="py-12 bg-stone-50 border-y border-stone-200/60 px-6">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 divide-y-0 md:divide-x divide-stone-200/80">
            
            <!-- Stat 1: Volunteer Tier -->
            <div class="text-center md:px-6">
              <span class="block text-[11px] uppercase tracking-widest text-text-light mb-1">Volunteer Tier</span>
              <span class="font-display font-semibold text-lg sm:text-[19px] text-text-dark block h-10 flex items-center justify-center">${profile.volunteerLevel}</span>
              <p class="font-sans text-[13px] text-text-muted mt-1">Ecosystem Status</p>
            </div>

            <!-- Stat 2: Active Projects -->
            <div class="text-center md:px-6 pt-4 md:pt-0">
              <span class="block text-[11px] uppercase tracking-widest text-text-light mb-1">Active Projects</span>
              <span class="font-display font-semibold text-3xl sm:text-4xl text-text-dark block h-10 flex items-center justify-center">2</span>
              <p class="font-sans text-[13px] text-text-muted mt-1">Assigned Initiatives</p>
            </div>

            <!-- Stat 3: Pending Tasks -->
            <div class="text-center md:px-6 pt-4 md:pt-0">
              <span class="block text-[11px] uppercase tracking-widest text-text-light mb-1">Pending Tasks</span>
              <span class="font-display font-semibold text-3xl sm:text-4xl text-text-dark block h-10 flex items-center justify-center">3</span>
              <p class="font-sans text-[13px] text-text-muted mt-1">Assignments Left</p>
            </div>

            <!-- Stat 4: Attendance -->
            <div class="text-center md:px-6 pt-4 md:pt-0">
              <span class="block text-[11px] uppercase tracking-widest text-text-light mb-1">Attendance</span>
              <span class="font-display font-semibold text-3xl sm:text-4xl text-text-dark block h-10 flex items-center justify-center">92%</span>
              <p class="font-sans text-[13px] text-text-muted mt-1">Session Presence</p>
            </div>

            <!-- Stat 5: Certificates -->
            <div class="text-center md:px-6 pt-4 md:pt-0">
              <span class="block text-[11px] uppercase tracking-widest text-text-light mb-1">Certificates</span>
              <span class="font-display font-semibold text-3xl sm:text-4xl text-text-dark block h-10 flex items-center justify-center">4</span>
              <p class="font-sans text-[13px] text-text-muted mt-1">Earned Credentials</p>
            </div>

          </div>
        </div>
      </section>
    `;
  }
}

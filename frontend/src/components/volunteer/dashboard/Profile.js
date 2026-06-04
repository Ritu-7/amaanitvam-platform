import { profile } from '../../../mocks/profile.js';

export default class Profile {
  render() {
    const skillBadges = profile.skills.map(skill => `
      <span class="inline-block font-sans text-[12.5px] bg-stone-100 text-text-dark px-3 py-1 border border-stone-200/80 rounded-full font-medium">
        ${skill}
      </span>
    `).join('');

    const interestBadges = profile.interests.map(interest => `
      <span class="inline-block font-sans text-[12.5px] bg-pink-blush text-pink-ruby px-3 py-1 border border-pink-medium/20 rounded-full font-medium">
        ${interest}
      </span>
    `).join('');

    return `
      <div class="bg-white border border-stone-200/60 rounded p-6 shadow-sm space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-stone-100">
          <h3 class="font-display font-semibold text-[20px] text-text-dark">Volunteer Profile</h3>
          <span class="font-interface font-semibold text-[10px] uppercase tracking-widest text-text-light">
            GET /api/profile
          </span>
        </div>

        <!-- Profile Summary Section -->
        <div class="space-y-4">
          <div class="flex items-center gap-4 pb-4 border-b border-stone-100">
            <div class="w-12 h-12 bg-pink-blush text-pink-ruby rounded-full flex items-center justify-center font-display font-bold text-xl select-none shrink-0">
              ${profile.name.charAt(0)}
            </div>
            <div>
              <h4 class="font-display font-bold text-[18px] text-text-dark leading-tight">${profile.name}</h4>
              <span class="font-sans text-[13.5px] text-text-muted">${profile.email}</span>
            </div>
          </div>

          <div class="space-y-3 pt-2 font-sans text-[14px]">
            <div class="flex justify-between py-1 border-b border-stone-200/30">
              <span class="text-text-light">Active Role</span>
              <span class="font-semibold text-text-dark">${profile.currentRole}</span>
            </div>
            <div class="flex justify-between py-1 border-b border-stone-200/30">
              <span class="text-text-light">Preferred Domain</span>
              <span class="font-medium text-text-dark">${profile.preferredDomain}</span>
            </div>
            <div class="flex justify-between py-1">
              <span class="text-text-light">Volunteer Since</span>
              <span class="font-medium text-text-dark">${profile.volunteerSince}</span>
            </div>
          </div>
        </div>

        <!-- Skills Section -->
        <div class="space-y-3 pt-4 border-t border-stone-100">
          <span class="block text-[11px] uppercase tracking-widest text-text-light font-interface font-bold">Skills</span>
          <div class="flex flex-wrap gap-2">
            ${skillBadges}
          </div>
        </div>

        <!-- Areas of Interest Section -->
        <div class="space-y-3 pt-4 border-t border-stone-100">
          <span class="block text-[11px] uppercase tracking-widest text-text-light font-interface font-bold">Areas of Interest</span>
          <div class="flex flex-wrap gap-2">
            ${interestBadges}
          </div>
        </div>
      </div>
    `;
  }
}

export default class AboutWhyWeExist {
  render() {
    return `
      <section id="why-we-exist" class="relative py-36 bg-white overflow-hidden border-b border-stone-200/20 z-20">
        <!-- Background vertical thread connector -->
        <div class="absolute top-0 left-1/2 w-px h-full bg-stone-200/40 -translate-x-1/2 pointer-events-none z-0"></div>

        <div class="max-w-7xl mx-auto px-6 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <!-- Left: Portrait child with notebook in landscape -->
            <div class="lg:col-span-5 flex justify-center scroll-reveal">
              <div class="bg-white p-4 border border-stone-200/80 rounded-2xl shadow-sm max-w-sm overflow-hidden select-none">
                <img src="/landscape-child.jpg" alt="Child holding notebook in landscape hills" loading="lazy" class="rounded-xl object-cover aspect-[4/5] hover:scale-101 transition-transform duration-700">
              </div>
            </div>

            <!-- Right: Connected Mission and Vision Journey -->
            <div class="lg:col-span-7 flex flex-col text-left stagger-container">
              
              <div class="max-w-xl mb-12 stagger-load">
                <span class="font-interface font-semibold text-[11px] uppercase tracking-widest text-pink-ruby">Our Purpose</span>
                <h2 class="type-section-heading mt-2">
                  The Journey of Hope
                </h2>
              </div>

              <!-- Journey path -->
              <div class="relative pl-8 py-2">
                <!-- Vertical Line representing timeline from Today to Tomorrow -->
                <div class="absolute left-[7px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-pink-ruby/80 via-pink-ruby/30 to-amber-500/80 pointer-events-none z-0"></div>

                <!-- Mission (Today) -->
                <div class="relative mb-12 stagger-load">
                  <div class="absolute -left-[30px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-pink-ruby bg-white z-10 shadow-sm"></div>
                  <span class="type-h3 text-pink-ruby mb-2 block">Mission — Today</span>
                  <p class="type-body max-w-xl">
                    We cultivate civic responsibility and active mentorship. By providing structured classroom support, guiding personal growth, and facilitating direct community outreach, we build spaces where children find the resources they need to shape their own futures.
                  </p>
                </div>

                <!-- Vision (Tomorrow) -->
                <div class="relative stagger-load">
                  <div class="absolute -left-[30px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-amber-500 bg-white z-10 shadow-sm"></div>
                  <span class="type-h3 text-amber-600 mb-2 block">Vision — Tomorrow</span>
                  <p class="type-body max-w-xl">
                    We envision a future where educational equity is a reality for every child. Our goal is to nurture a generation of confident, community-focused leaders who carry forward the values of mutual support and shared social responsibility.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    `;
  }
}


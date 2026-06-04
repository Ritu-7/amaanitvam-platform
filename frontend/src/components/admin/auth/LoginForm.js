export default class LoginForm {
  render() {
    return `
      <div class="bg-white border border-stone-200 rounded-xl p-8 shadow-sm max-w-sm mx-auto text-left space-y-6">
        <div>
          <h3 class="font-display font-semibold text-2xl text-text-dark">Admin Console Login</h3>
          <p class="font-sans text-[13px] text-text-muted font-light mt-1.5 leading-relaxed">
            Enter administrative credentials to log in to the operations center.
          </p>
        </div>

        <form id="admin-login-form" class="space-y-4 font-sans text-[13.5px]">
          <div class="flex flex-col">
            <label for="admin-email" class="font-interface font-bold text-[9.5px] uppercase tracking-widest text-text-light mb-1.5">Official Email *</label>
            <input type="email" id="admin-email" required placeholder="coordinator@amaanitvam.org" class="px-3.5 py-2.5 rounded border border-stone-200 focus:outline-none focus:border-pink-ruby">
          </div>

          <div class="flex flex-col">
            <div class="flex justify-between items-center mb-1.5">
              <label for="admin-password" class="font-interface font-bold text-[9.5px] uppercase tracking-widest text-text-light">Password *</label>
              <a href="/admin/forgot-password" class="font-interface font-bold text-[9.5px] uppercase tracking-widest text-pink-ruby hover:underline">Forgot?</a>
            </div>
            <input type="password" id="admin-password" required placeholder="••••••••" class="px-3.5 py-2.5 rounded border border-stone-200 focus:outline-none focus:border-pink-ruby">
          </div>

          <button type="submit" class="w-full font-interface font-bold text-[10px] uppercase tracking-widest py-3 bg-pink-ruby text-white hover:bg-pink-ruby/95 rounded shadow transition-colors mt-2">
            Login to Console
          </button>
        </form>

        <div class="pt-4 border-t border-stone-100 text-center text-[12px]">
          <span class="text-text-light">Need access credentials?</span> 
          <a href="/admin/request-access" class="font-interface font-bold text-[10px] uppercase tracking-widest text-pink-ruby hover:underline ml-1">Request Access →</a>
        </div>

        <!-- Developer Testing panel -->
        <div class="pt-4 border-t border-stone-150 space-y-3" id="dev-test-credentials">
          <span class="block font-interface font-bold text-[10px] uppercase tracking-widest text-text-light">
            Development Testing Access
          </span>
          <p class="font-sans text-[11.5px] text-text-muted leading-relaxed font-light">
            This environment uses mock authentication. Enter any valid email and password, or use a pre-configured role account.
          </p>
          <div class="bg-stone-50 border border-stone-200/60 rounded-lg p-3 text-[11.5px] font-sans text-text-muted space-y-1.5 leading-relaxed">
            <div class="flex justify-between border-b border-stone-100 pb-1">
              <span class="font-medium text-text-dark">Mock Email</span>
              <span class="font-medium text-text-dark">Assigned Role</span>
            </div>
            <div class="flex justify-between">
              <span>coordinator@amaanitvam.org</span>
              <span class="font-semibold text-pink-ruby text-[10.5px]">Coordinator</span>
            </div>
            <div class="flex justify-between">
              <span>volunteer@amaanitvam.org</span>
              <span class="font-semibold text-pink-ruby text-[10.5px]">Volunteer Lead</span>
            </div>
            <div class="flex justify-between">
              <span>internships@amaanitvam.org</span>
              <span class="font-semibold text-pink-ruby text-[10.5px]">Internship Coord</span>
            </div>
            <div class="flex justify-between">
              <span>certificates@amaanitvam.org</span>
              <span class="font-semibold text-pink-ruby text-[10.5px]">Cert Manager</span>
            </div>
            <div class="flex justify-between">
              <span>finance@amaanitvam.org</span>
              <span class="font-semibold text-pink-ruby text-[10.5px]">Finance Manager</span>
            </div>
            <div class="flex justify-between">
              <span>events@amaanitvam.org</span>
              <span class="font-semibold text-pink-ruby text-[10.5px]">Events Coord</span>
            </div>
            <div class="pt-1.5 border-t border-stone-100 flex justify-between font-interface text-[9.5px] uppercase tracking-wider text-text-light font-bold">
              <span>All Passwords:</span>
              <span class="text-text-dark font-sans lowercase">demo123</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static init() {
    const form = document.getElementById('admin-login-form');
    const emailInput = document.getElementById('admin-email');
    const passwordInput = document.getElementById('admin-password');

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value;

        // Basic validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert('Error: Please enter a valid email address.');
          return;
        }
        if (!password || password.trim().length === 0) {
          alert('Error: Please enter a password.');
          return;
        }

        // Mock Accounts Role Mapping
        const roles = {
          'coordinator@amaanitvam.org': 'Coordinator',
          'volunteer@amaanitvam.org': 'Volunteer Lead',
          'internships@amaanitvam.org': 'Internship Coordinator',
          'certificates@amaanitvam.org': 'Certificate Manager',
          'finance@amaanitvam.org': 'Finance Manager',
          'events@amaanitvam.org': 'Events Coordinator'
        };

        let role = 'Admin';
        
        // If it's one of our mock accounts, check password
        if (roles[email.toLowerCase()]) {
          if (password !== 'demo123') {
            alert('Error: Invalid password for this mock account. Use "demo123".');
            return;
          }
          role = roles[email.toLowerCase()];
        }

        // Write structured session object to sessionStorage
        sessionStorage.setItem('amaanitvam_admin_session', JSON.stringify({
          role: role,
          email: email,
          loggedIn: true
        }));

        alert(`Verification: Access verified as ${role}. Redirecting to Operations Dashboard...`);
        window.navigateSPA('/admin');
      });
    }
  }
}

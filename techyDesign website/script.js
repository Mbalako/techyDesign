// Services Data
const servicesData = [
  { id: 1, name: 'Logo Design', category: 'branding', price: 250, icon: '🎨', description: 'Professional logo with multiple concepts', gradient: 'from-purple-500 to-pink-500' },
  { id: 2, name: 'Brand Identity', category: 'branding', price: 450, icon: '✨', description: 'Complete brand kit with guidelines', gradient: 'from-pink-500 to-rose-500' },
  { id: 3, name: 'Business Card', category: 'print', price: 100, icon: '💼', description: 'Double-sided professional design', gradient: 'from-amber-500 to-orange-500' },
  { id: 4, name: 'Social Media Post', category: 'social', price: 150, icon: '📱', description: 'Eye-catching posts for any platform', gradient: 'from-cyan-500 to-blue-500' },
  { id: 5, name: 'Instagram Story', category: 'social', price: 100, icon: '📸', description: 'Engaging story templates', gradient: 'from-pink-500 to-purple-500' },
  { id: 6, name: 'Facebook Cover', category: 'social', price: 120, icon: '🖼️', description: 'Professional page header design', gradient: 'from-blue-500 to-indigo-500' },
  { id: 7, name: 'YouTube Thumbnail', category: 'social', price: 80, icon: '▶️', description: 'Click-worthy thumbnails', gradient: 'from-red-500 to-rose-500' },
  { id: 8, name: 'YouTube Banner', category: 'social', price: 150, icon: '🎬', description: 'Channel art that stands out', gradient: 'from-red-500 to-orange-500' },
  { id: 9, name: 'Flyer Design', category: 'print', price: 180, icon: '📄', description: 'Event or promotional flyers', gradient: 'from-emerald-500 to-teal-500' },
  { id: 10, name: 'Poster Design', category: 'print', price: 200, icon: '🎪', description: 'Large format posters', gradient: 'from-violet-500 to-purple-500' },
  { id: 11, name: 'Brochure Design', category: 'print', price: 300, icon: '📖', description: 'Tri-fold or bi-fold brochures', gradient: 'from-blue-500 to-cyan-500' },
  { id: 12, name: 'Menu Design', category: 'print', price: 250, icon: '🍽️', description: 'Restaurant/cafe menus', gradient: 'from-amber-500 to-yellow-500' },
  { id: 13, name: 'Video Editing', category: 'video', price: 350, icon: '🎥', description: 'Professional video editing', gradient: 'from-purple-500 to-indigo-500' },
  { id: 14, name: 'Video Intro/Outro', category: 'video', price: 200, icon: '🎞️', description: 'Animated intros/outros', gradient: 'from-pink-500 to-purple-500' },
  { id: 15, name: 'Animated Posts', category: 'video', price: 180, icon: '✨', description: 'Motion graphics for social', gradient: 'from-cyan-500 to-purple-500' },
  { id: 16, name: 'Presentation', category: 'documents', price: 200, icon: '📊', description: 'PowerPoint/slides design', gradient: 'from-orange-500 to-red-500' },
  { id: 17, name: 'Resume/CV', category: 'documents', price: 120, icon: '📋', description: 'Professional resume design', gradient: 'from-slate-500 to-gray-600' },
  { id: 18, name: 'Invoice Template', category: 'documents', price: 80, icon: '🧾', description: 'Branded invoice design', gradient: 'from-green-500 to-emerald-500' },
  { id: 19, name: 'Certificate', category: 'documents', price: 100, icon: '🏆', description: 'Award/completion certificates', gradient: 'from-amber-500 to-yellow-500' },
  { id: 20, name: 'Letterhead', category: 'documents', price: 80, icon: '📝', description: 'Professional letterhead design', gradient: 'from-blue-500 to-slate-500' },
  { id: 21, name: 'Wedding Invitation', category: 'print', price: 200, icon: '💒', description: 'Elegant wedding cards', gradient: 'from-rose-400 to-pink-500' },
  { id: 22, name: 'Birthday Card', category: 'print', price: 100, icon: '🎂', description: 'Custom birthday designs', gradient: 'from-yellow-400 to-orange-500' },
  { id: 23, name: 'T-Shirt Design', category: 'branding', price: 150, icon: '👕', description: 'Custom apparel graphics', gradient: 'from-indigo-500 to-blue-500' },
  { id: 24, name: 'Product Mockup', category: 'branding', price: 120, icon: '📦', description: 'Realistic product presentations', gradient: 'from-gray-500 to-slate-600' },
];

// Additional services for search expansion
const additionalServices = [
  { name: 'Infographic Design', price: 280, icon: '📈', description: 'Data visualization graphics', gradient: 'from-teal-500 to-cyan-500' },
  { name: 'Book Cover', price: 250, icon: '📚', description: 'Eye-catching book covers', gradient: 'from-amber-600 to-orange-600' },
  { name: 'Album Cover', price: 200, icon: '🎵', description: 'Music album artwork', gradient: 'from-purple-600 to-pink-600' },
  { name: 'Packaging Design', price: 350, icon: '📦', description: 'Product packaging design', gradient: 'from-emerald-500 to-green-600' },
  { name: 'Label Design', price: 150, icon: '🏷️', description: 'Product labels', gradient: 'from-blue-500 to-indigo-600' },
  { name: 'Banner Design', price: 180, icon: '🎯', description: 'Web banners & ads', gradient: 'from-red-500 to-pink-500' },
  { name: 'Sticker Design', price: 80, icon: '⭐', description: 'Custom sticker designs', gradient: 'from-yellow-500 to-amber-500' },
  { name: 'ID Card Design', price: 100, icon: '🪪', description: 'Employee/member ID cards', gradient: 'from-slate-500 to-blue-500' },
];

let currentCategory = 'all';
let searchTerm = '';
let selectedRating = 0;
let clientReviews = [];
let isLoading = false;

// Default config for Element SDK
const defaultConfig = {
  hero_title: 'Transform Your Vision Into Stunning Designs',
  hero_subtitle: 'Professional graphic design services for businesses, brands, and individuals. From logos to social media content, we bring your ideas to life with creativity and precision.',
  about_title: 'Crafting Digital Excellence Since Day One',
  primary_color: '#8B5CF6',
  secondary_color: '#EC4899',
  accent_color: '#F59E0B',
  text_color: '#FFFFFF',
  bg_color: '#0F0F23'
};

// Initialize Element SDK
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange: async (config) => {
      const heroTitle = document.getElementById('heroTitle');
      const heroSubtitle = document.getElementById('heroSubtitle');
      const aboutTitle = document.getElementById('aboutTitle');
      
      if (heroTitle) {
        heroTitle.innerHTML = (config.hero_title || defaultConfig.hero_title).replace(/Vision|Designs/g, '<span class="gradient-text">$&</span>');
      }
      if (heroSubtitle) {
        heroSubtitle.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
      }
      if (aboutTitle) {
        aboutTitle.innerHTML = (config.about_title || defaultConfig.about_title).replace(/Digital Excellence/g, '<span class="gradient-text">$&</span>');
      }
    },
    mapToCapabilities: (config) => ({
      recolorables: [
        {
          get: () => config.primary_color || defaultConfig.primary_color,
          set: (value) => { config.primary_color = value; window.elementSdk.setConfig({ primary_color: value }); }
        },
        {
          get: () => config.secondary_color || defaultConfig.secondary_color,
          set: (value) => { config.secondary_color = value; window.elementSdk.setConfig({ secondary_color: value }); }
        },
        {
          get: () => config.accent_color || defaultConfig.accent_color,
          set: (value) => { config.accent_color = value; window.elementSdk.setConfig({ accent_color: value }); }
        }
      ],
      borderables: [],
      fontEditable: undefined,
      fontSizeable: undefined
    }),
    mapToEditPanelValues: (config) => new Map([
      ['hero_title', config.hero_title || defaultConfig.hero_title],
      ['hero_subtitle', config.hero_subtitle || defaultConfig.hero_subtitle],
      ['about_title', config.about_title || defaultConfig.about_title]
    ])
  });
}

// Initialize Data SDK for reviews
const dataHandler = {
  onDataChanged(data) {
    clientReviews = data;
    renderClientReviews();
  }
};

async function initDataSdk() {
  if (window.dataSdk) {
    const result = await window.dataSdk.init(dataHandler);
    if (!result.isOk) {
      console.error('Failed to initialize data SDK');
    }
  }
}

initDataSdk();

// Render services grid
function renderServices(services) {
  const grid = document.getElementById('servicesGrid');
  const noResults = document.getElementById('noResults');
  
  if (services.length === 0) {
    grid.innerHTML = '';
    noResults.classList.remove('hidden');
    return;
  }
  
  noResults.classList.add('hidden');
  
  grid.innerHTML = services.map((service, index) => `
        <div class="service-card gradient-card rounded-2xl p-6 transition-all duration-300 cursor-pointer" style="animation-delay: ${index * 0.05}s" onclick="selectService('${service.name}')">
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-2xl mb-4">
            ${service.icon}
          </div>
          <h3 class="font-semibold text-white text-lg mb-2">${service.name}</h3>
          <p class="text-gray-400 text-sm mb-4">${service.description}</p>
          <div class="flex items-center justify-between">
            <span class="text-xl font-bold gradient-text">K${service.price}</span>
            <button class="px-4 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition-all">
              Order Now
            </button>
          </div>
        </div>
      `).join('');
}

// Filter services
function filterServices() {
  let filtered = [...servicesData];
  
  if (currentCategory !== 'all') {
    filtered = filtered.filter(s => s.category === currentCategory);
  }
  
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(s => 
      s.name.toLowerCase().includes(term) || 
      s.description.toLowerCase().includes(term)
    );
    
    // Add additional services if search matches
    if (filtered.length < 4) {
      const additionalMatches = additionalServices.filter(s =>
        s.name.toLowerCase().includes(term) ||
        s.description.toLowerCase().includes(term)
      );
      filtered = [...filtered, ...additionalMatches];
    }
  }
  
  renderServices(filtered);
}

// Select service for contact form
function selectService(serviceName) {
  document.getElementById('contactService').value = serviceName;
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Render client reviews
function renderClientReviews() {
  const container = document.getElementById('clientReviews');
  
  if (clientReviews.length === 0) {
    container.innerHTML = '<p class="text-center text-gray-400">No reviews yet. Be the first to leave a review!</p>';
    return;
  }
  
  container.innerHTML = clientReviews.map(review => {
    const stars = '★'.repeat(review.rating) + '<span class="text-gray-600">' + '★'.repeat(5 - review.rating) + '</span>';
    const date = new Date(review.createdAt);
    const formattedDate = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    
    return `
          <div class="gradient-card rounded-2xl p-6 animate-slide-up">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  ${review.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                </div>
                <div>
                  <h4 class="font-semibold text-white">${review.name}</h4>
                  <p class="text-gray-400 text-sm">${review.service}</p>
                </div>
              </div>
              <span class="text-gray-500 text-xs">${formattedDate}</span>
            </div>
            <div class="flex gap-1 mb-3 text-amber-400">${stars}</div>
            <p class="text-gray-300">"${review.comment}"</p>
          </div>
        `;
  }).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderServices(servicesData);
  
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMobileMenu = document.getElementById('closeMobileMenu');
  
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
  });
  
  closeMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
  
  // Close mobile menu on link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
  
  // Category filter
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.category-btn').forEach(b => {
        b.classList.remove('active', 'bg-purple-600', 'text-white');
        b.classList.add('bg-white/5', 'text-gray-300');
      });
      btn.classList.add('active', 'bg-purple-600', 'text-white');
      btn.classList.remove('bg-white/5', 'text-gray-300');
      currentCategory = btn.dataset.category;
      filterServices();
    });
  });
  
  // Search functionality
  const searchInput = document.getElementById('serviceSearch');
  const searchLoader = document.getElementById('searchLoader');
  const searchStatus = document.getElementById('searchStatus');
  let searchTimeout;
  
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchLoader.classList.remove('hidden');
    searchStatus.textContent = 'Searching...';
    
    searchTimeout = setTimeout(() => {
      searchTerm = e.target.value;
      filterServices();
      searchLoader.classList.add('hidden');
      
      const resultCount = document.querySelectorAll('#servicesGrid > div').length;
      searchStatus.textContent = searchTerm ? `Found ${resultCount} service${resultCount !== 1 ? 's' : ''}` : '';
    }, 500);
  });
  
  // Star rating
  const stars = document.querySelectorAll('#starRating .star');
  stars.forEach(star => {
    star.addEventListener('click', () => {
      selectedRating = parseInt(star.dataset.rating);
      stars.forEach((s, i) => {
        s.classList.toggle('text-amber-400', i < selectedRating);
        s.classList.toggle('text-gray-600', i >= selectedRating);
      });
    });
    
    star.addEventListener('mouseenter', () => {
      const hoverRating = parseInt(star.dataset.rating);
      stars.forEach((s, i) => {
        s.classList.toggle('text-amber-400', i < hoverRating);
        s.classList.toggle('text-gray-600', i >= hoverRating);
      });
    });
  });
  
  document.getElementById('starRating').addEventListener('mouseleave', () => {
    stars.forEach((s, i) => {
      s.classList.toggle('text-amber-400', i < selectedRating);
      s.classList.toggle('text-gray-600', i >= selectedRating);
    });
  });
  
  // Submit review
  document.getElementById('submitReview').addEventListener('click', async () => {
    const name = document.getElementById('reviewName').value.trim();
    const service = document.getElementById('reviewService').value;
    const comment = document.getElementById('reviewComment').value.trim();
    
    if (!name || !service || !comment || selectedRating === 0) {
      const btn = document.getElementById('submitReview');
      btn.classList.add('ring-2', 'ring-red-500');
      setTimeout(() => btn.classList.remove('ring-2', 'ring-red-500'), 2000);
      return;
    }
    
    if (clientReviews.length >= 999) {
      const btn = document.getElementById('submitReview');
      btn.innerHTML = '<span class="text-red-400">Review limit reached</span>';
      setTimeout(() => {
        btn.innerHTML = '<span>Submit Review</span><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>';
      }, 2000);
      return;
    }
    
    const btn = document.getElementById('submitReview');
    btn.disabled = true;
    btn.innerHTML = '<div class="loader w-5 h-5"></div><span>Submitting...</span>';
    
    if (window.dataSdk) {
      const result = await window.dataSdk.create({
        id: Date.now().toString(),
        name,
        service,
        rating: selectedRating,
        comment,
        createdAt: new Date().toISOString()
      });
      
      if (result.isOk) {
        document.getElementById('reviewName').value = '';
        document.getElementById('reviewService').value = '';
        document.getElementById('reviewComment').value = '';
        selectedRating = 0;
        stars.forEach(s => {
          s.classList.remove('text-amber-400');
          s.classList.add('text-gray-600');
        });
        btn.innerHTML = '<span class="text-green-400">Review Submitted! ✓</span>';
      } else {
        btn.innerHTML = '<span class="text-red-400">Error submitting</span>';
      }
    }
    
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = '<span>Submit Review</span><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>';
    }, 2000);
  });
  
  // Contact form - Update links
  function updateContactLinks() {
    const name = document.getElementById('contactName').value.trim();
    const service = document.getElementById('contactService').value;
    const message = document.getElementById('contactMessage').value.trim();
    
    const fullMessage = `Hello TechyDesigns!%0A%0AName: ${encodeURIComponent(name)}%0AService: ${encodeURIComponent(service)}%0A%0AProject Details:%0A${encodeURIComponent(message)}`;
    
    document.getElementById('sendWhatsApp').href = `https://wa.me/260777893975?text=${fullMessage}`;
    document.getElementById('sendEmail').href = `mailto:maxbinance44@gmail.com?subject=Design%20Request%20-%20${encodeURIComponent(service)}&body=${fullMessage}`;
  }
  
  document.getElementById('contactName').addEventListener('input', updateContactLinks);
  document.getElementById('contactService').addEventListener('change', updateContactLinks);
  document.getElementById('contactMessage').addEventListener('input', updateContactLinks);
  
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
        entry.target.classList.remove('section-hidden');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('section-hidden');
    observer.observe(section);
  });
});

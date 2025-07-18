// VaxShield Website JS
// Handles events, shop, forms, resources, and accessibility

document.addEventListener('DOMContentLoaded', function() {
  // --- EVENTS ---
  const upcomingEvents = [
    { title: "Community Workshop", date: "2025-08-10", location: "City Hall", description: "Learn about vaccine safety and benefits.", registration: true },
    { title: "Health Seminar", date: "2025-09-05", location: "Library", description: "Expert talks and Q&A.", registration: true }
  ];
  const pastEvents = [
    { title: "Spring Outreach", date: "2025-04-15", location: "School", description: "Vaccination awareness for families." }
  ];
  function renderEvents() {
    const upEl = document.getElementById('upcoming-events');
    upEl.innerHTML = upcomingEvents.map(ev => `
      <div class="event-item">
        <h4>${ev.title}</h4>
        <p>${ev.date} | ${ev.location}</p>
        <p>${ev.description}</p>
        ${ev.registration ? `<button onclick="openRegistration('${ev.title}')">Register</button>` : ''}
      </div>
    `).join('');
    const pastEl = document.getElementById('past-events');
    pastEl.innerHTML = pastEvents.map(ev => `
      <div class="event-item">
        <h4>${ev.title}</h4>
        <p>${ev.date} | ${ev.location}</p>
        <p>${ev.description}</p>
      </div>
    `).join('');
  }
  window.openRegistration = function(eventTitle) {
    alert(`Registration for ${eventTitle} coming soon!`);
  };
  renderEvents();

  // --- SHOP ---
  const shopItems = [
    { id: 1, name: "Basic Vaccination Kit", price: 25, img: "https://via.placeholder.com/100", desc: "Includes essentials for safe vaccination." },
    { id: 2, name: "Family Kit", price: 60, img: "https://via.placeholder.com/100", desc: "For families and groups." }
  ];
  let cart = [];
  function renderShop() {
    const shopEl = document.getElementById('shop-items');
    shopEl.innerHTML = shopItems.map(item => `
      <div class="shop-item">
        <img src="${item.img}" alt="${item.name}">
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
        <p><strong>$${item.price}</strong></p>
        <button onclick="addToCart(${item.id})">Add to Cart</button>
      </div>
    `).join('');
  }
  window.addToCart = function(id) {
    const item = shopItems.find(i => i.id === id);
    cart.push(item);
    renderCart();
  };
  function renderCart() {
    const cartEl = document.getElementById('cart');
    if (cart.length === 0) {
      cartEl.innerHTML = '<p>Your cart is empty.</p>';
      return;
    }
    cartEl.innerHTML = `
      <h4>Cart</h4>
      <ul>${cart.map(i => `<li>${i.name} - $${i.price}</li>`).join('')}</ul>
      <p>Total: $${cart.reduce((sum, i) => sum + i.price, 0)}</p>
      <button onclick="checkout()">Checkout</button>
    `;
  }
  window.checkout = function() {
    alert('Checkout is a placeholder. Thank you for your support!');
    cart = [];
    renderCart();
  };
  renderShop();
  renderCart();

  // --- GET INVOLVED FORMS ---
  document.getElementById('volunteer-form').onsubmit = function(e) {
    e.preventDefault();
    alert('Thank you for volunteering!');
    this.reset();
  };
  document.getElementById('donate-form').onsubmit = function(e) {
    e.preventDefault();
    alert('Thank you for your donation!');
    this.reset();
  };
  document.getElementById('newsletter-form').onsubmit = function(e) {
    e.preventDefault();
    alert('Subscribed to newsletter!');
    this.reset();
  };

  // --- RESOURCES ---
  const resources = [
    { title: "Why Vaccinate?", type: "Article", desc: "Learn the importance of vaccines." },
    { title: "FAQ", type: "FAQ", desc: "Common questions answered." },
    { title: "Downloadable Guide", type: "Download", desc: "Printable vaccination guide." }
  ];
  function renderResources(filter = "") {
    const listEl = document.getElementById('resource-list');
    const filtered = resources.filter(r => r.title.toLowerCase().includes(filter.toLowerCase()) || r.type.toLowerCase().includes(filter.toLowerCase()));
    listEl.innerHTML = filtered.map(r => `
      <div class="resource-item">
        <h4>${r.title}</h4>
        <p>${r.type}</p>
        <p>${r.desc}</p>
      </div>
    `).join('');
  }
  document.getElementById('resource-search').oninput = function() {
    renderResources(this.value);
  };
  renderResources();

  // --- CONTACT FORM ---
  document.getElementById('contact-form').onsubmit = function(e) {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    this.reset();
  };

  // --- Accessibility: Focus outline for keyboard users ---
  document.body.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('show-focus');
    }
  });
  document.body.addEventListener('mousedown', function() {
    document.body.classList.remove('show-focus');
  });

  // --- Mobile menu toggle ---
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
      });
    });
  }
});

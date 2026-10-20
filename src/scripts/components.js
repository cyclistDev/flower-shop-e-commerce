// Components module - handles dynamic component loading
export function initComponents() {
  loadNavigation();
  loadFooter();
  loadProductCards();
}

async function loadNavigation() {
  const navContainer = document.getElementById('navigation');
  if (navContainer) {
    try {
      const response = await fetch('/src/components/Navigation.html');
      if (response.ok) {
        navContainer.innerHTML = await response.text();
        // Re-initialize navigation after loading
        const { initNavigation } = await import('./navigation.js');
        initNavigation();
      }
    } catch (error) {
      console.error('Error loading navigation:', error);
    }
  }
}

async function loadFooter() {
  const footerContainer = document.getElementById('footer');
  if (footerContainer) {
    try {
      const response = await fetch('/src/components/Footer.html');
      if (response.ok) {
        footerContainer.innerHTML = await response.text();
      }
    } catch (error) {
      console.error('Error loading footer:', error);
    }
  }
}

function loadProductCards() {
  // Dynamically load product data from API or JSON
  const productContainers = document.querySelectorAll('.product-grid');
  productContainers.forEach(container => {
    // Load products from API or local JSON
    console.log('Product container found:', container);
  });
}

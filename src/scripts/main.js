// Main entry point for the application
import { initNavigation } from './navigation.js';
import { initForms } from './forms.js';
import { initComponents } from './components.js';
import '../styles/main.css';

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('Flower Shop application initialized');

  initNavigation();
  initForms();
  initComponents();
});

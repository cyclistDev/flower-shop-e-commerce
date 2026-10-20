// Site-wide constants

export const SITE_CONFIG = {
  name: import.meta.env.VITE_SITE_NAME || 'June Flowers',
  url: import.meta.env.VITE_SITE_URL || 'https://juneflowers.com',
  contact: {
    phone: import.meta.env.VITE_CONTACT_PHONE || '+885 (555) 123-4567',
    email: import.meta.env.VITE_CONTACT_EMAIL || 'hello@fleursoul.com',
    address: import.meta.env.VITE_CONTACT_ADDRESS || '168 Bloom Street, Nvna Otdg, FL 45678'
  },
  social: {
    instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com',
    facebook: import.meta.env.VITE_FACEBOOK_URL || 'https://facebook.com',
    linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com',
    twitter: import.meta.env.VITE_TWITTER_URL || 'https://twitter.com'
  }
};

export const PRODUCT_CATEGORIES = [
  { id: 1, name: 'Rose', slug: 'rose' },
  { id: 2, name: 'Tulips', slug: 'tulips' },
  { id: 3, name: 'Sunflowers', slug: 'sunflowers' },
  { id: 4, name: 'Peonies', slug: 'peonies' },
  { id: 5, name: 'Lily', slug: 'lily' }
];

export const OCCASIONS = [
  { id: 1, name: 'Anniversary', slug: 'anniversary' },
  { id: 2, name: 'Birthday', slug: 'birthday' },
  { id: 3, name: "Valentine's Day", slug: 'valentines-day' },
  { id: 4, name: "Mother's Day", slug: 'mothers-day' },
  { id: 5, name: "Father's Day", slug: 'fathers-day' }
];

export const BUSINESS_HOURS = {
  weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
  saturday: 'Saturday: 10:00 AM - 4:00 PM',
  sunday: 'Sunday: Closed'
};

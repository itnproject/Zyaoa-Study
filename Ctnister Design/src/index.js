/**
 * Ctnister Design v1.0 — Professional UI Framework
 * Author: itnproject
 * GitHub: https://github.com/itnproject/Ctnister-Design
 * License: AGPL v3 (non-commercial), Commercial: see COMMERCIAL.md
 */

import './styles/index.css';

// Export all components
export { default as Hero } from './components/Hero.js';
export { default as SpeedTest } from './components/SpeedTest.js';
export { default as LatencyTest } from './components/LatencyTest.js';
export { default as DownloadSection } from './components/DownloadSection.js';
export { default as SearchSection } from './components/SearchSection.js';
export { default as ResultSection } from './components/ResultSection.js';
export { default as Notification } from './components/Notification.js';
export { default as ScrollingText } from './components/ScrollingText.js';
export { default as ProgressBar } from './components/ProgressBar.js';

// Export utility functions
export { initAnimations } from './utils/animations.js';
export { initNotifications } from './utils/notifications.js';
export { initScrollingText } from './utils/scrolling.js';

// Version
export const version = '1.0.0';
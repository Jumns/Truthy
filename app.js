AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  offset: 100, // offset (in px) from the original trigger point
  delay: 500, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: "ease-in-out", // default easing for AOS animations
});

export const info = {
  restaurantName: "Colombo Steam Boat Kitchen",
  tagline: "Authentic Sri Lankan Flavors in Toronto",
  address: "Unit 1, 2677 Eglinton Ave E, Scarborough, ON, M1K 2S3",
  phone: "+1 (647) 286-9344",
  email: "hello@colombosteamboat.ca",

  // Ordering Platforms
  doordashURL: "https://www.doordash.com/store/colombo-steam-boat-spicy-kitchen-scarborough-31216951/44505947/?srsltid=AfmBOoqtSpuseg9HdlQdt8Nj_PkYhORgrSGw5fUIqcwljCnv3liaNClh",
  uberEatsURL: "https://www.ubereats.com/ca/store/colombo-steam-boat/CRYbsxTxUFSanKomY3fy6A?srsltid=AfmBOor61yvbHouxb-CDzfEH0Du2vSPm6KJikE4B314tE1vbz27MGD_K",
  skipTheDishesURL: "https://www.skipthedishes.com/steam-boat-kitchen",

  // Google Maps
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.784176053916!2d-79.25268962381882!3d43.73581017109839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cf0032118d79%3A0x2fb80353cc2212e2!2sColombo%20Steam%20Boat%20Kitchen!5e0!3m2!1sen!2sca!4v1775456129019!5m2!1sen!2sca",
  googleMapsLink: "https://maps.google.com/?q=Colombo+Steam+Boat+Kitchen+2677+Eglinton+Ave+E+Scarborough",

  formspreeURL: "https://formspree.io/f/YOUR_ID", // ← Replace with your Formspree ID

  // Social Media
  instagram: "#",
  facebook: "https://www.facebook.com/ColomboSteamboatKitchen/",
  tiktok: "#",

  // WhatsApp
  whatsappNumber: "16472869344",

  hours: [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "11:00 AM – 10:00 PM" },
    { day: "Wednesday", hours: "11:00 AM – 10:00 PM" },
    { day: "Thursday", hours: "11:00 AM – 10:00 PM" },
    { day: "Friday", hours: "11:00 AM – 11:00 PM" },
    { day: "Saturday", hours: "10:00 AM – 11:00 PM" },
    { day: "Sunday", hours: "10:00 AM – 9:00 PM" },
  ],
  currentDayHighlight: true,

  promos: [
    {
      id: 1,
      active: true,
      badge: "🎉 Anniversary Special",
      headline: "Celebrating Our 1st Year!",
      description: "Meals starting from just $6. Come celebrate with us — Sri Lankan style.",
      cta: "View Our Menu",
      ctaTarget: "#menu",
    },
  ],

  announcement: {
    active: true,
    emoji: "🎉",
    text: "Celebrating Our 1st Anniversary! Meals starting from just $6 — come taste the Sri Lankan way!",
    link: "#menu",
    linkText: "See Our Menu →",
  },

  analytics: {
    googleAnalyticsId: "G-XXXXXXXXXX",   // ← Replace with your GA4 ID from analytics.google.com
    microsoftClarityId: "XXXXXXXXXX",    // ← Replace with your ID from clarity.microsoft.com
  },
}

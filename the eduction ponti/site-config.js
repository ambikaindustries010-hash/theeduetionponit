/* =====================================================================
   WEBSITE CONTENT — सिर्फ़ इसी फ़ाइल को बदलना है, index.html को छूने की ज़रूरत नहीं।
   Edit only this file. Keep the quotes "" and commas , exactly as they are.
   Photos: put them in the "images" folder and write the file name here.
   Tip: resize photos to under 300 KB so the site opens fast on mobile.
   ===================================================================== */
const SITE = {
  // Your coaching / library name. Also used on receipts and PDFs.
  name: "THE EDUCATION PONIT",

  tagline: "",
  subtitle: "",

  // Big photos at the top. They change automatically. Add or remove lines freely.
  heroImages: ["images/hero1.jpg", "images/hero2.jpg", "images/hero3.jpg" , ],
  slideSeconds: 4, // seconds each photo stays

  phone: "7897275614",
  whatsapp: "7897275614",
  address: "Bhadra Makrand, Hajipur, Azamgarh, Uttar Pradesh.",
  hours: "Open 6 AM to 6 PM, all days",

  // Text of the "WhatsApp us" button on the website (what the visitor's message starts with).
  websiteWhatsappText: "Hello, I want to know about admission.",

  // Messages you send to students. {first} {name} {id} {amount} {date} {mode} {until} {pending} {lib} are filled in automatically.
  // \n means a new line. You can also edit the text in the box before sending.
  messages: {
    paid: "Hello {first}!\n\nYour fee payment has been successfully received.\n\nStudent Name: {name}\nStudent ID: {id}\nAmount Paid: {amount}\nPayment Date: {date}\nPayment Mode: {mode}\nFee Paid Until: {until}\n\nThank you!\n{lib}",
    reminder: "Hello {first}!\n\nFee reminder from {lib}.\nStudent ID: {id}\nPending amount: {pending}\nFee valid until: {until}\n\nPlease pay at your earliest convenience. Thank you! check your fee register online anytime at https://theeducetionponit.netlify.app/ {lib}.",
    general: "Hello {first}!\n\n",
  },

  about: "The Education Point Library – यहाँ शांत माहौल में पढ़ाई, अनुभवी शिक्षकों द्वारा आपके उज्ज्वल भविष्य के लिए सही मार्गदर्शन मिलता है।",

  facilities: [
    ["Silent study hall", "Individual desks with proper lighting"],
    ["Day and night shifts", "Choose the plan that fits your routine"],
    ["Digital fee record", "Check your fees and receipts online anytime"],
  ],

  // Teachers and crew. photo = file in the images folder. Add as many as you like.
  team: [
    { name: "Vivek Sir", role: "CEO", photo: "images/CEO.jpg" },
    { name: "Vinay Sir", role: "Owner", photo: "images/vinay.jpg" },
   
  ],

  // Batches shown on the website.
  batches: [
    { name: "Morning Batch", time: "5:00 AM - 5:00 PM", note: "Day Shift" },
    { name: "Evening Batch", time: "5:00 PM - 5:00 AM", note: "Night Shift" },
    { name: "Night Batch", time: "5:00 AM - 5:00 AM", note: "Day + Night Shift" },
  ],

  // Photo gallery below. Add more file names to show more photos.
  gallery: [], // add photo paths here, e.g. "images/her.jpg"
};

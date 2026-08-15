export const siteConfig = {
  name: "Complete Rehab Centre",
  shortName: "CRC",
  domain: "completerehab.ca",
  url: "https://completerehab.ca",
  description:
    "Complete Rehab Centre in Brampton specializes in treatment services like physiotherapy, chiropractic, acupuncture, RMT and more, specifically designed to help you recover from injuries.",
  address: {
    line1: "10095 Bramalea Rd, Unit B7",
    city: "Brampton",
    region: "ON",
    postalCode: "L6R 0K1",
    country: "CA",
    full: "10095 Bramalea Rd, Unit B7 - Brampton, ON L6R 0K1",
  },
  phones: [
    { label: "Primary", number: "(905) 789-1290", href: "tel:+19057891290" },
    { label: "Secondary", number: "(905) 789-7065", href: "tel:+19057897065" },
  ],
  hours: [
    { day: "Monday", time: "9 AM–7:30 PM" },
    { day: "Tuesday", time: "9 AM–7 PM" },
    { day: "Wednesday", time: "9 AM–7:30 PM" },
    { day: "Thursday", time: "9 AM–6 PM" },
    { day: "Friday", time: "9 AM–6 PM" },
    { day: "Saturday", time: "9:30 AM–2 PM" },
  ],
  hoursClosed: "Sunday",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92232.60249457453!2d-79.81573424945773!3d43.74651401572551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b162c60a83c21%3A0x24600c3e3525d310!2sComplete%20Rehab%20Centre!5e0!3m2!1sen!2sin!4v1659438833582!5m2!1sen!2sin",
} as const;

export const primaryPhone = siteConfig.phones[0];

function to24Hour(time: string): string {
  const match = time.trim().match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)$/i);
  if (!match) return "00:00";
  const [, hour, minute = "00", meridiem] = match;
  let h = parseInt(hour, 10);
  if (meridiem.toUpperCase() === "PM" && h !== 12) h += 12;
  if (meridiem.toUpperCase() === "AM" && h === 12) h = 0;
  return `${String(h).padStart(2, "0")}:${minute}`;
}

export const structuredHours = siteConfig.hours.map(({ day, time }) => {
  const [open, close] = time.split(/[–-]/).map((t) => t.trim());
  return { day, opens: to24Hour(open), closes: to24Hour(close) };
});

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Staff", href: "/staff" },
  {
    label: "Treatment Services",
    href: "/services",
    children: [
      { label: "Acupuncture", href: "/services/acupuncture" },
      { label: "Physiotherapy", href: "/services/physiotherapy" },
      { label: "Chiropractic", href: "/services/chiropractic" },
      { label: "Massage Therapy", href: "/services/massage-therapy" },
      { label: "Personal Training", href: "/services#personal-training" },
      { label: "Sports Medicine", href: "/services#sports-medicine" },
      { label: "Orthotics", href: "/services#orthotics" },
      { label: "Occupational Therapist", href: "/services#occupational-therapist" },
      { label: "WSIB Rehabilitation Programs", href: "/services#wsib" },
      { label: "Work Conditioning", href: "/services#work-conditioning" },
      { label: "Chronic Pain Management", href: "/services#chronic-pain" },
      { label: "MVA Rehabilitation Programs", href: "/services#mva-rehabilitation" },
      { label: "Psychological Counselling", href: "/services#psychological-counselling" },
      { label: "Assistive Devices / Braces", href: "/services#assistive-devices" },
    ],
  },
  { label: "Medical Assessments", href: "/assessments-services" },
  { label: "Appointment", href: "/appointment" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact-us" },
];

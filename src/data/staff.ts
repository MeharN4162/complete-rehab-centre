export type StaffMember = {
  name: string;
  title: string;
};

export const treatingPractitioners: StaffMember[] = [
  {
    name: "Dr. Harwinder (Tony) Kalsi",
    title:
      "BS, BSc, DC, FCCRS (C), CPed (C), ART — Rehabilitation Specialist Chiropractor, Certified Pedorthist, Clinic Director",
  },
  { name: "Jagruti Patel", title: "RMT — Registered Massage Therapist" },
  {
    name: "Dr. Rahim K. Jessa",
    title: "BSc, DC, FCCRS(C) — Rehabilitation Specialist Chiropractor, Acupuncture Clinic Director",
  },
  { name: "Meenakshi Heer", title: "RMT — Registered Massage Therapist" },
  { name: "Marko Grantchev", title: "RMT — Registered Massage Therapist" },
  {
    name: "Dr. Ravdeep Sekhon",
    title: "BSc, DC, Acupuncture — Rehabilitation Specialist Chiropractor",
  },
  { name: "Harleen Kaur", title: "Resident Physiotherapist" },
];

// Additional team members listed by name only on the practice's staff page,
// without individual titles or credentials.
export const additionalTeamMembers: string[] = [
  "Bobby",
  "Sara",
  "Navjot",
  "Shubhneet",
  "Kawal",
  "Floyd",
  "Marilia",
  "Ruby",
  "Niveta",
  "Dipanshi",
];

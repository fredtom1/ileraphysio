export type Specialty = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  conditions: string[];
  virtualFit: string;
  caveat: string;
  intakeFocus: string[];
  redFlags: string[];
  accent: string;
};

export type Clinician = {
  id: string;
  name: string;
  specialtySlug: string;
  credential: string;
  experience: string;
  languages: string[];
  fee: number;
  bio: string;
  interests: string[];
  nextSlots: string[];
  verifiedBy: string[];
};

export const specialties: Specialty[] = [
  {
    slug: "paediatric",
    name: "Paediatric Physiotherapy",
    shortName: "Paediatric",
    summary: "Support for children with movement, development, posture, balance, and participation goals.",
    conditions: ["Developmental delay", "Cerebral palsy support", "Toe walking", "Postural concerns", "School mobility"],
    virtualFit: "Virtual sessions can coach parents and caregivers through safe positioning, play-based exercise, and home routines.",
    caveat: "Some children need in-person assessment for tone, reflexes, equipment fitting, or safeguarding concerns.",
    intakeFocus: ["Parent or guardian details", "Birth history", "Milestones", "School or nursery context"],
    redFlags: ["Recent unexplained injury", "Safeguarding concern", "Sudden loss of movement"],
    accent: "bg-leaf"
  },
  {
    slug: "vestibular",
    name: "Vestibular Physiotherapy",
    shortName: "Vestibular",
    summary: "Assessment and rehab for dizziness, vertigo, balance confidence, and vestibular recovery.",
    conditions: ["BPPV", "Persistent dizziness", "Balance confidence", "Vestibular migraine support", "Falls risk"],
    virtualFit: "Video is useful for history, symptom education, gaze stability, balance retraining, and selected repositioning guidance.",
    caveat: "Sudden severe vertigo, neurological signs, new hearing loss, or fainting need urgent in-person care before booking.",
    intakeFocus: ["Dizziness triggers", "Neurological symptoms", "Hearing changes", "DHI score"],
    redFlags: ["Sudden onset vertigo", "Face or limb weakness", "New hearing loss", "Fainting"],
    accent: "bg-lagoon"
  },
  {
    slug: "respiratory",
    name: "Respiratory Physiotherapy",
    shortName: "Respiratory",
    summary: "Breathing support, airway clearance education, pacing, and recovery planning after illness.",
    conditions: ["Post-hospital recovery", "Breathlessness management", "Airway clearance", "Long-term respiratory conditions", "Fitness rebuilding"],
    virtualFit: "Virtual care works best for education, breathing control, pacing, home monitoring, and supported exercise planning.",
    caveat: "Acute breathlessness, oxygen dependence changes, chest pain, or recent deterioration require triage before virtual care.",
    intakeFocus: ["Oxygen use", "Recent admission", "Breathlessness scale", "Six-minute walk self-report"],
    redFlags: ["Acute breathlessness", "Chest pain", "Oxygen saturation concern", "Recent hospitalisation"],
    accent: "bg-[#e7efe5]"
  },
  {
    slug: "msk-orthopaedic",
    name: "MSK and Orthopaedic Physiotherapy",
    shortName: "MSK",
    summary: "Pain, injury, joint, muscle, posture, movement, and post-operative rehabilitation support.",
    conditions: ["Back and neck pain", "Shoulder pain", "Knee injury", "Sports injury", "Post-operative rehab"],
    virtualFit: "Video can support movement assessment, exercise progression, education, and review of uploaded movement clips.",
    caveat: "Severe trauma, progressive neurological symptoms, unexplained swelling, or suspected fracture should be seen in person.",
    intakeFocus: ["Body region", "Pain pattern", "Functional goals", "Photo or video upload"],
    redFlags: ["Suspected fracture", "Progressive weakness", "Loss of bladder control", "Unexplained swelling"],
    accent: "bg-[#f3dfd3]"
  }
];

export const clinicians: Clinician[] = [
  {
    id: "tomi-adebayo",
    name: "Tomi Adebayo",
    specialtySlug: "msk-orthopaedic",
    credential: "Senior Physiotherapist, B.Physio, MCSP",
    experience: "11 years",
    languages: ["English", "Yoruba"],
    fee: 18000,
    bio: "Tomi supports people recovering from pain, sport injuries, and orthopaedic surgery with practical home programmes.",
    interests: ["Shoulder rehab", "Back pain", "Return to work"],
    nextSlots: ["Mon 10:00 WAT", "Tue 18:30 WAT", "Sat 09:00 WAT"],
    verifiedBy: ["HCPC", "NSP membership pending review"]
  },
  {
    id: "ifeoma-nwosu",
    name: "Ifeoma Nwosu",
    specialtySlug: "paediatric",
    credential: "Paediatric Physiotherapist, BMR PT",
    experience: "9 years",
    languages: ["English", "Igbo"],
    fee: 20000,
    bio: "Ifeoma works with children and caregivers using play, milestone coaching, positioning, and family-friendly plans.",
    interests: ["Early intervention", "School participation", "Caregiver coaching"],
    nextSlots: ["Wed 16:00 WAT", "Fri 11:30 WAT", "Sat 12:00 WAT"],
    verifiedBy: ["MRTB Nigeria", "Safeguarding training"]
  },
  {
    id: "sarah-olumide",
    name: "Sarah Olumide",
    specialtySlug: "vestibular",
    credential: "Vestibular Rehab Clinician, MSc Physiotherapy",
    experience: "13 years",
    languages: ["English", "Yoruba"],
    fee: 22000,
    bio: "Sarah helps patients understand dizziness, rebuild balance confidence, and track outcomes using structured measures.",
    interests: ["BPPV", "DHI tracking", "Falls confidence"],
    nextSlots: ["Tue 08:30 WAT", "Thu 19:00 WAT", "Sun 15:00 WAT"],
    verifiedBy: ["HCPC", "Vestibular CPD record"]
  },
  {
    id: "chinedu-okeke",
    name: "Chinedu Okeke",
    specialtySlug: "respiratory",
    credential: "Cardiorespiratory Physiotherapist, B.Physio",
    experience: "10 years",
    languages: ["English", "Igbo", "Pidgin"],
    fee: 19000,
    bio: "Chinedu guides breathing control, pacing, airway clearance routines, and recovery plans after respiratory illness.",
    interests: ["Breathlessness", "Post-admission recovery", "Airway clearance"],
    nextSlots: ["Mon 14:00 WAT", "Wed 09:00 WAT", "Fri 17:30 WAT"],
    verifiedBy: ["MRTB Nigeria", "Hospital employment review"]
  }
];

export const packages = [
  {
    name: "Single virtual assessment",
    price: 18000,
    description: "One 45-minute specialist session, intake review, and written next-step plan."
  },
  {
    name: "Recovery starter",
    price: 64000,
    description: "Four sessions over 4-6 weeks with progress review and home programme updates."
  },
  {
    name: "Family paediatric block",
    price: 72000,
    description: "Four caregiver-led paediatric sessions with milestone notes and school-ready guidance."
  }
];

export const researchSources = [
  {
    label: "Reliance Health Nigeria",
    finding: "Uses plan/member/provider dashboards, app access, broad provider network metrics, and telemedicine as part of health plan access.",
    url: "https://getreliancehealth.com/nigeria/"
  },
  {
    label: "Wellahealth",
    finding: "Frames care around embedded healthcare, pharmacy networks, HMO partners, WhatsApp/contact support, and nationwide access.",
    url: "https://www.wellahealth.com/"
  },
  {
    label: "Flutterwave Nigeria",
    finding: "Supports Nigerian checkout expectations such as cards, bank account, bank transfer, USSD, and multiple currencies.",
    url: "https://flutterwave.com/ng"
  },
  {
    label: "Nigeria Data Protection Commission",
    finding: "NDPC highlights rights to be informed, access, rectification, objection, restriction, portability, erasure, and breach reporting.",
    url: "https://ndpc.gov.ng/"
  },
  {
    label: "Daily",
    finding: "Managed real-time video infrastructure is a strong fit for a reliability-first MVP rather than raw WebRTC.",
    url: "https://www.daily.co/"
  }
];

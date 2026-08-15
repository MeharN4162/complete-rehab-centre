export type Service = {
  slug: string;
  anchor: string;
  name: string;
  shortDescription: string;
  paragraphs: string[];
  list?: string[];
  image: string;
  imageAlt: string;
  hasDetailPage: boolean;
};

export const services: Service[] = [
  {
    slug: "acupuncture",
    anchor: "acupuncture",
    name: "Acupuncture",
    shortDescription:
      "It is the key traditional Chinese method used to treat pain in the human body.",
    paragraphs: [
      "It is the key traditional Chinese method used to treat pain in the human body. Acupuncture is the main form of treatment in which we insert sharp thin needles at specific body points. It is being used to enhance overall wellness, adjust the energy throughout the body, and help in reducing pain. We at Complete Rehab Center believe in diagnosing the issues before treating our clients. Our rehab center in Brampton offers acupuncture services to treat a wide variety of diseases and issues, be it allergies, gastrointestinal problems, nervous system, gynecological issues, childhood illnesses, and also managing stress.",
      "By using traditional treatment combined with new technology and with years of experience and deep research in this field, our experts have been using acupuncture treatment to treat alcoholic addicts and people who are addicts to other harmful substances. The best part of this treatment is that it is a quite effective and low-cost treatment that can help in reducing headaches, chronic pain, and issues related to back injuries and arthritis.",
    ],
    image: "/images/service-acupuncture.jpg",
    imageAlt: "Acupuncture treatment at Complete Rehab Centre",
    hasDetailPage: true,
  },
  {
    slug: "chiropractic",
    anchor: "chiropractic",
    name: "Chiropractic",
    shortDescription: "This is a manual treatment given to heal the body itself.",
    paragraphs: [
      "This is a manual treatment given to heal the body itself. A licensed healthcare professional puts pressure on certain areas to manipulate body parts. Complete Rehab Center offers Chiropractic treatment in Brampton to people complaining about lower back problems or pain in the spine or near areas. Our licensed chiropractor works mainly on the affecting areas of the musculoskeletal system and nervous system. Chiropractic adjustment is the major medical treatment for headaches, neck pain, lower back pain and muscle pain.",
      "Initially, our chiropractors assess the whole body as per the patient's needs to diagnose the issues. This may include posture, pain area, problems in the movement of a body part in a certain direction and muscle strength. All these assessments help in pre-diagnosis to reduce the pain and discomfort.",
    ],
    image: "/images/service-chiropractic.jpg",
    imageAlt: "Chiropractic treatment at Complete Rehab Centre",
    hasDetailPage: true,
  },
  {
    slug: "physiotherapy",
    anchor: "physiotherapy",
    name: "Physiotherapy",
    shortDescription: "This medical treatment is a non-invasive therapy.",
    paragraphs: [
      "This medical treatment is a non-invasive therapy. Physiotherapy involves no medicine or surgery. Instead, the treatment uses hot, cold, water and air. This treatment is the best medical therapy when all other therapies fail to work. Just by initial diagnosis, physiotherapists can start the treatment. This treatment is given when you get injured or a certain body part stops working.",
      "Physiotherapy is much more than a hand massage. As in this modern era, rehab centers in Brampton give a complete range of physiotherapies that may include hydrotherapy, manual therapy, a wide range of exercises, and electrotherapy.",
      "Complete Rehab Center in Brampton strives to provide the most effective physiotherapists that help you to get healthy in a short time from an injury.",
    ],
    image: "/images/service-physiotherapy.jpg",
    imageAlt: "Physiotherapy treatment at Complete Rehab Centre",
    hasDetailPage: true,
  },
  {
    slug: "massage-therapy",
    anchor: "massage",
    name: "Massage Therapy",
    shortDescription:
      "This is a medical treatment that involves manual manipulation of tendons, muscles, ligaments and skin.",
    paragraphs: [
      "This is a medical treatment that involves manual manipulation of tendons, muscles, ligaments and skin. Massage therapy is used to improve blood and oxygen circulation throughout the body.",
      "At Complete Rehab Center, our licensed massage therapists treat the issues effectively. In our rehab center in Brampton, we offer massages to lower the stiffness in the body muscles and help to ease joint movement.",
    ],
    image: "/images/service-massage.jpg",
    imageAlt: "Massage therapy at Complete Rehab Centre",
    hasDetailPage: true,
  },
  {
    slug: "personal-training",
    anchor: "personal-training",
    name: "Personal Training",
    shortDescription:
      "Customized health programs designed to support weight management and overall wellness.",
    paragraphs: [
      "You can hire our personal training health programs if you want to control body weight, improve overall physical appearance & energy, boost immunity, and improve posture, and quality of life. Our expert health care specialists can guide you, that would help you in spending a healthy and quality of life.",
    ],
    image: "/images/service-personal-training.jpg",
    imageAlt: "Personal training at Complete Rehab Centre",
    hasDetailPage: false,
  },
  {
    slug: "sports-medicine",
    anchor: "sports-medicine",
    name: "Sports Medicine",
    shortDescription: "Advice and supplements to boost recovery and energy for active patients.",
    paragraphs: [
      "Sports people surely need a balanced diet that includes fruits and vegetables. But the nutrition-rich diet in protein, carbohydrates, and other minerals is hard to find in the food. To get a balanced diet, sports supplements are available at Complete Rehab Center. Our health care specialists advise sports medicine in case you have any injury or accident, or just want to boost your energy. Our sports medicine services can boost the healing process of people in sports.",
    ],
    image: "/images/service-sports-medicine.jpg",
    imageAlt: "Sports medicine at Complete Rehab Centre",
    hasDetailPage: false,
  },
  {
    slug: "orthotics",
    anchor: "orthotics",
    name: "Orthotics",
    shortDescription: "Custom insoles and splints to help in the recovery process after injury.",
    paragraphs: [
      "In case you need to improve your body part's mobility or are facing difficulty in bone functioning, we offer orthotics services in Brampton and nearby areas. You can take our orthotics service if you are experiencing problems in your spine, neck, upper and lower extremity, or foot. Our certified orthotics and registered technicians work together to offer a prescription for insoles, and splints, that help in the recovery process after getting injured.",
    ],
    image: "/images/service-orthotics.jpg",
    imageAlt: "Orthotics at Complete Rehab Centre",
    hasDetailPage: false,
  },
  {
    slug: "occupational-therapist",
    anchor: "occupational-therapist",
    name: "Occupational Therapist",
    shortDescription: "Support balancing workplace and personal life after injury or illness.",
    paragraphs: [
      "In case you are facing problems to make a balance between your workplace and personal life, then you can hire our occupational therapists. They are also known as OTs.",
      "Occupational therapists help people affected by injury, illness, developmental disorders, emotional or psychological challenges.",
    ],
    image: "/images/service-occupational-therapist.jpg",
    imageAlt: "Occupational therapy at Complete Rehab Centre",
    hasDetailPage: false,
  },
  {
    slug: "wsib",
    anchor: "wsib",
    name: "WSIB Rehabilitation Programs",
    shortDescription: "Assessment and consultation services for workplace injuries and illness.",
    paragraphs: [
      "This program is created to help occupational health hubs. It offers assessment and consultation services for individuals experiencing injuries and illnesses at their workplace. If you are looking for help to recover, our WSIB program can benefit you in your treatment, equipment and supplies, medical devices, and prescription.",
    ],
    image: "/images/service-wsib.jpg",
    imageAlt: "WSIB rehabilitation programs at Complete Rehab Centre",
    hasDetailPage: false,
  },
  {
    slug: "work-conditioning",
    anchor: "work-conditioning",
    name: "Work Conditioning",
    shortDescription: "A thorough program to help restore neurological and musculoskeletal function.",
    paragraphs: [
      "It is an extremely thorough and careful medical service designed to help individuals to make their neurological, musculoskeletal, cardiopulmonary, and systemic functions. This program also includes mobility, power, endurance, and control functions. Consult our Complete Rehab Center to make your muscles strong and healthy.",
    ],
    image: "/images/service-work-conditioning.jpg",
    imageAlt: "Work conditioning at Complete Rehab Centre",
    hasDetailPage: false,
  },
  {
    slug: "chronic-pain",
    anchor: "chronic-pain",
    name: "Chronic Pain Program",
    shortDescription: "Support for pain that persists for more than three months.",
    paragraphs: [
      "Pain is always an unpleasant sensation that can make you down emotionally and physically. Pain can occur in any body part at any time. Chronic pain can stay more than three months. The reason could be:",
    ],
    list: [
      "Unknown",
      "An injury that has healed",
      "An injury that needs to be treated yet",
    ],
    image: "/images/service-chronic-pain.jpg",
    imageAlt: "Chronic pain program at Complete Rehab Centre",
    hasDetailPage: false,
  },
  {
    slug: "mva-rehabilitation",
    anchor: "mva-rehabilitation",
    name: "MVA Rehabilitation Programs",
    shortDescription: "Individualized recovery programs after a motor vehicle accident.",
    paragraphs: [
      "Consult our Complete Rehab Center Motor Vehicle Accident (MVA) Rehabilitation program if you have experienced a motor vehicle accident.",
      "Our medical experts can begin the rehab program after an in-depth evaluation of the accident that identifies all the components of the injury. Our medical professional team includes Massage Therapists, Occupational Therapists, Kinesiologists, Chiropractors, and Physiotherapists that can identify and assess the needs of the patients. We offer tailor-made MVA rehab services as per the patient's needs.",
    ],
    image: "/images/service-mva.jpg",
    imageAlt: "MVA rehabilitation programs at Complete Rehab Centre",
    hasDetailPage: false,
  },
  {
    slug: "psychological-counselling",
    anchor: "psychological-counselling",
    name: "Psychological Counselling",
    shortDescription: "Support to build self-knowledge and work through decisions and relationships.",
    paragraphs: [
      "With our psychotherapy counselling service, we help individuals to have self-knowledge and understand their emotions, accept them, and act on them in the future. The main goal of providing this service is to live a more satisfactory life and be resourceful. If you have problems in:",
    ],
    list: ["Taking decisions", "Addressing problems", "Resolving small issues"],
    image: "/images/service-psychological-counselling.jpg",
    imageAlt: "Psychological counselling at Complete Rehab Centre",
    hasDetailPage: false,
  },
  {
    slug: "assistive-devices",
    anchor: "assistive-devices",
    name: "Assistive Devices / Braces",
    shortDescription: "Tailor-made equipment for individuals facing long-term physical disabilities.",
    paragraphs: [
      "Complete Rehab Center offers this program to help individuals facing long-term physical disabilities. We can assist in providing various tailor-made equipment, such as braces, hearing aids, wheelchairs and much more. Just call us or drop a message, and our team will contact you as soon as possible.",
    ],
    image: "/images/service-assistive-devices.jpg",
    imageAlt: "Assistive devices and braces at Complete Rehab Centre",
    hasDetailPage: false,
  },
];

export const detailServices = services.filter((s) => s.hasDetailPage);

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

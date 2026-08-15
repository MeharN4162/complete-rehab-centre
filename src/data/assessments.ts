export type Assessment = {
  slug: string;
  name: string;
  paragraphs: string[];
  list?: string[];
  closingParagraph?: string;
  featured?: boolean;
  featuredExcerpt?: string;
};

export const assessments: Assessment[] = [
  {
    slug: "orthopedic",
    name: "Orthopedic Assessment",
    paragraphs: [
      "The orthopaedic assessment is a process of applicable subjective assessment with an understanding of particular joints. It is done with the help of specific tests for particular joints to know about their working conditions.",
      "There are certain situations when orthopaedic assessment is needed:",
    ],
    list: [
      "In case of pain, swelling and instability",
      "Fractures and dislocation of the joint",
      "Inflammation of muscles and tissues",
      "Immobilization of a specific joint",
      "Sprains, torn cartilages or strained ligaments",
      "Conditions which resist the patient's ability to move",
    ],
    closingParagraph:
      "The doctors and physiotherapists at CRC conduct a series of diagnostic tests, like mobility tests, to find out orthopaedic conditions and provide treatment accordingly.",
  },
  {
    slug: "psychological",
    name: "Psychological Assessment",
    paragraphs: [
      "A psychological assessment is performed by trained evaluators who analyze a person's responses to a series of questionnaires. It is based on a scoring system used to understand how an incident has affected the person's emotional functioning.",
      "Psychological evaluations are done if the person is showing some of the below-mentioned symptoms:",
    ],
    list: [
      "Feeling sad and down all the time",
      "Reduced ability to concentrate",
      "Excessive fears and worries or feelings of guilt",
      "Extreme mood swings",
      "Increased conflict or tension in relationships",
      "Loss of interest in pleasure",
      "Major changes in eating habits",
      "Inability to cope with daily stress and problems",
    ],
    closingParagraph:
      "These are only some of the symptoms that a patient shows with psychological problems. At CRC, we have a Psychological analysis team who evaluate the patient and recommend treatment, to help return the patient to a normal life.",
  },
  {
    slug: "psychiatric",
    name: "Psychiatric Assessment",
    paragraphs: [
      "It is a process of gathering information about a person to make a diagnosis. It is the first stage of treatment for any mental illness. This includes social, biographical information and direct observations by a psychiatrist.",
      "The symptoms a psychiatric patient shows:",
    ],
    list: [
      "Drug and alcohol abuse",
      "Reduced concentration",
      "Deep, ongoing sadness",
      "Withdrawal from others and from activities you used to enjoy",
      "Low energy and extreme tiredness",
      "Delusion, paranoia or hallucinations",
      "Suicidal thoughts",
    ],
    closingParagraph:
      "The list is very long. If you are experiencing sudden lifestyle changes then there is a need for a psychiatric assessment. CRC helps you to diagnose and treat any sort of psychiatric problems with counselling and proper medication.",
  },
  {
    slug: "chronic-pain",
    name: "Chronic Pain Assessment",
    paragraphs: [
      "A chronic pain assessment is required to make the correct diagnosis and determine the most effective treatment for the patients who are presenting pain.",
      "The symptom for this assessment is the presence of acute or chronic pain in any part of the body. The pain must be assessed using a multidimensional approach which is determined as follows:",
    ],
    list: [
      "Location and distribution of the pain",
      "Duration, course or temporal pattern",
      "Quality of pain",
      "Associated symptoms",
      "Severity",
    ],
    closingParagraph:
      "After the determination of the chronic pain and reaching the reasons behind that, CRC's doctors provide treatment to focus on improving function by developing long-term management skills.",
    featured: true,
    featuredExcerpt:
      "A chronic pain assessment determines the most effective treatment through documentation of pain location, duration, quality and severity.",
  },
  {
    slug: "neurological",
    name: "Neurological Assessment",
    paragraphs: [
      "Neurological assessment is an evaluation of a person's nervous system. It contains the examination of sensory neuron and motor responses to deduce whether the nervous system is impaired.",
      "This assessment is performed in the following cases:",
    ],
    list: [
      "Brain and spinal cord injuries",
      "Headaches and migraines",
      "Chronic pain",
      "Sleeping disorder",
      "Tremor",
      "Peripheral or nerve disorders",
      "Back and neck pain",
    ],
    closingParagraph:
      "At CRC, doctors perform a physical examination with special instruments such as light and reflex hammers to diagnose the illness and also provide adequate treatment for that.",
    featured: true,
    featuredExcerpt:
      "An evaluation of the nervous system's sensory and motor responses, performed with specialized instruments to diagnose the underlying condition.",
  },
  {
    slug: "tmj",
    name: "TMJ Assessment",
    paragraphs: [
      "The temporomandibular joint (TMJ) is an important and frequently used joint in our body. It is used for talking, eating, kissing and other complex movements of our mouth. A prevailing disorder in this joint can lead to many symptoms like:",
    ],
    list: [
      "Facial asymmetry",
      "Swelling or deformation",
      "Occlusion",
      "Unusual jaw position at rest",
      "Audible joint noise",
      "Cervical spine disposition",
    ],
    closingParagraph:
      "There are some tests which are run by our doctors to identify the problem with the TMJ, including the tongue blade test and an oral behaviours checklist. With the help of these tests, the problem is identified and the treatment begins accordingly.",
  },
  {
    slug: "neurocognitive",
    name: "Neurocognitive Assessment",
    paragraphs: [
      "A neurocognitive assessment is performed to measure how well a person's brain is working. The different abilities that are tested in this examination are:",
    ],
    list: ["Reading", "Language usage", "Attention", "Learning", "Processing speed", "Reasoning", "Remembering"],
    closingParagraph:
      "Different tests are performed to examine the abilities of the patient. Doctors at CRC prepare a detailed report on these tests which could also help them in diagnosing the problem and making a treatment plan.",
  },
  {
    slug: "fae",
    name: "FAE Assessment",
    paragraphs: [
      "A Functional Abilities Evaluation (FAE) is a comprehensive evaluation of your physical and functional abilities. This is performed by using objective and measurable tests.",
      "The purpose of the FAE assessment is to:",
    ],
    list: [
      "Determine your abilities to perform any specific work",
      "Outline any immediate or long-term risks",
      "Identify any impairments or disabilities",
    ],
    closingParagraph:
      "The primary goal of the CRC team is to make a timely assessment related to the problem you are currently facing or which you could face in the coming future.",
    featured: true,
    featuredExcerpt:
      "A comprehensive evaluation of your physical and functional abilities using objective, measurable tests to determine work capacity.",
  },
  {
    slug: "vocational",
    name: "Vocational Assessment",
    paragraphs: [
      "Vocational assessment evaluates an individual's background, skills, education and occupational requirements. It provides an overview of any disabilities or health conditions.",
      "Here are some of the evaluation areas for a vocational assessment:",
    ],
    list: [
      "Personality",
      "Medical information",
      "Work performance",
      "Transferable skills",
      "Job search skills",
      "Education and experience",
    ],
    closingParagraph:
      "CRC provides obligation-free consultations, so inquire today to set up your vocational assessment.",
  },
  {
    slug: "driver-anxiety",
    name: "Driver Anxiety Assessment",
    paragraphs: [
      "A driver anxiety assessment is needed after a car or automobile accident. After the accident, the main focus is on physical, cognitive and emotional rehabilitation. Sometimes the person involved in an accident develops a fear of driving or being a passenger in a car.",
      "At CRC, there is a team of professionals who perform the assessment and plan a treatment to help the patient overcome their fears — whether they are a driver, a passenger or even a pedestrian. With proper therapy and medication, they can return to their normal on-road life.",
    ],
    featured: true,
    featuredExcerpt:
      "Following a vehicle accident, this assessment addresses physical, cognitive and emotional rehabilitation for those who develop a fear of driving.",
  },
  {
    slug: "future-care-cost",
    name: "Future Care Cost (Life Care Planning) Assessment",
    paragraphs: [
      "A future care cost assessment is a comprehensive detailed report which specifies costs related to the injuries. These costs comprise services and products needed to allow an individual to return to their initial pre-injury level of life.",
      "Different components of an FCC assessment:",
    ],
    list: [
      "Accommodation",
      "Transportation",
      "Aids to daily living",
      "Education",
      "Medical expenditures",
      "Home modifications",
    ],
    closingParagraph:
      "The assessment provided by Complete Rehab Centre also gives you an estimate of future costs of care with the help of an economist.",
  },
  {
    slug: "independent-health-forecast",
    name: "Independent Health Forecast Assessment",
    paragraphs: [
      "A health forecast assessment is a valuable tool for predicting future health circumstances or situations, including demands for health services and healthcare needs.",
      "A health forecast is important for the following reasons:",
    ],
    list: [
      "It enhances preventive health care",
      "It creates alerts for the management of the patient",
      "It significantly reduces the associated costs in supplies and staff redundancy",
    ],
  },
  {
    slug: "social-worker",
    name: "Social Worker Assessment",
    paragraphs: [
      "A social worker assessment is a report written by a social worker evaluating a person's education, mental health, substance abuse or occupational needs. An interview is conducted by the social worker to gather the information and form a detailed assessment.",
      "The goals of a social worker assessment are:",
    ],
    list: [
      "To help people achieve the best in their personal and social life",
      "Working to give social justice for underserved populations",
      "Identification of personal tools to live a better life",
    ],
    closingParagraph:
      "CRC collaborates with social workers who have achieved excellence in their work and could help you determine your life goals and encourage you to lead a happy life.",
  },
];

export const featuredAssessments = assessments.filter((a) => a.featured);

export function getAssessmentBySlug(slug: string) {
  return assessments.find((a) => a.slug === slug);
}

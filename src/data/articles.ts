export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  body: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "surprising-health-benefits-of-massage",
    title: "Surprising Health Benefits of Massage",
    excerpt:
      "Many people think that massage therapy is only for relaxation. That is true except for the term, “only.”",
    image: "/images/thumb-massage-article1.jpg",
    imageAlt: "Massage therapy session",
    body: [
      {
        type: "p",
        text: "Many people think that massage therapy is only for relaxation. That is true except for the term, “only.” It can have several beneficial effects on the state of your health. However, before you choose massage therapy as a treatment option for any health issues, you should discuss this choice with your doctor.",
      },
      { type: "p", text: "Below are some of the surprising benefits of massage:" },
      { type: "h3", text: "It can improve circulation" },
      {
        type: "p",
        text: "When you go for regular massage therapy in Brampton and are consistent, you enhance circulation in your body. Why is it necessary you may ask? As the therapist applies pressure on specific parts of the body, it causes blood to flow through the damaged and congested areas.",
      },
      {
        type: "p",
        text: "With proper circulation, stiff, damaged and tense muscles get an abundant supply of blood which plays a vital role in promoting healing. Also, as lymph fluid circulates in the body, it carries waste from the organs and muscles. In turn, you have low blood pressure levels and improvement in body function.",
      },
      { type: "h3", text: "Boosts mood" },
      {
        type: "p",
        text: "If you have been to a massage session in our Brampton center, you know the good feeling that one has after a therapy session. This benefit may also apply to patients who suffer from depression. Researchers from Taiwan analyzed several studies and concluded that massage could be used to reduce symptoms of depression.",
      },
      { type: "h3", text: "It offers relief from chronic pain" },
      {
        type: "p",
        text: "Several studies have been conducted to test the effectiveness of massage therapy in pain relief. In one study regarding back pain, it showed that massage produced better results than spinal modification or acupuncture.",
      },
      {
        type: "p",
        text: "It has also proven effective in reducing the frequency of migraines in patients, and offer pain relief in patients with osteoarthritis.",
      },
      { type: "h3", text: "Improves one's immune system" },
      {
        type: "p",
        text: "With the blood and lymph fluid circulating correctly after a massage, it boosts the circulation of lymphocytes and white blood cells which help to fight infection.",
      },
      {
        type: "p",
        text: "At our center, we have expert Registered Massage Therapists in Brampton who are keen on providing quality services to the clients. We offer them a listening ear and advise them on the suitable technique that meets their desires.",
      },
    ],
  },
  {
    slug: "why-should-i-go-for-acupuncture-treatment",
    title: "Why Should I go for Acupuncture Treatment?",
    excerpt:
      "Have you heard of acupuncture? It is not a new technique for treatment as it has been in use as a form of Chinese medicine, for many years.",
    image: "/images/thumb-acupuncture-article1.jpg",
    imageAlt: "Acupuncture treatment",
    body: [
      {
        type: "p",
        text: "Have you heard of acupuncture? It is not a new technique for treatment as it has been in use as a form of Chinese medicine, for many years. During the treatment, the acupuncturist in Brampton will insert needles at different points on your body to allow free flow of energy in your body.",
      },
      {
        type: "p",
        text: "Even though they use needles, the treatment is relatively free of pain. Several studies carried out to determine the efficacy of the practice show that acupuncture has the following health benefits:",
      },
      { type: "h3", text: "Provides relief from chronic pain" },
      {
        type: "p",
        text: "A popular application of acupuncture in Brampton is relief of chronic pain. Research carried out in 2012 by Memorial Sloan-Kettering showed that patients who had acupuncture treatments felt less pain than those in the placebo group.",
      },
      {
        type: "p",
        text: "It can be used to relieve migraines and headaches too. One of the areas that have received high proof of the effectiveness of the treatment is relief of neck pain.",
      },
      { type: "h3", text: "Prevents nausea and vomiting" },
      {
        type: "p",
        text: "Usually, after surgery, the patient may experience postoperative nausea and vomiting as they recover from the effects of anesthesia. There are particular pressure points during an acupuncture treatment that are believed to reduce the feeling of nausea in a patient.",
      },
      { type: "p", text: "The points include near the wrist and areas under the forearm." },
      { type: "h3", text: "Can help with cognitive decline" },
      {
        type: "p",
        text: "Some research into the treatment shows that it can lead to relief of symptoms of age-related cognitive decline. When pressure is applied to different points, it generates a neural response.",
      },
      {
        type: "p",
        text: "It can lead to the improvement of symptoms such as slowness, sleep, tremor and anxiety.",
      },
      { type: "h3", text: "Reduces insomnia" },
      {
        type: "p",
        text: "According to studies, acupuncture can reduce the frequency of insomnia in many people. During the treatments, the technique increases the secretion of nocturnal melatonin — the chemical that helps induce sleep.",
      },
      {
        type: "p",
        text: "A 2009 study by the Beijing University of Chinese Medicine shows that combining acupuncture therapy with medication or herbal treatment for insomnia resulted in better effects than using the procedures alone.",
      },
      { type: "h3", text: "Reduces anxiety" },
      {
        type: "p",
        text: "How acupuncture therapy helps to reduce anxiety is not entirely understood. Studies show that there is a definite correlation between anxiety reduction and acupuncture.",
      },
      {
        type: "p",
        text: "Research in the effectiveness of acupuncture is still ongoing. However, the above are some of the proven benefits of the treatment.",
      },
    ],
  },
  {
    slug: "how-can-getting-a-massage-benefit-me",
    title: "How Can Getting a Massage Benefit Me?",
    excerpt:
      "Massage therapy has been a form of treatment among different cultures for many years. It can be traced back to Indians, Chinese, Ancient Greek and Egyptians.",
    image: "/images/thumb-massage-article2.jpg",
    imageAlt: "Massage therapy technique",
    body: [
      {
        type: "p",
        text: "Massage therapy has been a form of treatment among different cultures for many years. It can be traced back to Indians, Chinese, Ancient Greek, Egyptians among others. It is an alternative treatment protocol that involves the manipulation or kneading of the muscles of the body and soft tissue.",
      },
      {
        type: "p",
        text: "There is a wide variety of techniques in existence that fall into the broad category of massage therapy. Each method varies from the other concerning intensity, touch and pressure applied during the procedure. Some of the conventional processes include:",
      },
      {
        type: "ul",
        items: [
          "Deep Massage: this technique focuses on the deep layers of one's muscles, and also the connective tissue. It involves forceful and slow strokes.",
          "Reflexology: in this form of massage therapy our massage therapist in Brampton will focus pressure on specific parts of your body, referred to as reflex points, that relate to other areas of the body.",
          "Baby massage: babies, even premature babies, can benefit from massage therapy. It helps treat issues with sleeping, colic and even constipation.",
          "Swedish massage: this form of therapy is usually gentle. The therapist kneads, uses long strokes and deep circular movements to energize and help you relax.",
        ],
      },
      { type: "h3", text: "What are the benefits of massage?" },
      {
        type: "p",
        text: "Massage therapy is an alternative form of treatment that has been in practice over the years. The following are its advantages:",
      },
      {
        type: "p",
        text: "After undergoing surgery, massage therapy can be applied to relax your muscles, improve movement of joints and circulation. It also helps to increase your flexibility.",
      },
      {
        type: "p",
        text: "During and after your massage appointment, you are going to feel relaxed. It has been used to treat anxiety and depression too.",
      },
      {
        type: "p",
        text: "It helps ease muscle pain. Massage is an effective treatment for chronic pain as it promotes and improves circulation.",
      },
      {
        type: "p",
        text: "A good massage will encourage restful sleep. It is helpful especially for those undergoing radiation or chemotherapy. Our RMTs in Brampton can also perform infant massage to help children sleep better.",
      },
      {
        type: "p",
        text: "Massage therapy is also an effective reliever of headaches and migraines. It reduces the frequency of migraines and helps an individual sleep better.",
      },
      {
        type: "p",
        text: "If you are looking for massage therapy in Brampton, you can visit our center. It is not just a treatment option; a good massage will help you feel relaxed while relieving you of stress.",
      },
    ],
  },
  {
    slug: "what-you-need-to-know-about-acupuncture",
    title: "What You Need To Know About Acupuncture",
    excerpt:
      "The acupuncture technique has evolved from an exotic curiosity to a form of treatment, over the years, stemming from Traditional Chinese medicine.",
    image: "/images/thumb-acupuncture-article2.jpg",
    imageAlt: "Acupuncture needles",
    body: [
      {
        type: "p",
        text: "The acupuncture technique has evolved from an exotic curiosity to a form of treatment, over the years. It stems from medical practices of Traditional Chinese culture. In this technique, the acupuncturist in Brampton will insert fine needles into specific parts of your body.",
      },
      {
        type: "p",
        text: "Research and various studies carried out to determine the efficacy of this medical protocol show that acupuncture works by correcting the energy imbalances in one's body. According to the Chinese belief, this technique is used to modify one's chi or qi — the flow of energy in the body. It has been widely employed in China as a traditional technique to treat and prevent diseases.",
      },
      { type: "h3", text: "How does it work?" },
      {
        type: "p",
        text: "When you visit your trusted therapist for an acupuncture appointment in Brampton, they will use fine needles, heat, pressure and other treatments, such as electric stimulation, applied to different parts of your skin. Even though needles are a standard tool of the trade, the process is relatively free of pain.",
      },
      {
        type: "p",
        text: "The needling process causes adenosine and amino acids to become active. Both compounds are essential for easing pain when one is injured, and that is why acupuncture is considered an effective pain relief technique. The needles are placed at, and stimulate, specific points of your body, commonly referred to as “acupoints.”",
      },
      {
        type: "p",
        text: "You will have to stay a while with the needles on specific parts of your body — usually five to thirty minutes. Most people confess that they feel relaxed, both during and after the treatment, with little to no discomfort during the procedure.",
      },
      { type: "h3", text: "Can I go for acupuncture treatment?" },
      {
        type: "p",
        text: "Research and study into the conditions that can benefit from acupuncture treatment are still ongoing. However, acupuncture has been used to promote self-healing for conditions such as:",
      },
      {
        type: "ul",
        items: ["Chronic pain", "Migraines", "Fibromyalgia", "Anxiety", "Insomnia", "Depression, among many other conditions"],
      },
      {
        type: "p",
        text: "If you are not sure whether you can benefit from acupuncture therapy, you can always seek the guidance of a professional and qualified acupuncturist at our center, Complete Rehab Centre in Brampton.",
      },
    ],
  },
  {
    slug: "everything-you-need-to-know-about-chiropractic-care",
    title: "Everything You Need to Know About Chiropractic Care",
    excerpt:
      "Chiropractic is a drug-free approach to healthcare that focuses on treating neuro-musculoskeletal disorders.",
    image: "/images/article-chiropractic-care.jpg",
    imageAlt: "Chiropractic care session",
    body: [
      {
        type: "p",
        text: "If you have ever visited a rehabilitation center, you may have come across the term chiropractic. But what is it? Chiropractic is a drug-free approach to healthcare that focuses on treating neuro-musculoskeletal disorders.",
      },
      {
        type: "p",
        text: "The primary target of a chiropractor is the relationship between the spine and the nervous system. They provide diagnosis, preventive care, and treatment for disorders of the:",
      },
      { type: "ul", items: ["Joints", "Nervous system", "Pelvis", "Spine"] },
      {
        type: "p",
        text: "It works by the chiropractor locating and adjusting the particular musculoskeletal area of your body that isn't functioning properly. The spinal column is made of a series of movable bones from the skull to the center of the hips. It is what allows your body to bend, twist and move.",
      },
      {
        type: "p",
        text: "It helps to protect the fragile central nervous system that controls and coordinates your tissues, muscles and body organs. That's why for you to have an active life, you need to have a spine that is properly functioning.",
      },
      {
        type: "p",
        text: "When you have displacements in your spinal column due to an accident, stress, falling, overexertion, etc., it can lead to irritation of the nerve roots of the spine which may result in symptoms in other parts of your body.",
      },
      { type: "h3", text: "Why should you seek chiropractic care?" },
      {
        type: "p",
        text: "If the above description of the importance of the proper function of your spinal column doesn't convince you to get regular chiropractic care, the following reasons should. You need to seek chiropractic care if you have:",
      },
      {
        type: "ul",
        items: [
          "Arthritic pain",
          "Whiplash",
          "Repetitive strain injury",
          "Lower back pain",
          "Leg pain (sciatica)",
          "Head/neck pain",
          "Limited motion in the shoulder, neck, limbs and back",
          "Sports, car accident or work injuries",
          "A desire to support your overall general health",
        ],
      },
      {
        type: "p",
        text: "When you seek the help of a chiropractor, you will be evaluated by going through your medical history analysis, physical and X-ray examination. The chiropractor will conduct a structural analysis while paying attention to the alignment of your vertebrae.",
      },
      { type: "h3", text: "Benefits of chiropractic care" },
      { type: "p", text: "By regularly seeking chiropractic care, you will benefit from:" },
      {
        type: "ul",
        items: [
          "Improved posture: chiropractic care will help to align the tilting and curves of your spine.",
          "Relief from stress and tension disorders, as your body feels less tense.",
          "Better sleep: body aches, pain and stress often lead to sleeping problems, and regular chiropractic care can help.",
          "Improved coordination and motion of the joints.",
          "A properly functioning nervous system, which helps your immune system work properly and heal faster.",
          "Improved physical function and performance.",
        ],
      },
      {
        type: "p",
        text: "Now that you are aware of the benefits of chiropractic care, take charge of your health and help your body resist disease — you don't have to wait for the symptoms to show.",
      },
    ],
  },
  {
    slug: "why-you-may-need-physiotherapy",
    title: "Why You May Need Physiotherapy",
    excerpt:
      "When we hear physiotherapy, we often associate it with elite athletes or those with terrible injuries. However, you too may be in need of it.",
    image: "/images/article-physiotherapy-signs.jpg",
    imageAlt: "Physiotherapy session",
    body: [
      {
        type: "p",
        text: "When we hear physiotherapy, we often associate it with elite athletes or those people who have terrible injuries. However, you too may be in need of it.",
      },
      {
        type: "p",
        text: "Physiotherapy is the treatment of disorders with physical agents and methods, e.g. massage, manipulation, therapeutic exercises. If you are experiencing pain or having trouble moving your joints, seek the guidance of a physiotherapist.",
      },
      { type: "h3", text: "Tell-tale signs that you need physiotherapy" },
      {
        type: "p",
        text: "You need to look out for any of the signs below, whether from a recent injury or symptoms that have built up over time:",
      },
      { type: "h3", text: "1. Difficulty holding your visits to the washroom" },
      {
        type: "p",
        text: "This condition is referred to as urinary incontinence — being unable to control the need to pass urine. It is more common in women than men, especially as they age.",
      },
      {
        type: "p",
        text: "By paying a visit to a physiotherapy center for a checkup, you may be advised to take pelvic floor exercises to strengthen the pelvic area. Urinary incontinence can be either urge incontinence (urine leaks without warning) or stress incontinence (pressure from sneezing or coughing results in release of urine).",
      },
      { type: "h3", text: "2. Constant pain" },
      {
        type: "p",
        text: "Sometimes pain doesn't go away after you suffer an injury and complete the healing period. If your pain is prolonged or recurring — common with neck and lower back pain — you need to see a physiotherapist.",
      },
      {
        type: "p",
        text: "To ease your suffering and ensure that you are healed, your treatment may consist of massage, manipulation, acupuncture, etc.",
      },
      { type: "h3", text: "3. Losing your balance" },
      {
        type: "p",
        text: "If you are having difficulties balancing and coordinating your body, you need physiotherapy to retain your body's equilibrium. It could be a result of an issue with your inner ear, particularly the vestibular system.",
      },
      {
        type: "p",
        text: "Symptoms include dizziness, imbalance or even vertigo. To combat these symptoms, you may need to implement exercises that train your central nervous system.",
      },
      { type: "h3", text: "4. Pre and post-operation" },
      {
        type: "p",
        text: "Some surgeries require physiotherapy, e.g. cardiac and chest surgeries. Such patients are taught how to cough properly while ensuring that the wound site is getting enough support.",
      },
      {
        type: "p",
        text: "It all depends on the type of surgery, based on an assessment of the risk of complication after surgery.",
      },
      { type: "h3", text: "5. Hurting while sitting at your desk" },
      {
        type: "p",
        text: "Most office spaces involve sitting in slouched, fixed positions for long periods, but our bodies are designed to be in regular movement. This way of sitting may lead to headaches and lower back pain as muscles and joints start to strain.",
      },
      {
        type: "p",
        text: "To prevent this, take regular breaks from your desk. A physiotherapist will give you ideal postural advice for the workplace.",
      },
      {
        type: "p",
        text: "The above are some of the signs to look out for. It is advisable to seek help on time, before a bad situation becomes dire. We have individually designed programs to promote your healing and pain relief.",
      },
    ],
  },
  {
    slug: "the-benefits-of-physiotherapy",
    title: "The Benefits of Physiotherapy",
    excerpt:
      "Do you take care of your health? In today's world, with little to no spare time, we often neglect pains and don't exercise as much as we should.",
    image: "/images/article-benefits-of-physiotherapy.jpg",
    imageAlt: "Physiotherapy exercise",
    body: [
      {
        type: "p",
        text: "Do you take care of your health? If your answer is “no,” you are not alone. In today's world, with little to no spare time, we often neglect pains and don't exercise as much as we should. With this kind of lifestyle, it is not rare to end up with an injury or chronic pain. And that is one of the many reasons why getting complete physiotherapy in Brampton can be so important for patients of all ages and backgrounds. A few of the benefits related to it are:",
      },
      { type: "h3", text: "Better posture" },
      {
        type: "p",
        text: "Having good posture requires some effort at first, but physiotherapy can help you get there. This is achieved through the strengthening of your core muscles.",
      },
      { type: "h3", text: "Better breathing" },
      {
        type: "p",
        text: "Physiotherapy treatments can also teach you how to breathe properly. With proper chest and neck movement, even problems like asthma and sleep apnoea can be addressed.",
      },
      { type: "h3", text: "Better weight management" },
      {
        type: "p",
        text: "By promoting toned muscles, physiotherapy can help patients gain strength and lose body fat.",
      },
      { type: "h3", text: "Better mobility" },
      {
        type: "p",
        text: "This is the most common benefit related to physiotherapy, and maybe the most important as well. Physiotherapy helps elderly and injured people have better balance and flexibility, as well as stronger muscles and bones, promoting mobility and physical independence — all directly related to a better quality of life.",
      },
      {
        type: "p",
        text: "If you are interested in having the support of an experienced and well-trained professional physiotherapist in Brampton to get these benefits, contact Complete Rehab Centre.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

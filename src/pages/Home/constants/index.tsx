import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    carrent,
    jobit,
    tripguide,
    
   
  } from "../assets";


  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "login",
      title: "Login",
    },
    {
      id: "signup",
      title: "Sign Up",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Multinational coffeehouse chain and coffee company",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: " From March 2023",
      points: [
        "Starbucks is primarily a multinational coffeehouse chain and coffee company.",
        "It is renowned for its coffee beverages.",
        "but it also offers a variety of other products such as teas, snacks, and related merchandise.",
        "Starbucks operates a vast network of coffeehouses globally, providing customers with a place to enjoy coffee, socialize, and work.",
        "Additionally, Starbucks has expanded its brand to include packaged coffee products available in retail stores and through online sales.",
        "It's a company that places a strong emphasis on coffee culture and the customer experience."
      ],
    },
    {
      title: "American (EV) and clean energy company",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "From April 2023",
      points: [
       "Tesla, Inc. is an American electric vehicle (EV) and clean energy company. It specializes in the design, manufacturing, and distribution of electric cars, battery energy storage systems, solar energy products, and related technologies.",
       "Tesla is known for pioneering the electric vehicle industry, producing popular electric cars like the Model S, Model 3, Model X, and Model Y. Additionally, the company develops advanced driver-assistance systems and is actively working on autonomous (self-driving) vehicle technology.",
       "Tesla's mission is to accelerate the world's transition to sustainable energy, and it has a significant presence in both the automotive and renewable energy sectors."
      ],
    },
    {
      title: "Canadian e-commerce company",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "From May 2023",
      points: [
        "Shopify is a Canadian e-commerce company known for its user-friendly platform that helps businesses of all sizes set up and manage online stores.",
        "It offers a range of tools for designing storefronts, processing payments, tracking orders, and more. Shopify's versatility and additional services, like point-of-sale systems and marketing tools, have made it a go-to choice for online entrepreneurs worldwide."
      ],
    },
    {
      title: " technology conglomerate company ",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "From June 2023",
      points: [
       "Meta Platforms, Inc., formerly Facebook, is a tech giant focused on social media, virtual reality, and augmented reality.",
       "It manages well-known platforms like Facebook, Instagram, WhatsApp, and Messenger, serving billions globally. Meta's key product, the Oculus VR headset, immerses users in virtual reality, and they're actively exploring the metaverse, a digital space for collaborative interaction.",
       "In short, Meta pioneers tech and social media, reshaping human-computer interaction through VR and AR innovation."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
      "CareerCompass has transformed the way we hire top IT talent. Their NLP-powered CV sorting is nothing short of amazing! It streamlines the process, saving us time and ensuring we connect with the right candidates. A game-changer for IT recruitment.",
      name: "Sara Lee",
      designation: "CEO",
      company: "TechWiz Solutions",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
      "I've been using CareerCompass for a while now, and it's been a game-changer for our IT team. Posting job openings is a breeze, and the quality of candidates we receive is exceptional. Thanks to CareerCompass, we've found our ideal IT professionals faster than ever before.",
      name: "John Smith",
      designation: "IT Manager",
      company: " InnovateTech Inc",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
      "As an IT job seeker, CareerCompass has been a lifesaver. The platform is user-friendly, and the NLP-driven CV sorting is incredibly accurate. It helped me find my dream job hassle-free. I highly recommend CareerCompass to anyone in the IT field.",
      name: "Rachel Carter",
      designation: "Softare Engineer",
      company: "Job Applicant",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "CV Analyzing and Sorting",
      description:
      "Our CV sorting and analyzing process leverages advanced Natural Language Processing (NLP) techniques, primarily focusing on extracting valuable data from PDF resumes. We collect, preprocess, and analyze resumes to classify and rank them based on specific criteria. Keyword matching and NLP-driven algorithms enhance our sorting accuracy, ensuring a streamlined and efficient recruitment process.",
      tags: [
        {
          name: "Natural Language Processing (NLP)",
          color: "blue-text-gradient",
        },
        {
          name: "PDF Parsing Libraries",
          color: "green-text-gradient",
        },
        {
          name: "Machine Learning and Data Analysis",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://www.ibm.com/topics/natural-language-processing",
    },
    {
      name: "Candidates can Apply for Jobs",
      description:
      "CareerCompass, our advanced recruitment management system, offers seamless accessibility for IT-related job candidates to apply for positions effortlessly and swiftly. New users can quickly sign up to unlock this feature, while existing members can simply log in and apply for jobs with ease. Our system employs cutting-edge NLP technology to scan and evaluate resumes, ensuring a streamlined and efficient application process.",
      tags: [
        {
          name: "Natural Language Processing (NLP)",
          color: "blue-text-gradient",
        },
        {
          name: "Web Development Frameworks and Tools",
          color: "green-text-gradient",
        },
        {
          name: "Database Management Systems",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://www.indeed.com/career-advice/finding-a-job/applying-for-a-job",
    },
    {
      name: "Employers can Post Jobs",
      description:
      "CareerCompass, our innovative recruitment management system, offers effortless accessibility for IT-related employers to swiftly and conveniently post job openings. New users can quickly register to access this feature, while existing members can seamlessly log in and publish job listings with ease. Our user-friendly platform is designed to simplify and expedite the job posting process, ensuring that employers can efficiently connect with top talent in the IT industry.",
      tags: [
        {
          name: "Web Development Technologies",
          color: "blue-text-gradient",
        },
        {
          name: "Database Management Systems",
          color: "green-text-gradient",
        },
        {
          name: "Authentication and Authorization Services",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.indeed.com/hire/c/info/writing-a-job-posting-template-and-examples#:~:text=Steps%20for%20writing%20a%20job%20posting%201%201.,...%207%207.%20Reread%2C%20edit%20and%20post.%20",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
export function useConstants() {
  const navigation = [
    {
      id: 1,
      name: "About",
      href: "/about",
    },
    {
      id: 2,
      name: "Skills",
      href: "/skills",
    },
    {
      id: 4,
      name: "Projects",
      href: "/projects",
    },
    {
      id: 5,
      name: "Contact",
      href: "/contact",
    },
  ];

  const skillWithLogo = [
    {
      imgUrl: "/logos/html5-original.svg",
      name: "HTML",
      alt: "HTML logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/css3-plain-wordmark.svg",
      name: "CSS",
      alt: "CSS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/javascript-original.svg",
      name: "JavaScript",
      alt: "JavaScript logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/react-original.svg",
      name: "React",
      alt: "React logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nextjs-original.svg",
      name: "NextJS",
      alt: "NextJs logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/typescript-original.svg",
      name: "TypeScript",
      alt: "TypeScript logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/vuejs-original.svg",
      name: "Vue",
      alt: "Vue logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nuxtjs-original.svg",
      name: "NuxtJS",
      alt: "NuxtJS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/materialui-original.svg",
      name: "Material UI",
      alt: "Material UI logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/redux-original.svg",
      name: "Redux",
      alt: "Redux logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/jest-plain.svg",
      name: "Jest",
      alt: "Jest logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/tailwindcss-plain.svg",
      name: "TailwindCSS",
      alt: "TailwindCSS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/firebase-plain.svg",
      name: "Firebase",
      alt: "Firebase logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nodejs-original.svg",
      name: "NodeJS",
      alt: "NodeJS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/git-original.svg",
      name: "Git",
      alt: "Git logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/shopify-b_w.webp",
      name: "Shopify",
      alt: "Shopify logo",
      width: 512,
      height: 512,
    },
    {
      imgUrl: "/logos/jquery-original.svg",
      name: "jQuery",
      alt: "jQuery logo",
      width: 150,
      height: 150,
    },
  ];
  const hobbies = [
    {
      title: "Drink Black tea",
      text: "Best way to start the morning",
      classBg: "bg-tea",
    },
    {
      title: "Playing Video Games",
      text: "To pen down my thoughts, memories and interesting things that occur in life",
      classBg: "bg-journaling",
    },
    {
      title: "Learning new technologies/framework",
      text: "To explore and expand my skillsets. \n Recently exploring Kotlin and ThreeJs",
      classBg: "bg-programming",
    },
    
    {
      title: "Listening to music",
      text: "Recent favourites: MWAM, HONNE, Forester, Milet and Yoasobi",
      classBg: "bg-music",
    },
  ];
  const projects = [
    {
      isReverse: true,
      title: "Amazon Clone",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/amazon_clone.png",
      description:
        "An Amazon Clone using JS ReactJS and Javascript. It has a Payment gatway with cool features..",
      techStack: [
        "ReactJS",
        "JS",
        "TailwindCSS",
        "@notionhq/client",
        "highlight.js",
        "fslightbox-react",
      ],
      isUrl: false,
      githubLink: "https://github.com/brendonferrao/amazon-clone",
    },
    {
      isReverse: true,
      title: "Heart Diseases Prediction",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/heart1.png",
      description:
        "An Heart Diseases Prediction using Python and machine learning algorithms.",
      techStack: [
        "Python",
        "Machine Learning",
      ],
      isUrl: false,
      
      githubLink: "https://github.com/lisbangonsalves/heart-disease-prediction",
    },
    {
      isReverse: false,
      title: "Planty",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/Plant.webp",
      description:
        "A Plant Store Application which user can buy the plants online.",
      techStack: [
        "Flutter",
        "Dart",
        "Firebase",
      ],
      isUrl: false,
      githubLink: "https://github.com/dillon0007/Planty",
    },
    {
      isReverse: true,
      title: "Flourshing Vision",
      titleColor: "text-white",
      filterColor: "bg-slate-500 mix-blend-hard-light",
      imageUrl: "/project-ss/vision.jpeg",
      description:
        "An Augmentation reality website with voice Assistant features. This an 3D object model website.",
      techStack: [
        "Next",
        "React",
        "Tailwind css",
        "MongoDB",
        "TypeScript",
        "Python",
        "Alan AI",
        "Cloudinary"
      ],
      isUrl: false,
      githubLink: "https://github.com/dillon0007/FlourshingVision_store",
    },
    {
      isReverse: false,
      title: "Werkera",
      titleColor: "text-white",
      filterColor: "bg-slate-700 bg-opacity-60",
      imageUrl: "/project-ss/werkera.png",
      description:
        "A Worker Customer Management System, which hightlights the connection between worker and Customer",
      techStack: ["Flutter", "Node", "Express", "JavaSciprt", "MongoDB"],
      isUrl: false,
      githubLink: "https://github.com/Werkera/werkera",
    },
    {
      isReverse: true,
      title: "Customer Relationship Management",
      titleColor: "text-white",
      filterColor: "bg-slate-800 bg-opacity-60",
      imageUrl: "/project-ss/crm.webp",
      description: "A Customer Managment Website which can identify their management with Customer",
      techStack: [
        "EJS",
        "Node",
        "ExpressJS",
        "JavaScript",
        "MongoDB",
      ],
      isUrl: false,
      githubLink: "https://github.com/lisbangonsalves/03-Decryptors",
    },
    
    
  ];
  const workingProjects = [
    {
      image: {
        src: "/work/jagaapp/jagaapp-logo.png",
        alt: "JagaApp",
        width: "225",
        height: "225",
        maxWidth: "max-w-[35%] 3xl:max-w-[35%]",
      },
      imageShowcase: [
       
      ],
      heading: "JagaApp",
      description: `JagaApp Admin Panel is a property management admin panel. It is mainly for internal and client (Management) 
      side use. It can be use for managing visitors, post notice, managing user feedbacks, etc. *Disclaimer: all data shown here 
      are testing/dummy data.`,
      teamMembers: [
        {
          name: "Max Leong",
          linkedIn: "",
        },
      ],
      techStack: ["ReactJs", "NextJs", "Material-UI", "Firebase"],
      highlights:
        "Visitor Setting Enhancement, Creating Logs for monitoring, Module Migration",
      urls: [
        {
          name: "JagaApp Admin Panel",
          link: "https://admin.jagaapp.com/login",
        },
      ],
    },
    {
      image: {
        src: "/work/LVLY_logo.webp",
        alt: "LVLY",
        width: "410",
        height: "117",
        maxWidth: "max-w-[60%] md:max-w-[50%] 3xl:max-w-[55%]",
      },
      imageShowcase: [
        {
          title: "Cart Page - Step 1",
          src: "/work/lvly-cart-s1.png",
          alt: "Cart Page - Step 1",
          width: "800",
          height: "446",
        },
        {
          title: "Cart Page - Step 2",
          src: "/work/lvly-cart-s2.png",
          alt: "Cart Page - Step 2",
          width: "800",
          height: "404",
        },
        {
          title: "Cart Page - Step 3",
          src: "/work/lvly-cart-s3.png",
          alt: "Cart Page - Step 3",
          width: "800",
          height: "637",
        },
        {
          title: "Cart Page - Step 4",
          src: "/work/lvly-cart-s4.png",
          alt: "Cart Page - Step 4",
          width: "800",
          height: "520",
        },
        {
          title: "Product Page - Build A Bundle",
          src: "/work/lvly/lvly-bab.png",
          alt: "Product Page - Build A Bundle",
          width: "1920",
          height: "5503",
        },
        {
          title: "General Product Page",
          src: "/work/lvly/lvly-product-page.png",
          alt: "General Product Page",
          width: "1920",
          height: "1902",
        },
      ],
      heading: "LVLY",
      description: `LVLY is an online flower shop that offers beautiful, fragrant, fresh flowers for any occasion.
      The aim was to work on the features for the cart page and product page. Creating a step by step user interface to guide customer 
      to checkout page. It allows the customer to pick their desired delivery date based on the postcode and suburb 
      provided. Moreover, customer can also provide their card message, choose their desired jar message and greeting 
      cards.`,
      teamMembers: [
        {
          name: "Sylvia Chan",
          linkedIn: "https://www.linkedin.com/in/sylviaachann/",
        },
        {
          name: "Chan Sin Yee",
          linkedIn: "https://www.linkedin.com/in/sin-yee-chan-2865bbaa/",
        },
      ],
      techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Shopify Liquid"],
      highlights:
        "Cart page layout & functionality, Product Page Addons UI & functionality",
      urls: [
        {
          name: "LVLY AU",
          link: "https://www.lvly.com.au/",
        },
        {
          name: "LVLY MY",
          link: "https://www.lvly.my/",
        },
      ],
    },
    {
      image: {
        src: "/work/FC-MY.webp",
        alt: "Flowerchimp",
        width: "410",
        height: "205",
        maxWidth: "max-w-[60%] md:max-w-[50%] 3xl:max-w-[55%]",
      },
      imageShowcase: [
        {
          title: "Product Page",
          src: "/work/fc-product-page.png",
          alt: "Product Page",
          width: "745",
          height: "432",
        },
        {
          title: "Product Page - Addon Product Modal",
          src: "/work/fc-product-addon-modal.png",
          alt: "Product Page - Addon Product Modal",
          width: "1000",
          height: "492",
        },
        {
          title: "Cart Page",
          src: "/work/fc-cart-page.png",
          alt: "Cart Page",
          width: "745",
          height: "476",
        },
        {
          title: "Cart Page - Empty Cart",
          src: "/work/fc-empty-cart.png",
          alt: "Cart Page - Empty Cart",
          width: "745",
          height: "351",
        },
      ],
      heading: "Flowerchimp",
      description: `Flowerchimp is an online flower shop that offers a wide selection of beautiful bouquets and
      arrangements to suit any occasion. Customers can choose from a variety of flowers, vases and boxes to make
      sure their gift is special and unique. The aim was to work on revamping the product page and cart page. 
      Making the user interface better and user friendly. The process also includes rewrite the functionality 
      to the website slightly faster, improving user experience and making the codebase easier to maintain.`,
      teamMembers: [
        {
          name: "Sylvia Chan",
          linkedIn: "https://www.linkedin.com/in/sylviaachann/",
        },
        {
          name: "Chan Sin Yee",
          linkedIn: "https://www.linkedin.com/in/sin-yee-chan-2865bbaa/",
        },
      ],
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "Shopify Liquid",
        "Splide",
        "Modaal",
      ],
      highlights: "Product Page Revamp & Cart Page Revamp",
      urls: [
        {
          name: "Flowerchimp MY",
          link: "https://www.flowerchimp.com/",
        },
      ],
    },
    {
      image: {
        src: "/work/BR_Logo.webp",
        alt: "Bloomeroo",
        width: "410",
        height: "82",
        maxWidth: "max-w-[70%] md:max-w-[60%] 3xl:max-w-[55%]",
      },
      imageShowcase: [
        {
          title: "Cart Page",
          src: "/work/bl-cart.png",
          alt: "Cart Page",
          width: "800",
          height: "543",
        },
      ],
      heading: "Bloomeroo",
      description: `Bloomeroo is an e-commerce website that specializes in selling fresh flowers and providing same-day
      delivery in Australia. The aim was to work on generating the date picker by postcode input for the cart page. This 
      requires user to provide postcode in order to choose their desired delivery date. Moreover, customer can also 
      provide their card message and choose addon products before going to checkout page.`,
      techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Shopify Liquid"],
      teamMembers: [
        {
          name: "Sylvia Chan",
          linkedIn: "https://www.linkedin.com/in/sylviaachann/",
        },
        {
          name: "Chan Sin Yee",
          linkedIn: "https://www.linkedin.com/in/sin-yee-chan-2865bbaa/",
        },
      ],
      highlights:
        "Render selectable dates based on postcode input, website maintenance",
      urls: [
        {
          name: "Bloomeroo",
          link: "https://www.bloomeroo.com.au/",
        },
      ],
    },
    {
      image: {
        src: "/work/cr-footer-logo.webp",
        alt: "Cakerush MY",
        width: "183",
        height: "42",
        maxWidth: "max-w-[70%] md:max-w-[60%] 3xl:max-w-[55%]",
      },
      imageShowcase: [
        
        {
          title: "Home Page",
          src: "/work/cakerush-homepage-revamp.png",
          alt: "Home Page",
          width: "1920",
          height: "6199",
        },
        {
          title: "Explosion Box Product Template",
          src: "/work/cakerush-explosion-box-page.png",
          alt: "Explosion Box Product Template",
          width: "1920",
          height: "4847",
        },
      ],
      heading: "Cakerush MY",
      description: `Cakerush MY is an innovative online platform offering a wide selection of exquisite cakes and pastries. 
      With a user-friendly interface, customers can easily browse and customize their orders for any occasion. From classic 
      flavors to personalized designs, each cake is meticulously crafted using the finest ingredients. Cakerush MY ensures 
      timely delivery, bringing fresh and visually stunning cakes to your doorstep. Elevate your celebrations with their 
      exceptional creations and exceptional service.`,
      techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Shopify Liquid"],
      teamMembers: [
        {
          name: "Sylvia Chan",
          linkedIn: "https://www.linkedin.com/in/sylviaachann/",
        },
      ],
      highlights: "Home Page Revamp & Explosion Box Product Template Page",
      urls: [
        {
          name: "Cakerush MY",
          link: "https://www.cakerush.my/",
        },
      ],
    },
    {
      image: {
        src: "/work/thc-logo.webp",
        alt: "The Hacker Collection Website",
        width: "62",
        height: "65",
        maxWidth: "max-w-[70%] md:max-w-[60%] 3xl:max-w-[55%]",
      },
      imageShowcase: [
        {
          title: "Home Page",
          src: "/work/thc-home-full.png",
          alt: "Home Page",
          width: "874",
          height: "4796",
        },
        {
          title: "Fundraising Page",
          src: "/work/thc-fundraising.png",
          alt: "Fundraising Page",
          width: "805",
          height: "5208",
        },
      ],
      heading: "The Hacker Collection Website",
      description: `The Hacker Collection (THC) is an innovative landing page website that offers a comprehensive
      overview of a company's mission, products, and services. With a modern and user-friendly design, THC offers
      an intuitive way to showcase a company's offerings and provides visually appealing and easy-to-understand
      information. THC also offers a number of tools, such as a contact form, a blog, and registration forms, to
      help customers interact with the company in a meaningful way.`,
      techStack: ["Vue", "Nuxt3", "TailwindCSS", "HeadlessUI", "Heroicons"],
      teamMembers: [
        {
          name: "Bryan Liaw",
          linkedIn: "",
        },
        {
          name: "Pierce Ong",
          linkedIn: "",
        },
        {
          name: "Adri Shahri",
          linkedIn: "",
        },
      ],
      highlights: "Manage and work with the team to create the entire website.",
      urls: [
        {
          name: "THC Website",
          link: "https://hackercollective.co/",
        },
      ],
    },
  ];
  const timeline = [
    
  ];

  return {
    navigation,
    hobbies,
    skillWithLogo,
    projects,
    workingProjects,
    timeline,
  };
}

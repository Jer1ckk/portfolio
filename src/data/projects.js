// Supplied project examples. Verify each feature and contribution before publishing.
// Add real screenshots as image paths; null uses explicitly illustrative artwork.
// Feature status must be 'unverified', 'planned', or 'implemented'.
export const projects = [
 {
    id: "kaseapp",
    title: "KaseApp Market Module",
    category: "Backend",
    eyebrow: "AGRICULTURE · MARKETPLACE",
    artwork: "market",
    image: null,

    description:
      "A backend marketplace module that helps farmers manage agricultural product supply and demand, browse demands, submit offers, and manage sale orders.",

    technologies: [
      "PHP 8.3",
      "Laravel 13",
      "MySQL",
      "Laravel Sanctum",
      "Laravel Socialite",
      "Swagger",
    ],

    features: [
      {
        name: "Authentication APIs",
        status: "implemented",
      },
      {
        name: "Phone OTP verification",
        status: "implemented",
      },
      {
        name: "Email verification and password reset",
        status: "implemented",
      },
      {
        name: "Google login",
        status: "implemented",
      },
      {
        name: "Profile management",
        status: "implemented",
      },
      {
        name: "Crop and product APIs",
        status: "implemented",
      },
      {
        name: "Supply and demand management",
        status: "implemented",
      },
      {
        name: "Demand browsing and matching",
        status: "implemented",
      },
      {
        name: "Offer submission",
        status: "implemented",
      },
      {
        name: "Sale order management",
        status: "implemented",
      },
      {
        name: "Swagger API documentation",
        status: "implemented",
      },
      {
        name: "Database design",
        status: "implemented",
      },
    ],

    status: "Internship Project",

    github: null,
    demo: null,

    problem:
      "Farmers need a way to manage agricultural product supply and demand and interact with marketplace opportunities through backend APIs.",

    solution:
      "Developed backend APIs for authentication and farmer-side marketplace workflows, including product retrieval, supply and demand management, demand browsing, offer submission, and sale order management.",

    contribution:
      "Worked as a Backend Developer during an internship, contributing to authentication APIs, phone OTP verification, email verification and password reset, Google login, profile management, farmer-side marketplace functionality, database design, and Swagger API documentation.",

    architecture:
      "Laravel API backend using controllers, middleware, and Eloquent ORM for application logic and database access.",

    database:
      "MySQL relational database for managing user accounts, authentication data, and agricultural marketplace records.",
    challenges:
      "During development, I found that the initial database design was not properly normalized. I needed to redesign the database structure and relationships to reduce duplicated data and maintain data consistency.",
  },

  {
    id: "velo",
    title: "Velo Bike Rental",
    category: "Mobile",
    eyebrow: "MOBILITY · RENTAL APPLICATION",
    artwork: "bike",
    image: null,

    description:
      "A Flutter mobile application for exploring bike stations, checking availability, booking bikes, and managing rental passes.",

    technologies: ["Flutter", "Dart", "Firebase Realtime Database"],

    features: [
      {
        name: "Bike stations and availability",
        status: "implemented",
      },
      {
        name: "Booking management and expiry",
        status: "implemented",
      },
      {
        name: "Daily, monthly, and annual passes",
        status: "implemented",
      },
      {
        name: "One active pass per user",
        status: "implemented",
      },
    ],

    status: "School Project",

    github: null,
    demo: null,

    problem:
      "Users need a convenient way to find available bikes, book rentals, and manage bike rental passes.",

    solution:
      "A mobile application that organizes bike station information, booking workflows, and rental pass management in one place.",

    contribution:
      "Independently designed and developed the mobile application, including its UI, state management, booking workflows, rental pass management, and Firebase Realtime Database integration.",

    architecture:
      "MVVM with Provider for state management and the Repository Pattern for separating data access from application logic.",

    database:
      "Firebase Realtime Database for storing and synchronizing bike station, booking, and rental pass data.",
    challenges:
      "Managing booking expiry and rental pass rules was challenging because the application needed to handle booking time limits and ensure each user could have only one active pass. I had to organize the application logic to keep booking and pass states consistent.",
  },

  {
    id: "mhobfinder",
    title: "MhobFinder",
    category: "Full Stack",
    eyebrow: "FOOD · RECIPE FINDER",
    artwork: "jobs",
    image: null,

    description:
      "A recipe-finding website that helps users discover food recipes by entering available ingredients.",

    technologies: ["React", "Express.js", "MySQL", "Cloudinary"],

    features: [
      {
        name: "Recipe Search by Name or Ingredients",
        status: "implemented",
      },
      {
        name: "Detailed Cooking Instructions",
        status: "implemented",
      },
      {
        name: "External Recipe Links",
        status: "implemented",
      },
      {
        name: "Admin Dashboard",
        status: "implemented",
      },
    ],

    status: "Personal Project",

    github: null,
    demo: null,

    problem:
      "People may have ingredients available at home but struggle to decide what meals they can prepare with them.",

    solution:
      "A web application that helps users find relevant food recipes based on the ingredients they enter.",

    contribution:
      "Developed the backend functionality, including API development, recipe search, and database integration. Also built the frontend for the admin dashboard to manage the application's data and content.",

    architecture:
      "Client-server architecture with React for the frontend and Express.js for REST API development. Sequelize ORM manages database operations with MySQL, while Cloudinary handles image storage and delivery.",
    database:
      "MySQL for storing structured recipe data, managed through Sequelize ORM. Cloudinary is used separately for recipe image storage and delivery.",

    challenges:
      "One challenge was handling recipe searches by name or ingredients while managing recipe information and images separately. I needed to connect the backend APIs with the MySQL database and Cloudinary to ensure recipe details and images could be retrieved and displayed correctly.",
  },
];

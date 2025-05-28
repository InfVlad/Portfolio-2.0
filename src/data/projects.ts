import type { SimplifiedProject } from "~/types/projects";

import tuyoCloset from "~/assets/images/tuyo-closet.png";
import garageGuest from "~/assets/images/garage-guest.png";

export const simplifiedProjectList: SimplifiedProject[] = [
  {
    slug: "tuyo-closet-sale",
    rol: "Back-End Development",
    technologies: "Django, Postgresql, Redis, REST API, Swagger",
    title: "Tuyo Closet Sale",
    webUrl:
      "https://play.google.com/store/apps/details?id=com.cerezaconsulting.closetsale.tuyoapp&hl=es_CO&pli=1",
    year: "2024",
    description: "E-commerce Platform",
    bulletPoints: [
      "Developed the back-end for an eCommerce React Native application tailored for influencers, using Django and PostgreSQL.",
      "Designed and implemented the database schema, ensuring scalability and optimized data relationships.",
      "Utilized Redis for caching, improving API response times and overall performance.",
      "Configured the Linux VPS environment, including the setup of NGINX as a reverse proxy, Uvicorn application server, and DNS configurations.",
      "Automated deployments with GitHub Actions, streamlining the CI/CD pipeline.",
      "Implemented and executed unit tests using Django's testing framework, achieving high code reliability and maintainability.",
      "Integrated Firebase Cloud Messaging for real-time push notifications, enhancing user engagement.",
      "Maintained server security and performance through regular monitoring and updates.",
    ],
    imageSrc: tuyoCloset,
    imageAlt: "Tuyo Closet Sale",
  },
  {
    slug: "garage-guest",
    rol: "Fullstack Development",
    technologies: "Next.js, Tailwind CSS, TypeScript, Prisma ORM, Postgresql",
    title: "Garage Guest",
    webUrl: "https://garage-guest-c14.vercel.app/",
    codeUrl: "https://github.com/InfVlad/Garage-Guest",
    year: "2023",
    description: "Workshop management dashboard",
    bulletPoints: [
      "Built an intuitive dashboard for workshop management, enabling users to view and manage clients, vehicles, orders, services, and employees.",
      "Designed and implemented a comprehensive database schema using Prisma ORM, supporting features like user roles, customers, vehicles, orders, mechanics, employees, and services.",
      "Integrated Google and Discord authentication providers using NextAuth for secure and seamless user authentication (OAuth 2.0).",
      "Developed a data visualization feature with charts and statistics to provide insights into workshop performance and operations.",
      "Implemented role-based access control (RBAC) for secure and granular user permissions across the platform.",
      "Created a responsive landing page with Tailwind CSS to showcase the workshop's offerings and attract new customers.",
      "Ensured scalability and maintainability by following best practices for Next.js and TypeScript development.",
      "Deployed the platform on Vercel for efficient serverless hosting and automatic CI/CD pipeline integration.",
    ],
    imageSrc: garageGuest,
    imageAlt: "Garage Guest",
  },
];

export type Project = {
  id: number;
  projectName: string;
  description: string[];
  shortDescription: string; // 👈 New field
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  imagePrimary: string;
  imageUrls: string[];
    videoUrl?: string; // 👈 Add this
};

export const projectData: Project[] = [
  {
    id: 1,
    projectName: "Admin Panel for Podcaster",
     shortDescription: "Admin dashboard for managing podcasts, blogs, and events with SEO support and object storage integration.", // 👈 Added
    videoUrl: "https://player.vimeo.com/video/1098545711", 
    description: [
  "One of my recent projects involved developing an admin panel for the blog of a podcaster and public speaker. The platform is designed to manage podcast episodes, upcoming events, and blog articles—all from a single, intuitive admin interface.",
  "The project uses DigitalOcean's S3-compatible object storage to host podcast episode files in MP3 format. The admin can manage each episode's title, description, and slug (which defines the podcast's URL on the blog), providing full control over SEO.",
  "For content publishing, the admin can share articles on the blog using a rich text editor (Tiptap), offering a smooth and flexible writing experience. You can check the screenshots for a closer look at the interface.",
  "The system also includes functionality to manage upcoming events that the public speaker will attend, keeping followers informed and engaged.",
  "The blog is fully SEO-optimized—from sitemaps and robots.txt files to metadata (titles and descriptions) for each page. I also used a wide range of server components to ensure optimal performance and search engine visibility."
],

    technologies: ["NextJS", "NestJS", "Tailwind CSS", "TypeScript", "Object Storage", "Tiptap", "Cron Jobs"],
    githubUrl: "https://github.com/yourecommerce",
    imagePrimary: "https://res.cloudinary.com/ds39qgppf/image/upload/v1758388773/Screenshot_2025-05-29_174013_vxgy0k.png",
    imageUrls: [
      "https://res.cloudinary.com/ds39qgppf/image/upload/v1758388773/Screenshot_2025-05-29_173921_tqlc1b.png",
      "https://res.cloudinary.com/ds39qgppf/image/upload/v1758388772/Screenshot_2025-05-29_174043_n49w7q.png",
      "https://res.cloudinary.com/ds39qgppf/image/upload/v1758388773/Screenshot_2025-05-29_174115_xap35r.png",
      "https://res.cloudinary.com/ds39qgppf/image/upload/v1758388773/Screenshot_2025-05-29_174217_txlf13.png",
      "https://res.cloudinary.com/ds39qgppf/image/upload/v1758388781/Screenshot_2025-05-29_174451_opemvi.png",
      "https://res.cloudinary.com/ds39qgppf/image/upload/v1758388778/Screenshot_2025-05-29_174505_slpvsc.png",
      "https://res.cloudinary.com/ds39qgppf/image/upload/v1758388779/Screenshot_2025-05-29_174853_ofafo2.png",
    ],
  },
  {
    id: 2,
    projectName: "Cycling Club Website",
        shortDescription: "Admin dashboard for managing podcasts, blogs, and events with SEO support and object storage integration.", // 👈 Added
 videoUrl: "https://player.vimeo.com/video/1100960873", 
 description: [
  "A cycling club website to publish rides, where riders can join them. Built with Next.js, NestJS, and Mapbox.",
  "The coach (admin) can publish rides with detailed routes drawn directly on a map. Riders (users) can browse available rides and join them easily.",
  "There are two user roles: admin (coach) and user (rider). The admin can view all riders who joined a ride, manage rides entirely, and access ride-related analytics such as total revenue.",
  "Riders have their own dashboard where they can manage their reservations. They can cancel bookings, reserve additional spots, and view analytics such as total distance ridden and total money spent on rides."
],

    technologies: ["NextJS", "NestJS", "Tailwind CSS", "MapBox", "TypeScript"],
    imagePrimary: "https://res.cloudinary.com/ds39qgppf/image/upload/v1758389071/Screenshot_2025-07-13_104812_pwnx65.png",
    imageUrls: [
      "https://res.cloudinary.com/ds39qgppf/image/upload/v1758388785/Screenshot_2025-07-12_200707_wwu1yh.png",
      "https://res.cloudinary.com/ds39qgppf/image/upload/v1758388788/Screenshot_2025-07-12_200811_cf68lt.png",
      "https://res.cloudinary.com/ds39qgppf/image/upload/v1758388787/Screenshot_2025-07-12_204203_rqeibk.png",
      "https://res.cloudinary.com/ds39qgppf/image/upload/v1758388788/Screenshot_2025-07-12_204429_oa0lhh.png",
      "https://res.cloudinary.com/ds39qgppf/image/upload/v1758388791/Screenshot_2025-07-12_210827_axazhd.png",
      "https://res.cloudinary.com/ds39qgppf/image/upload/v1758388786/Screenshot_2025-07-12_210742_e6xnbz.png",
      "https://res.cloudinary.com/ds39qgppf/image/upload/v1758388785/Screenshot_2025-07-12_204643_tp0qv2.png",
    ],
  },
  {
    id: 3,
    projectName: "Intern Management Web Application",
shortDescription: "A custom web app for managing internship programs with onboarding, task tracking, role-based access, performance evaluations, and a responsive admin dashboard.",
 description: [
  "I participated in developing a custom web application designed to help organizations efficiently manage their internship programs.",
  "The platform offers centralized onboarding workflows, including document collection and orientation tracking.",
  "It supports task and project assignment with progress monitoring and deadline management.",
  "A structured performance evaluation system is built in, with tools for mentor feedback and intern assessment.",
  "The system includes multi-authentication with distinct roles—HR, mentors, and department heads—each having custom permissions and access levels.",
  "A responsive admin dashboard provides a modern UI/UX, enabling seamless management and detailed reporting.",
  "This solution streamlines intern coordination, boosts productivity, and delivers a professional experience for both interns and administrators."
],

    technologies: ["Laravel", "Javascript", "Bootstrap", "Ajax", "Blade"],
    imagePrimary: "https://res.cloudinary.com/ds39qgppf/image/upload/v1759772445/dashboard_oeydz3.png",
    imageUrls: [
      "https://res.cloudinary.com/ds39qgppf/image/upload/v1759772448/auth_tfn41l.png",
      "https://res.cloudinary.com/ds39qgppf/image/upload/v1759772447/comptes_n47h1h.png",
      "https://res.cloudinary.com/ds39qgppf/image/upload/v1759772446/ajoutencadrant_fpxfnz.png",
      "https://res.cloudinary.com/ds39qgppf/image/upload/v1759772446/stagiairessuperadmin_iuqf6a.png",
      "https://res.cloudinary.com/ds39qgppf/image/upload/v1759772848/ajoutstage_1_j2tf2m.png",
    ],
  }
];

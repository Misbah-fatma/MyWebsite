/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
<<<<<<< HEAD


  {
    name: 'Advisions Research and Development Private Limited (Advisions)',
    position: 'Software Developer',
    url: 'https://smileidentity.com',
    startDate: '2024-01-01 ',
    summary: `**Learning Management System (LMS)**
\n Spearheaded the development of a Learning Management System (LMS), demonstrating expertise in Frontend design, API design, schema design, and project structuring.

- **Frontend:** Designed and implemented a responsive UI using React.js, with frontend routes and private routes managed through React Router. Utilized Redux for state management to ensure smooth and consistent user interactions.
- **Backend:** Designed and implemented RESTful APIs with features including user profile management, CRUD operations for various entities, and functionalities such as Add to Cart, Code Editor, Collaborative Editor with room functionality, Update Password, and Role management. Integrated authentication using JSON Web Tokens (JWT) for secure login and role-based access control (RBAC).
- **Database:** Utilized MongoDB for efficient data storage and retrieval. Implemented a schema design to handle different user roles and functionalities.
- **Middlewares:** Implemented various middleware functions for authentication, authorization, and error handling.
- **Deployment:** Deployed the application on cloud platforms (VPS). Managed deployment configurations with Nginx for handling HTTP requests and optimized performance.

**Commercial Website for Advisions**
\n Recreated and deployed a full-stack commercial website for Advisions, enhancing user engagement and experience.

- Recreated and deployed a full-stack commercial website for Advisions, enhancing user engagement and experience.
- Utilized a robust tech stack including React.js, Redux, JavaScript for the front-end, and Node.js, MongoDB for the back-end. Integrated backend APIs and optimized database queries in MongoDB to enhance performance and scalability.
- Managed deployment ensuring reliable and seamless delivery on the production server.
- Focused on responsive design, cross-browser compatibility, and performance optimization to improve user satisfaction and accessibility.

**DevOps**
- **Linux:** Leveraged Linux for server management and configuration.
- **Node.js PM2:** Used PM2 for process management and ensuring application stability.
- **Python Gunicorn:** Implemented Gunicorn for serving Python-based components.
- **React Build:** Built and prepared React applications for production.
- **Nginx:** Configured Nginx for optimal request routing and handling.`,

  },
=======
>>>>>>> 08e17c8 (first commit)
  {
    name: 'Badlav Seva Samiti',
    position: 'Web Developer',
    url: 'https://smileidentity.com',
    startDate: '2023-12-01',
<<<<<<< HEAD
    endDate : "2024-01-01",
    summary: `As a Web Developer Intern, I actively contributed to the creation of innovative web solutions, gaining hands-on experience in
     coding, debugging, and collaborating with cross-functional teams. Successfully applied and expanded my knowledge of HTML, CSS, and
      JavaScript, while working on real-world projects. Proactively tackled challenges, demonstrating a strong commitment to continuous 
      learning and a passion for creating seamless online experiences.`,
    highlights: [
      'Collaborated with a dynamic team of developers to contribute to the design, development, and maintenance of responsive and visually appealing websites. Utilized HTML, CSS, and JavaScript to implement innovative features and enhance user interfaces.',
      'Engaged in problem-solving and debugging activities, fostering a deep understanding of web development principles.',
      'Actively participated in agile development processes, ensuring timely project delivery.',
      'Demonstrated commitment to continuous learning and staying abreast of industry trends for optimal skill enhancement.',
    ],
  },

=======
    summary: `As a Web Developer Intern, I actively contributed to the creation of innovative web solutions, gaining hands-on experience in
     coding, debugging, and collaborating with cross-functional teams. Successfully applied and expanded my knowledge of HTML, CSS, and
      JavaScript, while working on real-world projects. Proactively tackled challenges, demonstrating a strong commitment to continuous 
      learning and a passion for creating seamless online experiences`,
    highlights: [
      'Collaborated with a dynamic team of developers to contribute to the design, development, and maintenance of responsive and visually appealing websites. Utilized HTML, CSS, and JavaScript to implement innovative features and enhance user interfaces. ',
      'Engaged in problem-solving and debugging activities, fostering a deep understanding of web development principles.',
      'Actively participated in agile development processes, ensuring timely project delivery. ',
      'Demonstrated commitment to continuous learning and staying abreast of industry trends for optimal skill enhancement.',
    ],
  },
 
>>>>>>> 08e17c8 (first commit)
];

export default work;

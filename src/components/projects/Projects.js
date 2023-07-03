import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND GIVE YOUR VALUABLE FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Hospital Bed Booking"
          des=" Developed a user-friendly web application using React.js for booking hospital beds, improving
         accessibility and efficiency in managing patient admissions. Collaborated with a team of developers to implement real-time data synchronization and interactive user interfaces. Utilized modern web technologies to create a responsive and visually appealing design."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" This Mobile Selling E-Commerce Website is a fully functional web application developed using React.js. It provides users with a seamless online shopping experience for purchasing mobile devices. With an intuitive user interface, advanced search and filtering options, secure payment gateways, and responsive design, the website offers a convenient platform for users to browse, compare, and purchase mobile phones. The project demonstrates my expertise in React.js, front-end development, and e-commerce solutions."
          src={projectTwo}
        />
        <ProjectsCard
          title="Twitter Clone"
          des=" This Twitter Clone project is a web application developed using React.js that emulates the core functionalities of the popular social media platform, Twitter. It allows users to create accounts, post tweets, follow other users, and engage in real-time interactions. With a responsive design and intuitive user interface, the project showcases my skills in React.js, front-end development, and data management. It demonstrates my ability to recreate complex features and deliver an engaging user experience similar to Twitter."
          src={projectThree}
        />
        <ProjectsCard
          title="Kanban Website"
          des=" This Kanban Project is a web application developed using React.js that allows users to efficiently manage tasks using the Kanban methodology. With intuitive drag-and-drop functionality, real-time updates, and customizable boards, the project enables seamless organization and collaboration. By leveraging React.js and front-end development skills, I have created a user-friendly and visually appealing Kanban board that enhances productivity and task management for individuals and teams."
          src={projectFour}
        />
        <ProjectsCard
          title="Facebook Clone"
          des=" This project aimed to recreate the core features and functionalities of the Facebook platform, including user authentication, news feed, profile pages, post creation, and real-time updates. By utilizing React's component-based architecture and state management, I successfully replicated the user interface and interactions of Facebook, providing a familiar experience for users. The project involved integrating APIs for data retrieval and storage"
          src={projectFive}
        />
        <ProjectsCard
          title="Credit Card Analysis"
          des=" The Credit Card Analysis project utilized machine learning techniques to analyze credit card data. By preprocessing and cleaning large datasets, applying various classification algorithms, and leveraging data visualization techniques, the project aimed to detect fraudulent transactions and minimize financial risks. The project's goal was to provide accurate predictions and insights for credit card companies, assisting in fraud prevention and enhancing the security of financial transactions"
          src={projectSix}
        />
      </div>
    </section>
  );
}

export default Projects
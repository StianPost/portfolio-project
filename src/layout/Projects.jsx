import Projcard from '../components/Projcard';
import React from 'react';

function Projects() {
  const projArray = [
    {
      img: 'https://via.placeholder.com/1900x900.png?text=No+Image',
      title: 'Year 2 Project Exam (current project)',
      text: 'The project that I am currently invested in, for the time being I am designing it. It will be built using either React or NextJS',
    },
    {
      img: 'https://via.placeholder.com/1900x900.png?text=No+Image',
      title: 'JS Frameworks Course Assignment',
      text: 'A task where we used NextJS, routing and authentication(as a login option) to display different information depending on which card you clicked on. Made using NextJS and TailwindCSS(Very basic design)',
      links: 'https://github.com/StianPost/js-frameworks-ca-stian-post',
    },
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/Semester%20project.PNG',
      title: 'Year 2 Semester project',
      text: "2nd year semester project at Noroff, this is an ecommerce website that is using strapi as a headless cms. In this website you can add clocks to your cart, it calculates taxes and final price. There's an admin page where you can add more watches or delete the ones that's there. It's built using HTML5, SCSS and JS ",
      links: 'https://github.com/StianPost/Sem-Proj-y2',
      link2: 'https://stupefied-lovelace-7e9d44.netlify.app/',
    },
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/react.jpg',
      title: 'CSS Frameworks Course Assignment',
      text: 'The first project I made using react and SCSS, I did not make the design for this page but was told to make it as true to form as possible, this was also accomplished using bootstrap',
      links: 'https://github.com/StianPost/CSS-Frameworks-CA',
    },
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/portfolio.jpg',
      title: 'Portfolio',
      text: 'This is the first portfolio project that I made it was made using HTML5, CSS3, JS and originally got the images and texts from wordpress (using wordpress as a headless cms). My current portfolio is built on the same design concept ',
      links: 'https://github.com/StianPost/Portfolio',
      link2: 'https://postalportfolio.netlify.app/',
    },
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/proj_exam.jpg',
      title: 'Year 1 Project Exam',
      text: "The first exam we did, it's a sports blog that was built using HTML5, CSS5 and JS. We connected to wordpress as a headless api to get the data for the blog posts and images.",
      links: 'https://github.com/StianPost/Project-Exam',
    },
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/sem_proj.jpg',
      title: 'Year 1 Semester Project',
      text: 'A semester project I did in year one, built on HTML5 and CSS3, additionally I added an onclick function through JS, I am not happy with the design',
      links: 'https://github.com/StianPost/Semester-project',
      link2: 'https://tender-kowalevski-e17418.netlify.app',
    },
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/Html-css-ca.PNG',
      title: 'Html/CSS Course Assignment',
      text: 'The first course assignment where we made a website using html and css, here I made an online games shop with wordpress',
      links: 'https://github.com/StianPost/CourseAssignment-html-css',
      link2: 'https://priceless-leakey-2b8975.netlify.app',
    },
  ];
  return (
    <div>
      <h1 className='text-center'>Projects</h1>
      <div className='flex flex-col items-center mt-8'>
        {projArray.map(({ img, title, text, links, link2 }) => {
          return (
            <Projcard
              key={title}
              titleprop={title}
              imgprop={img}
              textprop={text}
              linkprop={links}
              link2prop={link2}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

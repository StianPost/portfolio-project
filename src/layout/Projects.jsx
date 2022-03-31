import Projcard from '../components/Projcard';
import React from 'react';

function Projects() {
  const projArray = [
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/Html-css-ca.PNG',
      title: 'Html/CSS Course Assignment',
      text: 'The first course assignment where we made a website using html and css, here I made an online games shop with wordpress',
      links: 'github',
    },
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/sem_proj.jpg',
      title: 'Year 1 Semester Project',
      text: 'A semester project I did in year one, built on HTML5 and CSS3, additionally I added an onclick function through JS, I am not happy with the design',
      links: 'github',
    },
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/proj_exam.jpg',
      title: 'Year 1 Project Exam',
      text: "The first exam we did, it's a sports blog that was built using HTML5, CSS5 and JS. We connected to wordpress as a headless api to get the data for the blog posts and images.",
      links: 'github',
    },
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/portfolio.jpg',
      title: 'Portfolio',
      text: 'This is the first portfolio project that I made it was made using HTML5, CSS3, JS and originally got the images and texts from wordpress (using wordpress as a headless cms). My current portfolio is built on the same design concept ',
      links: 'github',
    },
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/react.jpg',
      title: 'CSS Frameworks Course Assignment',
      text: 'The first project I made using react and SCSS, I did not make the design for this page but was told to make it as true to form as possible',
      links: 'github',
    },
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/Semester%20project.PNG',
      title: 'Year 2 Semester project',
      text: "2nd year semester project at Noroff, this is an ecommerce website that is using strapi as a headless cms. In this website you can add clocks to your cart, it calculates taxes and final price. There's an admin page where you can add more watches or delete the ones that's there. It's built using HTML5, SCSS and JS ",
      links: 'github',
    },
  ];
  return (
    <div>
      <h1>Projects</h1>
      {projArray.map(({ img, title, text, links }) => {
        return <Projcard key={title} titleprop={title} imgprop={img} />;
      })}
    </div>
  );
}

export default Projects;

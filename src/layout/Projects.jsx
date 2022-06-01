import Projcard from '../components/Projcard';
import React from 'react';

function Projects() {
  const projArray = [
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/1900x900.png',
      title: 'Twitch Project (Hobby / current project)',
      text: "The current project that I am working on, this will be a twitch dashboard that I'll be creating using React, Tailwind and RestApi from Twitch. I am still figuring out what info to display, it depends on what info I can get.",
      react: true,
      tailwind: true,
    },
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/y2-proj-exam.png',
      title: 'Year 2 Project Exam',
      text: "This is my final project on Noroff. My project exam, it's a cabin booking site. It's built using NextJs, Tailwind and SCSS for the front-end and strapi (hosted on heroku) for the backend.",
      links: 'https://github.com/StianPost/Project-Exam-Year-2-Stian-Post',
      link2: 'https://cabin-fever.netlify.app/',
      figma: true,
      scss: true,
      typescript: true,
      next: true,
      tailwind: true,
    },
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/1900x900.png',
      title: 'JS Frameworks Course Assignment',
      text: 'A task where we used NextJS, routing and authentication(as a login option) to display different information depending on which card you clicked on. Made using NextJS and TailwindCSS(Very basic design)',
      links: 'https://github.com/StianPost/js-frameworks-ca-stian-post',
      scss: true,
      javascript: true,
      next: true,
    },
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/Semester%20project.PNG',
      title: 'Year 2 Semester project',
      text: "2nd year semester project at Noroff, this is an ecommerce website that is using strapi as a headless cms. In this website you can add clocks to your cart, it calculates taxes and final price. There's an admin page where you can add more watches or delete the ones that's there. It's built using HTML5, SCSS and JS ",
      links: 'https://github.com/StianPost/Sem-Proj-y2',
      link2: 'https://stupefied-lovelace-7e9d44.netlify.app/',
      figma: true,
      html: true,
      scss: true,
      javascript: true,
    },
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/osu-varsel.png',
      title: 'Osu Varsel',
      text: 'An email-notification website that I built in co-operation with Daytwo as a small project on the side while doing the semester project. It was built using Craft CMS, I made most of the html and css/scss code for the website',
      figma: true,
      html: true,
      scss: true,
    },
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/react.jpg',
      title: 'CSS Frameworks Course Assignment',
      text: 'The first project I made using react and SCSS, I did not make the design for this page but was told to make it as true to form as possible, this was also accomplished using bootstrap',
      links: 'https://github.com/StianPost/CSS-Frameworks-CA',
      scss: true,
      javascript: true,
      react: true,
    },
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/portfolio.jpg',
      title: 'Portfolio',
      text: 'This is the first portfolio project that I made it was made using HTML5, CSS3, JS and originally got the images and texts from wordpress (using wordpress as a headless cms). My current portfolio is built on the same design concept ',
      links: 'https://github.com/StianPost/Portfolio',
      link2: 'https://postalportfolio.netlify.app/',
      figma: true,
      html: true,
      css: true,
      javascript: true,
    },
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/proj_exam.jpg',
      title: 'Year 1 Project Exam',
      text: "The first exam we did, it's a sports blog that was built using HTML5, CSS5 and JS. We connected to wordpress as a headless api to get the data for the blog posts and images.",
      links: 'https://github.com/StianPost/Project-Exam',
      figma: true,
      html: true,
      css: true,
      javascript: true,
    },
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/sem_proj.jpg',
      title: 'Year 1 Semester Project',
      text: 'A semester project I did in year one, built on HTML5 and CSS3, additionally I added an onclick function through JS, I am not happy with the design',
      links: 'https://github.com/StianPost/Semester-project',
      link2: 'https://tender-kowalevski-e17418.netlify.app',
      figma: true,
      html: true,
      css: true,
    },
    {
      img: 'https://hopeful-sinoussi-ede96f.netlify.app/Postfolio%20imgs/Html-css-ca.PNG',
      title: 'Html/CSS Course Assignment',
      text: 'The first course assignment where we made a website using html and css, here I made an online games shop with wordpress',
      links: 'https://github.com/StianPost/CourseAssignment-html-css',
      link2: 'https://priceless-leakey-2b8975.netlify.app',
      figma: true,
      html: true,
      css: true,
    },
  ];
  return (
    <div>
      <h1 className='text-center'>Projects</h1>
      <div className='flex flex-col items-center mt-8'>
        {projArray.map(
          ({
            title,
            img,
            text,
            links,
            link2,
            figma,
            html,
            css,
            scss,
            javascript,
            typescript,
            react,
            next,
            tailwind,
          }) => {
            return (
              <Projcard
                key={title}
                title={title}
                img={img}
                text={text}
                link={links}
                link2={link2}
                figma={figma}
                html={html}
                css={css}
                scss={scss}
                javascript={javascript}
                typescript={typescript}
                react={react}
                next={next}
                tailwind={tailwind}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;

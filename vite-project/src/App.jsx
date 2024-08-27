import { useState } from 'react';
import './App.css';

function App() {
  // enums
  const aboutMe = 0;
  const projects = 1;
  const posts = 2;
  const resources = 3;

  const [currPage, setCurrPage] = useState(aboutMe);

  return (
    <div className='bg-[#FAA6FF] w-screen h-screen grid grid-cols-3 divide-x divide-[#0f1020] justify-center p-5
      content-center'>
      <div id='menu' className='grid grid-rows-4 p-5 text-right h-32 content-center items-center '>
        <p className={
          currPage === aboutMe
            ? 'font-bold cursor-pointer hover:text-2xl transition-all duration-500'
            : 'cursor-pointer hover:text-2xl transition-all duration-500'
        }
          onClick={() => setCurrPage(aboutMe)}
        >
          About Me
        </p>
        <p className={
          currPage === projects
            ? 'font-bold cursor-pointer hover:text-2xl transition-all duration-500'
            : 'cursor-pointer hover:text-2xl transition-all duration-500'
        }
          onClick={() => setCurrPage(projects)}
        >
          Projects
        </p>
        <p className={
          currPage === posts
            ? 'font-bold cursor-pointer hover:text-2xl transition-all duration-500'
            : 'cursor-pointer hover:text-2xl transition-all duration-500'
        }
          onClick={() => setCurrPage(posts)}
        >
          Posts
        </p>
        <p className={
          currPage === resources
            ? 'font-bold cursor-pointer hover:text-2xl transition-all duration-500'
            : 'cursor-pointer hover:text-2xl transition-all duration-500'
        }
          onClick={() => setCurrPage(resources)}
        >
          Resources
        </p>
      </div>
      <div id='content' className='p-5 text-left col-span-2'>
        <div id='about-me-content' className={currPage === aboutMe ? 'block' : 'hidden'}>
          <p>Giselle here :)</p>
          <p>Indonesian</p>
          <p>Second year CS @ UNSW</p>
          <p>Interested in focusing on frontend, but idk that might change</p>
          <p>I love movies, kdrama, TV series, or anime (stalk my letterboxd pls)</p>
          <p>I also love books, mostly fantasy</p>
        </div>

        <div id='projects-content' className=''></div>
        <div id='posts-content'></div>
        <div id='resources-content'></div>
      </div>
    </div>
  )
}

export default App

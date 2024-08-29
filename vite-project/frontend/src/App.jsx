import { useState, useEffect } from 'react';
import './App.css';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  // enums
  const aboutMe = 0;
  const projects = 1;
  const posts = 2;
  const resources = 3;
  const socials = 4;
  const quote = 5;

  const [currPage, setCurrPage] = useState(() => {
    const saved = localStorage.getItem('currPage');
    return saved !== null ? JSON.parse(saved) : aboutMe;
  });

  const [isDarkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('mode');
    return savedMode !== null ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('currPage', JSON.stringify(currPage));
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [currPage, isDarkMode]);

  const [fact, setFact] = useState(null);

  useEffect(() => {
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random') // Replace with the actual API URL
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parse the JSON from the response
      })
      .then(data => {
        setFact(data.text)
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div className='bg-[#FAA6FF] flex flex-row w-screen h-screen justify-center p-5
      content-center items-center'>
      <div id='menu' className='absolute left-0 h-full p-5 text-right bg-[#2F195F] text-[#EFC3F5] min-w-32'>
        <p className={
          currPage === aboutMe
            ? 'font-bold cursor-pointer transition-all duration-500'
            : 'cursor-pointer hover:scale-110 transition-all duration-500'
        }
          onClick={() => setCurrPage(aboutMe)}
        >
          About Me
        </p>
        <p className={
          currPage === projects
            ? 'font-bold cursor-pointer transition-all duration-500'
            : 'cursor-pointer hover:scale-110 transition-all duration-500'
        }
          onClick={() => setCurrPage(projects)}
        >
          Projects
        </p>
        <p className={
          currPage === posts
            ? 'font-bold cursor-pointer transition-all duration-500'
            : 'cursor-pointer hover:scale-110 transition-all duration-500'
        }
          onClick={() => setCurrPage(posts)}
        >
          Posts
        </p>
        <p className={
          currPage === resources
            ? 'font-bold cursor-pointer transition-all duration-500'
            : 'cursor-pointer hover:scale-110 transition-all duration-500'
        }
          onClick={() => setCurrPage(resources)}
        >
          Resources
        </p>
        <p className={
          currPage === socials
            ? 'font-bold cursor-pointer transition-all duration-500'
            : 'cursor-pointer hover:scale-110 transition-all duration-500'
        }
          onClick={() => setCurrPage(socials)}
        >
          Socials
        </p>
        <p className={
          currPage === quote
            ? 'font-bold cursor-pointer transition-all duration-500'
            : 'cursor-pointer hover:scale-110 transition-all duration-500'
        }
          onClick={() => setCurrPage(quote)}
        >
          Click me!
        </p>
        <div className='cursor-pointer bottom-2 absolute' onClick={() => setDarkMode(!isDarkMode)}>
          {isDarkMode && <DarkModeRoundedIcon fontSize="small" />}
          {!isDarkMode && <LightModeRoundedIcon fontSize="small" />}
        </div>
      </div>
      <div id='content' className='ml-[250px] p-5 text-left transition-all ease-in-out overflow-x-auto overflow-y-hidden'>
        <div id='about-me-content' className={currPage === aboutMe ? 'block animate-fade-up' : 'hidden animate-fade-down'}>
          <p>Giselle here :)</p>
          <p>Second year CS @ UNSW</p>
          <p>Interested in focusing on frontend, but idk that might change</p>
          <p>I love movies, kdrama, TV series, or anime (stalk my letterboxd pls)</p>
          <p>I also love books, mostly fantasy</p>
        </div>

        <div id='hide-scrollbar' className={
          currPage === projects
            ? 'block animate-fade-up snap-x snap-mandatory flex flex-row gap-3 overflow-x-auto'
            : 'hidden animate-fade-down'
        }>
          <div className='snap-center min-w-52 min-h-32 border border-[#2F195F] p-2 rounded-lg'>
            <a className='font-bold' href='https://github.com/devsoc-unsw/trainee-saturn-24t1' target='_blank'>AchieveMint</a>
            <p className='text-xxs mb-1'>Mar 2024 - present</p>
            <div id='tags' className='flex gap-1'>
              <p id='tag' className='text-xxs bg-[#2F195F] rounded-lg text-white p-1 text-center w-fit'>productivity</p>
              <p id='tag' className='text-xxs bg-[#2F195F] rounded-lg text-white p-1 text-center w-fit'>react js</p>
              <p id='tag' className='text-xxs bg-[#2F195F] rounded-lg text-white p-1 text-center w-fit'>javascript</p>
              <p id='tag' className='text-xxs bg-[#2F195F] rounded-lg text-white p-1 text-center w-fit'>tailwind</p>
            </div>
            <p className='text-xxs mt-2'>Keeping up with deadlines and juggling a million tasks in different apps is a nightmare.
              So, for our uni project, we’ve decided to build a fun and friendly web app that helps you keep track of
              everything you need to do and all the goals you want to smash. Introducing your new best friend: the ultimate progress tracker - AchieveMint! 🎉📅
            </p>
          </div>
          <div className='snap-center min-w-52 min-h-32 border border-[#2F195F] p-2 rounded-lg'>
            <a className='font-bold' href='https://github.com/michimochi25/calc-bot' target='_blank'>calc-bot</a>
            <p className='text-xxs mb-1'>Aug 2024</p>
            <div id='tags' className='flex gap-1'>
              <p id='tag' className='text-xxs bg-[#2F195F] rounded-lg text-white p-1 text-center w-fit'>discord</p>
              <p id='tag' className='text-xxs bg-[#2F195F] rounded-lg text-white p-1 text-center w-fit'>for fun</p>
              <p id='tag' className='text-xxs bg-[#2F195F] rounded-lg text-white p-1 text-center w-fit'>javascript</p>
            </div>
            <p className='text-xxs mt-2'>
              Calculator bot on discord. Only works locally.
            </p>
          </div>
          <div className='snap-center min-w-52 min-h-32 border border-[#2F195F] p-2 rounded-lg'>
            <a className='font-bold' href='https://github.com/michimochi25/Terrible-Ideas-Hackathon' target='_blank'>ResuManiac</a>
            <p className='text-xxs mb-1'>Aug 2024</p>
            <div id='tags' className='flex gap-1'>
              <p id='tag' className='text-xxs bg-[#2F195F] rounded-lg text-white p-1 text-center w-fit'>for fun</p>
              <p id='tag' className='text-xxs bg-[#2F195F] rounded-lg text-white p-1 text-center w-fit'>hackathon</p>
              <p id='tag' className='text-xxs bg-[#2F195F] rounded-lg text-white p-1 text-center w-fit'>react js</p>
              <p id='tag' className='text-xxs bg-[#2F195F] rounded-lg text-white p-1 text-center w-fit'>javascript</p>
              <p id='tag' className='text-xxs bg-[#2F195F] rounded-lg text-white p-1 text-center w-fit'>python</p>
            </div>
            <p className='text-xxs mt-2'>
              Welcome to ResuManiac, the ultimate resume generator where chaos meets creativity! 🤩
              This delightfully deranged project takes any image—be it human, plant, or inanimate object—and spins it
              into a hilariously unhinged CV. Imagine your houseplant as a "Senior Software Engineer"💻  or your
              pet rock as the "Chief Executive Officer of Microsoft" 🕵️
              On top of that, your object also has a SUPERHERO alter ego on the side🤫
            </p>
          </div>
          <div className='snap-center min-w-52 min-h-32 border border-[#2F195F] p-2 rounded-lg'>
            <a className='font-bold' href='https://github.com/michimochi25/Kanji-Flashcard' target='_blank'>Kanji Flashcard</a>
            <p className='text-xxs mb-1'>Mar 2024</p>
            <div id='tags' className='flex gap-1'>
              <p id='tag' className='text-xxs bg-[#2F195F] rounded-lg text-white p-1 text-center w-fit'>for fun</p>
              <p id='tag' className='text-xxs bg-[#2F195F] rounded-lg text-white p-1 text-center w-fit'>uni course</p>
              <p id='tag' className='text-xxs bg-[#2F195F] rounded-lg text-white p-1 text-center w-fit'>react js</p>
              <p id='tag' className='text-xxs bg-[#2F195F] rounded-lg text-white p-1 text-center w-fit'>typescript</p>
            </div>
            <p className='text-xxs mt-2'>
              A simple flashcard program to help you memorize W1-W7 ARTS3630 kanji.
            </p>
          </div>
        </div>

        <div id='posts-content' className={currPage === posts ? 'animate-fade-up' : 'hidden'}>
          Only I can make a post, unless you can crack the password ;)
          <div className='flex flex-row justify-center justify-items-center place-items-center'>
            <div id='submit-post' className='flex flex-col w-32'>
              <PostForm />
            </div>
            <div id='all-posts overflow-y-auto'>
              <PostList />
            </div>
          </div>
        </div>

        <div id='resources-content' className={currPage === resources ? 'block animate-fade-up' : 'hidden'}>

        </div>

        <div id='socials-content' className={currPage === socials ? 'block animate-fade-up' : 'hidden'}>

        </div>

        <div id='resources-content' className={currPage === quote ? 'flex flex-col block animate-fade-up text-center' : 'hidden'}>
          {fact}
          <p className='text-xxs'>just some random useless fact :) refresh to get another one</p>
        </div>
      </div>
    </div >
  )
}

export default App

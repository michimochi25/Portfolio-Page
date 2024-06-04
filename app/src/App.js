import './App.css';
import Landing from './screens/Landing';
import AboutMe from './screens/AboutMe';
import Projects from './screens/Projects';
import Resources from './screens/Resources';

import {
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      {/*Temporary navbar */}
      <section className='text-center'>
        <button className="m-2" onClick={() => navigate('/')}>Landing</button>
        <button className="m-2" onClick={() => navigate('AboutMe')}>About me</button>
        <button className="m-2" onClick={() => navigate('Resources')}>Resources</button>
        <button className="m-2" onClick={() => navigate('Projects')}>Projects</button>
      </section>

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resources' element={<Resources />} />
      </Routes>
    </div>
  );
}

export default App;

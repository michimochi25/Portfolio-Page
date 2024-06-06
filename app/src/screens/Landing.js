
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();
    return (
        <div className="items-center grid justify-center bg-gradient-to-b from-[#111D4A] to-[#2845B0] h-screen text-[#FFF8F0]">
            <section className='grid md:grid-cols-3 justify-center h-fit m-2'>
                <div className='max-w-60'>
                    <p className="type-welcome text-5xl font-bold text-center md:text-right m-4"> {/*Intentionally blank */}</p>
                </div>
                <div className='items-center grid grid-cols-1 md:col-span-2 md:grid-cols-3 gap-4'>
                    <button className='h-fit text-2xl hover:text-[#92140C]' onClick={() => navigate('AboutMe')}>About me</button>
                    <button className='h-fit text-2xl hover:text-[#92140C]' onClick={() => navigate('Resources')}>Resources</button>
                    <button className='h-fit text-2xl hover:text-[#92140C]' onClick={() => navigate('Projects')}>Projects</button>
                </div>
            </section>
            <img className="bottom-0 fixed max-[400px]:scale-200 shadow-xl" src='/assets/clouds.png' alt="clouds-decoration" />
        </div >
    );
}

export default Landing;
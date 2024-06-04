import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();

    return (
        <div className="items-center flex justify-center bg-[#1E1E24] h-screen text-[#FFF8F0] p-5">
            <section className='grid md:grid-cols-3 justify-center h-fit'>
                <div className='max-w-60'>
                    <p className="type-welcome text-5xl font-bold text-center md:text-right m-4"> {/*Intentionally blank */}</p>
                </div>
                <div className='items-center grid grid-cols-1 md:col-span-2 md:grid-cols-3 gap-4'>
                    <button className='h-fit text-xl hover:text-[#92140C]' onClick={() => navigate('AboutMe')}>About me</button>
                    <button className='h-fit text-xl hover:text-[#92140C]' onClick={() => navigate('Resources')}>Resources</button>
                    <button className='h-fit text-xl hover:text-[#92140C]' onClick={() => navigate('Projects')}>Projects</button>
                </div>
            </section>
        </div>
    );
}

export default Landing;
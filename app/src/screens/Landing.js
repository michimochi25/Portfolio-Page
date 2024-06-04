import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();

    return (
        <div className="bg-[#1E1E24] h-screen text-[#FFF8F0] text-center p-10">
            <section>
                <p className="text-3xl font-bold">This is the Landing Page</p>
                <button className="m-2 p-2" onClick={() => navigate('AboutMe')}>About me</button>
                <button className="m-2 p-2" onClick={() => navigate('Resources')}>Resources</button>
                <button className="m-2 p-2" onClick={() => navigate('Projects')}>Projects</button>
            </section>
        </div>
    );
}

export default Landing;
import { useLocation, useNavigate } from '../../node_modules/react-router-dom/dist/index';
import clues from '../data/Clues.json';

const LocationClue = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded inline-flex" onClick={goBack }>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Back to case</span>
            </button> 

            <pre className="text-xl m-8 text-black-400">
                {clues.clues.filter(i => i.ClueNumber == location.state.cluenumber)[0].ClueDescription}
            </pre>
        </div>
    );
}

export default LocationClue;
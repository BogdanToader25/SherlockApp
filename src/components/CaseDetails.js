import { useLocation } from 'react-router-dom';
import LocationsContainer from './LocationsContainer'

const CaseDetails = () => {

    const location = useLocation();

    return (
        <div className="bg-white dark:bg-gray-800 overflow-hidden relative">
            <div className="text-start m-0 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span className="block">
                        {location.state.mycase.casetitle}
                    </span>

                </h2>
                <p className="text-xl mt-4 text-gray-400">
                    {location.state.mycase.casedescription}
                </p>
            </div>

            <LocationsContainer mycase={location.state.mycase} />
        </div>
    )

}

export default CaseDetails;
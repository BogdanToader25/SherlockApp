import Location from './Location';
import BankImage from '../images/Bank.PNG';
import CarriagesImage from '../images/CarriagesDepot.PNG';
import ChemistImage from '../images/Chemist.PNG';
import DocksImage from '../images/Docks.PNG';
import HotelImage from '../images/Hotel.PNG';
import LocksmithImage from '../images/Locksmith.PNG';
import MuseumImage from '../images/Museum.PNG';
import NewsImage from '../images/NewsAgent.PNG';
import ParkImage from '../images/Park.PNG';
import PawnImage from '../images/PawnBroker.PNG';
import ScotlandYardImage from '../images/ScotlandYard.PNG';
import TabacconistImage from '../images/Tabacconist.PNG';
import TavernImage from '../images/Tavern.PNG';
import TheaterImage from '../images/Theater.PNG';

const LocationsContainer = ({mycase }) => {

    return (
                  
        <div className="grid grid-cols-2 gap-2 place-items-center space-y-4 lg:grid-cols-4 lg:gap-6 md:grid-cols-3 md:gap-4 sm:grid-cols-2 sm:gap-2">
                <Location locationName={"Banca"} cluenumber={mycase.clues[0].bankcluenumber} image={BankImage} />
                <Location locationName={"Depoul de Trasuri"} cluenumber={mycase.clues[0].carriagescluenumber} image={CarriagesImage} />
                <Location locationName={"Farmacie"} cluenumber={mycase.clues[0].chemistcluenumber} image={ChemistImage} />
                <Location locationName={"Docuri"} cluenumber={mycase.clues[0].dockscluenumber} image={DocksImage} />
                <Location locationName={"Hotel"} cluenumber={mycase.clues[0].hotelcluenumber} image={HotelImage} />
                <Location locationName={"Lacatuserie"} cluenumber={mycase.clues[0].locksmithcluenumber} image={LocksmithImage} />
                <Location locationName={"Muzeu"} cluenumber={mycase.clues[0].museumcluenumber} image={MuseumImage} />
                <Location locationName={"Magazinul de Ziare"} cluenumber={mycase.clues[0].newsagentcluenumber} image={NewsImage} />
                <Location locationName={"Parc"} cluenumber={mycase.clues[0].parkcluenumber} image={ParkImage} />
                <Location locationName={"Magazin de Amanet"} cluenumber={mycase.clues[0].pawnbrokercluenumber} image={PawnImage} />
                <Location locationName={"Scotland Yard"} cluenumber={mycase.clues[0].scotlandyardcluenumber} image={ScotlandYardImage} />
                <Location locationName={"Tutungerie"} cluenumber={mycase.clues[0].tabacconistcluenumber} image={TabacconistImage} />
                <Location locationName={"Taverna"} cluenumber={mycase.clues[0].taverncluenumber} image={TavernImage} />
                <Location locationName={"Teatru"} cluenumber={mycase.clues[0].theatercluenumber} image={TheaterImage} />
            </div>
        
    )

}

export default LocationsContainer;
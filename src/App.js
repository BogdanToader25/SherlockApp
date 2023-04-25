import './App.css';
import './index.css';
import NavMenu from './components/NavMenu';
import CasesContainer from './components/CasesContainer';
import CaseDetails from './components/CaseDetails';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LocationClue from './components/LocationClue';
import { HashRouter } from '../node_modules/react-router-dom/dist/index';


function App() {

    return (
        <div>
            <HashRouter>
            <NavMenu />
            
                <Routes>
                    <Route path="/" element={<CasesContainer />} />
                    <Route path="/cases" element={<CasesContainer />} />
                    <Route path="/casedetails" element={<CaseDetails />} />
                    <Route path="/locationclue" element={<LocationClue />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;

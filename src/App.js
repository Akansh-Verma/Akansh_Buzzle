import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';

import SideBar from './components/Sidenav/Sidebar';
import Card from './components/Body';
import Bodydata from './components/Body';
function App() {


  return (
     <Router>
       <Navbar />
       <SideBar />
       <Card />
       <Bodydata />
     </Router>
    
  );
}

export default App;

import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Info from './components/info';
import Map from './components/map';
import Footer from './components/footer';
import AppTitle from './components/appTitle';
import Highlighted from './components/highlighted';
import SearchBar from './components/searchBar';
import Downloads from './components/downloads';

function App() {
  // Global States used to keep components in sync
  const [infoData,setInfoData] = useState({title:'', data:[], dataType: 'none'})
  // Tracks the country the pointer hovers on; Map State
  const [highlight,setHighlight] = useState('none')
  // Tracks the country that was last selected; Map State
  const [countryHighlights, setCountryHighlights] = useState()

  return (
    <main className="App">
      <Map setInfoData={setInfoData} setHighlight={setHighlight} countryHighlights={countryHighlights}/>
      <AppTitle/>
      <SearchBar title={infoData.title} setInfoData={setInfoData} setCountryHighlights={setCountryHighlights}/>
      <Highlighted value={highlight}/>
      <Info title={infoData.title} data={infoData.data} dataType={infoData.dataType}/>
      <Downloads/>
      <Footer/>
    </main>
  );
}

export default App;

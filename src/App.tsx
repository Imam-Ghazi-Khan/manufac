import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, MantineProvider } from '@mantine/core';
import { getMasterData } from './utils'; 
import WineStats from './components/WineStats';
import { WineData } from './interfaces/WineInterface';


const App = () => {

  const [wineCompound,setWineCompound] = useState('Flavanoids');
  const [wineData, setWineData] = useState<WineData>([]);

  
  const handleClick = (): void => {
    setWineCompound(wineCompound === 'Flavanoids' ? 'Gamma' : 'Flavanoids');
  };

  const {flavanoidsMasterDataArray, gammaMasterDataArray } = getMasterData()


  useEffect(()=>{
    setWineData(wineCompound === 'Gamma' ? flavanoidsMasterDataArray : gammaMasterDataArray)
  },[wineCompound]);

  return (
    <div className="App">
      <MantineProvider>
        <header>WINE STATISTICS</header>
        <WineStats wineData={wineData} wineCompound={wineCompound}/>
        <Button onClick={handleClick}>Show {wineCompound} data</Button>
      </MantineProvider>
    </div>
  );
}

export default App;


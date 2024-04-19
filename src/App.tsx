import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, MantineProvider } from '@mantine/core';
import { getMasterData } from './utils'; 
import WineStats from './components/WineStats';
import { WineData } from './interfaces/WineInterface';

const App = () => {
  // State to manage the currently displayed wine compound (Flavanoids or Gamma)
  const [wineCompound, setWineCompound] = useState('Flavanoids');
  
  // State to store the wine data fetched from the master data
  const [wineData, setWineData] = useState<WineData>([]);
  
  // Handle button click to toggle between Flavanoids and Gamma data
  const handleClick = (): void => {
    setWineCompound(wineCompound === 'Flavanoids' ? 'Gamma' : 'Flavanoids');
  };

  // Fetch master data containing Flavanoids and Gamma values
  const { flavanoidsMasterDataArray, gammaMasterDataArray } = getMasterData();

  // Update wineData based on the selected wine compound
  useEffect(() => {
    setWineData(wineCompound === 'Gamma' ? gammaMasterDataArray : flavanoidsMasterDataArray);
  }, [wineCompound]);

  return (
    <div className="App">
      <MantineProvider>
        <header>WINE STATISTICS</header>
        <WineStats wineData={wineData} wineCompound={wineCompound} />
        <Button onClick={handleClick}>Show {wineCompound} data</Button>
      </MantineProvider>
    </div>
  );
};

export default App;

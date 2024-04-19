import { Table, TableData } from '@mantine/core';
import React from 'react';
import { calculateStatistics } from '../utils';
import { WineStatsProps } from '../interfaces/WineInterface';

const WineStats: React.FC<WineStatsProps> = ({ wineData, wineCompound }) => {
  // Generate table header based on the number of classes in the data
  const headData = wineData && ['Measures', ...Array.from({ length: wineData.length }, (_, i) => `Class ${i + 1}`)];
  
  // Initialize table body data
  const bodyData = [
    [`${wineCompound} Mean`],
    [`${wineCompound} Median`],
    [`${wineCompound} Mode`],
  ];

  // Populate table body with calculated statistics
  wineData.length > 0 && bodyData.forEach((_, index) => {
    const { mean, median, mode } = calculateStatistics(wineData[index]);
    bodyData[0].push(mean);
    bodyData[1].push(median);
    bodyData[2].push(mode);
  });

  const tableData: TableData = {
    head: headData,
    body: bodyData
  };

  return (
    <Table data={tableData} />
  );
};

export default WineStats;

import { Table, TableData } from '@mantine/core';
import React from 'react';
import { calculateStatistics } from '../utils';
import { WineStatsProps } from '../interfaces/WineInterface';


const WineStats: React.FC<WineStatsProps> = ({ wineData, wineCompound }) => {

  const headData = wineData && ['Measures', ...Array.from({ length: wineData.length }, (_, i) => `Class ${i + 1}`)];

  const bodyData = [
    [`${wineCompound} Mean`],
    [`${wineCompound} Median`],
    [`${wineCompound} Mode`],
  ];

  const tableData: TableData = {
    head: headData,
    body: bodyData
  };

  wineData.length > 0 && bodyData.forEach((_, index) => {
    const { mean, median, mode } = calculateStatistics(wineData[index]);
    bodyData[0].push(mean);
    bodyData[1].push(median);
    bodyData[2].push(mode);
  });

  return (
    <Table data={tableData} />
  );
};

export default WineStats;

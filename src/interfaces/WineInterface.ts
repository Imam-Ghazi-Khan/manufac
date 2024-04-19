
export interface Wine {
    Alcohol: number;
    'Malic Acid': number | string;
    Ash: number;
    'Alcalinity of ash': number;
    Magnesium: number;
    'Total phenols': number;
    Flavanoids: number | string;
    'Nonflavanoid phenols': number | string;
    Proanthocyanins: number | string;
    'Color intensity': number | string;
    Hue: number;
    'OD280/OD315 of diluted wines': number | string;
    Unknown: number;
  }
  
export interface Statistics {
    mean: string;
    median: string;
    mode: string;
}

export interface WineStatsProps {
  wineData: number[][];
  wineCompound: string;
}

export type WineData = number[][];
// SSW Data Registry — Central Index
import { SswSectorData, SswSectorId } from '../../types/ssw';
import { KAIGO_SECTOR_DATA } from './kaigoData';
import { FOOD_SERVICE_SECTOR_DATA } from './foodServiceData';
import { FOOD_MANUFACTURING_SECTOR_DATA } from './foodManufacturingData';
import { AGRICULTURE_SECTOR_DATA } from './agricultureData';
import { HOSPITALITY_SECTOR_DATA } from './hospitalityData';
import { BUILDING_CLEANING_SECTOR_DATA } from './buildingCleaningData';

export const SSW_ALL_SECTORS: SswSectorData[] = [
  KAIGO_SECTOR_DATA,
  FOOD_SERVICE_SECTOR_DATA,
  FOOD_MANUFACTURING_SECTOR_DATA,
  AGRICULTURE_SECTOR_DATA,
  HOSPITALITY_SECTOR_DATA,
  BUILDING_CLEANING_SECTOR_DATA
];

export const getSectorById = (id: SswSectorId): SswSectorData | undefined =>
  SSW_ALL_SECTORS.find(s => s.id === id);

export const getSectorChapter = (sectorId: SswSectorId, chapterId: string) => {
  const sector = getSectorById(sectorId);
  return sector?.chapters.find(ch => ch.id === chapterId);
};

export {
  KAIGO_SECTOR_DATA,
  FOOD_SERVICE_SECTOR_DATA,
  FOOD_MANUFACTURING_SECTOR_DATA,
  AGRICULTURE_SECTOR_DATA,
  HOSPITALITY_SECTOR_DATA,
  BUILDING_CLEANING_SECTOR_DATA
};

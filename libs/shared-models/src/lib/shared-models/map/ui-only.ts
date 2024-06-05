import { LOCATION_NAMES, MAP_NAMES } from './general';
import { MapSvgData } from './svg';

export interface UIMap {
  metadata: UIMapMetadata;
  svgData: MapSvgData;
}

export interface UIMapMetadata {
  id?: string;
  name: MAP_NAMES;
  gameTerritory: GameTerritoryRowItem[][];
  locations: MapLocation[];
}

export type GameTerritoryRowItem = number | [number, number];

export interface MapLocation {
  name: LOCATION_NAMES,
  position: MapLocationCoordinates;
  illustration: string;
}

export interface MapLocationCoordinates {
  leftTopCorner: MapPointCoordinates,
  rightBottomCorner: MapPointCoordinates,
}

export interface MapPointCoordinates {
  x: number,
  y: number
}

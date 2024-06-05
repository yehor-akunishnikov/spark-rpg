export enum MAP_NAMES {
  OAKVALE = 'Oakvale',
}

export enum LOCATION_NAMES {
  FARM = 'Farm',
}

export interface MapMetadata {
  id?: string;
  name: MAP_NAMES;
  gameTerritory: string[];
  locations: MapMetadataLocation[];
}

export interface MapMetadataLocation {
  name: LOCATION_NAMES,
  position: string;
  illustration: string;
}

export enum MAP_NAMES {
  OAKVALE = 'Oakvale',
}

export enum SVG_MAP_DATA_ELEMENT_TYPES {
  PATH = 'Path',
  CIRCLE = 'Circle',
  RECT = 'Rect'
}

export type SvgMapDataPath = {
  type: SVG_MAP_DATA_ELEMENT_TYPES.PATH;
  path: {
    d: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    fillRule?: string,
    clipRule?: string,
    id?: string;
  };
}

export type SvgMapDataCircle = {
  type: SVG_MAP_DATA_ELEMENT_TYPES.CIRCLE;
  circle: {
    cx: number;
    cy: number;
    r: number;
    fill: string;
  };
}

export type SvgMapDataRect = {
  type: SVG_MAP_DATA_ELEMENT_TYPES.RECT;
  rect: {
    x: number;
    y: number;
    width: number;
    height: number;
    fill: string;
  };
}

export type SvgMapDataElement = SvgMapDataPath | SvgMapDataCircle | SvgMapDataRect;

export interface MapData {
  name: MAP_NAMES;
  svgDataList: SvgMapDataElement[];
  background: SvgMapDataRect;
  road: SvgMapDataPath;
  gameTerritory: (number | [number, number])[][];
}

export interface MapAreaCoordinates {
  leftTopCorner: MapPointCoordinates,
  rightBottomCorner: MapPointCoordinates,
}

export interface MapPointCoordinates {
  x: number,
  y: number
}

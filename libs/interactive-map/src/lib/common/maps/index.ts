import { MAP_NAMES, MapSvgData } from '@spark-rpg/shared-models';

import oakvale from './oakvale';

export const maps: Record<MAP_NAMES, MapSvgData> = {
  [oakvale.name]: oakvale
};

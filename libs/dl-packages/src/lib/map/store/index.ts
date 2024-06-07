import { inject } from '@angular/core';

import { addEntity, removeEntity, setAllEntities, updateEntity, withEntities } from '@ngrx/signals/entities';
import { patchState, signalStore, type, withMethods } from '@ngrx/signals';
import { EntityIdKey } from '@ngrx/signals/entities/src/models';

import { MapMetadata, MapMetadataUpdatePayload } from '@spark-rpg/shared-models';

import { MapRestService } from '../services/map-rest.service';

export const MAPS_COLLECTION_NAME = 'maps';

export const MapsStore = signalStore(
  { providedIn: 'root' },
  withEntities({ entity: type<MapMetadata>(), collection: MAPS_COLLECTION_NAME }),
  withMethods((store) => {
    const mapRestService: MapRestService = inject(MapRestService);

    const collectionSetterConfig: {
      collection: string;
      idKey: EntityIdKey<MapMetadata>;
    } = {
      idKey: 'id',
      collection: MAPS_COLLECTION_NAME
    };

    return {
      async loadAll(): Promise<void> {
        const mapMetadataList: MapMetadata[] = await mapRestService.getAll();

        patchState(store, setAllEntities(mapMetadataList, collectionSetterConfig));
      },
      async loadOne(username: string): Promise<void> {
        const mapMetadata: MapMetadata = await mapRestService.getOne(username);

        patchState(store, addEntity(mapMetadata, collectionSetterConfig));
      },
      async update(id: string, mapMetadataUpdatePayload: MapMetadataUpdatePayload): Promise<void> {
        const mapMetadata: MapMetadata = await mapRestService.update(id, mapMetadataUpdatePayload);

        patchState(store, updateEntity({ id, changes: mapMetadata }, collectionSetterConfig));
      },
      async create(mapMetadata: MapMetadata): Promise<void> {
        const newMapMetadata: MapMetadata = await mapRestService.create(mapMetadata);

        patchState(store, addEntity(newMapMetadata, collectionSetterConfig));
      },
      async deleteOne(id: string): Promise<void> {
        await mapRestService.deleteOne(id);

        patchState(store, removeEntity(id, collectionSetterConfig));
      }
    }
  }),
);

export type MapsStoreInstance = InstanceType<typeof MapsStore>;

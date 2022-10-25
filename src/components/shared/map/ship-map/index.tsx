import React, { useMemo } from 'react';
import DeckGL from '@deck.gl/react/typed';

import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Ship } from '../../../../shared/models/ship/ship';
import { makeShipMarkerLayer } from './make-maker-layer';

interface ViewState {
  longitude: number;
  latitude: number;
  zoom: number;
  pitch: number;
  bearing: number;
  transitionDuration: number;
}

const INITIAL_VIEW_STATE: ViewState = {
  longitude: 139.75,
  latitude: 35.7,
  zoom: 10,
  pitch: 0,
  bearing: 0,
  transitionDuration: 100,
};

interface Props {
  ships: Ship[];
  selectedShip?: Ship;
}

export const ShipMap = ({ ships, selectedShip }: Props): JSX.Element => {
  const shipsMarker = makeShipMarkerLayer({ ships });
  const viewState = useMemo<ViewState>(() => {
    if (!selectedShip) {
      return INITIAL_VIEW_STATE;
    }

    return {
      ...INITIAL_VIEW_STATE,
      latitude: selectedShip.location.lat,
      longitude: selectedShip.location.lng,
    };
  }, [selectedShip]);

  return (
    <DeckGL
      initialViewState={viewState}
      controller={true}
      layers={[shipsMarker.markers, shipsMarker.labels]}
      getTooltip={(v) => {
        if (!v.layer || !v.object) {
          return null;
        }

        if (v.layer.id === 'shipsMarker') {
          return v.object.title ? v.object.title : null;
        }

        return null;
      }}
    >
      <Map
        mapStyle="mapbox://styles/studio-kakky/ckuhpi5vm4jf717qm72rknulj"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_TOKEN}
      />
    </DeckGL>
  );
};

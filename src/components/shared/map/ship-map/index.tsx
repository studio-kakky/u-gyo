import React from 'react';
import DeckGL from '@deck.gl/react/typed';

import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Ship } from '../../../../shared/models/ship/ship';
import { makeShipMarkerLayer } from './make-maker-layer';

const INITIAL_VIEW_STATE = {
  longitude: 139.75,
  latitude: 35.7,
  zoom: 10,
  pitch: 0,
  bearing: 0,
};

interface Props {
  ships: Ship[];
}

export const ShipMap = ({ ships }: Props): JSX.Element => {
  const shipsMarker = makeShipMarkerLayer({ ships });
  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={[shipsMarker]}
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

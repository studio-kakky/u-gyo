import React from 'react';
import DeckGL from '@deck.gl/react/typed';
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const INITIAL_VIEW_STATE = {
  longitude: 139.75,
  latitude: 35.7,
  zoom: 10,
  pitch: 0,
  bearing: 0,
};

export const ShipMap = (): JSX.Element => {
  return (
    <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true}>
      <Map
        mapStyle="mapbox://styles/studio-kakky/cl8jxoazo000114mrgyj9us92"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_TOKEN}
      />
    </DeckGL>
  );
};

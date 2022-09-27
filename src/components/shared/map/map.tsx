import React from 'react';
import DeckGL from '@deck.gl/react/typed';
import { LineLayer } from '@deck.gl/layers/typed';
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

const data = [{ sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781] }];

export const AppMap = (): JSX.Element => {
  const layers = [new LineLayer({ id: 'line-layer', data })];

  return (
    <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true} layers={layers}>
      <Map mapStyle="mapbox://styles/mapbox/outdoors-v11" mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_TOKEN} />
    </DeckGL>
  );
};

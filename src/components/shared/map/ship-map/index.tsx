import React, { useMemo } from 'react';
import DeckGL from '@deck.gl/react/typed';

import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { makeShipMarkerLayer } from './make-maker-layer';
import { ShipViewModel } from '../../../pages/home/ships-list/view-model';

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
  ships: ShipViewModel[];
  onClickMarker: (ship: ShipViewModel) => void;
}

export const ShipMap = ({ ships, onClickMarker }: Props): JSX.Element => {
  const shipsMarker = makeShipMarkerLayer({ ships, onClickMarker });
  const viewState = useMemo<ViewState>(() => {
    const selectedShip = ships.find((v) => v.isSelected);
    if (!selectedShip) {
      return INITIAL_VIEW_STATE;
    }

    return {
      ...INITIAL_VIEW_STATE,
      latitude: selectedShip.location.lat,
      longitude: selectedShip.location.lng,
    };
  }, [ships]);

  return (
    <DeckGL initialViewState={viewState} controller={true} layers={[shipsMarker.markers, shipsMarker.labels]}>
      <Map
        mapStyle="mapbox://styles/studio-kakky/ckuhpi5vm4jf717qm72rknulj"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_TOKEN}
      />
    </DeckGL>
  );
};

import { IconLayer } from '@deck.gl/layers/typed';
import { Ship } from '../../../../shared/models/ship/ship';

interface Props {
  ships: Ship[];
}

export const makeShipMarkerLayer = ({ ships }: Props): IconLayer => {
  return new IconLayer({
    id: 'shipsMarker',
    data: ships,
    pickable: true,
    getIcon: () => {
      return {
        url: '/assets/marker/pin.png',
        x: 50,
        y: 0,
        anchorY: 143,
        width: 100,
        height: 143,
        mask: false,
      };
    },
    sizeScale: 5,
    getPosition: (v: Ship) => [v.location.lng, v.location.lat],
    getSize: 6,
    getColor: [120, 140, 0],
  });
};

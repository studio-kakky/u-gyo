import { IconLayer, TextLayer } from '@deck.gl/layers/typed';
import { Ship } from '../../../../shared/models/ship/ship';
import { ShipViewModel } from '../../../pages/home/ships-list/view-model';

interface Props {
  ships: ShipViewModel[];
}

export const makeShipMarkerLayer = ({ ships }: Props): { markers: IconLayer; labels?: TextLayer } => {
  const markers = new IconLayer({
    id: 'shipsMarker',
    data: ships,
    pickable: true,
    getIcon: (v: ShipViewModel) => {
      return {
        url: v.isSelected ? '/assets/marker/pin_selected.png' : '/assets/marker/pin.png',
        x: 50,
        y: 0,
        anchorY: 143,
        width: 100,
        height: 143,
        mask: false,
      };
    },
    sizeScale: 5,
    getPosition: (v: ShipViewModel) => [v.location.lng, v.location.lat],
    getSize: 6,
    getColor: [120, 140, 0],
  });

  const chars = ships.reduce((output, ship) => {
    return output.concat(ship.title.split(''));
  }, [] as string[]);

  const labels = new TextLayer({
    id: 'shipsLabel',
    data: ships,
    pickable: true,
    getPosition: (v: Ship) => [v.location.lng, v.location.lat],
    getText: (v: Ship) => {
      return v.title;
    },
    getSize: 10,
    getAngle: 0,
    getTextAnchor: 'middle',
    getAlignmentBaseline: 'top',
    getPixelOffset: () => [0, 10],
    background: true,
    backgroundPadding: [4, 4, 4, 4],
    getBackgroundColor: [50, 50, 50],
    getColor: [255, 255, 255],
    fontWeight: 'bold',
    characterSet: Array.from(new Set(chars)),
  });

  return {
    markers,
    labels,
  };
};

const MAPS_SERVICE_URL = import.meta.env.VITE_MAPS_SERVICE_BASE_URL;
const DEFAULT_SIZE = '500,400';

export const getStaticMapImage = (locationPoint: locationPoint) =>
  formatToUrl(locationPoint);

const formatToUrl = (locationPoint: locationPoint) =>
  `${MAPS_SERVICE_URL}?size=${DEFAULT_SIZE}&markers=${locationPoint.lat},${locationPoint.lng}`;

import GeoJSONConfig from './shapes/GeoJSONConfig.js';
import PolygonOrPolylineConfig from './shapes/PolygonOrPolylineConfig.js';

export default class ShapeOverlayConfig {
  /** @type {GeoJSONConfig[]} */
  geoJSONConfigs = [];
  /** @type {PolygonOrPolylineConfig[]} */
  polygonConfigs = [];
  /** @type {PolygonOrPolylineConfig[]} */
  polylineConfigs = [];

  /** @param {object} config */
  constructor(config) {
    for (const shapeConfig of config) {
      if (config.type === 'geojson') {
        this.geoJSONConfigs.push(new GeoJSONConfig(shapeConfig));
        continue;
      } else if (config.type === 'polygon') {
        this.polygonConfigs.push(new PolygonOrPolylineConfig(shapeConfig));
        continue;
      } else if (config.type === 'polyline') {
        this.polylineConfigs.push(new PolygonOrPolylineConfig(shapeConfig));
        continue;
      }
    }
  }
}

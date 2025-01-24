/**
 * @readonly
 * @enum {string}
 */
export const pointType = {
  point: 'point',
  marker: 'marker',
}

export default class GeoJSONConfig {
  /** @type {boolean} */
  enabled = false;
  /** @type {string} */
  color;
  /** @type {number} */
  fillOpacity = 0.1;
  /** @type {string} */
  url;
  /** @type {pointType} */
  pointType;

  /** @param {object} config */
  constructor(config) {
    this.enabled = config.enabled ?? true;
    this.color = config.color;
    this.fillOpacity = config.fill_opacity ?? 0.1;
    this.url = config.url;
    this.pointType = config.point_type ?? 'point';
  }
}

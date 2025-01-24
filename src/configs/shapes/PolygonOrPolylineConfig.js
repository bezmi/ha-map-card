/**
 * @readonly
 * @enum {string}
 */
export const polyType = {
  polyline: 'polyline',
  polygon: 'polygon',
}

export default class PolygonOrPolylineConfig {
  /** @type {boolean} */
  enabled = false;
  /** @type {string} */
  color;
  /** @type {polyType} */
  type;
  /** @type {number} */
  fillOpacity = 0.1;
  /** @type {string} */
  entity;
  /** @type {string} */
  attribute;
  /** @type {number[][]} */
  points;

  /** @param {object} config */
  constructor(config) {
    this.enabled = config.enabled ?? true;
    this.color = config.color;
    this.fillOpacity = config.fill_opacity ?? 0.1;
    this._setSource(config);
  }

  /** 
   * @private
   * @param {object} config
   */
  _setSource(config) {
    if (config.type === 'polyline') {
      this.type = polyType.polyline;
    } else if (config.type === 'polygon') {
      this.type = polyType.polygon;
    }

    if (config.points !== undefined) {
      for (let point of config.points) {
        this.points.push([point.x, point.y])
      }
    } else if (config.entity !== undefined) {
      this.entity = config.entity;
      this.attribute = config.attribute;
    }
  }
}

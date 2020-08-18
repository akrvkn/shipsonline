'use strict';

/**
 * Map route
 * @param {Marker} markersArray Marker - route points
 * @param {object} options Route options
 */
function Tourline (markersArray, options) {

    /*
     * Default options for Map.Route
     */
    var defaults = {
        /*
         * We don't need markers on route
         */
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    };
    options = $.extend(defaults, options);

    this.path = markersArray;

    /*
     * Create route instance
     */
    this.instance =
        new google.maps.Polyline({
            path: this.path,
            geodesic: options.geodesic,
            strokeColor: options.strokeColor,
            strokeOpacity: options.strokeOpacity,
            strokeWeight: options.strokeWeight
        });

};

/**
 * Place route on map
 * @param {Map} map Map-owner
 */
Tourline.prototype.setMap = function (map) {

    this.map = map;
    if (map)
        map.tourlines.push(this);
    return this;

};

/**
 * Show map route
 */
Tourline.prototype.addLine = function () {

    this.instance.setMap(this.map.instance);

};

/**
 * Update map route
 * @param  {object} options Route options
 */
Tourline.prototype.removeLine = function (options) {

    this.instance.setMap(null);

};

module.exports = Tourline;
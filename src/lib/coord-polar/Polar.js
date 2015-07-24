/* jshint esnext: true */

export default class Polar {


    static radiusFromSize(width, height, margin) {
        return Math.min(width, height) / 2 - margin;
    }

    static radiansFromDegrees(degrees) { return degrees  * Math.PI / 180; }

    static degreesFromRadians(radians) { return radians  / Math.PI * 180; }

    static polarToCartesian(angle, radius) {
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
      };
    }

}

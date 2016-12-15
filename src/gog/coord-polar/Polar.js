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


/*

 * Calculates x,y coordinates for angle, radius based on the polar-cartesian function
    * @param theta (float) angle in radians
    * @param radius (float)
    * @returns array of x,y coordinates
    */
/*
    polarToCartesian: function(theta, radius) {
        var returnFloat = [0.0 , 0.0];
        returnFloat[0] = radius * Math.cos(theta);
        returnFloat[1] = radius * Math.sin(theta);
        return returnFloat;
    },
*/
    /**
    * Calculates angle, radius for x,y coordinates based on the polar-cartesian function
    * @param x (float)
    * @param y (float)
    * @returns array of angle, radius 
    */
/*
    cartesianToPolar: function(x, y) {
        var returnFloat = [0.0 , 0.0];
        returnFloat[0] = Math.atan2( y , x );
        returnFloat[1] = Math.sqrt( x * x + y * y );
        return returnFloat;
    }
*/    
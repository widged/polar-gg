/* jshint esnext: true */

export default class Utils {

    static shallowClone(obj) {
        var shallowClone;
        if(typeof obj !== 'object') { 
            shallowClone = {}; 
        } else {
            // let's create a shallow copy to avoid any hard to debug issue if the target
            // was augmented multiple times.
            shallowClone = Object.keys(obj).reduce(
                function(acc, key) {
                    if(!(acc.hasOwnProperty(key))) { acc[key] = obj[key]; }
                    return acc;
                },
                {}
            );
        }
        return shallowClone;
    }

    static augment(base, added) {
        var augmented;
        if(!added || typeof added !== 'object') {
            augmented = base;
        } else {
            augmented = Object.keys(added).reduce(
                function(acc, key) {
                    if(!(acc.hasOwnProperty(key))) { acc[key] = added[key]; }
                    return acc;
                },
                base
            );
        }
        return augmented;
    }

    static cloneAndAugment(base, added) {
        return Utils.augment(Utils.shallowClone(base), added);
    }
}
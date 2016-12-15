/* jshint esnext: true */


export default function(config) {
    const defaults = { minorQty: 0, majorQty: 4 };
    
    var major    = getMajor(config.majorQty || defaults.majorQty, config.majorFmt, config.perimeter, config.majorStep, config.major, config.majorSuffix);
    var minor    = getMinor(config.minorQty || defaults.minorQty, config.minorFmt, config.perimeter, config.minorStep, major.qty);


    minor.ticks = [];
    for(var j = 0, nj = minor.qty; j < nj; j++) {
        minor.ticks.push('x');
    }

    var all = [];
    for(var i = 0, ni = major.qty; i < ni; i++) {
        all.push(i);
        all = all.concat(minor.ticks);
    }

    var out =  all.map(function(d, i) {
        var obj = {};
        if(d+0 === d) {
            obj = major.fn(d, i);
            obj.addClassName = 'major';
        } else {
            obj = minor.fn(d, i);
        }
        if(!obj.hasOwnProperty('value')) { obj.value = i; }
        return obj;
    });

    return out;
}

function identityFn(d) { return d; }

function getMajor(majorQty, majorFmt, perimeter, majorStep, labels, majorSuffix) {
    var out;
    if(typeof majorFmt !== 'function') { majorFmt = identityFn; }

    if(labels) {
        out = {
            qty: labels.length, 
            fn: function(d, i) { return formatTick(labels[d], i, majorFmt, majorSuffix); }
        };
    } else {
        out = {
            qty: majorQty, 
            fn: function(d, i) { return formatTick(i, i, majorFmt, majorSuffix); }
        };
    }

    if(perimeter) { majorStep = perimeter / out.qty; }
    if(majorStep) { 
        out.fn = function(d, i) { return formatTick(majorStep * d, i, majorFmt, majorSuffix); };
    }
    return out;
}

function getMinor(minorQty, minorFmt, perimeter, minorStep, majorQty) {
    if(typeof minorFmt !== 'function') { minorFmt = identityFn; }
    var out = {
        qty: minorQty, 
        fn: function(d, i) { return Ticks.formatTick(d, i, minorFmt, ''); }
    };

    if(perimeter && out.qty > 0) {
        minorStep = perimeter / (majorQty * (1+out.qty));
    }
    if(minorStep) {
        out.fn = function(d, i) { return formatTick(minorStep * i, i, minorFmt, ''); };
    }
    return out;
}


function formatTick(text, value, fmtFn, sfx) {
    if(value === undefined) { value = text; }
    if(typeof fmtFn === 'function') { text = fmtFn(text);  }
    if(typeof sfx   === 'string')   { text = text + sfx; }
    return {text: '' + text, value: value };
}



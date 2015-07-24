/* jshint esnext: true */

export default class MockScenarios {
  static scenario(id) {
  	if(id === undefined) { id = 'default'; }
    var fn = this['scenario_' + id];
    if(typeof fn === 'function') {  return fn(); }
  }
}

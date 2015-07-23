/* jshint esnext: true */

export default class HtmlTransform { 

  static exec(html) {
    var div = document.createElement('tmp-div');
    div.innerHTML = html;
    return div.children[0];
  }
}
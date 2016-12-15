const appendToHead = (node) => {
  var parentNode    = document.getElementsByTagName('head')[0];
  parentNode.appendChild(node);
}

const injectStyle = (text) => {
  var node  = document.createElement('style');
  node.innerHTML = text;
  appendToHead(node);
}

const linkStyle = (url) =>  {
  var node  = document.createElement('link');
  node.rel = 'stylesheet';
  node.href = url;
  appendToHead(node);
}

var FN = {};

FN.style = injectStyle;

FN.linkStylesheet = FN.link = (...urls) => {
  if(urls.length === 1 && Array.isArray(urls[0])) { urls = urls[0]; }
  urls.forEach(linkStyle)
}

module.exports = FN;

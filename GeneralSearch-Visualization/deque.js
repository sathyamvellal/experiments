function GeneralDeque() {
  this._container = [];
}

GeneralDeque.prototype.append = function(item) {
  this._container.push(item);
}

GeneralDeque.prototype.pop = function() {
  return this._container.pop();
}

GeneralDeque.prototype.appendleft = function(item) {
  this._container.unshift(item);
}

GeneralDeque.prototype.popleft = function() {
  return this._container.shift();
}

GeneralDeque.prototype.insert = function(index, item) {
  this._container.splice(index, 0, item);
}

GeneralDeque.prototype.remove = function(index) {
  return this._container.splice(index, 1);
}

GeneralDeque.prototype.length = function() {
  return this._container.length;
}

GeneralDeque.prototype.indexOf = function(item) {
  return this._container.indexOf(item);
}

GeneralDeque.prototype.toString = function() {
  return this._container.toString();
}

define([], function() {
  return GeneralDeque;
})

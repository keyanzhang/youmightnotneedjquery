# You Might Not Need jQuery
## ajax
### json
#### ie10
``` javascript
var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
```

#### ie8
``` javascript
var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onreadystatechange = function() {
  if (this.readyState === 4) {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      var data = JSON.parse(this.responseText);
    } else {
      // Error :(
    }
  }
};

request.send();
request = null;
```

#### ie9
``` javascript
var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
```

#### jquery
``` javascript
$.getJSON('/my/url', function(data) {

});
```

### post
#### ie8
``` javascript
var request = new XMLHttpRequest();
request.open('POST', '/my/url', true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
request.send(data);
```

#### jquery
``` javascript
$.ajax({
  type: 'POST',
  url: '/my/url',
  data: data
});
```

### request
#### ie10
``` javascript
var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var resp = this.response;
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
```

#### ie8
``` javascript
var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onreadystatechange = function() {
  if (this.readyState === 4) {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      var resp = this.responseText;
    } else {
      // Error :(
    }
  }
};

request.send();
request = null;
```

#### ie9
``` javascript
var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var resp = request.responseText;
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
```

#### jquery
``` javascript
$.ajax({
  type: 'GET',
  url: '/my/url',
  success: function(resp) {

  },
  error: function() {

  }
});
```

### _alternatives
#### reqwest: https://github.com/ded/Reqwest
then-request: https://github.com/then/request
superagent: https://github.com/visionmedia/superagent

## effects
### fade_in
#### ie10
``` javascript
.show {
  transition: opacity 400ms;
}
.hide {
  opacity: 0;
}
```

``` javascript
el.classList.add('show');
el.classList.remove('hide');
```

#### ie8
``` javascript
function fadeIn(el) {
  var opacity = 0;

  el.style.opacity = 0;
  el.style.filter = '';

  var last = +new Date();
  var tick = function() {
    opacity += (new Date() - last) / 400;
    el.style.opacity = opacity;
    el.style.filter = 'alpha(opacity=' + (100 * opacity)|0 + ')';

    last = +new Date();

    if (opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

fadeIn(el);
```

#### ie9
``` javascript
function fadeIn(el) {
  el.style.opacity = 0;

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

fadeIn(el);
```

#### jquery
``` javascript
$(el).fadeIn();
```

### hide
#### ie8
``` javascript
el.style.display = 'none';
```

#### jquery
``` javascript
$(el).hide();
```

### show
#### ie8
``` javascript
el.style.display = '';
```

#### jquery
``` javascript
$(el).show();
```

### _alternatives
#### animate.css: http://daneden.github.io/animate.css/
move.js: https://github.com/visionmedia/move.js

## events
### off
#### ie8
``` javascript
function removeEventListener(el, eventName, handler) {
  if (el.removeEventListener)
    el.removeEventListener(eventName, handler);
  else
    el.detachEvent('on' + eventName, handler);
}

removeEventListener(el, eventName, handler);
```

#### ie9
``` javascript
el.removeEventListener(eventName, eventHandler);
```

#### jquery
``` javascript
$(el).off(eventName, eventHandler);
```

### on
#### ie8
``` javascript
function addEventListener(el, eventName, handler) {
  if (el.addEventListener) {
    el.addEventListener(eventName, handler);
  } else {
    el.attachEvent('on' + eventName, function(){
      handler.call(el);
    });
  }
}

addEventListener(el, eventName, handler);
```

#### ie9
``` javascript
el.addEventListener(eventName, eventHandler);
```

#### jquery
``` javascript
$(el).on(eventName, eventHandler);
```

### ready
#### ie8
``` javascript
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}
```

#### ie9
``` javascript
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
```

#### jquery
``` javascript
$(document).ready(function(){

});
```

### trigger_custom
#### alternatives
``` javascript
EventEmitter: https://github.com/Wolfy87/EventEmitter
Vine: https://github.com/arextar/Vine
microevent: https://github.com/jeromeetienne/microevent.js
```

#### ie8
``` javascript
// Custom events are not natively supported, so you have to hijack a random
// event.
//
// Just use jQuery.
```

#### ie9
``` javascript
if (window.CustomEvent) {
  var event = new CustomEvent('my-event', {detail: {some: 'data'}});
} else {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent('my-event', true, true, {some: 'data'});
}

el.dispatchEvent(event);
```

#### jquery
``` javascript
$(el).trigger('my-event', {some: 'data'});
```

### trigger_native
#### ie8
``` javascript
if (document.createEvent) {
  var event = document.createEvent('HTMLEvents');
  event.initEvent('change', true, false);
  el.dispatchEvent(event);
} else {
  el.fireEvent('onchange');
}
```

#### ie9
``` javascript
// For a full list of event types: https://developer.mozilla.org/en-US/docs/Web/API/document.createEvent
var event = document.createEvent('HTMLEvents');
event.initEvent('change', true, false);
el.dispatchEvent(event);
```

#### jquery
``` javascript
$(el).trigger('change');
```

## utils
### array_each
#### ie8
``` javascript
function forEach(array, fn) {
  for (var i = 0; i < array.length; i++)
    fn(array[i], i);
}

forEach(array, function(item, i){

});
```

#### ie9
``` javascript
array.forEach(function(item, i){

});
```

#### jquery
``` javascript
$.each(array, function(i, item){

});
```

### bind
#### ie8
``` javascript
fn.apply(context, arguments);
```

#### ie9
``` javascript
fn.bind(context);
```

#### jquery
``` javascript
$.proxy(fn, context);
```

### deep_extend
#### ie8
``` javascript
var deepExtend = function(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];

    if (!obj)
      continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object')
          deepExtend(out[key], obj[key]);
        else
          out[key] = obj[key];
      }
    }
  }

  return out;
};

deepExtend({}, objA, objB);
```

#### jquery
``` javascript
$.extend(true, {}, objA, objB);
```

### extend
#### alternatives
``` javascript
lo-dash: http://lodash.com/docs#assign
underscore: http://underscorejs.org/#extend
ECMA6: http://www.2ality.com/2014/01/object-assign.html
```

#### ie8
``` javascript
var extend = function(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    if (!arguments[i])
      continue;

    for (var key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key))
        out[key] = arguments[i][key];
    }
  }

  return out;
};

extend({}, objA, objB);
```

#### jquery
``` javascript
$.extend({}, objA, objB);
```

### index_of
#### ie8
``` javascript
function indexOf(array, item) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === item)
      return i;
  }
  return -1;
}

indexOf(array, item);
```

#### ie9
``` javascript
array.indexOf(item);
```

#### jquery
``` javascript
$.inArray(item, array);
```

### is_array
#### ie8
``` javascript
isArray = Array.isArray || function(arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

isArray(arr);
```

#### ie9
``` javascript
Array.isArray(arr);
```

#### jquery
``` javascript
$.isArray(arr);
```

### map
#### ie8
``` javascript
function map(arr, fn) {
  var results = [];
  for (var i = 0; i < arr.length; i++)
    results.push(fn(arr[i], i));
  return results;
}

map(array, function(value, index){

});
```

#### ie9
``` javascript
array.map(function(value, index){

});
```

#### jquery
``` javascript
$.map(array, function(value, index){

});
```

### now
#### ie8
``` javascript
new Date().getTime();
```

#### ie9
``` javascript
Date.now();
```

#### jquery
``` javascript
$.now();
```

### parse_html
#### ie8
``` javascript
var parseHTML = function(str) {
  var el = document.createElement('div');
  el.innerHTML = str;
  return el.children;
};

parseHTML(htmlString);
```

#### ie9
``` javascript
var parseHTML = function(str) {
  var tmp = document.implementation.createHTMLDocument();
  tmp.body.innerHTML = str;
  return tmp.body.children;
};

parseHTML(htmlString);
```

#### jquery
``` javascript
$.parseHTML(htmlString);
```

### parse_json
#### ie8
``` javascript
JSON.parse(string);
```

#### jquery
``` javascript
$.parseJSON(string);
```

### trim
#### ie8
``` javascript
string.replace(/^\s+|\s+$/g, '');
```

#### ie9
``` javascript
string.trim();
```

#### jquery
``` javascript
$.trim(string);
```

### type
#### ie8
``` javascript
Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
```

#### jquery
``` javascript
$.type(obj);
```

## elements
### add_class
#### ie10
``` javascript
el.classList.add(className);
```

#### ie8
``` javascript
if (el.classList)
  el.classList.add(className);
else
  el.className += ' ' + className;
```

#### jquery
``` javascript
$(el).addClass(className);
```

### append
#### ie8
``` javascript
parent.appendChild(el);
```

#### jquery
``` javascript
$(parent).append(el);
```

### after
#### ie8
``` javascript
el.insertAdjacentHTML('afterend', htmlString);
```

#### jquery
``` javascript
$(el).after(htmlString);
```

### before
#### ie8
``` javascript
el.insertAdjacentHTML('beforebegin', htmlString);
```

#### jquery
``` javascript
$(el).before(htmlString);
```

### children
#### ie8
``` javascript
var children = [];
for (var i = el.children.length; i--;) {
  // Skip comment nodes on IE8
  if (el.children[i].nodeType != 8)
    children.unshift(el.children[i]);
}
```

#### ie9
``` javascript
el.children
```

#### jquery
``` javascript
$(el).children();
```

### clone
#### ie8
``` javascript
el.cloneNode(true);
```

#### jquery
``` javascript
$(el).clone();
```

### contains
#### ie8
``` javascript
el !== child && el.contains(child);
```

#### jquery
``` javascript
$.contains(el, child);
```

### contains_selector
#### ie8
``` javascript
el.querySelector(selector) !== null
```

#### jquery
``` javascript
$(el).find(selector).length;
```

### each
#### ie8
``` javascript
function forEachElement(selector, fn) {
  var elements = document.querySelectorAll(selector);
  for (var i = 0; i < elements.length; i++)
    fn(elements[i], i);
}

forEachElement(selector, function(el, i){

});
```

#### ie9
``` javascript
var elements = document.querySelectorAll(selector);
Array.prototype.forEach.call(elements, function(el, i){

});
```

#### jquery
``` javascript
$(selector).each(function(i, el){

});
```

### empty
#### ie8
``` javascript
while(el.firstChild)
  el.removeChild(el.firstChild);
```

#### ie9
``` javascript
el.innerHTML = '';
```

#### jquery
``` javascript
$(el).empty();
```

### filter
#### ie8
``` javascript
function filter(selector, filterFn) {
  var elements = document.querySelectorAll(selector);
  var out = [];
  for (var i = elements.length; i--;) {
    if (filterFn(elements[i]))
      out.unshift(elements[i]);
  }
  return out;
}

filter(selector, filterFn);
```

#### jquery
``` javascript
$(selector).filter(filterFn);
```

#### ie9
``` javascript
Array.prototype.filter.call(document.querySelectorAll(selector), filterFn);
```

### find_children
#### ie8
``` javascript
el.querySelectorAll(selector);
```

#### jquery
``` javascript
$(el).find(selector);
```

### find_elements
#### alternatives
``` javascript
qwery: https://github.com/ded/qwery
sizzle: http://sizzlejs.com/
```

#### ie8
``` javascript
document.querySelectorAll('.my #awesome selector');
```

#### jquery
``` javascript
$('.my #awesome selector');
```

### get_attributes
#### ie8
``` javascript
el.getAttribute('tabindex');
```

#### jquery
``` javascript
$(el).attr('tabindex');
```

### get_html
#### ie8
``` javascript
el.innerHTML
```

#### jquery
``` javascript
$(el).html();
```

### get_outer_html
#### ie8
``` javascript
el.outerHTML
```

#### jquery
``` javascript
$('<div>').append($(el).clone()).html();
```

### get_style
#### ie8
``` javascript
// Varies based on the properties being retrieved, some can be retrieved from el.currentStyle
// https://github.com/jonathantneal/Polyfills-for-IE8/blob/master/getComputedStyle.js
```

#### ie9
``` javascript
getComputedStyle(el)[ruleName];
```

#### jquery
``` javascript
$(el).css(ruleName);
```

### get_text
#### ie8
``` javascript
el.textContent || el.innerText
```

#### ie9
``` javascript
el.textContent
```

#### jquery
``` javascript
$(el).text();
```

### has_class
#### ie10
``` javascript
el.classList.contains(className);
```

#### ie8
``` javascript
if (el.classList)
  el.classList.contains(className);
else
  new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
```

#### jquery
``` javascript
$(el).hasClass(className);
```

### matches
#### ie8
``` javascript
el === otherEl
```

#### jquery
``` javascript
$(el).is($(otherEl));
```

### matches_selector
#### ie8
``` javascript
var matches = function(el, selector) {
  var _matches = (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector);

  if (_matches) {
    return _matches.call(el, selector);
  } else {
    var nodes = el.parentNode.querySelectorAll(selector);
    for (var i = nodes.length; i--;) {
      if (nodes[i] === el)
        return true;
    }
    return false;
  }
};

matches(el, '.my-class');
```

#### ie9
``` javascript
var matches = function(el, selector) {
  return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
};

matches(el, '.my-class');
```

#### jquery
``` javascript
$(el).is('.my-class');
```

### next
#### ie8
``` javascript
// nextSibling can include text nodes
function nextElementSibling(el) {
  do { el = el.nextSibling; } while ( el && el.nodeType !== 1 );
  return el;
}

el.nextElementSibling || nextElementSibling(el);
```

#### ie9
``` javascript
el.nextElementSibling
```

#### jquery
``` javascript
$(el).next();
```

### offset
#### ie8
``` javascript
var rect = el.getBoundingClientRect();

{
  top: rect.top + document.body.scrollTop,
  left: rect.left + document.body.scrollLeft
}
```

#### jquery
``` javascript
$(el).offset();
```

### offset_parent
#### ie8
``` javascript
el.offsetParent || el
```

#### jquery
``` javascript
$(el).offsetParent();
```

### outer_height
#### ie8
``` javascript
el.offsetHeight
```

#### jquery
``` javascript
$(el).outerHeight();
```

### outer_height_with_margin
#### ie8
``` javascript
function outerHeight(el) {
  var height = el.offsetHeight;
  var style = el.currentStyle || getComputedStyle(el);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
}

outerHeight(el);
```

#### ie9
``` javascript
function outerHeight(el) {
  var height = el.offsetHeight;
  var style = getComputedStyle(el);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
}

outerHeight(el);
```

#### jquery
``` javascript
$(el).outerHeight(true);
```

### outer_width
#### ie8
``` javascript
el.offsetWidth
```

#### jquery
``` javascript
$(el).outerWidth();
```

### outer_width_with_margin
#### ie8
``` javascript
function outerWidth(el) {
  var width = el.offsetWidth;
  var style = el.currentStyle || getComputedStyle(el);

  width += parseInt(style.marginLeft) + parseInt(style.marginRight);
  return width;
}

outerWidth(el);
```

#### ie9
``` javascript
function outerWidth(el) {
  var width = el.offsetWidth;
  var style = getComputedStyle(el);

  width += parseInt(style.marginLeft) + parseInt(style.marginRight);
  return width;
}

outerWidth(el);
```

#### jquery
``` javascript
$(el).outerWidth(true);
```

### parent
#### ie8
``` javascript
el.parentNode
```

#### jquery
``` javascript
$(el).parent();
```

### position
#### ie8
``` javascript
{left: el.offsetLeft, top: el.offsetTop}
```

#### jquery
``` javascript
$(el).position();
```

### position_relative_to_viewport
#### ie8
``` javascript
el.getBoundingClientRect()
```

#### jquery
``` javascript
var offset = el.offset();

{
  top: offset.top - document.body.scrollTop,
  left: offset.left - document.body.scrollLeft
}
```

### prepend
#### ie8
``` javascript
parent.insertBefore(el, parent.firstChild);
```

#### jquery
``` javascript
$(parent).prepend(el);
```

### prev
#### ie8
``` javascript
// prevSibling can include text nodes
function previousElementSibling(el) {
  do { el = el.previousSibling; } while ( el && el.nodeType !== 1 );
  return el;
}

el.previousElementSibling || previousElementSibling(el);
```

#### ie9
``` javascript
el.previousElementSibling
```

#### jquery
``` javascript
$(el).prev();
```

### remove
#### ie8
``` javascript
el.parentNode.removeChild(el);
```

#### jquery
``` javascript
$(el).remove();
```

### remove_class
#### ie8
``` javascript
if (el.classList)
  el.classList.remove(className);
else
  el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
```

#### ie10
``` javascript
el.classList.remove(className);
```

#### jquery
``` javascript
$(el).removeClass(className);
```

### replace_from_html
#### ie8
``` javascript
el.outerHTML = string;
```

#### jquery
``` javascript
$(el).replaceWith(string);
```

### set_attributes
#### ie8
``` javascript
el.setAttribute('tabindex', 3);
```

#### jquery
``` javascript
$(el).attr('tabindex', 3);
```

### set_html
#### ie8
``` javascript
el.innerHTML = string;
```

#### jquery
``` javascript
$(el).html(string);
```

### set_style
#### ie8
``` javascript
// Use a class if possible
el.style.borderWidth = '20px';
```

#### jquery
``` javascript
$(el).css('border-width', '20px');
```

### set_text
#### ie8
``` javascript
if (el.textContent !== undefined)
  el.textContent = string;
else
  el.innerText = string;
```

#### ie9
``` javascript
el.textContent = string;
```

#### jquery
``` javascript
$(el).text(string);
```

### siblings
#### ie8
``` javascript
var siblings = Array.prototype.slice.call(el.parentNode.children);

for (var i = siblings.length; i--;) {
  if (siblings[i] === el) {
    siblings.splice(i, 1);
    break;
  }
}
```

#### ie9
``` javascript
Array.prototype.filter.call(el.parentNode.children, function(child){
  return child !== el;
});
```

#### jquery
``` javascript
$(el).siblings();
```

### toggle_class
#### ie10
``` javascript
el.classList.toggle(className);
```

#### ie8
``` javascript
if (el.classList) {
  el.classList.toggle(className);
} else {
    var classes = el.className.split(' ');
    var existingIndex = -1;
    for (var i = classes.length; i--;) {
      if (classes[i] === className)
        existingIndex = i;
    }

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push(className);

  el.className = classes.join(' ');
}
```

#### ie9
``` javascript
if (el.classList) {
  el.classList.toggle(className);
} else {
  var classes = el.className.split(' ');
  var existingIndex = classes.indexOf(className);

  if (existingIndex >= 0)
    classes.splice(existingIndex, 1);
  else
    classes.push(className);

  el.className = classes.join(' ');
}
```

#### jquery
``` javascript
$(el).toggleClass(className);
```

### _alternatives
#### bonzo: https://github.com/ded/bonzo
$dom: https://github.com/julienw/dollardom


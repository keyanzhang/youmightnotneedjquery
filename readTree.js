// compiled from readTree.coffee

var fs, get, readFileTree;

fs = require('fs');

readFileTree = require('readfiletree');

get = function(cb) {
  return readFileTree('comparisons/', function(err, tree) {
    var base, code, comp, comps, ext, filename, name, out, ref, title, version;
    if (err) {
      cb(err);
      return;
    }
    out = {};
    for (title in tree) {
      comps = tree[title];
      out[title] = {};
      for (name in comps) {
        comp = comps[name];
        if (name === 'alternatives.txt') {
          name = '_alternatives';
        }
        out[title][name] = {};
        if (typeof comp !== 'string') {
          for (filename in comp) {
            code = comp[filename];
            ref = filename.split('.'), version = ref[0], ext = ref[1];
            if ((base = out[title][name])[version] == null) {
              base[version] = {};
            }
            out[title][name][version][ext] = code;
          }
        } else {
          out[title][name] = comp;
        }
      }
    }
    return cb(null, out);
  });
};

module.exports = get;

'use strict';

const isPlainObject = require('lodash.isplainobject');
const readTree = require('./readTree');
const fs = require('fs');

const genMDCodeBlock = (jsCode) =>
  '``` javascript\n' + jsCode + '```\n\n';

const genHN = (x, n) => {
  const hn = Array.from(new Array(n), () => '#').join('') + ' ';
  return hn + x + '\n';
};

const preOrderTraversal = (data, visitor, depth) => {
  depth = depth || 0; // default parameter
  if (!isPlainObject(data)) {
    return visitor(data, depth, null);
  }

  Object.keys(data).forEach((key) => {
    visitor(key, depth, data);
    preOrderTraversal(data[key], visitor, depth + 1);
  });
};

function genMd(tree) {
  let result = '# You Might Not Need jQuery\n';

  preOrderTraversal(tree, (data, depth, obj) => {
    if (data === 'js' || data === 'css' || data === 'txt') {
      // @TODO make this better
      // genMDCodeBlock could pick the file type from the object
      return;
    }

    if (depth < 3) {
      result += genHN(data, depth + 2);
    } else {
      result += genMDCodeBlock(data);
    }
  });

  return result;
}

readTree((err, res) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  fs.writeFileSync('./YouMightNotNeedjQuery.md', genMd(res));
  console.log('* Wrote to ./YouMightNotNeedjQuery.md');
});

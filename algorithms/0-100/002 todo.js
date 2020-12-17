// TODO
const inputs = [
  ['hello', 'lo', { output: 2 }],
  ['mississippi', 'issip', { output: 4 }]
];
const [_haystack, _needle] = inputs[1];

/*
 * "mississippi"
 "issip"
 *
 * */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  if (!needle) return 0;
  if (!haystack || (needle.length > haystack.length)) return -1;

  const haystackMeta = {
    len: haystack.length
  };

  const needleMeta = {
    len: needle.length,
    idx: 0
  };

  for (let x = 0; x < haystackMeta.len; x++) { // todo maybe while ?
    debugger;
    if (haystack[x] === needle[needleMeta.idx]) {
      // whole needle found
      if (needleMeta.idx + 1 === needleMeta.len) {
        return x + 1 - needleMeta.len;
      }
      // part of needle found
      needleMeta.idx++;
    } else {
      // not a part of needle

      // repeat search for this value if some part of needle was found
      if (needleMeta.idx > 0) x--;

      needleMeta.idx = 0;
    }
  }
  return -1;
};

const result = strStr(_haystack, _needle);
result;

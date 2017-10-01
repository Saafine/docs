import { doesRangeOverlap } from 'js-utils/overlap.util';

/**
 * Given a collection of intervals, merge all overlapping intervals.
 * For example,
 * Given [1,3],[2,6],[8,10],[15,18],
 * return [1,6],[8,10],[15,18].
 */

  // Tested for:
  // [[6,8],[1,9],[2,4],[4,7]
  // [[6,8],[1,3],[2,4],[4,7]]
  // [[1,3],[7,9],[4,6],[10,13]]
  // [[900, 1330], [1200, 1530], [1300, 1500], [1430, 1700], [1600, 1700], [1600, 1700], [1400, 1630], [1345, 1400], [1730, 1900], [1930, 2100], [2100, 2200]]

const intervals = [
    {
      start: -3,
      end: 5
    },
    {
      start: 1,
      end: 3
    },
    {
      start: -4,
      end: 2
    },
    {
      start: 14,
      end: 19
    },
    {
      start: 8,
      end: 14
    }
  ];

function mergeOverlaping (intervals) {
  let _intervals = JSON.parse(JSON.stringify(intervals));
  let wasMerged = false;

  for (let x = 0; x < _intervals.length - 1; x++) {
    for (let next = x + 1; next < _intervals.length; next++) {
      if (doesRangeOverlap(_intervals[x].start, _intervals[x].end, _intervals[next].start, _intervals[next].end)) {
        wasMerged = true;
        _intervals[x].start = (_intervals[x].start > _intervals[next].start) ? _intervals[next].start : _intervals[x].start;
        _intervals[x].end = (_intervals[x].end < _intervals[next].end) ? _intervals[next].end : _intervals[x].end;
        _intervals.splice(next, 1);
        next--;
      }
    }
  }

  if (wasMerged) {
    return mergeOverlaping((_intervals));
  } else {
    return _intervals;
  }
}

let result = mergeOverlaping(intervals);
console.log(result);
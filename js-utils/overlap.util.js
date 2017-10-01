// Example:
// Range 1 -> [3, 4]
// Range 2 -> [4, 7]
// Result: Overlap = true
function doesRangeOverlap (a_start, a_end, b_start, b_end) { // this function tests if two ranges of integers overlap
  if (a_start <= b_start && b_start <= a_end) return true;
  if (a_start <= b_end && b_end <= a_end) return true;
  if (b_start < a_start && a_end < b_end) return true;
  return false;
}

// Example:
// Range 1 -> [3, 4]
// Range 2 -> [4, 7]
// Result: Overlap = false
function doesRangeOverlapInside (a_start, a_end, b_start, b_end) { // this function tests if two ranges of integers overlap BUT excludes equals
  if (a_start < b_start && b_start < a_end) return true;
  if (a_start < b_end && b_end < a_end) return true;
  if (b_start < a_start && a_end < b_end) return true;
  return false;
}
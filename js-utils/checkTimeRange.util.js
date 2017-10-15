// !todo retest needed for X

// Checks if specified time is between time range
// Example: checkTimeRange(23, 22, 2) -> true
// --------------------
function checkTimeRange (target, from, to) {
  if (from < to) {
    return (from <= target && target <= to);
  } else {
    if (from <= target && target < 24) {
      return true;
    } else { // !todo X
      return (0 <= target && target <= to);
    }
  }
}

function bouncingBall(h,  bounce,  window) {
  if (!(h > 0 && (0 < bounce && bounce < 1) && window < h)) {
    return -1;
  }

  let ballInSight = 0;
  let bouncePosition = h;

  while(bouncePosition > window) {
    bouncePosition *= bounce;
    ballInSight = bouncePosition  > window ? ballInSight + 2 : ballInSight + 1;
  }

  return ballInSight;
}

const meta = {
  link: 'https://www.codewars.com/kata/one-line-task-squirrel-and-tree/javascript',
  name: 'One Line Task: Squirrel And Tree',
  tags: ['math', 'powers', 'sqrt', 'hypot']
};

squirrel=(h,H,S)=>+(H/h*(S**2+h**2)**.5).toFixed(4)
// alternative squirrel=(h,H,S)=>+(H/h*Math.hypot(h,S)).toFixed(4)

const squirrelAsLong = (climbedHeight, treeHeight, circumference) => {
  const turns = treeHeight / climbedHeight;
  return Math.round(turns * Math.sqrt((circumference**2 + climbedHeight**2))*10000)/10000;
};

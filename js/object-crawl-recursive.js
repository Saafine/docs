// Crawl the array of objects and all its nested arrays of objects
// -------------------------------------------------
// #################################################

let obj = [
  {a: 'a-1'},
  {b: 'b-1'},
  {c: 'c-1'},
  {
    d: [
      {d1: 'd1-1'},
      {d2: 'd1-2'},
      {d3: 'd1-3'},
      {d4: 'd1-4'}
    ]
  },
  {e: 'e-1'},
  {f: 'f-1'},
  {
    g: [
      {g1: 'g1-1'},
      {g2: 'g2-1'},
      {g3: 'g3-1'},
      {
        g4: [
          {g4_1: 'g4-1-1'},
          {
            g4_2: [
              {g4_2_1: 'g4_2_1_1'},
              {g4_2_2: 'g4_2_2_1'},
              {g4_2_3: 'g4_2_3_1'},
              {g4_2_4: 'g4_2_4_1'}
            ]
          },
          {g4_3: 'g4-3-1'}
        ]
      },
      {g5: 'g5-1'}
    ]
  },
  {h: 'h-1'},
  {i: 'i-1'}
];

let crawlObj = (obj, objIndex = 0) => {
  let objContent = obj[objIndex];
  let objKey = Object.keys(obj[objIndex]);
  let objVal = objContent[objKey];
  let next = ++objIndex;

  if (Array.isArray(objVal)) {
    crawlObj(objVal);
  } else {
    console.log(objVal);
  }

  if (objIndex !== obj.length) {
    crawlObj(obj, next);
  }
};

crawlObj(obj);
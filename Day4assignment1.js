const json1 = {
  name: "person1",
  age: "5"
};

const json2 = {
  age: "5",
  name: "person1"
};


function compareObjects(obj1, obj2) {
  const normalizedObj1 = Object.fromEntries(Object.entries(obj1).sort(([k1], [k2]) => k1. localeCompare(k2)));
  const normalizedObj2 = Object.fromEntries(Object.entries(obj2).sort(([k1], [k2]) => k1. localeCompare(k2)));
  return JSON.stringify(normalizedObj1) === JSON.stringify(normalizedObj2);
}

let x = compareObjects(json1,json2);
console.log(x);

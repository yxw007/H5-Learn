let arr = [
  { id: 1, name: "a1" },
  { id: 2, name: "a2" },
];

function arrayToMap(arr, key) {
  let obj = {};
  arr.forEach((it) => {
    obj[it[key]] = it;
    delete it[key];
  });
  return obj;
}

console.log(JSON.stringify(arrayToMap(arr, "id"), null, 2).replace(/\\/g, ""));

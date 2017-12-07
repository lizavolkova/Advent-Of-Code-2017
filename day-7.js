const input = `pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`;

const array = input.split('\n');

const treeArrays = [];

const keysArray = [];
const valueArray = [];

array.forEach((program) => {
  if (program.indexOf('->') >= 0){
    const splitString = program.split('->')
    const value = splitString[1].split(', ');
    // treeArrays.push({
    //   [splitString[0].split(' ')[0]] : value
    // })

    keysArray.push(splitString[0].split(' ')[0])
    valueArray.push(value)
}
})

console.log(keysArray)
const flattenedArray = [].concat(...valueArray);
console.log(flattenedArray)
const trimmedArray = flattenedArray.map((val) => {
  return val.replace(/\s/g, '')
})


keysArray.forEach((key) => {
  if (trimmedArray.indexOf(key) < 0) {
    console.log(key)
  }
})
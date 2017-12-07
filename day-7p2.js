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
const mappedWeights = {};


array.forEach((program) => {
  const key = program.substring(0, program.indexOf(' ('))
  const value = program.substring(program.indexOf(' (') + 2, program.indexOf(')'))

  mappedWeights[key] = parseInt(value)
})
 
console.log(mappedWeights)

const mapedParentChild = [];

array.forEach((program) => {
  if (program.indexOf('->') >= 0){
    const splitString = program.split('->')
    const value = splitString[1].split(', ');
    const trimmedArray = value.map((val) => {
      return val.replace(/\s/g, '')
    })

    mapedParentChild.push({
      [splitString[0].split(' ')[0]] : trimmedArray
    })
  }
})

mapedParentChild.forEach((program) => {
  const childElements = program[Object.keys(program)]

  let sum = 0;
  childElements.forEach((child) => {
    const weight =  mappedWeights[child]
    sum += weight;
  })

  console.log(mappedWeights[Object.keys(program)] + sum)
})

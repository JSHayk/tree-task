const tree = {
  price: [
    {id: "a", value: "A"},
    {id: "b", value: "B"},
    {id: "g", value: "G"},
  ],
  info: [
    {id: "a", title: "A title" },
    {id: "b", title: "B title"},
    {id: "g", title: "G title"},
  ] 
}

function solution(data) {
  let result = [];
  Object.entries(data).forEach((item, idx) => {
    const [key, value] = item;
    switch(idx) {
      case 0:
        result.push(...value);
      break;
      case 1:
        const modifyedData = modifyData(value, result);
        result = modifyedData;
      break;
      default:
        break;
    }
  });
  return result;
}

function modifyData(data, priceData) {
  const modifyedData = [];
  for (let i = 0; i < data.length; i++) {
    const foundPrice = findPrice(data[i].id, priceData);
    if (foundPrice) {
      modifyedData.push({
        ...foundPrice,
        ...data[i]
      });
    }
  }
  return modifyedData;
}

function findPrice(id, data) {
  return data.find(item => item.id === id);
}

console.log("Tree: ", solution(tree));

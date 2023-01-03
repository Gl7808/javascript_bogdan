// . добавить/изменить
// delete - удалить из объекта



const MyTable = {
  color: "black",
  creator: "ikea",
  price: 2400,
  isGood: true,
  characters: {
    long: 200,
    width: 70,
    material: 'wood'
  }
}

const oldPriceName =  "oldPrice";

MyTable[oldPriceName] = 2200;

console.log(MyTable.oldPrice);

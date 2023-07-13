const sodas = [
  {
    name: "Pepsi",
    sugarFree: false,
    energy: false,
    image: "fake.cdn/pepsi.jpg"
  },
  {
    name: "Coke",
    sugarFree: false,
    energy: false,
    image: "fake.cdn/coke.jpg"
  },
  {
    name: "NOS",
    sugarFree: false,
    energy: true,
    image: "fake.cdn/nos.jpg"
  },
  {
    name: "Diet Pepsi",
    sugarFree: true,
    energy: false,
    image: "fake.cdn/diet_pepsi.jpg"
  }
];
//First Iteration
// let attributeList = [
//   "name",
//   "image"
// ]

let attributeList = sodas.map(sodaView => {
  let sodaName = sodaView.name;
  let sodaImage = sodaView.image;
  console.log(`name: ${sodaName}, image: ${sodaImage}`);
  return [sodaName, sodaImage];
});

// Expected Output:
// name: Pepsi, image: fake.cdn/pepsi.jpg
// name: Coke, image: fake.cdn/coke.jpg
// name: NOS, image: fake.cdn/nos.jpg
// name: Diet Pepsi, image: fake.cdn/diet_pepsi.jpg

//Second Iteration
// let attributeList2 = ["name", "sugarFree", "energy"];
let attributeList2 = sodas.map(sodaCal => {
  let sodaName = sodaCal.name;
  let sugarFree = sodaCal.sugarFree;
  let energy = sodaCal.energy;
  console.log(`name: ${sodaName}, sugarFree: ${sugarFree}, energy: ${energy}`);
  return [sodaName, sugarFree, energy];
});

//Expected Output:
// name: Pepsi, sugarFree: false, energy: false
// name: Coke, sugarFree: false, energy: false
// name: NOS, sugarFree: false, energy: true
// name: Diet Pepsi, sugarFree: true, energy: false

export {};


function printPoint(point: {x: number, y: number, z?:number}) {
  console.log(point.x);
  console.log(point.y);
  console.log(point.z);
}

printPoint({x:111, y:222, z:222 });
printPoint({x:111, y:222 });
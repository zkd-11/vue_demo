//  type Direction = "left" | "right" | "up" | "down
export {};

// 枚举类型  枚举类型值 可进行自定义
 enum Direction {
  LEFT = "left",
  RIGHT = "right",
  TOP = "top",
  BOTTOM = "bottom",
}
// 枚举类型， 内部相当于索引， Direction.LEFT = 0

function turnDirection(direction: Direction ) {
  switch (direction) {
    case Direction.LEFT:
      console.log("向左");
      break;
    case Direction.RIGHT :
      console.log("向右");
      break;
    case Direction.TOP:
      console.log("向上");
      break;
    case Direction.BOTTOM:
      console.log("向下");
      break;
    default:
      const foo: never = direction;
      break;
  }
}
// 枚举类型是有数值的 可自定义

turnDirection(Direction.LEFT);
turnDirection(Direction.BOTTOM);


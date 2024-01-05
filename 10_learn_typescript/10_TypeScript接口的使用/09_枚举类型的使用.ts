//  type Direction = "left" | "right" | "up" | "down
export {};

enum Direction {
  LEFT = 11,
  RIGHT,
  TOP,
  BOTTOM,
}
// 枚举类型， 内部相当于索引， Direction.LEFT = 0

function turnDirection(direction: Direction) {
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
turnDirection(11);
turnDirection(12);
turnDirection(14);
turnDirection(13);
turnDirection(Direction.LEFT);
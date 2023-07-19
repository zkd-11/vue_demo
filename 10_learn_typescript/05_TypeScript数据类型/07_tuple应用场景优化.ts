export {}
// 泛型  表示将接收的类型 作为注解
function useState<T>(state: T) {
  let currentState = state;

  const changeState = (newState: T) => {
    currentState = newState;
  }

  //  表示定义了一个元组， 第一个为any 第二个为函数
  const tuple: [T, (newState: T)=> void ] = [currentState, changeState];

  return tuple
}

const[counter, setCounter] = useState(19);

const[title, setTitle] = useState("aa");


// 声明函数 表示 为无返回值的函数 ()=>{ return undefined;}
const foo: ()=> void = () =>{}

// 可阅读性较差 一般使用 
type MyFunction = () => void;
const foo1: MyFunction = () => {}

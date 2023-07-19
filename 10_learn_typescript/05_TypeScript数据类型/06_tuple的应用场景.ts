export {}
function useState(state: any) {
  let currentState = state;

  const changeState = (newState: any) => {
    currentState = newState;
  }

  //  表示定义了一个元组， 第一个为any 第二个为函数
  const tuple: [any, (newState: any)=> void ] = [currentState, changeState];

  return tuple
}

const[counter, setCounter] = useState(19);

const[title, setTitle] = useState("aa");


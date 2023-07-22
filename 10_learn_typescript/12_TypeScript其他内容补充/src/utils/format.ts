//  内部模块 - namespace命名空间
  // 模块再细分内部模块， 命名可相同
//  一般建议为命名修改为
export namespace time{
  export function format(time: string) {
    return "2022-02-22"
  }
}

export function foo() {
 
}

export let name: string = 'acc';

export namespace price {
  export function format(price: number) {
    return "99.99"
  }
}
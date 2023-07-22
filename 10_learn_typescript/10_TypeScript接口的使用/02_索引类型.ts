//  通过 interface 定义索引类型

interface IndexLanguage {
  [index: number]: string
}

const frontLanguage: IndexLanguage = {
  0: "English",
  1: "Chinese"
}

interface ILanguageYear {
  [name: string]: number
}

const LanguageYear: ILanguageYear = {
  "chinese": 1100,
  "修炼": 2000,
}



console.log(frontLanguage[1]);
console.log(LanguageYear["修炼"]);

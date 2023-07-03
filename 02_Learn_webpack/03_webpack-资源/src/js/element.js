// 内联表达 使用css-loader 加载器， 但一般在配置文件进行配置
// import 'css-loader!../css/divEl.css'
import '../css/divEl.css'
import '../css/title.less'


const divEl = document.createElement('div');
divEl.className = 'title';
divEl.innerHTML = '你好啊， 李银河!';

document.body.appendChild(divEl);
// 内联表达 使用css-loader 加载器， 但一般在配置文件进行配置
// import 'css-loader!../css/divEl.css'
import '../css/divEl.css'
import '../css/title.less'
import '../css/image.css'

// 通过导入的形式， 能正确显示路径
import zzhnImage from '../img/zznh.png';

const divEl = document.createElement('div');
divEl.className = 'title';
divEl.innerHTML = '你好啊， 李银河!';


// 设置背景图片
const bgDivEl = document.createElement('div');
bgDivEl.className = 'image-bg';

// 设置img元素的src
const imgEl = document.createElement('img');
// 不能使用相对路径， 最终显示是通过index显示， index的相对路径与子js文件路径不一致
// imgEl.src = '../img/zzzh.png';
imgEl.src = zzhnImage;


document.body.appendChild(bgDivEl)
document.body.appendChild(divEl);
document.body.appendChild(imgEl);
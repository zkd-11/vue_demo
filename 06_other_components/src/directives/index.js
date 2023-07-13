import registerFormatTime from './format-time';

// index.js 为统一的导出 出口
export default function registerDirectives(app) {
  registerFormatTime(app);
}


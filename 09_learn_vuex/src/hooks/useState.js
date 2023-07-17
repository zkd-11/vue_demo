//  根据使用的不同 导入不同的函数
import { mapState} from 'vuex'
// 引入映射js文件
import { useMapper } from './useMapper';

//  此模块 主要 mapper 映射 提取 
export function useState(mapper) {
    return useMapper(mapper, mapState);
}
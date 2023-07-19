//  根据使用的不同 导入不同的函数
import { mapGetters, createNamespacedHelpers } from 'vuex'
// 引入映射js文件
import { useMapper } from './useMapper';

//  此模块 主要 mapper 映射 提取 
//  当传入参数为两时， 表示从子模块去除， 进行优化
export function useGetters( moduleName, mapper ) {
    let mapperFn = mapGetters;
    if( typeof moduleName === "string" && moduleName.length >0 ) {
        mapperFn = createNamespacedHelpers(moduleName).mapGetters
    } else {
        mapper = moduleName
    }
    return useMapper(mapper, mapperFn);
}
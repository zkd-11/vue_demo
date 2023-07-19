const foo1 = (name)=>{
  console.log( name.length );
}

foo1("韩绝");
foo1("悟律冲");
foo1(); 
// 存在隐患问题, 当其它代码 , 会因此行代码导致无法运行
// 所以推出了 ts, 类型检测, 严谨性 代码健壮性


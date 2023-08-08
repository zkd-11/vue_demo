export const contentTableConfig = {
  title: '类别列表',
  propList: [
    { prop: 'name', label: '类别名称', minWidth: '120' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}

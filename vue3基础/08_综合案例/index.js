Vue.createApp({
  template: "#my-app",
  data: function () {
    return {
      books: [
        {
          id: 1,
          name: '《我欲封天》',
          data: '2015-6-12',
          price: '85.00',
          count: 1
        },
        {
          id: 2,
          name: '《完美世界》',
          data: '2015-6-12',
          price: '75.00',
          count: 1
        },
        {
          id: 3,
          name: '《大主宰》',
          data: '2015-6-12',
          price: '95.00',
          count: 1
        },
        {
          id: 4,
          name: '《斗破苍穹》',
          data: '2014-6-12',
          price: '77.00',
          count: 1
        },
      ]
    };
  },
   
  // 定义各种方法
  methods: {
    incrementCount(index) {
      this.books[index].count++;
    }, 
    decrementCount(index) {
      this.books[index].count--;
    },
    removeBook(index) {
      // 三个参数， 从index位置开始删除x个（第二个参数）， 第三个（插入的新元素）
      this.books.splice(index, 1);
    },
    // 笨方法 直接使用 方法
    formatPrice(price) {
      return '￥' + price;
    }
  },
  computed: {
    totalPrice() {
      let finalPrice = 0;
      for (let book of this.books) {
        finalPrice += book.price * book.count;
      }
      return finalPrice;
    },
    // vue3 不支持过滤器， 需要为金钱前 ＋ ￥符号， 两种做法： 计算属性/ 使用全局方法（待交）
    // filterBooks() {
    //   // 不能使用这种方法， 因为这种方法会修改原价格， 导致total失灵
    //   return this.books.map( item => {
    //     item.price = '￥' + item.price;
    //     return item;
    //   })
    // }

    filterBooks() {

      // 生成一个新对象 拷贝保存数据
      return this.books.map( item => {
        const newItem = Object.assign({}, item);
        newItem.price = '￥' + item.price;
        return newItem;
      })
    }
  }
}).mount("#app");
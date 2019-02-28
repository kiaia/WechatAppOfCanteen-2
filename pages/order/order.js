Page({
  data: {
    toView: 'list1',
    scrollTop: 0,
    maginleft: '10%',
    src: "/images/446105925964471455.jpg",
    state: "未完成",
    orderlist: [0, 1, 2, 3, 4, 5],
    ordername: '西红柿炒番茄',
    ordertime: '5月19日 23:59'
  },
  btn1: function () {
    this.setData({
      state: '未完成'
    })
  },
  btn2: function () {
    this.setData({
      state: '未评论'
    })
  },
  btn3: function () {
    this.setData({
      state: '已完成'
    })
  },
  upper: function (e) {
    //console.log(e)
  },
  lower: function (e) {
    //console.log(e)
  },
  scroll: function (e) {
    //console.log(e)
  },
})
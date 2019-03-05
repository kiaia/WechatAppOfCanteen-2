Page({
  data: {
    toView: 'list1',
    scrollTop: 0,
    maginleft: '10%',
    inthisview: '未完成',
    allorderlist: [{
        img : '/images/446105925964471455.jpg',
        id: 0,
        ordername: '西红柿炒番茄',
        ordertime: '5月19日 23:59',
        state: "未完成",
      },
      {
        img : '/images/446105925964471455.jpg',
        id: 1,
        ordername: '番茄',
        ordertime: '5月6日 4:59',
        state: "未完成",
      },
      {
        img : '/images/446105925964471455.jpg',
        id: 2,
        ordername: '炒番茄',
        ordertime: '8月19日 23:59',
        state: "未评论",
      },
      {
        img : '/images/446105925964471455.jpg',
        id: 3,
        ordername: '西红柿',
        ordertime: '3月3日 23:59',
        state: "未评论",
      },
      {
        img : '/images/446105925964471455.jpg',
        id: 4,
        ordername: '西红番茄',
        ordertime: '2月21日 23:59',
        state: "未完成",
      },
      {
        img : '/images/446105925964471455.jpg',
        id: 5,
        ordername: '红番茄',
        ordertime: '1月29日 23:59',
        state: "已完成",
      },

    ],
    orderlist: [{
      img : '/images/446105925964471455.jpg',
      id: 0,
      ordername: '西红柿炒番茄',
      ordertime: '5月19日 23:59',
      state: "未完成",
    }, {
      img : '/images/446105925964471455.jpg',
      id: 1,
      ordername: '番茄',
      ordertime: '5月6日 4:59',
      state: "未完成",
    }, {
      img : '/images/446105925964471455.jpg',
      id: 4,
      ordername: '西红番茄',
      ordertime: '2月21日 23:59',
      state: "未完成",
    }, ]
  },
  btn1: function() {
    console.log("change to no complete!");
    var newaray = new Array();
    var list = this.data.allorderlist;
    for (var key in list){
      if (list[key].state == '未完成') newaray.push(list[key]);
    }
    this.setData({
      inthisview: '未完成',
      maginleft: '10%',
      orderlist: newaray,
    })
  },
  btn2: function() {
    console.log("change to no commit");
    var newaray = new Array();
    var list = this.data.allorderlist;
    for( var key in list)
    {
      if (list[key].state == '未评论') newaray.push(list[key]);
    }
    this.setData({
      maginleft: '44%',
      inthisview: '未评论',
      orderlist:newaray,
    })
  },
  btn3: function() {
    console.log("change to complete!");
    var newaray = new Array();
    var list = this.data.allorderlist;
    for (var key in list) {
      if (list[key].state == '已完成') newaray.push(list[key]);
    }
    this.setData({
      inthisview: '已完成',
      maginleft: '76%',
      orderlist: newaray,
    })
  },
  upper: function(e) {
    //console.log(e)
  },
  lower: function(e) {
    //console.log(e)
  },
  scroll: function(e) {
    //console.log(e)
  },
})
const app = getApp();

Page({
  data: {
    toView: 'list3',
    scrollTop: 0,
    maginleft: '10%',
    inthisview: 3,
    allorderlist:[],
    foodlist:[],
    /*allorderlist: [{
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

    ],*/
    orderlist: []
  },
  onLoad: function (e) {
    this.setData({
      allorderlist: app.globalData.allorderlist,
      //orderlist: app.globalData.allorderlist,
      foodlist : app.globalData.foodList
    })
    var newaray = new Array();
    var list = app.globalData.allorderlist
    for (var key in list) {
      if (list[key].state == 1) newaray.push(list[key]);
    }
    this.setData({
      orderlist: newaray
    })
  },
  btn1: function() {
    console.log("change to no complete!");
    var newaray = new Array();
    var list = this.data.allorderlist;
    for (var key in list){
      if (list[key].state == 1) newaray.push(list[key]);
    }
    this.setData({
      inthisview: 1,
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
      if (list[key].state == 2) newaray.push(list[key]);
    }
    this.setData({
      maginleft: '44%',
      inthisview: 2,
      orderlist:newaray,
    })
  },
  btn3: function() {
    console.log("change to complete!");
    var newaray = new Array();
    var list = this.data.allorderlist;
    for (var key in list) {
      newaray.push(list[key]);
    }
    this.setData({
      inthisview: 3,
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
  jumpToCommit: function (e) {
    var id = e.currentTarget.id;
    var img = e.currentTarget.dataset.img;
    var orderName = e.currentTarget.dataset.ordername;
    var orderTime = e.currentTarget.dataset.ordertime;
    var url = '../comment/comment?id=' + id + "&img=" + img + "&orderName=" + orderName + "&orderTime=" + orderTime;
    console.log(url);
    wx.navigateTo({
      url: url,
    })
  }
})
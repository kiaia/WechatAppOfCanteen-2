const app = getApp();

Page({
  data: {
    toView: 'list3',
    scrollTop: 0,
    maginleft: '10%',
    inthisview: 3,
    allorderlist:[],
    foodlist:[],
    orderlist: []
  },

  onLoad: function (e) {
    this.setData({
      allorderlist: app.globalData.allorderlist,
      foodlist : app.globalData.foodList
    })
    var newarray = new Array();
    var list = app.globalData.allorderlist
    for (var key in list) {
      if (list[key].state == 1) 
        newarray.push(list[key]);
    }
    this.setData({
      orderlist: newarray
    })
  },

  btn1: function() {
    console.log("change to no complete!");
    var newarray = new Array();
    var list = this.data.allorderlist;
    for (var key in list){
      if (list[key].state == 1) 
        newarray.push(list[key]);
    }
    this.setData({
      inthisview: 1,
      maginleft: '10%',
      orderlist: newarray,
    })
  },

  btn2: function() {
    console.log("change to no commit");
    var newarray = new Array();
    var list = this.data.allorderlist;
    for( var key in list) {
      if (list[key].state == 2) 
        newarray.push(list[key]);
    }
    this.setData({
      maginleft: '44%',
      inthisview: 2,
      orderlist: newarray,
    })
  },

  btn3: function() {
    console.log("change to complete!");
    var newarray = new Array();
    var list = this.data.allorderlist;
    for (var key in list) {
      newarray.push(list[key]);
    }
    this.setData({
      inthisview: 3,
      maginleft: '76%',
      orderlist: newarray,
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
    console.log(id);
    wx.navigateTo({
      url: url,
    })
  }
})
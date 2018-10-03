//app.js
App({
  onLaunch: function () {
    wx.request({
      url: 'http://scse1606.cn',
      success: function (res) {
        console.log("success");
        var app = getApp();
        app.globalData.foodList = res.data;
        //app.globalData.isLoad = true;
      },
      fail: function () {
        console.log("fail");
      }
    });
  },
  globalData: {
    //isLoad: false,
    shops:[],
    foodList: [],
    foodClass: [
      {
        id: 'hot',
        classifyName: '热销',
        goods: [12345, 12346, 12347, 12348, 12349]
      },
      {
        id: 'new',
        classifyName: '新品',
        goods: [12345, 12346]
      },
      {
        id: 'tsgf',
        classifyName: '特色盖饭',
        goods: [12345, 12346, 12347]
      },
      {
        id: 'gggz',
        classifyName: '干锅锅仔',
        goods: [12345, 12346]
      },
      {
        id: 'tbf',
        classifyName: '铁板饭',
        goods: [12345, 12346]
      },
      {
        id: 'favorite',
        classifyName: '收藏',
        goods: [12345]
      }
    ]
  }
})
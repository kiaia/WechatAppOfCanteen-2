//app.js
App({
  onLaunch: function () {
    wx.request({
      url: 'http://scse1606.cn/',
      method: 'GET',
      success: function (res) {
        console.log("get success");
        var app = getApp();
        app.globalData.foodList = res.data;
      },
      fail: function () {
        console.log("get fail");
      }
    });
    wx.request({
      url: 'http://scse1606.cn/',
      data: {
        'requestType': 'comment',
        'recipeId': 114514
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 真机调试改为Content-type
      },
      success: function (res) {
        console.log("post success");
        console.log(res.data);
      },
      fail: function () {
        console.log("post fail");
      }
    });
  },
  globalData: {
    shops:[],
    foodList: [],
    foodClass: [
      {
        id: 'hot',
        classifyName: '热销',
        goods: [0, 1, 2, 3, 4, 5]
      },
      {
        id: 'new',
        classifyName: '新品',
        goods: [0, 1, 2]
      },
      {
        id: 'tsgf',
        classifyName: '特色盖饭',
        goods: [0, 1, 2, 3]
      },
      {
        id: 'gggz',
        classifyName: '干锅锅仔',
        goods: [1, 2, 3, 4]
      },
      {
        id: 'tbf',
        classifyName: '铁板饭',
        goods: [1, 4, 5]
      },
      {
        id: 'favorite',
        classifyName: '收藏',
        goods: [0]
      }
    ]
  }
})
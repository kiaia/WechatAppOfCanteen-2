//app.js
App({
  onLaunch: function () {
    wx.request({
      url: 'http://canteen.beihangsoft.cn/getMenu',
      success: function (res) {
        console.log("success-menu");
        var app = getApp();
        app.globalData.foodList = res.data;
        console.log(app.globalData.foodList)
        //app.globalData.isLoad = true;
      },
      fail: function () {
        console.log("fail");
      }
    });
    wx.login({
      success: function (res) {
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx4ea0486f80c8e2d7&secret=3c5ad94f57a5b3cd210c06221945f794&js_code=' + res.code + '&grant_type=authorization_code',
          success: function (e) {
            console.log("success-getopenid");
            //app.globalData.isLoad = true;
            var app = getApp();
            app.globalData.openid = e.data.openid;
            console.log(app.globalData.openid)
          },
        })
      }
    });
    wx.request({
      url: 'http://canteen.beihangsoft.cn/getOrder',
      success: function (res) {
        console.log("success-order");
        var app = getApp();
        app.globalData.allorderlist = res.data;
        console.log(app.globalData.allorderlist)
        //app.globalData.isLoad = true;
      },
      fail: function () {
        console.log("fail");
      }
    });
  },
  globalData: {
    //isLoad: false,
    openid : '',
    shops:[],
    allorderlist:[],
    orderlist:[],
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
  },
})
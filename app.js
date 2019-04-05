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
        for(var i=0;i<res.data.length;i++){
          var key = res.data[i];
          if(key.sold > 500){
            app.globalData.foodClass[0].goods.push(key.id)
          }
          for (var j = 0; j < app.globalData.foodClass.length;j++){
            var fc = app.globalData.foodClass[j];
            if(fc.id == key.type){
              fc.goods.push(key.id) 
            }
          }
        }
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
        goods: []
      },
      {
        id: 'gf',
        classifyName: '特色盖饭',
        goods: []
      },
      {
        id: 'gg',
        classifyName: '干锅',
        goods: []
      },
      {
        id: 'jz',
        classifyName: '饺子',
        goods: []
      },
      {
        id: 'favorite',
        classifyName: '收藏',
        goods: [0]
      }
    ]
  },
})
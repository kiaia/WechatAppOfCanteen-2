const app = getApp()

Page({
  data: {
    goods: {},
    goodsList: [],
    cart: {},
    showCartDetail: false
  },

  onLoad: function (e) {
    var postData = require("../data/data.js");

    this.setData({
      goods: postData.foodList,
      goodsList: postData.foodClass,
      cart: {
        count: 0,
        total: 0,
        list: {}
      }
    })

    var shopId = e.id;
    for (var i = 0; i < app.globalData.shops.length; i++) {
      if (app.globalData.shops[i].id == shopId) {
        this.setData({
          shop: app.globalData.shops[i]
        });
        break;
      }
    }
  },

  onShow: function () {
    this.setData({
      classifySeleted: this.data.goodsList[0].id
    });
  },

  tapAddCart: function (e) {
    this.addCart(e.target.dataset.id);
  },

  tapReduceCart: function (e) {
    this.reduceCart(e.target.dataset.id);
  },

  addCart: function (id) {
    var num = this.data.cart.list[id] || 0;
    this.data.cart.list[id] = num + 1;
    this.countCart();
  },

  reduceCart: function (id) {
    var num = this.data.cart.list[id] || 0;
    if (num <= 1) {
      delete this.data.cart.list[id];
    } else {
      this.data.cart.list[id] = num - 1;
    }
    this.countCart();
  },

  countCart: function () {
    var count = 0,
      total = 0;
    for (var id in this.data.cart.list) {
      var goods = this.data.goods[id];
      count += this.data.cart.list[id];
      total += goods.price * this.data.cart.list[id];
    }
    this.data.cart.count = count;
    this.data.cart.total = total;
    this.setData({
      cart: this.data.cart
    });
  },

  follow: function () {
    this.setData({
      followed: !this.data.followed
    });
  },

  onGoodsScroll: function (e) {
    if (e.detail.scrollTop > 10 && !this.data.scrollDown) {
      this.setData({
        scrollDown: true
      });
    } else if (e.detail.scrollTop < 10 && this.data.scrollDown) {
      this.setData({
        scrollDown: false
      });
    }

    var scale = e.detail.scrollWidth / 570,
      scrollTop = e.detail.scrollTop / scale,
      h = 0,
      classifySeleted,
      len = this.data.goodsList.length;
    this.data.goodsList.forEach(function (classify, i) {
      var _h = 70 + classify.goods.length * (46 * 3 + 20 * 2);
      if (scrollTop >= h - 100 / scale) {
        classifySeleted = classify.id;
      }
      h += _h;
    });
    this.setData({
      classifySeleted: classifySeleted
    });
  },

  tapClassify: function (e) {
    var id = e.target.dataset.id;
    this.setData({
      classifyViewed: id
    });
    var self = this;
    setTimeout(function () {
      self.setData({
        classifySeleted: id
      });
    }, 100);
  },

  showCartDetail: function () {
    this.setData({
      showCartDetail: !this.data.showCartDetail
    });
  },
  
  hideCartDetail: function () {
    this.setData({
      showCartDetail: false
    });
  },

  navigateToOrder:function(){
    wx.navigateTo({
      url: "../order/order",
    })
  },
  navigateToPay: function (e) {
    wx.navigateTo({
      url: '../pay/pay',
    })
  },

  submit: function (e) {
    for (var id in this.data.cart.list){
      //this.data.goods[id].sold += this.data.cart.list[id];
      var str = "goods."+id+".sold"
      //console.log([str])
      this.setData({
        [str]: this.data.goods[id].sold + this.data.cart.list[id]
      });
    }
    console.log("success!")
    console.log(this.data.goods)
    /*server.sendTemplate(e.detail.formId, null, function (res) {
      if (res.data.errorcode == 0) {
        wx.showModal({
          showCancel: false,
          title: '恭喜',
          content: '订单发送成功!',
          success: function (res) {
            if (res.confirm) {
              wx.navigateBack();
            }
          }
        })
      }
    }, function (res) {
      console.log(res)
    });*/
  }

})



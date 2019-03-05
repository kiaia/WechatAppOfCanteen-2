/* /pages/details/details.js */
const app = getApp();

Page({
  data: {
    id: 0,
    details: null,
    comments: [],
    recommend: [],
    enableScrollY: true,
    showModalStatus: false
  },

  onLoad: function (options) {
    /*if (typeof(options.title) != "undefined") {
      id = options.title;
    }*/
    var id = options.title;
    var foods = app.globalData.foodList;

    this.setData ({
      id: id,
      details: foods[id],
      comments: this.getComments(),
      recommend: this.getRecommend(foods)
    });

  },

  getComments: function() {
    return [
      {
        id: 1.1,
        userInfo: {
          head: "../../images/head.jpeg",
          userName: "SocialMan"
        },
        comment: "红红火火恍恍惚惚红红火火恍恍惚惚红红火火恍恍惚惚",
        date: [2018, 4, 1]
      },
      {
        id: 1.2,
        userInfo: {
          head: "../../images/head.jpeg",
          userName: "SocialMan"
        },
        comment: "test",
        date: [2018, 4, 2]
      }
    ];
  },

  getRecommend: function(foods) {
    // TODO: 用随机数生成推荐列表
    var recommend_id = [0, 0, 0, 0, 0, 0];
    var recommend = [];
    for (var i = 0; i < recommend_id.length; ++i) {
      recommend.push(foods[recommend_id[i]]);
    }
    return recommend;
  },

  navigatorToDetail: function(e) {
    var id = e.currentTarget.id;
    console.log(id)
    var url = "../details/details?title=" + id;
    console.log(url);
    wx.redirectTo({
      url: url,
      success: () => {
        console.log("success");
      },
      fail: () => {
        console.log("fail");
      }
    });
  },

  /*抽屉动画 关闭时动画太快*/
  powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  },

  util: function (currentStatu) {
    var animation = wx.createAnimation({
      duration: 600,
      timingFunction: 'ease',
      delay: 0
    });

    this.animation = animation;

    animation.translateY(800).step();

    this.setData({
      animationData: animation.export()
    })

    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation
      })

      if (currentStatu == "close") {
        //console.log(this.enableScrollY)
        this.setData(
          {
            showModalStatus: false,
            enableScrollY: true
          }
        );
      }
    }.bind(this), 100)

    if (currentStatu == "open") {
      console.log("open")
      this.setData(
        {
          showModalStatus: true,
          enableScrollY: false
        }
      );
    }
  }
})  
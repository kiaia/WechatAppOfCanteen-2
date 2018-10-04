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
    
    // var id = options.title;
    var id = 1;

    var foods = app.globalData.foodList;
    console.log(foods);
    var details = foods.data[id - 1];
    console.log(details);

    var comments = [
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
    var recommend_id = [1, 1, 1, 1, 1, 1];
    var recommend = [];
    for (var i = 0; i < recommend_id.length; ++i) {
      recommend.push(foods[recommend_id[i]]);
    }

    this.setData ({
      id: id,
      details: details,
      comments: comments,
      recommend: recommend
    });
  },

/*加载页面时请求服务器加载数据并更新页面*/
  onShow: function () {

  },

/*隐藏y页面时将数据发回服务器*/
  onHide: function () {

  },

  onUnload: function () {

  },

/*上拉刷新页面 下拉加载更多推荐菜单*/
  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

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
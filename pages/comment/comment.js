Page({
  data: {
    id: 0,
    img: "",
    orderTime: "",
    orderName: ""
  },

  onLoad: function(options) {
    var img = "../.." + options.img;
    console.log(img);
    this.setData({
      id: options.id,
      img: img,
      orderTime: options.orderTime,
      orderName: options.orderName
    });
  },

  submitComment: function() {
    
  }
})
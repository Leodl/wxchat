var app = getApp();
var fileData = require('../../utils/data.js')
Page({
  data: {
    list: fileData.getprodetailData(),
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    index:""
  },
  onLoad: function (option) {
    var that = this;
    console.log(that.data.list)
    console.log(option)
    that.setData({
      index: option.proid
    })
  },
  // 预定
  bookTap: function () {
    wx.navigateTo({
      url: '../book/book'
    })
  }
})
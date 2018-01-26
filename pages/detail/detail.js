var app = getApp()
var fileData = require('../../utils/data.js')
Page( {
  data: {
    list: fileData.getIndexNavSectionData(),
    navindex:0
  },
  onLoad: function (options) {
    var that = this;
    console.log(that.data.list)
    console.log(options)
    that.setData({
      artype:options.aid,
      navindex:options.navindex
    })   
  },
  getLocation:function(){
    wx.navigateTo({
      url:'../location/location'
    })
  },
  bookTap:function(){
    wx.navigateTo({
      url:'../book/book'
    })
  }
})
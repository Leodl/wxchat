var app = getApp()
Page({
  data: {
    markers: [{
      iconPath: '../../images/location.png',
      id: 0,
      title:"扬州鑫通集团",
      latitude: 32.698366,
      longitude: 119.330742,
      width: 20,
      height: 20,
    }]
    // polyline: [{
    //   points: [{
    //     longitude: 113.3245211,
    //     latitude: 23.10229
    //   }, {
    //     longitude: 113.324520,
    //     latitude: 23.21229
    //   }],
    //   color: "#FF0000DD",
    //   width: 2,
    //   dottedLine: true
    // }]

  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  onLoad: function () {
    var that = this;
    wx.getLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          hasLocation: true,
          location: {
            longitude: res.longitude,
            latitude: res.latitude
          }
        })
      }
    })
  },
  // 导航
  click: function (e) {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        console.log(res)
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: 32.698366,
          longitude: 119.330742,
          scale: 28
        })
      }
    }) 
  }
})
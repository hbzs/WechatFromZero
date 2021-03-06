// pages/02Express/LookupExpress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderNo: null,
    expressInfoList: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  orderSearchTap : function (e) {
    var thispage = this
    this.getExpressInfo(this.data.orderNo, function (data) {
      thispage.setData({ expressInfoList: data.result.list})
    })
  },

  orderNoInput : function (e) {
    this.setData({orderNo: e.detail.value})
  },

  getExpressInfo: function (nu, cb) {
    if (!nu) return;
    wx.request({
      url: "http://v.juhe.cn/exp/index?com=yd&no="+ nu +"&dtype=&key=testkey",
      success: function (res) {
        cb(res.data)
      }
    })
  }
})
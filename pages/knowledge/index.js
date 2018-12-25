// pages/dogs/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page_title: '',
    data_list: [],
    loading: true // 显示等待框
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '犬种知识'
    })
    this.setData({
      "page_title": "犬种知识"
    })
    this.get_list(options.year);
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

  /**
   * 获取列表
   */
  get_list: function (year) {
    var that = this;
    // 操作json数据
    that.setData({
      //data_list: res.data.data,
      loading: false // 关闭等待框
    });
  }
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page_title: '',
    data_content: [],
    loading: true // 显示等待框
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '内容详情'
    })
    this.get_detail(options.id);
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
   * 获取
   */
  get_detail: function (id) {
    var that = this;
    wx.request({
      url: 'https://www.dzh-labs.com/dzh-labs/index.php?m=wall&a=view&id=' + id,
      method: 'POST',
      success: function (res) {
        // 操作json数据
        that.setData({
          data_content: res.data.data.content.replace(/\<img/gi, '<img style="max-width:100%;height:auto" '),
          page_title: res.data.data.title,
          loading: false // 关闭等待框
        });
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }
})
// pages/dogs/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pages: 1,
    page:1,
    page_title: '',
    data_list: [],
    loading: true // 显示等待框
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.cat
    })
    this.setData({
      "page_title": options.cat
    })
    this.get_list(options.cat , this.data.page);
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
   * 获取犬只列表
   */
  get_list: function ( cat , page) {
    var that = this;
    wx.request({
      url: 'https://www.dzh-labs.com/dzh-labs/index.php?m=dogs&cat=' + cat+ '&page=' + page,
      data: {
        'a': 'index',
        'cat': cat
      },
      method: 'POST',
      success: function (res) {
        // 操作json数据
        that.setData({
          data_list: res.data.data.data,
          pages:res.data.data.pages,
          page:page,
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
  },
  pageto:function (event) {
    var page = event.currentTarget.dataset.page
    if ( page != this.data.page ) {
      this.get_list(this.data.page_title, page)
    } else{
      console.log('当前页')
    }
  }
})
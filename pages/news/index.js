//index.js
//获取应用实例
const $vm = getApp()

const cache = Object.create(null)

const {decodeHtml,parseNews} = $vm.utils


Page({
    _isLoading:false,
    data: {
      video:'',
      noticeList:[],
      categoryTabs:[],
      currentTab:0,
      indexActive: true,
      introActive: false,
      tellActive: false,
      wechatActive: false,
      showWechat:false,
      showIntro:false
    },
    onShow(){
        if($vm.globalData.categoryChanged){
            $vm.utils.getCategorys().then(res => this.setData({
                categoryTabs:res
            }))
            $vm.globalData.categoryChanged = false
        }
    },
    onReady(){
    },
    onLoad: function() {
      this.getNotice();
    },

    // 页面相关事件处理函数--监听用户下拉动作，下拉刷新
    onPullDownRefresh(){
    },
    // 到达底部，重新加载
    onReachBottom(){
    },
    // 切换当前选择的分类
    changeCategory(event){
        var chid = event.target.dataset.id
        // 获取ccurrentTab.没有切换分类
        if(this.data.currentTab === chid){
            return false
        }
        //this.setData({ currentTab:chid })

        var custom = event.target.dataset.custom
        var cat = event.target.dataset.cat
        var _url = event.target.dataset.url;
        if ( !custom ) {
          wx.navigateTo({
            url: '/pages/dogs/index?cat=' + cat
          })
        }else{
          wx.navigateTo({
            url: _url
          })
        }
    },
    // 获取通知数据
    getNotice () {
      var that = this;
      wx.request({
        url: 'https://www.dzh-labs.com/dzh-labs/index.php?m=notice',
        method: 'POST',
        success: function (res) {
          // 操作json数据
          that.setData({
            noticeList: res.data.data.data,
            video: res.data.data.video.tcode
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
    manageTabs(){
        wx.navigateTo({
            url:'/pages/news/manage'
        })
    },
    navToindex() {
      // link-index
      this.setData({
        indexActive: true,
        introActive:false,
        tellActive:false,
        wechatActive:false,
        showWechat: false,
        showIntro: false
      })
    },
    navTointro() {
      // link-intro
      this.setData({
        indexActive: false,
        introActive: true,
        tellActive: false,
        wechatActive: false,
        showWechat: false
      })
      if(this.data.showIntro) {
         this.setData({showIntro: false})
      }else{
        this.setData({ showIntro: true })
      }
    },
    navTotell() {
      // link-tell
      this.setData({
        indexActive: false,
        introActive: false,
        tellActive: true,
        wechatActive: false,
        showWechat: false,
        showIntro: false
      })
      // make phone
      wx.makePhoneCall({
        phoneNumber: '15053371555'
      })
    },
    navTowechat() {
      // link-tell
      this.setData({
        indexActive: false,
        introActive: false,
        tellActive: false,
        wechatActive: true,
        showIntro: false
      })
      if (this.data.showWechat) {
        this.setData({ showWechat: false })
      } else {
        this.setData({ showWechat: true })
      }
    },
   modalCancel() {
     this.setData({ 
       showWechat: false,
       showIntro:false
      })
   }
})
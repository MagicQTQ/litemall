var api = require('../../../config/api.js');
var util = require('../../../utils/util.js');
var user = require('../../../utils/user.js');

var app = getApp();
Page({
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
    // 页面渲染完成

  },
  onReady: function() {

  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏

  },
  onUnload: function() {
    // 页面关闭

  },
  wxLogin: function(e) {
    user.checkLogin().catch(() => {
      wx.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          user.loginByWeixin(res.userInfo).then(res => {
            app.globalData.hasLogin = true;
            wx.navigateBack({
              delta: 1
            })
          }).catch((err) => {
            app.globalData.hasLogin = false;
            util.showErrorToast('微信登录失败');
          });
        }
      })
    });
  },
  accountLogin: function() {
    wx.navigateTo({
      url: "/pages/auth/accountLogin/accountLogin"
    });
  }
})
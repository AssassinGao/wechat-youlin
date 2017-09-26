// pages/identify/identify1/identify1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex: ['请选择', '男', '女'],  //选择性别
    sex_index: 0,
    captcha_disabled: false, //发送验证码按钮 状态
    captcha_sendtime: 0,  //等待时长
  },

  //验证码按钮状态
  sendCAPTCHA: function () {
    // console.log(1)
    this.setData({
      captcha_disabled: true,
      captcha_sendtime: 60
    })
    var that = this;
    var time = 60;
    var timer = setInterval(function () {
      time -= 1;
      // console.log(time)
      if (time == 0) {
        clearInterval(timer)
        that.setData({
          captcha_disabled: false
        })
      } else {
        that.setData({
          captcha_sendtime: time
        })
      }
    }, 1000)
  },

  //picker性别
  sexPickerChange: function (e) {
    this.setData({
      sex_index: e.detail.value
    })
  },

  // 表单提交
  formSubmit: function (e) {
    console.log(e.detail.value)

    // if (e.detail.value.nickName == '' || e.detail.value.telephone == '') {
    //   wx.showToast({
    //     title: '表单不能为空',
    //     image: '../../../img/nav_icon_repair_default.png',
    //     duration: 2000
    //   })
    // } else {
      wx.navigateTo({
        url: '../identify2/identify2',
      })
    // }

    console.log('first step')
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

  }
})
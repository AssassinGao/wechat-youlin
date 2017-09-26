// pages/identify/identify2/identify2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    building_num: ['请选择','1栋', '2栋', '3栋', '4栋', '5栋', '6栋'],
    building_index: 0,
    door_num: ['请选择',101,102,103,104,105],
    door_index: 0,
    xiaoqu_name: '滨康小区'
  },

  //楼栋号选择
  buildingPickerChange: function (e) {
    
    this.setData({
      building_index: e.detail.value
    })
  },
  //门牌号选择
  doorPickerChange: function (e) {
   
    this.setData({
      door_index: e.detail.value
    })
  },


  // 表单提交
  formSubmit: function (e) {
    console.log(e.detail.value)
    
    wx.navigateTo({
      url: '../identify3/identify3',
    })
    console.log('second step')
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
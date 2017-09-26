Page({
  data: {
    imageList: [],
    array: [{
      mode: 'scaleToFill',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }, {
      mode: 'aspectFit',
      text: 'aspectFit：保持纵横比缩放图片，使图片的长边能完全显示出来'
    }, {
      mode: 'widthFix',
      text: 'widthFix：宽度不变，高度自动变化，保持原图宽高比不变'
    }, {
      mode: 'top',
      text: 'top：不缩放图片，只显示图片的顶部区域'
    }, {
      mode: 'bottom',
      text: 'bottom：不缩放图片，只显示图片的底部区域'
    }, {
      mode: 'center',
      text: 'center：不缩放图片，只显示图片的中间区域'
    }, {
      mode: 'left',
      text: 'left：不缩放图片，只显示图片的左边区域'
    }, {
      mode: 'right',
      text: 'right：不缩放图片，只显示图片的右边边区域'
    }, {
      mode: 'top left',
      text: 'top left：不缩放图片，只显示图片的左上边区域'
    }, {
      mode: 'top right',
      text: 'top right：不缩放图片，只显示图片的右上边区域'
    }, {
      mode: 'bottom left',
      text: 'bottom left：不缩放图片，只显示图片的左下边区域'
    }, {
      mode: 'bottom right',
      text: 'bottom right：不缩放图片，只显示图片的右下边区域'
    }],
    src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=952523695,3222197608&fm=27&gp=0.jpg'
  },
  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },

  previewPic: function (e) {
    console.log(e)
    let picId = e.currentTarget.id
    console.log(picId)
    console.log(e.currentTarget.dataset.src)
    wx.previewImage({
      // https 在线图片
      urls: [e.currentTarget.dataset.src],
      // 本地图片
      // urls: ['../../pic/960_640.jpg'],

    })
  },

  // 选择图片
  chooseImg: function () {
    var that = this;
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        that.setData({
          imageList: res.tempFilePaths
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  previewImage: function (e) {
    var current = e.target.dataset.src;
    console.log(current)
    wx.previewImage({
      current: current,
      urls: this.data.imageList,
      success: function (res) {
        console.log(res)
      },
      fail: function (res) { },
      complete: function (res) {
        console.log(res)
      },
    })
  }


})
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    posts_list: [],
    btm_loading: false, 
  },


  // 跳转到详情页
  redictDetail: function(e){
    console.log('id: ', e.currentTarget.id)
    let post_id = e.currentTarget.id
    wx.navigateTo({
      url: '../detail/detail?id='+ post_id,
    })
  },

  //页面滚动监听 
  onPageScroll: function (e) {
    this.setData({
      searchbarPos: e.scrollTop
    })
  },

  //上拉加载
  
  // 下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
    console.log('触发下拉刷新')
    var arr = [];
    var that = this;
    for (var i = 0; i < 10; i++) {
      arr[i] = {
        "id": parseInt(Math.random() * 800 + 100),
        "username": "用户" + parseInt(Math.random() * 8000 + 100),
        "user_avatar": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506479949&di=2f2862454499d3f3bb373885cd96c62d&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D70af4a3ec5fc1e17e9b2847222f99c76%2F8b82b9014a90f603408b616f3312b31bb051eddb.jpg",
        "sex": Math.random() > 0.5 ? "men" : "women",
        "like_count": parseInt(Math.random() * 100 + 20 + Math.random() * 100),
        "user_address": parseInt(Math.random() * 9 + 1) + "-" + parseInt(Math.random() * 2210 + 1),
        "user_badge": "App互联网从业者",
        "user_shop": Math.random() > 0.5 ? true : false,
        "follow": Math.random() > 0.5 ? true : false,
        "content": "在这个共享经济如日中天的时代,到底还可以共享些什么呢?狂欢过后又能剩下什么?在这个共享经济如日中天的时代,到底还可以共享些什么呢?狂欢过后又能剩下什么?",
        "illustration": Math.random() > 0.5 ? [
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506479949&di=2f2862454499d3f3bb373885cd96c62d&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D70af4a3ec5fc1e17e9b2847222f99c76%2F8b82b9014a90f603408b616f3312b31bb051eddb.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506479961&di=846206cd34ee9e3fe7d964f065350014&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D66f7e2c4a3ec8a1300175fa39f6afbfa%2F622762d0f703918f9137fbe15b3d269759eec433.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506479969&di=c2f7268ae4215e39b47331921f630c10&imgtype=jpg&er=1&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F001UxXCkgy6IQ2RlCtv25%26amp%3B690",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506479980&di=51d269090396eed4fae3bb8344713ae5&imgtype=jpg&er=1&src=http%3A%2F%2Ft1.niutuku.com%2F960%2F48%2F48-113584.jpg"
        ] : ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506479980&di=51d269090396eed4fae3bb8344713ae5&imgtype=jpg&er=1&src=http%3A%2F%2Ft1.niutuku.com%2F960%2F48%2F48-113584.jpg"],
        "time": parseInt(Math.random() * 22 + 1),
        "viewed_num": parseInt(Math.random() * 900 + 100),
        "reply_num": parseInt(Math.random() * 900 + 100),
        "follow_topic": Math.random() > 0.5 ? true : false,
      }
    };
    app.globalData.postsData = arr

    that.setData({
      posts_list: app.globalData.postsData
    })
    console.log(that.data.posts_list)

  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  //获取首页帖子数据
  fetchData: function () {
    var that = this;
    wx.request({
      url: '',
      complete: function (res) {
        var arr = [];
        for(var i = 0; i < 10; i++){
          arr[i] = {
            "id": parseInt(Math.random() * 800 + 100),
            "username": "用户" + parseInt(Math.random() * 8000 + 100),
            "user_avatar": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506479949&di=2f2862454499d3f3bb373885cd96c62d&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D70af4a3ec5fc1e17e9b2847222f99c76%2F8b82b9014a90f603408b616f3312b31bb051eddb.jpg",
            "sex": Math.random() > 0.5 ? "men" : "women",
            "like_count": parseInt(Math.random() * 100 + 20 + Math.random() * 100),
            "user_address": parseInt(Math.random() * 9 + 1) + "-" + parseInt(Math.random() * 2210 + 1),
            "user_badge": "App互联网从业者",
            "user_shop": Math.random() > 0.5 ? true : false,
            "follow": Math.random() > 0.5 ? true : false,
            "content": "在 &nbsp;      &nbsp; &lt; &gt; &amp; &apos; &ensp; &emsp; \n                                                                             这个共享经济如日中天的时代,到底还可以共享些什么呢?狂\n欢过后又能剩下什么?在这个共享经济如日中天的时代,到底还可以共享些什么呢?狂欢过后又能剩下什么?",
            "illustration": Math.random() > 0.5 ? [
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506479949&di=2f2862454499d3f3bb373885cd96c62d&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D70af4a3ec5fc1e17e9b2847222f99c76%2F8b82b9014a90f603408b616f3312b31bb051eddb.jpg",
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506479961&di=846206cd34ee9e3fe7d964f065350014&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D66f7e2c4a3ec8a1300175fa39f6afbfa%2F622762d0f703918f9137fbe15b3d269759eec433.jpg",
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506479969&di=c2f7268ae4215e39b47331921f630c10&imgtype=jpg&er=1&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F001UxXCkgy6IQ2RlCtv25%26amp%3B690",
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506479980&di=51d269090396eed4fae3bb8344713ae5&imgtype=jpg&er=1&src=http%3A%2F%2Ft1.niutuku.com%2F960%2F48%2F48-113584.jpg"
            ] : ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506479980&di=51d269090396eed4fae3bb8344713ae5&imgtype=jpg&er=1&src=http%3A%2F%2Ft1.niutuku.com%2F960%2F48%2F48-113584.jpg"],
            "time": parseInt(Math.random() * 22 + 1),
            "viewed_num": parseInt(Math.random() * 900 + 100),
            "reply_num": parseInt(Math.random() * 900 + 100),
            "follow_topic": Math.random() > 0.5 ? true : false,
          }
        };

        app.globalData.postsData.push(...arr)
      
        that.setData({
          posts_list: app.globalData.postsData
        })
      }
    })
  },

  onLoad: function () {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }

    this.fetchData();

  },

  // 触底  下拉刷新
  onReachBottom: function(e){   
    var arr = [];
    var that = this;
    console.log(e, '触底了')
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      mask: true
    })
    that.setData({
      btm_loading: true,
    })
    setTimeout(function(){

      for (var i = 0; i < 10; i++) {
        arr[i] = {
          "id": parseInt(Math.random() * 800 + 100),
          "username": "用户" + parseInt(Math.random() * 8000 + 100),
          "user_avatar": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506479949&di=2f2862454499d3f3bb373885cd96c62d&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D70af4a3ec5fc1e17e9b2847222f99c76%2F8b82b9014a90f603408b616f3312b31bb051eddb.jpg",
          "sex": Math.random() > 0.5 ? "men" : "women",
          "like_count": parseInt(Math.random() * 100 + 20 + Math.random() * 100),
          "user_address": parseInt(Math.random() * 9 + 1) + "-" + parseInt(Math.random() * 2210 + 1),
          "user_badge": "App互联网从业者",
          "user_shop": Math.random() > 0.5 ? true : false,
          "follow": Math.random() > 0.5 ? true : false,
          "content": "在这个共享经济如日中天的时代,到底还可以共享些什么呢?狂欢过后又能剩下什么?在这个共享经济如日中天的时代,到底还可以共享些什么呢?狂欢过后又能剩下什么?",
          "illustration": Math.random() > 0.5 ? [
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506479949&di=2f2862454499d3f3bb373885cd96c62d&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D70af4a3ec5fc1e17e9b2847222f99c76%2F8b82b9014a90f603408b616f3312b31bb051eddb.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506479961&di=846206cd34ee9e3fe7d964f065350014&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D66f7e2c4a3ec8a1300175fa39f6afbfa%2F622762d0f703918f9137fbe15b3d269759eec433.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506479969&di=c2f7268ae4215e39b47331921f630c10&imgtype=jpg&er=1&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F001UxXCkgy6IQ2RlCtv25%26amp%3B690",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506479980&di=51d269090396eed4fae3bb8344713ae5&imgtype=jpg&er=1&src=http%3A%2F%2Ft1.niutuku.com%2F960%2F48%2F48-113584.jpg"
          ] : ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506479980&di=51d269090396eed4fae3bb8344713ae5&imgtype=jpg&er=1&src=http%3A%2F%2Ft1.niutuku.com%2F960%2F48%2F48-113584.jpg"],
          "time": parseInt(Math.random() * 22 + 1),
          "viewed_num": parseInt(Math.random() * 900 + 100),
          "reply_num": parseInt(Math.random() * 900 + 100),
          "follow_topic": Math.random() > 0.5 ? true : false,
        }
      };
      app.globalData.postsData.push(...arr)

      that.setData({
        posts_list: app.globalData.postsData
      })
      console.log(that.data.posts_list)

      that.setData({
        btm_loading: false,
      })
    }, 3000)
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

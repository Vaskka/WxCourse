

Page({

  data: {
    contentList: null
  },

  onLoad() {
    // read local storage (sync return)
    let newContent = wx.getStorageSync("history");
    this.setData({
      contentList: newContent
    });
  },

  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },

  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})

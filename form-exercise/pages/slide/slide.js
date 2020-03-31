// pages/slide/slide.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // is music data
    music: true,

    loading: true,
    countDown: 1,

    showActionsheet: false,
    groups: [
        { text: '示例菜单', value: 1 },
        { text: '示例菜单', value: 2 },
        { text: '负向菜单', type: 'warn', value: 3 }
    ]

  },

  close: function () {
    this.setData({
        showActionsheet: false
    })
  },
  btnClick(e) {
      console.log(e)
      this.close()
  },

  formSubmit(e) {
    console.log("当前表单数据为：");
    console.log({
      music: this.data.music,
      volume: this.data.volume ? this.data.volume : 0,
      others: this.data.others ? this.data.others : "",
    });


    this.load(function() {
      console.log("完成loading")
    })
  },

  formReset() {
    console.log('form发生了reset事件')
    this.setData({
      gender: "",
      volume: 0,
      others: ""
    })
  },

  switchChange(e) {
    
    this.setData({
      showActionsheet: !this.data.showActionsheet,
      music: e.detail.value
    });
  },

  slider4change(e) {
    this.setData({
      volume: e.detail.value
    });
  },

  nextForm(e) {

    // navigate after modal
    wx.showModal({
      title: '提示',
      content: '您确定要进入下一表单吗?',
      success (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '../../pages/form/form',
          })
      
        } else if (res.cancel) {
          console.log('go back this form.')
        }
      }
    })

  },

  bindKeyInput (e) {
    this.setData({
      others: e.detail.value
    })
  },

  load(after) {
    wx.showLoading({
      title: '请稍后..Please wait..',
    })

    let  that = this;

    let interval = setInterval(function () {
      
      if (that.data.countDown < 0) {
        clearInterval(interval);
        wx.hideLoading()
        after()
        return;
      }

      that.setData({
        countDown: that.data.countDown - 1
      });

    }, 1000);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

})
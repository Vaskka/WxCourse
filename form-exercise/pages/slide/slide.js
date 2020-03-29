// pages/slide/slide.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // is music data
    music: true,

  },

  formSubmit(e) {
    console.log("当前表单数据为：");
    console.log({
      music: this.data.music,
      volume: this.data.volume ? this.data.volume : 0,
      others: this.data.others ? this.data.others : "",
    });
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
      music: e.detail.value
    });
  },

  slider4change(e) {
    this.setData({
      volume: e.detail.value
    });
  },

  nextForm(e) {
    wx.navigateTo({
      url: '../../pages/form/form',
    })
  },

  bindKeyInput (e) {
    this.setData({
      others: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

})
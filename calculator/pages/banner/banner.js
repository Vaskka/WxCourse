// pages/banner/banner.js
Page({
 /**
   * 页面的初始数据
   */
  data: {
    // gender data

    date: "",
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },

  formSubmit(e) {
    console.log("当前表单数据为：");
    console.log({
      date: this.data.date
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

  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    });
  },

  nextForm(e) {
    wx.navigateTo({
      url: '../../pages/form/form',
    })
  },

  // onShareAppMessage() {
  //   return {
  //     title: 'swiper',
  //     path: 'page/component/pages/swiper/swiper'
  //   }
  // },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      date: (new Date()).toLocaleDateString(),
    });
  },

})
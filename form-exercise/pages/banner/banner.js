// pages/banner/banner.js
Page({
 /**
   * 页面的初始数据
   */
  data: {
    // image data
    image: ['https://edu-1255976561.cos.ap-chengdu.myqcloud.com/cloth/60742db1eea17acd726d6607bc7b14a3-img_0353.png',
    'https://edu-1255976561.cos.ap-chengdu.myqcloud.com/cloth/662e5308fa3648c093fb094d3c0667cb-Screenshot_2020-02-16-11-18-57-87.png',
    'https://edu-1255976561.cos.ap-chengdu.myqcloud.com/cloth/f8edbf2699de849536778a15f9642124-img_0354.png'],
    date: "",
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },

  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    });
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
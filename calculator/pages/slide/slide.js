// pages/slide/slide.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // gender data
    genderList: [
      {
        genderCode: 0,
        genderValue: "female",
        checked: true,
      },
      {
        genderCode: 1,
        genderValue: "male"
      }
    ],

    gender: "female",
    volume: 0,
    others: "",
  },

  formSubmit(e) {
    console.log("当前表单数据为：");
    console.log({
      gender: this.data.gender,
      volume: this.data.volume,
      others: this.data.others,
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

  radioChange(e) {
    let genderValue = this.data.genderList[e.detail.value].genderValue;
    this.setData({
      gender: genderValue
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
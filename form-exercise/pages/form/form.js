// pages/form/form.js
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

    // country data
    countryList: [
      {
        countryCode: 0,
        countryName: "中国",
        checked: true,
      },
      {
        countryCode: 1,
        countryName: "日本"
      },
      {
        countryCode: 2,
        countryName: "俄罗斯"
      },
      {
        countryCode: 3,
        countryName: "韩国"
      },
      {
        countryCode: 4,
        countryName: "马来西亚"
      },
    ],

    // form data before submit default value
    gender: "female",
    country: ["中国"],
    date: new Date().toLocaleDateString(),
    time: "00:00",
    others: "",
  },

  formSubmit(e) {
    console.log("当前表单数据为：");
    console.log({
      gender: this.data.gender,
      country: this.data.country,
      date: this.data.date,
      time: this.data.time,
      others: this.data.others,
    });
  },

  formReset() {
    console.log('form发生了reset事件')
    this.setData({
      gender: "",
      country: [],
    })
  },

  radioChange(e) {
    let genderValue = this.data.genderList[e.detail.value].genderValue;
    this.setData({
      gender: genderValue
    });
  },

  checkboxChange(e) {

    let nowCountryList = [];
    for (let itemIndex of e.detail.value) {
      let countryName = this.data.countryList[itemIndex].countryName;
      nowCountryList.push(countryName);
    }

    this.setData({
      country: nowCountryList
    });

  },

  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    });
  },

  bindTimeChange(e) {
    this.setData({
      time: e.detail.value
    });
  },

  bindOthersInput(e) {
    this.setData({
      others: e.detail.value
    });
  },

  /** 
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {      

  },
})
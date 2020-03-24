//index.js
//获取应用实例
import Const from "./../../lib/calculator/const.js"
import Calculator from "./../../lib/calculator/calculator.js"


const app = getApp();

const cal = new Calculator();

Page({
  data: {
    isSaveHistory: true, //  is save history or not
    exprText: null,
  },

  onLoad: function () {
  },

  /**
   * bing switch to control save history or not
   * @param {Event} event change-event
   */
  changeSaveHistory(event) {
    this.setData({
      isSaveHistory: event.detail.value,
    })
  },

  /*** tap ops button logic below ***/
  
  /**
   * tap button
   * @param {Event} event change-event
   */
  tapButton(event) {
    let opsValue = event.currentTarget.dataset.id.toString();
    let enterFlag = false;
    let newExpr = null;

    // 根据点按的按钮调用不同的计算器对象的接口
    switch (opsValue) {
      case "0":
        
        cal.addNum(0);
        break;
      case "1":
        
        cal.addNum(1);
        break;
      case "2":
        
        cal.addNum(2);
        break;
      case "3":
        
        cal.addNum(3);
        break;
      case "4":
        
        cal.addNum(4);
        break;
      case "5":
        
        cal.addNum(5);
        break;
      case "6":
        
        cal.addNum(6);
        break;
      case "7":
        
        cal.addNum(7);
        break;
      case "8":
        
        cal.addNum(8);
        break;
      case "9":
        
        cal.addNum(9);
        break;
      case "+":
        
        try {
          cal.addOps(Const.Ops.PLUS);
        }
        catch (err) {
          wx.showToast({
            title: err,
            icon: 'none',
            duration: 1000
          });
          return;
        }
        break;
      case "-":
        
        try {
          cal.addOps(Const.Ops.SUB);
        }
        catch (err) {
          wx.showToast({
            title: String(err),
            icon: 'none',
            duration: 1000
          });
          return;
        }
        break;
      case "x":
        try {
          cal.addOps(Const.Ops.TIMES);
        }
        catch (err) {
          wx.showToast({
            title: err,
            icon: 'none',
            duration: 1000
          });
          return;
        }
        break;
      case "Div":
        
        try {
          cal.addOps(Const.Ops.DIVIDE);
        }
        catch (err) {
          wx.showToast({
            title: err,
            icon: 'none',
            duration: 1000
          });
          return;
        }
        break;
      case "+/-":
        
        try {
          cal.addOps(Const.Ops.SYMBOL);
        }
        catch (err) {
          wx.showToast({
            title: err,
            icon: 'none',
            duration: 1000
          });
          return;
        }
        break;
      case ".":
        
        try {
          cal.addOps(Const.Ops.POINT);
        }
        catch (err) {
          wx.showToast({
            title: err,
            icon: 'none',
            duration: 1000
          });
          return;
        }
        break;
      case "AC":
        
        cal.clearCalculator();
        break;
      case "SH":
        wx.navigateTo({
          url: '../history/history'
        });
        break;
      case "Back":
        cal.backSpace();
        break;
      case "Enter":
        
        enterFlag = true;
        let result
        try {
          result = cal.getResultToString()
        }
        catch (err) {
          wx.showToast({
            title: err,
            icon: 'none',
            duration: 1000
          });
        }

        // 拼接表达式和结果存入缓存
        this.saveCache(result);

        // 结果连接在viewContent后面
        this.setViewContent(result);
        break;
    }

    // 判断按键事件后设置viewContent
    if (!enterFlag) {
      newExpr = cal.getExpr();
      this.setViewContent(newExpr);
    }
  },  

  /**
   * 存入本地缓存
   * @param {String} cacheData 缓存数据
   */
  saveCache(cacheData) {
    if (this.data.isSaveHistory) {
      let currentList = wx.getStorageSync("history");
      currentList = currentList ? currentList : [];

      currentList.push(cacheData);
      wx.setStorageSync("history", currentList);
    }
  },

  /**
   * 传入要展示的字符串表达式
   * @param {String} viewData 展示字符串（表达式）
   */
  setViewContent(viewData) {
    this.setData({
      exprText: viewData,
    });
  },

})

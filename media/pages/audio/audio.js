import { utilMap } from "../../utils/util.js";

// audio.js
Page({
  onReady(e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    let that = this

    this.audioCtx = wx.createInnerAudioContext()
    this.audioCtx.src = this.data.src
    this.audioCtx.loop = true

    // this.audioCtx.onCanplay(function() {

    //     console.log("on can play: " + that.audioCtx.currentTime + "  " + that.audioCtx.duration)

    //     that.setData({
    //         seekValue: that.audioCtx.currentTime,
    //         seekMax: that.audioCtx.duration
    //     })
    // })

    this.audioCtx.onTimeUpdate(() => {

        let val = utilMap(0, that.audioCtx.duration, that.audioCtx.currentTime, 0, 300)

        console.log(val)

        that.setData({
            currentTime: that.audioCtx.currentTime,
            seekValue: val,
        })
    })

    this.audioCtx.onEnded(() => {
        that.audioCtx.play()
    })

    this.audioCtx.onWaiting(() => {
        that.audioCtx.pause()
        that.setData({
            wait: true
        })

    })

    this.audioCtx.onCanplay(() => {
        
        if (that.data.wait) {
            that.audioCtx.play()
            that.setData({
                wait: false
            })
        }
    })

  },
  data: {
    poster: 'https://vaskka.com/static/BillieJean-post.jpg',
    name: 'Billie Jean',
    author: 'Michael Jackson',
    src: 'https://vaskka.com/static/Michael%20Jackson%20-%20Billie%20Jean.mp3',
    seekValue: 0,
    seekMax: 300,
    seekMin: 0,
    currentTime: 0,

    wait: false
  },
  audioPlay () {

    this.audioCtx.play()
  },
  audioPause () {
    this.audioCtx.pause()
  },
  audioStart() {
    this.audioCtx.seek(0)
    this.audioCtx.pause()


    this.setData({
        seekValue: 0
    })
  },
  durationChange(e) {

    let seekVal = utilMap(0, this.data.seekMax, e.detail.value, 0, this.audioCtx.duration)
    this.audioCtx.seek(seekVal)

    this.setData({
        currentTime: seekVal
    })

  },
  next(e) {
    wx.navigateTo({
      url: '../../pages/video/video',
    })
  }
})


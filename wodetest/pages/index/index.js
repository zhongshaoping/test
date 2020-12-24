//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    iconList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getList:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/imageList',
      success:(res)=>{
        this.setData({list:res.data})
      }
    })
  },
    //九宫格
    getImage(){
      wx.request({
        url: 'http://127.0.0.1:3000/icons',
        success:(res)=>{
          console.log(res)
          this.setData({
            iconList:res.data
          })
        }
      })
    },
  onLoad: function (options) {
    this.getList();
    this.getImage()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      console.log("2")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})

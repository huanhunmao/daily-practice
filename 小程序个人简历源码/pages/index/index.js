// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width:0,
    height:0,
    name:"谢子豪",
    spell:"Xie Zihao",
    job:"Java工程师",
    exp:"1年实习经验",
    tel: "13312345678",
    sex: "男",
    age: 29,
    email: "yangdi@163.com",
    address: "北京市朝阳区XX街道126号",
    skill:[
      { name: "Java", percent:85},
      { name: "PHP", percent: 40 },
      { name: "HTML/CSS/JavaScript", percent: 90 },
      { name: "Python", percent: 70 },
      { name: "大数据", percent: 60 }
    ],
    education:[
      {
        school:"北京航空航天大学",
        major:"计算机科学与技术(本科)",
        year:"2014-2018",
        desc:"本专业培养掌握计算机软件基本理论知识，熟悉软件开发和管理技术、能够在计算机软件领域中从事软件设计、开发和管理的高级人才。"
      }
    ],
    work:[
      {
        company:"北京XX公司",
        job:"程序员",
        year:"2019/01-至今",
        desc:"参与开发了XXX电商系统，担任程序员角色。主要的工作是负责广告投放、商品秒杀、商品拼团等模块的开发与维护，并且负责管理该项目的运维工作。"
      },
      {
        company: "北京XX公司",
        job: "实习生",
        year: "2018/03-2019/01",
        desc: "参与了K13在线教育系统的开发和测试，维护腾讯云点播的API接口调用，并实现在线转码、添加水印、防盗链和盗播，并且开发和维护K13教育的微信小程序"
      },
      {
        company: "北京航空航天大学创客学院",
        job: "项目组长",
        year: "2017/05-2018/01",
        desc: "参与本校创新学院的Litemall微商城系统的开发，担任项目组长职务，参与了商品管理、订单管理、微信支付、购物车等模块的设计与开发。"
      }
    ],
    project:[
      {
        name:"XXX电商系统",
        desc:"该电商系统是O2O类型的新零售电商系统，分为购物子系统、支付子系统、数据库子系统、安全子系统、库存子系统、物流子系统和财务子系统。核心架构采用了SpringCloud微服务架构，整合了上述若干子系统。技术栈包括了SpringMVC、MyBatis、Activiti、Shiro、QuartZ、Sculptor Boot、jabdp、jee-weapp、RocketMQ、Kafka、Selenium、Echart、Vue、Element-UI、Uni-APP、Swagger、ElasticSearch、Druid、Zookeeper，数据平台选择的是两种MySQL集群（Replication、PXC），由MyCat管理，同时对MyCat做双机热备。NoSQL采用的是Redis Cluster集群和MongoDB集群"
      },
      {
        name:"XXX K13在线教育系统",
        desc:"该系统是针对中小学生提供的K13在线教育系统，采用的是视频点播形式，分为B/S形式和C/S形式。我主要负责的是教学视频管理业务。授课教师向K13平台上传教学视频后，经过专业人员剪辑之后，由K13平台调用腾讯云点播API接口，来实现在线转码和压缩，并且添加水印，最后生成防盗播的URL路径，渲染到HTML网页或者APP上面。该系统使用的技术栈包括SpringBoot、SpringMVC、MyBatis、SpringSecurity、Kafka、QuartZ、Flowable，该系统最终部署在腾讯云平台。"
      },
      {
        name:"北京航空航天大学创客学院",
        desc:"Litemall微商城系统是本校创新学院联合北京XX商超集团联合打造的B2C电商系统，该系统采用前后端分离的架构设计，一共分为5个子系统，分别是微商城前后台系统、商城管理前后台系统、商城核心系统。业务上具备微商城所有的功能，包括微信支付。技术架构上面后台项目选择的SpringBoot、SpringMVC和MyBatis组成的SSM框架，并且融合了Shiro、Swagger、PowerMock、阿里云等技术。前端项目采用了VUE+ElementUI技术架构，小程序采用的微信原生框架。Litemall微商城采用分布式集群部署，发布在DockerSwarm环境中，并且实现高负载、高性能和高可用。"
      }
    ],
    introduction:"本人性格开朗、稳重、有活力，待人热情、真诚；对待工作认真负责，善于沟通、协调有较强的组织能力与团队精神；上进心强、勤于学习能不断提高自身的能力与综合素质。在未来的工作中，我将以充沛的精力，刻苦钻研的精神来努力工作，稳定地提高自己的工作能力，与企业同步发展。"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var width=wx.getSystemInfoSync().windowWidth
    var height=wx.getSystemInfoSync().windowHeight
    this.setData({
      width:width,
      height:height
    })
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
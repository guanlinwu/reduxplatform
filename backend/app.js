let express = require('express'),
    path    = require('path'),
    pathToRegexp = require('path-to-regexp')
let app = express();

// app.use(require('connect-history-api-fallback')({
//   verbose: true
// }));

app.use(express.static(path.resolve(__dirname, '../fontend/build')));

app.get('*', (req, res) => {
  console.log(req.path);
  switch(true) {
    case /\/api\/actlist/.test(req.path) :
      actlistReq(req, res);
      break;
    case /\/api\/actdetail/.test(req.path) :
      actdetailReq(req, res);
      break;
    default : 
      res.sendFile(path.join(__dirname, '../fontend/build', 'index.html'))
  }
});

/**
 * 活动列表请求
 */
const actlistReq = (req, res) => {
    let actlist = JSON.stringify({
        "pageNum" : 1,
        "listArr" : [
        {
            "id" : 1,
            "imgBox" : {
                "imgUrl" : "http://a.vimage1.com/upload/brand/upcb/2016/05/25/179/03589965_604x290_50.jpg",
                "title": "感受海澜之家社区",
                "desc": "一首花开不败的绝活"
            },
            "detailBox" : {
                "place" : "参厘米社区 | 5.9KM | 沙龙学院",
                "time": "6月9日 14:00",
                "favor": 200,
                "hasfavor": true,
                "price": 38,
                "category": "科技"
            }
        },
        {
            "id" : 2,
            "imgBox" : {
                "imgUrl" : "http://a.vimage1.com/upload/brand/upcb/2016/05/30/190/47011675_604x290_50.jpg",
                "title": "遇见更美的自己",
                "desc": "失踪周末咖啡"
            },
            "detailBox" : {
                "place" : "失踪周末咖啡 | 11KM | 天河学院",
                "time": "6月9日 15:00",
                "favor": 150,
                "hasfavor": false,
                "price": 500,
                "category": "娱乐"
            }
        },
        {
            "id" : 3,
            "imgBox" : {
                "imgUrl" : "http://a.vimage1.com/upload/brand/upcb/2016/05/31/83/11365515_604x290_50.jpg",
                "title": "拍照俱乐部",
                "desc": "拍照俱乐部"
            },
            "detailBox" : {
                "place" : "拍照俱乐部",
                "time": "6月20日 13:00",
                "favor": 54,
                "hasfavor": true,
                "price": "88",
                "category": "旅游"
            }
        }
    ]
  });
  res.send(actlist);  
}

/**
 * 活动详情请求
 */
const actdetailReq = (req, res) => {
    let id = req.query.id;
    
    let actdetail = [
      {
          id : 1,
          baseInfo : {
              title: "遇见更美的自己",
              place : "参厘米社区 | 5.9KM | 沙龙学院",
              time: "6月9日 14:00"
          },
          slider: {
              content : [
                  {
                      link : "javascript:;",
                      img  : "http://pic.maizuo.com/h5PicUpload/e377b87ea71bbbae1ff8abd157b17d3c.jpg"
                  },
                  {
                      link : "javascript:;",
                      img  : "http://pic.maizuo.com/h5PicUpload/549042566cf8e847c59e7b329948128d.jpg"
                  },
                  {
                      link : "javascript:;",
                      img  : "http://pic.maizuo.com/h5PicUpload/086ac68557972bc4c2a8fd2d28869e8e.jpg"
                  },
                  {
                      link : "javascript:;",
                      img  : "http://pic.maizuo.com/h5PicUpload/41ff9b55e5f38f0e2487ace4e6eb3435.jpg"
                  }
              ],
              speed           : 500,
              trackStyle       : {
                  WebkitTransform  :"translate3d(0px, 0px, 0px)",
                  transform        :"translate3d(0px, 0px, 0px)"
              },
              activeIndex      : 0,
              width            : 0,
              slideWidth       : 0,
              animating        : false,
              sliderCount      : 0
          }
      },
      {
          id : 2,
          baseInfo : {
              title: "遇见更美的自己2",
              place : "参厘米社区 | 5.9KM | 沙龙学院",
              time: "6月9日 14:00"
          },
          slider: {
              content : [
                  {
                      link : "javascript:;",
                      img  : "http://gma.alicdn.com/simba/img/TB1_RMJJFXXXXaBXFXXSutbFXXX.jpg_q50.jpg"
                  },
                  {
                      link : "javascript:;",
                      img  : "http://gma.alicdn.com/simba/img/TB1_RMJJFXXXXaBXFXXSutbFXXX.jpg_q50.jpg"
                  },
                  {
                      link : "javascript:;",
                      img  : "http://gma.alicdn.com/simba/img/TB1_RMJJFXXXXaBXFXXSutbFXXX.jpg_q50.jpg"
                  },
                  {
                      link : "javascript:;",
                      img  : "http://gma.alicdn.com/simba/img/TB1_RMJJFXXXXaBXFXXSutbFXXX.jpg_q50.jpg"
                  }
              ],
              speed           : 500,
              trackStyle       : {
                  WebkitTransform  :"translate3d(0px, 0px, 0px)",
                  transform        :"translate3d(0px, 0px, 0px)"
              },
              activeIndex      : 0,
              width            : 0,
              slideWidth       : 0,
              animating        : false,
              sliderCount      : 0
          }
      },
      {
          id : 3,
          baseInfo : {
              title: "拍照俱乐部",
              place : "拍照俱乐部",
              time: "6月9日 14:00"
          },
          slider: {
              content : [
                  {
                      link : "javascript:;",
                      img  : "http://gma.alicdn.com/simba/img/TB1_RMJJFXXXXaBXFXXSutbFXXX.jpg_q50.jpg"
                  },
                  {
                      link : "javascript:;",
                      img  : "http://gma.alicdn.com/simba/img/TB1_RMJJFXXXXaBXFXXSutbFXXX.jpg_q50.jpg"
                  },
                  {
                      link : "javascript:;",
                      img  : "http://gma.alicdn.com/simba/img/TB1_RMJJFXXXXaBXFXXSutbFXXX.jpg_q50.jpg"
                  },
                  {
                      link : "javascript:;",
                      img  : "http://gma.alicdn.com/simba/img/TB1_RMJJFXXXXaBXFXXSutbFXXX.jpg_q50.jpg"
                  }
              ],
              speed           : 500,
              trackStyle       : {
                  WebkitTransform  :"translate3d(0px, 0px, 0px)",
                  transform        :"translate3d(0px, 0px, 0px)"
              },
              activeIndex      : 0,
              width            : 0,
              slideWidth       : 0,
              animating        : false,
              sliderCount      : 0
          }
      }
    ];
  res.send(actdetail[id]);
};



var server = app.listen(3030, function () {
  var port = server.address().port;
  console.log('Open http://localhost:%s', port);
});
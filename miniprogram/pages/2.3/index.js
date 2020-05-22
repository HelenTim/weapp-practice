Page({
  data: {
    // 示例 1 代码
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 20px;padding:20px;'
      },
      children: [
        {
          type: 'text',
          text: '小程序实践'
        }, {
          name: 'img',
          attrs: {
            src: 'http://t.cn/A622uHwp',
            style: 'width:100%'
          }
        }, {
          name: 'img',
          attrs: {
            src: 'http://t.cn/A622upBw',
            style: 'width:100%'
            // ,style:'width:100%;font-size:0;display:block;'//修改样式
            ,class: 'img'
          }
        }, {
          name: 'img',
          attrs: {
            src: 'http://t.cn/A622upBw',
            style: 'width:100%'
          }
        }
      ]
    }],
    urls: [],
    tagStyle: {
      img: 'font-size:0;display:block;',
    },
    html:"<div>小程序实践<span>message</span><img src='http://t.cn/A622upBw' /><img src='http://t.cn/A622upBw' /></div>"
  },
  tap(e) {
    let urls = this.data.urls
    wx.previewImage({
      current: urls[0],
      urls: urls
    })
  },
  onReady() {
    // 取出 urls
    function findUrl(nodes) {
      let urls = []
      nodes.forEach(item => {
        if (item.name == 'img' && item.attrs) {
          for (const key in item.attrs) {
            if (key == 'src') {
              urls.push(item.attrs[key])
            }
          }
        }
        if (item.children) {
          urls = urls.concat(findUrl(item.children))
        }
      })
      return urls
    }
    this.data.urls = findUrl(this.data.nodes)
  },
  onTapImage(e) {
    console.log('iamge url', e.detail.src)
  }
})




const axios = require('axios')
const fs = require('fs')
// AppStore列表
const List = require('./list.json')

// 存储所有请求的容器
const reqList = []
for (item of List) {
  reqList.push(axios.get(`https://itunes.apple.com/lookup?id=${item.id}&country=${item.country}`))
}

async function getApp (list) {
  const data = await axios.all(list)
  let content = ''
  for (item of data) {
    const { trackName, price } = item.data.results[0]
    content += `[${trackName}] ==> ` + price + '\n'
  }
  fs.writeFile('app.txt', content, () => {
    console.log(content);
  })
}
getApp(reqList)

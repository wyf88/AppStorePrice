const axios = require('axios')
const SCKEY = 'SCU83781Tc8c5efec46b5b2e6e00ce88b29e54a055f9919d97aa05'
axios.post(`https://sc.ftqq.com/${SCKEY}.send`, {
  text: '价格发生了变化哦！',
  desp: "111"
}).then(result => {
  console.log(result.data);
})


/* 
 使用express搭建一个后台服务器
*/

const express = require('express')
const app = express()

const axios = require('axios')

//注册后台路由
app.get('/',(req,res) => {
  res.send('这是初始界面')
})
app.get('/repositories/:q', (req,res) => {
  //res.send('这是/repositories界面')
  //res.send('niahowa')
  const q = req.params.q
  axios({
    method: 'GET',
    url: 'https://api.github.com/search/repositories',
    params: {
      q,
      sort:'stars'
    }
  }).then(response => {
    const {name,html_url} = response.data.items[0]
    res.send({
      status: 0,
      data:{name, html_url}
    })
  }, error => console.log("axio请求失败：",error))
})

app.listen('4000',(err) =>{
  if (!err) console.log('server started: http://localhost:4000')
  else console.log('服务器启动失败',err)
})
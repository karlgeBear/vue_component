console.log('Hello Webpack!')
document.getElementById('root').innerHTML = '<h1>你好哇</h1>'

import './test.css'
import logo from './logo.png'

const image = new Image()
image.src = logo
document.getElementById('root').appendChild(image)
var css1 = `/*
  * 面试官你好，我是区家乐
  * 只用文字做自我介绍太单调了
  * 我就用代码来介绍吧
  * 首先准备一些样式
  */

*{
  transition: all 1s;
}
html{
  background-color: #eee;
}
/* 给代码加上一点点高亮 好看 */
.token.selector{
  color: #690;
}
.token.property{
  color: #905;
}

/* 没有一个代码框，怎么行呢？ */
#code-wrapper{
  width: 50%;
  height: 100%;
  left: 0;
  position: fixed;
  padding: 16px;
  display: flex;
}
#code{
  width: 100%;
  border: 1px solid #aaa;
  padding: 16px;
  overflow: hidden;
}

/* 让代码呼吸起来 */

#code{
  animation: breath 0.5s infinite alternate-reverse;
}

#paper > .content {
  display: block;
 }

/* 
* 好的，现在请开始你的表演
* 在右边准备一张白纸，请看右边 
*/


`

var md = `
# 自我介绍

我叫 区家乐
1998 年 4 月出生
五邑大学毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍

熟悉 JavaScript CSS

# 项目介绍

1. XXX 轮播
2. XXX 简历
3. XXX 画板

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

`

var css2 = `
/* 接下来用一个优秀的库 marked.js
 * 把 Markdown 变成 HTML
 */


`
let css3 = `
/*
 * 这就是我的会动的简历
 * 谢谢观看
 * Duang Duang 简历好看吗
 */
`
function writeCode(prefix,code,fn){
  let domCode = document.querySelector('#code')
  let n = 0
  let id = setInterval(()=>{
    n += 1
    domCode.innerHTML = Prism.highlight(prefix+code.substring(0,n), Prism.languages.css);
    styleTag.innerHTML = prefix + code.substring(0,n);
    domCode.scrollTop = domCode.scrollHeight
    if(n >= code.length){
      window.clearInterval(id)
      fn && fn.call()
    }
  },40)
}

function writeMarkdown(markdown,fn){
  let domPaper = document.querySelector('#paper > .content')
  let n = 0
  let id = setInterval(() =>{
    n += 1
    domPaper.innerHTML = markdown.substring(0,n)
    domPaper.scrollTop = domPaper.scrollHeight
    if(n >= markdown.length){
      window.clearInterval(id)
      fn && fn.call()
      console.log(markdown)
    }
  },20)
}



function createPaper(fn){
  var paper = document.createElement('div')
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn && fn.call()
}

function convertMarkdownToHtml(fn){
  var div = document.createElement('div')
  div.className = 'html markdown-body'
  div.innerHTML = marked(md)
  let markdownContainer = document.querySelector('#paper > .content')
  markdownContainer.replaceWith(div)
  fn && fn.call()
}

writeCode('',css1,()=>{
  createPaper(()=>{
    writeMarkdown(md,()=>{
      writeCode(css1,css2,()=>{
        convertMarkdownToHtml(()=>{
          writeCode(css1+css2,css3,()=>{
            console.log('good')
          })
        })
      })
    })
  })
})
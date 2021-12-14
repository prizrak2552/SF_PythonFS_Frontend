const buttons = document.querySelectorAll('.buttons > button')
const js = document.querySelector('#js')
for (let button of buttons) {
  button.addEventListener('click', changeScript)
}

function scr(n) {
  console.log(n.srcElement.id.charAt(1))
}
const scriptTag = document.createElement('script')
scriptTag.type = 'text/javascipt'

function changeScript(n) {
  js.innerHTML = ''
  scriptTag.src = `task${n.srcElement.id.charAt(1)}.js`
  js.appendChild(scriptTag)
}

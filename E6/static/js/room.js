console.clear()
function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  )
  return matches ? decodeURIComponent(matches[1]) : undefined
}

const token = getCookie('csrftoken')

const chatMembers = new Set()
const users = document.querySelectorAll('.chat-user')
users.forEach(user => {
  user.addEventListener(
    'click',
    e => {
      e.stopPropagation(), selectUser(user)
    },
    true
  )
  console.log(user.id)
})

function selectUser(user) {
  console.log(user.classList)
  user.classList.toggle('selected')
  // const userId = parseInt(user.id)
  const userId = user.id
  if (chatMembers.has(userId)) chatMembers.delete(userId)
  else chatMembers.add(userId)
  console.log('user.id', userId)
  console.log('chatMembers', chatMembers)
}

const formRoom = document.querySelector('#new-chat')
formRoom.addEventListener('submit', e => {
  e.preventDefault()
  const room = document.querySelector('#room-name-input').value
  if (room !== '') createRoom(room)
})

function createRoom(room) {
  const roomName = JSON.parse(document.getElementById('room-name').textContent)
  const members = Array.from(chatMembers)
  const data = {
    members: members,
    room_name: room,
  }
  const formData = new FormData()
  formData.append(members, members)
  // "chatMembers": ${chatMembers}
  console.log('members', members)
  console.log(window.location.pathname, room)
  const url = `${window.location.pathname}`
  // const url = `${window.location.pathname}${room}/`

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-CSRFToken': document.querySelector('[name="csrfmiddlewaretoken"]')
        .value,
    },
    credentials: 'same-origin',
    body: JSON.stringify(data),
  })
    .then(response => {
      console.log(response)
    })
    .then((window.location.pathname = `${url}${room}/`))

  //  window.location.pathname = `/chat/${roomName}/${chat}/`
  // const xhr = new XMLHttpRequest()
  // xhr.open('POST', url, false)
  // // xhr.setRequestHeader('Accept', 'application/json')
  // // xhr.setRequestHeader('Content-Type', 'application/json')
  // xhr.send(members)
  // xhr.open('GET', url)
  // xhr.send()
  // window.location.pathname = '/chat/' + roomName + '/'
}
// const chatSocket = new WebSocket(
//   `ws://${window.location.host}/ws/chat/${roomName}/?token=${token}`
// )

// chatSocket.onmessage = function (e) {
//   const data = JSON.parse(e.data)
//   document.querySelector('#chat-log').value += data.message + '\n'
// }

// chatSocket.onclose = function (e) {
//   console.error('Chat socket closed unexpectedly')
// }

// document.querySelector('#chat-message-input').focus()
// document.querySelector('#chat-message-input').onkeyup = function (e) {
//   if (e.keyCode === 13) {
//     // enter, return
//     document.querySelector('#chat-message-submit').click()
//   }
// }

// document.querySelector('#chat-message-submit').onclick = function (e) {
//   const messageInputDom = document.querySelector('#chat-message-input')
//   const message = messageInputDom.value
//   chatSocket.send(
//     JSON.stringify({
//       message: message,
//     })
//   )
//   messageInputDom.value = ''
// }

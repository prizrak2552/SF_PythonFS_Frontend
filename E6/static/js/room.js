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
  user.classList.toggle('selected')
  const userId = user.id
  if (chatMembers.has(userId)) chatMembers.delete(userId)
  else chatMembers.add(userId)
}

const formRoom = document.querySelector('#new-chat')
formRoom.addEventListener('submit', e => {
  e.preventDefault()
  let room = document.querySelector('#room-name-input').value
  room = room.replaceAll(' ', '-')
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
  }).then(response => {
    console.log(response)
    setTimeout(redirect(room), 500)
  })

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

function redirect(room) {
  const url = window.location.pathname
  window.location.pathname = `${url}${room}/`
}

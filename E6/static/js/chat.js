console.clear()

var text_box = `<div class="card-panel right" style="width: 75%; position: relative">
  <div style="position: absolute; top: 0; left:3px; font-weight: bolder" class="title">{sender}</div>
  {message}
  </div>`

function scrolltoend() {
  const board = document.getElementById('board')
  board.animate(
    {
      scrollTop: board.scrollHeight,
    },
    800
  )
}

function send(sender, receiver, message) {
  const options = {
    method: 'post',
    sender: sender,
    receiver: receiver,
    message: message,
  }
  fetch(
    '/api/messages/',
    // `{"sender": "${sender}",
    // "receiver": "${receiver}",
    // "message": "${message}"}`,
    options
  )
    .then(data => {
      // console.log(data)
      let box = text_box.replace('{sender}', 'You')
      box = box.replace('{message}', message)
      document.querySelector('#board').insertAdjacentHTML('beforeend', box)
      scrolltoend()
      // return 'Then'
    })
    .catch(e => {
      console.log('Error', e)
      // return 'Catch'
    })
}

function receive() {
  fetch('/api/messages/' + sender_id + '/' + receiver_id)
    .then(data => {
      if (data.length !== 0) {
        for (let i = 0; i < data.length; i++) {
          console.log(data[i])
          let box = text_box.replace('{sender}', data[i].sender)
          box = box.replace('{message}', data[i].message)
          box = box.replace('right', 'left blue lighten-5')
          document.querySelector('#board').insertAdjacentHTML('beforeend', box)
          scrolltoend()
        }
      }
      // return 'Then'
    })
    .catch(e => {
      console.log('Error', e)
      // return 'Catch'
    })
  return
}

function wsReceiver() {
  // const wsUrl = `ws://${window.location.host}/api/messages/${receiver_id}/${sender_id}`
  const url = `${window.location.host}/api`
  // fetch(`http://${url}`).then(data => console.log(data))
  // console.log(fetch(url))
  // const wsUrl = `ws://${window.location.host}`
  // const chatWs = new WebSocket(`ws://${url}`)
  let chatWs = new WebSocket('wss://javascript.info/chat', ['soap', 'wamp'])
  chatWs.onopen = e => {
    console.log(`Соединение установлено`)
    btnSendEventListener(e.target)
  }

  chatWs.onclose = () => {
    console.log('Соединение закрыто')
  }
  chatWs.onerror = e => {
    console.log('Ошибка соединения: ', e)
  }
  chatWs.onmessage = e => {
    data = JSON.parse(e.data)
    console.log('Новое сообщение: ', data)

    processNewMessage(data, selectedChatId)
  }
}
// wsReceiver()
function ws() {
  fetch('https://javascript.info/article/websocket/demo/hello')
    .then(data => JSON.parse(data))
    .then(res => console.log(res))
    .catch(e => console.log(e))
  let socket = new WebSocket(
    'wss://javascript.info/article/websocket/demo/hello'
  )

  socket.onopen = function (e) {
    console.log('[open] Connection established')
    console.log('Sending to server')
    socket.send('My name is John')
  }

  socket.onmessage = function (event) {
    console.log(`[message] Data received from server: ${event.data}`)
  }

  socket.onclose = function (event) {
    if (event.wasClean) {
      console.log(
        `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
      )
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      console.log('[close] Connection died')
    }
  }

  socket.onerror = function (error) {
    console.log(`[error] ${error.message}`)
  }
}
ws()

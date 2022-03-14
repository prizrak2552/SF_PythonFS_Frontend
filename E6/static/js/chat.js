console.clear()

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
    })
    .catch(e => {
      console.log('Error', e)
    })
}

function receive() {
  fetch('/api/messages/' + sender_id + '/' + receiver_id)
    .then(data => {
      console.log(data)
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
}

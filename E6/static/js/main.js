console.clear()

// const createRoomBtn = document.querySelector('#create-room')
// form.addEventListener('submit', e => {
//   e.preventDefault()
//   const room = document.querySelector('#room-name-input').value
//   if (room !== '') createRoom()
// })

function createRoom() {
  // document.querySelector('#room-name-input').focus()
  document.querySelector('#room-name-input').onkeyup = function (e) {
    if (e.keyCode === 13) {
      // enter, return
      document.querySelector('#room-name-submit').click()
    }
  }

  document.querySelector('#room-name-submit').onclick = function (e) {
    const roomName = document.querySelector('#room-name-input').value
    window.location.pathname = '/chat/' + roomName + '/'
  }
}

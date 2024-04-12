dayjs.extend(window.dayjs_plugin_relativeTime);
dayjs.locale('pt-br')

document.getElementById('register-button').addEventListener('click', () => {
  const isNameAndEmailValid = isNameOrEmailEmpty()

  isNameAndEmailValid ? addAttendee() : alert('Nome e e-mail precisam ser preenchidos corretamente.')
})

function isNameOrEmailEmpty() {
  const nameInput = document.getElementById('full-name').value.trim()
  const emailInput = document.getElementById('email').value.trim()
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
  
  if (nameInput === '' || !emailRegex.test(emailInput)) {
    return
  }

  nameInput
  return true
}

function addAttendee() {
  const tableBody = document.querySelector('tbody')
  const attendeeRow = tableBody.firstElementChild
  
  const newAttendeeName = document.getElementById('full-name')
  const newAttendeeEmail = document.getElementById('email')

  const newAttendeeRegisterAt = dayjs(randomDate()).fromNow()
  const newAttendee = attendeeRow.cloneNode(true)

  const attendeNameElement = newAttendee.querySelector('.attendee-name')
  const attendeEmailElement = newAttendee.querySelector('.attendee-email')
  const attendeRegisterAtElement = newAttendee.querySelector('.attendee-register-at')
  const attendeCheckInElement = newAttendee.querySelector('.attendee-check-in .confirm-check-in')
  
  attendeNameElement.textContent = newAttendeeName.value
  attendeEmailElement.textContent = newAttendeeEmail.value
  attendeRegisterAtElement.textContent = newAttendeeRegisterAt
  attendeCheckInElement.textContent = 'Confirmar check-in'
  attendeCheckInElement.disabled = false
  
  tableBody.appendChild(newAttendee)
  newAttendeeName.value = ''
  newAttendeeEmail.value = ''
  
  function randomDate() {
    const startDate = new Date('2024-03-01')
    const endDate = new Date()

    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
  }
}

const tableBody = document.querySelector('tbody')
tableBody.addEventListener('click', (event) => {
  if (event.target.classList.contains('confirm-check-in')) {
    event.target.textContent = 'Check-in confirmado'
    event.target.disabled = true
  }
})
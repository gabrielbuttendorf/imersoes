dayjs.extend(window.dayjs_plugin_relativeTime);
dayjs.locale('pt-br')

function addAttendee() {
  if (isNameOrEmailEmpty) {
    alert('Nome e E-mail precisam ser preenchidos.')
    return
  }

  const tableBody = document.querySelector('tbody')
  const attendeeRow = tableBody.firstElementChild
  
  const newAttendeeName = document.getElementById('full-name').value
  const newAttendeeEmail = document.getElementById('email').value

  const newAttendeeRegisterAt = dayjs(randomDate()).fromNow()
  const newAttendee = attendeeRow.cloneNode(true)

  const attendeNameElement = newAttendee.querySelector('.attendee-name')
  const attendeEmailElement = newAttendee.querySelector('.attendee-email')
  const attendeRegisterAtElement = newAttendee.querySelector('.attendee-register-at')
  const attendeCheckInElement = newAttendee.querySelector('.attendee-check-in .confirm-check-in')
  
  attendeNameElement.textContent = newAttendeeName
  attendeEmailElement.textContent = newAttendeeEmail
  attendeRegisterAtElement.textContent = newAttendeeRegisterAt
  attendeCheckInElement.textContent = 'Confirmar check-in'
  
  tableBody.appendChild(newAttendee)
  
  function randomDate() {
    const startDate = new Date('2024-03-01')
    const endDate = new Date()

    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()))
  }

  function isNameOrEmailEmpty() {
    const nameInput = document.getElementById('full-name')
    const emailInput = document.getElementById('email')
    
    return nameInput.value.trim() === '' || emailInput.value.trim() === ''
  }
}

const tableBody = document.querySelector('tbody')
tableBody.addEventListener('click', (event) => {
  if (event.target.classList.contains('confirm-check-in')) {
    event.target.textContent = 'Check-in confirmado'
  }
})
const today = dayjs() /* ARRUMAR DAYJS */

function addAttendee() {
  const tableBody = document.querySelector('tbody')
  const attendeeRow = tableBody.firstElementChild
  
  const newAttendeeName = document.getElementById('full-name').value
  const newAttendeeEmail = document.getElementById('email').value

  // console.log(today.to(dayjs('1990-01-01'))) /* ARRUMAR DAYJS */

  // const newAttendeeRegisterAt = date
  const newAttendee = attendeeRow.cloneNode(true)

  const attendeNameElement = newAttendee.querySelector('.attendee-name')
  const attendeEmailElement = newAttendee.querySelector('.attendee-email')
  const attendeRegisterAtElement = newAttendee.querySelector('.attendee-register-at')
  const attendeCheckInElement = newAttendee.querySelector('.attendee-check-in')
  
  attendeNameElement.textContent = newAttendeeName
  attendeEmailElement.textContent = newAttendeeEmail
  // attendeRegisterAtElement.textContent = newAttendeeRegisterAt
  // attendeCheckInElement.textContent = attendee.checkIn
  
  tableBody.appendChild(newAttendee)
}
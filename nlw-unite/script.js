const attendee = {
  name: "Gabriel Felipe",
  email: "bielfelipe@gmail.com",
  registerAt: "01/04/2024",
  checkIn: "04/04/2024"
}

function addAttendee() {
  const tableBody = document.querySelector('tbody')
  const attendeeRow = tableBody.firstElementChild
  const newAttendee = attendeeRow.cloneNode(true)

  const attendeName = newAttendee.querySelector('.attendee-name')
  const attendeEmail = newAttendee.querySelector('.attendee-email')
  const attendeRegisterAt = newAttendee.querySelector('.attendee-register-at')
  const attendeCheckIn = newAttendee.querySelector('.attendee-check-in')
  
  attendeName.textContent = attendee.name
  attendeEmail.textContent = attendee.email
  attendeRegisterAt.textContent = attendee.registerAt
  attendeCheckIn.textContent = attendee.checkIn
  
  tableBody.appendChild(newAttendee)
}
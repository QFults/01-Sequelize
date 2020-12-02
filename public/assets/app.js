
document.getElementById('addUser').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/users', {
    name: document.getElementById('name').value,
    isHere: false
  })
    .then(() => location.reload())
    .catch(err => console.error(err))
})

document.addEventListener('click', event => {
  if (event.target.className === 'isHere') {
    axios.put(`/api/users/${event.target.dataset.id}`, { isHere: true })
    .then(() => location.reload())
    .catch(err => console.error(err))
  } else if (event.target.className === 'delete') {
    axios.delete(`/api/users/${event.target.dataset.id}`)
    .then(() => location.reload())
    .catch(err => console.error(err))
  }
})
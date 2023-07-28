const avatar = document.getElementById('avatar')
const id = document.getElementById('id')
const user = document.getElementById('user')
const createdAccount = document.getElementById('account')
const searchFrom = document.forms['user-code']
const searchInput = searchFrom.querySelector('input')

searchFrom.addEventListener('submit', (e) => {
  e.preventDefault()
  const searchValue = searchInput.value
  if (searchValue === '') {
    alert('Por favor, digite um Id do Discord!')
    return
  }
  fetch(`https://discordlookup.mesavirep.xyz/v1/user/${searchValue}`)
    .then(response => response.json())
    .then(data => {
      avatar.src = data.avatar
      id.innerText = data.id
      user.innerText = data.username
      createdAccount.innerText = data.created_at
    })
    .catch(error => {
      console.log(error)
    })
})

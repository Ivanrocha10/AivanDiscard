const avatar = document.querySelector('avatar')
const id = document.getElementById('id')
const user = document.getElementById('user')
const createdAccount = document.getElementBy('account')
const searchFrom = document.forms['user-code']
const searchInput = searchFrom.querySelector('input')

searchFrom.addEventListener('submit', e => {
  e.preventDefault()
  const searchValue = searchInput.value

  fetch(`https://discordlookup.mesavirep.xyz/v1/user/${searchId}`)
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

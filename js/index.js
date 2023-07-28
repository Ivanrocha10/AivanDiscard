const avatar = document.getElementById('avatar')
const id = document.getElementById('id')
const banner = document.getElementById('banner')
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

    .then((response) => response.json())
    .then((data) => {
      const formattedDate = new Date(data.created_at).toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      })
      if (data.banner.link) {
        banner.style.backgroundImage = `url(${data.banner.link})`
      } else {
        banner.style.backgroundColor = data.banner.color
      }

      avatar.src = data.avatar.link
      id.innerText = data.id
      user.innerText = data.tag
      createdAccount.innerText = formattedDate
    })
    .catch((error) => {
      console.log(error)
    })
})

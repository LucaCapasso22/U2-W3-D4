const API_KEY = 'nVavvxZz82e3I7dEGvvFr2WzSCOHLxid80EFnzewDfJgkLn5kBiusuzV'

const imgChange = document.querySelectorAll('img')
const loadBtn = document.getElementById('loadBtn')
const loadBtn2 = document.getElementById('loadBtn2')
const id = document.querySelectorAll('text-muted')
fetch('https://api.pexels.com/v1/search?query=pisatower&per_page=9', {
  method: 'GET',
  headers: {
    Authorization: API_KEY,
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Dati non trovati')
    }
  })
  .then((data) => {
    console.log(data)
    const object_data = data
    console.log(object_data.photos[0].src.landscape)
    return object_data.photos[0].src.landscape
  })
  .then((new_img) => {
    const imgLoop = function () {
      for (let i = 0; i < imgChange.length; i++) {
        const element = imgChange[i]
        imgChange[i].setAttribute('src', `${new_img}`)
      }
    }
    loadBtn.addEventListener('click', imgLoop)
  })
  .catch((error) => {
    console.error('Errore:', error)
    imgLoop()
  })

fetch('https://api.pexels.com/v1/search?query=Giovanni&per_page=9', {
  method: 'GET',
  headers: {
    Authorization: API_KEY,
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Dati non trovati')
    }
  })
  .then((data) => {
    console.log(data)
    const object_data = data
    console.log(object_data.photos[0].src.landscape)
    return object_data.photos[0].src.landscape
  })
  .then((new_img) => {
    const imgLoop = function () {
      for (let i = 0; i < imgChange.length; i++) {
        const element = imgChange[i]
        imgChange[i].setAttribute('src', `${new_img}`)
      }
    }
    loadBtn2.addEventListener('click', imgLoop)
  })
  .catch((error) => {
    console.error('Errore:', error)
    imgLoop()
  })

document.querySelectorAll('button').forEach((e) => {
  if (e.textContent.trim() === 'Edit') {
    e.textContent = 'Hide'
    e.classList.add('hideBtn')
  }
})
const hideBtn = document.querySelectorAll('.hideBtn')

hideBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.card')
    if (card) {
      card.classList.add('d-none')
    }
  })
})

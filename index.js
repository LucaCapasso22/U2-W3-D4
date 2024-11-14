const API_KEY = 'nVavvxZz82e3I7dEGvvFr2WzSCOHLxid80EFnzewDfJgkLn5kBiusuzV'

const imgChange = document.querySelectorAll('img')
const loadBtn = document.getElementById('loadBtn')
const loadBtn2 = document.getElementById('loadBtn2')

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

const buttons = document.querySelectorAll('button').forEach((e) => {
  if (e.textContent.trim() === 'Edit') {
    e.textContent = 'Hide'
  }
  e.addEventListener('click', () => {
    e.classList.add('d-none')
  })
})

console.log(buttons)

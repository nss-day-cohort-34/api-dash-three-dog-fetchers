const photoContainer = document.querySelector("#photos_data")


const fetchPhotoData = () => {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(data => data.json())
    .then(photos => {
      for (let i = 0; i < 50; i++) {
        const singlePhoto = photos[i];
        const htmlPhoto = htmlRep(singlePhoto)
        photoContainer.innerHTML += htmlPhoto
       
      }
    })
}

fetchPhotoData()


const htmlRep = (Object) => {
    return `
    <section class="photo_item">
    <a href="${Object.url}"><img src="${Object.thumbnailUrl}"></a>
    <h3 class="photoTitle">${Object.title}</h3>
    </section>
    `
  }
  
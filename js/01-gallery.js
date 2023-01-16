import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('afterbegin', cardGallery(galleryItems))

function cardGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class= "gallery__item">
     <a class = "gallery__link" href = "${original}"/>
             <img class = "gallery__image"
            src = "${preview}"           
            data-source = "${original}"
            alt = "${description}" />
        </a>
      </div>`;
    }).join('');  
}


galleryEl.addEventListener('click', onClickImage)

function onClickImage(event) {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
       return
    }
    const onImageModal = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="auto" >
`)
    onImageModal.show()

    galleryEl.addEventListener('keydown',(event) => {
        if(event.code === 'Escape'){
        onImageModal.close()
        }
    })
 
}







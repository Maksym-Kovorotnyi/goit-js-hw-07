import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('afterbegin', cardGallery(galleryItems))

function cardGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class = "gallery__item" href = "${original}"/>
             <img class = "gallery__image"
            src = "${preview}"           
            alt = "${description}" />
        </a>
      </div>`;
    }).join('');  
}
galleryEl.addEventListener('click', onImageClick)
function onImageClick(event) {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return;
    }
}
const lightbox  = new SimpleLightbox('a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
})
    

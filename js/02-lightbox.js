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

const lightbox  = new SimpleLightbox('gallery__item', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
})
    

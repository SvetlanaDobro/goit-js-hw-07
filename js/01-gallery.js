import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', cardsMarkup);

gallery.addEventListener('click', onPalletteGalleryClick);

function createGalleryCardMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
          <a class="gallery__link"
             href="${original}">
            <img class="gallery__image"
               src="${preview}" 
               data-source="${original}" 
               alt="${description}" />
          </a>
        </li>`;
    }).join('');
};

function onPalletteGalleryClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    const originalImageUrl = evt.target.dataset.source;

    if (originalImageUrl) {
    const instance = basicLightbox.create(`
      <img src="${originalImageUrl}" width="800" height="600">
    `);
        instance.show();

    document.addEventListener('keydown', onKeyDown);

  function onKeyDown(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }      
  }
};


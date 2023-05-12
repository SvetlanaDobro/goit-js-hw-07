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
               
               alt="${description}" />
          </a>
        </li>`;
    }).join('');
};

function onPalletteGalleryClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
  const originalImageUrl = evt.target.src;
  console.log(originalImageUrl);

  //  const imagesWithCaptions = galleryItems.map(({ preview, original, description }) => ({
  // [original]: { caption: description }
  //  })).reduce((result, item) => Object.assign(result, item), {});
  
  
  const imagesWithCaptions = {};
  for (const item of galleryItems) {
  imagesWithCaptions[item.original] = { caption: item.description };
}

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionsData: imagesWithCaptions,
  });

  console.log(lightbox);
}



console.log(galleryItems);

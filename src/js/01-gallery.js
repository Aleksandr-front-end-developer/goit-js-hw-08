// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galaryWrapper = document.querySelector('.gallery');

function markup(galleryItems) {
	return galleryItems.map(({ preview, original, description }) => {
		return `<li class="gallery__item">
							<a class="gallery__link" href="${original}">
								<img
									class="gallery__image"
									src="${preview}"
									data-source="${original}"
									alt="${description}"
								/>
							</a>
						</li>`
	}).join('');
}

const markupGallary = markup(galleryItems);

galaryWrapper.innerHTML = markupGallary;

galaryWrapper.addEventListener('click', showModalImage);

let gallery = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 250
});

function showModalImage(event) {
	event.preventDefault();

	if (event.target.nodeName !== 'IMG') {
		return
	}

	gallery.on('show.simplelightbox', function () {
	});

}
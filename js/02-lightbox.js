import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryDivEl = document.querySelector(".gallery");
let makeImgMarkup = galleryItems.map(({ preview, original, description }) => {
	return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
});

galleryDivEl.insertAdjacentHTML("afterbegin", makeImgMarkup.join(""));

new SimpleLightbox(".gallery__item", {
	captionType: "attr",
	captionsData: "alt",
	captionPosition: "bottom",
	captionDelay: 250,
});

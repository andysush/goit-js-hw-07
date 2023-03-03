import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryDivEl = document.querySelector(".gallery");
let makeImgMarkup = galleryItems.map(({ preview, original, description }) => {
	return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`;
});

galleryDivEl.insertAdjacentHTML("afterbegin", makeImgMarkup.join(""));

galleryDivEl.addEventListener("click", onImgClick);

function onImgClick(event) {
	event.preventDefault();
	if (event.target.nodeName !== "IMG") {
		return;
	}
	const getBigImg = event.target.getAttribute("data-source");
	document.addEventListener("keydown", onEscKeyClose);
	const instance = basicLightbox.create(
		`
		<img width="1400" height="900" src="${getBigImg}">
	`
	);
	instance.show();

	function onEscKeyClose(event) {
		if (event.code === "Escape") {
			instance.close();
		}
		document.removeEventListener("keydown", onEscKeyClose);
	}
}

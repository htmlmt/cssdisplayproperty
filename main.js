document.querySelectorAll('.js-css-value').forEach((cssValueElement) => {
	const cssValue = cssValueElement.innerText;
	const cssProperty = cssValueElement.parentNode.parentNode.querySelector('code').innerText;

	cssValueElement.setAttribute('aria-label', `Apply a value of ${cssValue} to the ${cssProperty} of the main element.`);

	cssValueElement.addEventListener('click', () => {
		cssValueElement.parentNode.querySelectorAll('.js-css-value').forEach((element) => {
			element.classList.remove('active');
		});

		cssValueElement.classList.add('active');

		applyValueToCssProperty(cssProperty, cssValue);
	});
});

const elementsToStyle = document.querySelectorAll('.js-element-to-style');

function applyValueToCssProperty(property, value) {
	elementsToStyle.forEach((elementToStyle) => {
		elementToStyle.style[property] = value;
	});
}

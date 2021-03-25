const range = document.querySelector('.card-range')
const $pageView = document.querySelector('.card-pageviews')
const $price = document.querySelector('.card-price')
const checkbox = document.querySelector('.card-checkbox')
const labelCheckbox = document.querySelector('.card-pseudo--item')

range.addEventListener('mouseup', giveValue = () => {

	if(range.valueAsNumber === 8) {
		$pageView.innerHTML = '10K PAGEVIEWS'
		$price.innerHTML = '$8'		
	} else if(range.valueAsNumber === 12) {
		$pageView.innerHTML = '50K PAGEVIEWS'
		$price.innerHTML = '$12'
	} else if(range.valueAsNumber === 16) {
		$pageView.innerHTML = '100K PAGEVIEWS'
		$price.innerHTML = '$16'
	} else if(range.valueAsNumber === 24) {
		$pageView.innerHTML = '500K PAGEVIEWS'
		$price.innerHTML = '$24'
	} else if(range.valueAsNumber === 36) {
		$pageView.innerHTML = '1M PAGEVIEWS'
		$price.innerHTML = '$36'
	}	
	
})

console.log(checkbox.checked = false)

let checkboxIsChecked = () => checkbox.checked
let checkboxIsUnchecked = () => checkbox.checked = false

labelCheckbox.addEventListener('click', discount = () => {
	let valorActual = range.valueAsNumber
	if (checkboxIsChecked) {
		valorActual *= .25
		let valorFinal = range.valueAsNumber - valorActual
		console.log(valorFinal)
		$price.innerHTML = valorFinal
	} 
	if (checkboxIsUnchecked === 1) {
		$price.innerHTML = valorActual
	}
}) 


const range = document.querySelector('.card-range')
const $pageView = document.querySelector('.card-pageviews')
const $price = document.querySelector('.card-price')
const checkbox = document.querySelector('.card-checkbox')
const labelCheckbox = document.querySelector('.card-pseudo--item')

range.addEventListener('mouseup', giveValue = () => {

	if(range.valueAsNumber === 8) {
		$pageView.innerHTML = '10K PAGEVIEWS'
		$price.innerHTML = '$8.00'		
	} else if(range.valueAsNumber === 12) {
		$pageView.innerHTML = '50K PAGEVIEWS'
		$price.innerHTML = '$12.00'
	} else if(range.valueAsNumber === 16) {
		$pageView.innerHTML = '100K PAGEVIEWS'
		$price.innerHTML = '$16.00'
	} else if(range.valueAsNumber === 24) {
		$pageView.innerHTML = '500K PAGEVIEWS'
		$price.innerHTML = '$24.00'
	} else if(range.valueAsNumber === 36) {
		$pageView.innerHTML = '1M PAGEVIEWS'
		$price.innerHTML = '$36.00'
	}	
	
})

range.addEventListener('touchend', giveValue)

/* checkbox */
let checkboxIsChecked = () => checkbox.checked

labelCheckbox.addEventListener('click', discount = () => {
	let discount = range.valueAsNumber
	if (checkboxIsChecked) {
		discount *= .25
		let discountValue = range.valueAsNumber - discount
		$price.innerHTML = `$${discountValue}.00`

	} 
	checkbox.checked = false
})


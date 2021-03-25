const range = document.querySelector('.card-range')
const $pageView = document.querySelector('.card-pageviews')
const $price = document.querySelector('.card-price')
const checkbox = document.querySelector('.card-checkbox')
const labelCheckbox = document.querySelector('.card-pseudo--item')

const prices = {
	firstPrice: 8,
	secondPrice: 12,
	thirdPrice: 16,
	fourthPrice: 24,
	fifthPrice: 36,
}

range.addEventListener('mouseup', giveValue = () => {

	if(range.valueAsNumber === -2) {
		$pageView.innerHTML = '10K PAGEVIEWS'
		$price.innerHTML = '$8.00'		
	} else if(range.valueAsNumber === -1) {
		$pageView.innerHTML = '50K PAGEVIEWS'
		$price.innerHTML = '$12.00'
	} else if(range.valueAsNumber === 0) {
		$pageView.innerHTML = '100K PAGEVIEWS'
		$price.innerHTML = '$16.00'
	} else if(range.valueAsNumber === 1) {
		$pageView.innerHTML = '500K PAGEVIEWS'
		$price.innerHTML = '$24.00'
	} else if(range.valueAsNumber === 2) {
		$pageView.innerHTML = '1M PAGEVIEWS'
		$price.innerHTML = '$36.00'
	}
	
})
// event smartphone
range.addEventListener('touchend', giveValue)

/* checkbox */
let checkboxIsChecked = () => checkbox.checked

labelCheckbox.addEventListener('click', discount = () => {
	const prices = {
		firstPrice: 8, // -2
		secondPrice: 12, // -1
		thirdPrice: 16, // 0
		fourthPrice: 24, // 1
		fifthPrice: 36, // 2
	}
	let discount = 0

	if (checkbox.checked && range.valueAsNumber === -2) {
		discount = prices.firstPrice
		discount *= .25
		let discountValue = prices.firstPrice - discount
		$price.innerHTML = `$${discountValue}.00`
		return
		// console.log(discount)
	} 
	if (checkbox.checked && range.valueAsNumber === -1) {
		discount = prices.secondPrice
		discount *= .25
		let discountValue = prices.secondPrice - discount
		$price.innerHTML = `$${discountValue}.00`
		return
	}
	if (checkbox.checked && range.valueAsNumber === 0) {
		discount = prices.thirdPrice
		discount *= .25
		let discountValue = prices.thirdPrice - discount
		$price.innerHTML = `$${discountValue}.00`
		return
	}
	if (checkbox.checked && range.valueAsNumber === 1) {
		discount = prices.fourthPrice
		discount *= .25
		let discountValue = prices.fourthPrice - discount
		$price.innerHTML = `$${discountValue}.00`
		return
	}
	if (checkbox.checked && range.valueAsNumber === 2) {
		discount = prices.fifthPrice
		discount *= .25
		let discountValue = prices.fifthPrice - discount
		$price.innerHTML = `$${discountValue}.00`
		return
	}
	// console.log(discountValue)
})


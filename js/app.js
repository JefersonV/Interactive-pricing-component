const range = document.querySelector('.card-range')
const $pageView = document.querySelector('.card-pageviews')
const $price = document.querySelector('.card-price')
const checkbox = document.querySelector('.card-checkbox')
const labelCheckbox = document.querySelector('.card-pseudo--item')
console.log(range.value)
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
		//gradient input:range
		range.classList.add('gradient1')
		range.classList.remove('gradient-initial', 'gradient2', 'gradient3', 'gradient4', 'gradient5')		
	} else if(range.valueAsNumber === -1) {
		$pageView.innerHTML = '50K PAGEVIEWS'
		$price.innerHTML = '$12.00'
		range.classList.add('gradient2')
		range.classList.remove('gradient-initial','gradient1', 'gradient3', 'gradient4', 'gradient5')
	} else if(range.valueAsNumber === 0) {
		$pageView.innerHTML = '100K PAGEVIEWS'
		$price.innerHTML = '$16.00'
		range.classList.add('gradient3')
		range.classList.remove('gradient-initial','gradient1', 'gradient2', 'gradient4', 'gradient5')
	} else if(range.valueAsNumber === 1) {
		$pageView.innerHTML = '500K PAGEVIEWS'
		$price.innerHTML = '$24.00'
		range.classList.add('gradient4')
		range.classList.remove('gradient-initial','gradient1', 'gradient2', 'gradient3', 'gradient5')
	} else if(range.valueAsNumber === 2) {
		$pageView.innerHTML = '1M PAGEVIEWS'
		$price.innerHTML = '$36.00'
		range.classList.add('gradient5')
		range.classList.remove('gradient-initial','gradient1', 'gradient2', 'gradient3', 'gradient4')
	}
	checkbox.checked = true
})
// event smartphone
range.addEventListener('touchend', giveValue)

labelCheckbox.addEventListener('click', discount = () => {
	// console.log(checkbox.checked)
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

labelCheckbox.addEventListener('click', checkoutChangeValue = () => {
	if(checkbox.checked === false && range.valueAsNumber === -2) {
		$price.innerHTML = `$${prices.firstPrice}.00`
	}
	if(checkbox.checked === false && range.valueAsNumber === -1) {
		$price.innerHTML = `$${prices.secondPrice}.00`
	}

	if(checkbox.checked === false && range.valueAsNumber === 0) {
		$price.innerHTML = `$${prices.thirdPrice}.00`
	}
	if(checkbox.checked === false && range.valueAsNumber === 1) {
		$price.innerHTML = `$${prices.fourthPrice}.00`
	}
	if(checkbox.checked === false && range.valueAsNumber === 2) {
		$price.innerHTML = `$${prices.fifthPrice}.00`
	}
})
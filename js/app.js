const range = document.querySelector('.card-range')
const $pageView = document.querySelector('.card-pageviews')
const $price = document.querySelector('.card-price')

range.addEventListener('mouseup', darValor = () => {

	const prices = {
		eightPrice: 8, //10k
		twelvePrice: 12, //50k
		sixteenPrice: 16, //100k
		twentyFourPrice: 24, //500k
		thirtySixPrice: 36, //1M
	}
	//prueba para nueva pc
	if(range.valueAsNumber === prices.eightPrice) {
		$pageView.innerHTML = '10K PAGEVIEWS'
		$price.innerHTML = '$8'
		
	} else if(range.valueAsNumber === prices.twelvePrice) {
		$pageView.innerHTML = '50K PAGEVIEWS'
		$price.innerHTML = '$12'
	} else if(range.valueAsNumber === prices.sixteenPrice) {
		$pageView.innerHTML = '100K PAGEVIEWS'
		$price.innerHTML = '$16'
	} else if(range.valueAsNumber === prices.twentyFourPrice) {
		$pageView.innerHTML = '500K PAGEVIEWS'
		$price.innerHTML = '$24'
	} else if(range.valueAsNumber === prices.thirtySixPrice) {
		$pageView.innerHTML = '1M PAGEVIEWS'
		$price.innerHTML = '$36'
	}
	
})

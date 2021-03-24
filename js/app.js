const range = document.querySelector('.card-range')
const pageView = document.querySelector('.card-pageviews')

range.addEventListener('click', darValor)

console.log(range.value)
const pages = {
	eightPrice: '10k Pageviews',
	twelvePrice: '50k Pageviews',
	sixteen: '100k Pageviews',
	twentyFour: '500k Pageviews',
	thirtySix: '1m Pageviews',
}

function darValor () {
	if(range.value === 8) {
		console.log(range.value)
		pageView.innerHTML = pages.eightPrice
	}
}
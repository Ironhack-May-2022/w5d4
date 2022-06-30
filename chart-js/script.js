const apiUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo'

const printChart = stockData => {
	// console.log(stockData)
	const dailyData = stockData['Time Series (Daily)']
	console.log(dailyData)
	// this is the data for the x axis
	const stockDates = Object.keys(dailyData)
	console.log(stockDates)
	// data for the y axis
	const stockPrices = stockDates.map(date => {
		return dailyData[date]['4. close']
	})
	console.log(stockPrices)

	// draw the chart
	const ctx = document.querySelector('#myChart').getContext('2d')

	new Chart(ctx, {
		type: 'bar',
		data: {
			// x axis
			labels: stockDates,
			datasets: [
				{
					label: 'Stock Chart',
					backGroundColor: 'rgb(255, 99, 132',
					borderColor: 'rgb(255, 99, 132',
					// y axis
					data: stockPrices
				}
			]
		}
	})
}

axios.get(apiUrl)
	.then(response => {
		printChart(response.data)
	})
	.catch(err => {
		console.log(err)
	})
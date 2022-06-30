const getData = input => {
	// this executes a get request 
	// using axios
	// axios.get(`https://rickandmortyapi.com/api/character?name=${input}`)
	// 	.then(response => {
	// 		console.log(response)
	// 		const character = response.data.results[0]
	// 		// update the dom
	// 		document.querySelector('#name').innerText = character.name
	// 		document.querySelector('img').setAttribute('src', character.image)
	// 	})
	// 	.catch(err => {
	// 		console.log(err)
	// 	})

	// using fetch (this is part of vanilla javascript)

	fetch(`https://rickandmortyapi.com/api/character?name=${input}`)
		.then(response => response.json())
		.then(data => {
			console.log(data)
			const character = data.results[0]
			// update the dom
			document.querySelector('#name').innerText = character.name
			document.querySelector('img').setAttribute('src', character.image)
		})
		.catch(err => {
			console.log(err)
		})
}


document.querySelector('button').addEventListener('click', () => {
	const input = document.querySelector('#character').value
	console.log(input)
	// get the data from the rick and morty api
	getData(input)
})
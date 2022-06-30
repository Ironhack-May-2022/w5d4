const router = require("express").Router();
const Room = require('../models/Room')

router.get('/', (req, res, next) => {
	// if you want to show only the rooms that the logged in user
	// created: 
	// Room.find({ owner: req.user._id })
	// 	.then(roomsFromDB => {
	// 		res.render('rooms/index', { rooms: roomsFromDB })
	// 	})
	// 	.catch(err => {
	// 		next(err)
	// 	})
	Room.find()
		.then(roomsFromDB => {
			res.render('rooms/index', { rooms: roomsFromDB })
		})
		.catch(err => {
			next(err)
		})
});

router.get('/add', (req, res, next) => {
	res.render('rooms/add')
});

router.post('/', (req, res, next) => {
	const { name, price } = req.body
	console.log(req.user)
	const userId = req.user._id
	Room.create({ name, price, owner: userId })
		.then(room => {
			console.log(room)
			res.redirect('/rooms')
		})
		.catch(err => {
			next(err)
		})
});

router.get('/:id/delete', (req, res, next) => {
	const roomId = req.params.id
	const query = { _id: roomId }
	if (req.user.role === 'user') {
		query.owner = req.user._id
		// now the query would look like this:
		// { _id: roomId, owner: req.user._id }
	}
	Room.findOneAndDelete(query)
		.then(() => {
			res.redirect('/rooms')
		})
		.catch(err => {
			next(err)
		})
});


module.exports = router;

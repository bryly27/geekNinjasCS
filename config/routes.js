var subs = require('../controllers/subs');

module.exports = function(app) {
	
	app.get("/", function(req, res) {
		// mongs.index(req, res);
		res.render("index");
	});

	app.get("/temp2", function(req, res) {
		// mongs.add(req, res);
		res.render("temp2");
	});

	app.post("/add", function(req, res){
		console.log(req.body);
		subs.add(req, res);
	});

	// app.post('/profile/:id', function(req, res){
	// 	mongs.profile(req, res);
	// });
	// app.post('/edit/:id', function(req, res){
	// 	mongs.edit(req, res);
	// })
	// app.post('/delete/:id', function(req, res){
	// 	mongs.delete(req, res);
	// })
}
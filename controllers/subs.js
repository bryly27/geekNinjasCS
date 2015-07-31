// require mongoose and load the model that we are going to use
// var path = require('path');
var mongoose = require('mongoose');
var Sub = mongoose.model('Subscriber');
// var nodemailer = require('nodemailer');


// var transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//       user: 'dannyroberts150@gmail.com',
//       pass: 'droberts150!'
//   }
// });


// create an object with methods that we are going to export for our routes file to use
var subs = {}

subs.add = function(req, res){


	// var mailOptions = {
 //    from: 'dannyroberts150@gmail.com', // sender address 
 //    to: req.body.email, // list of receivers 
 //    subject: 'Hello', // Subject line 
 //    // text: 'Hello world', // plaintext body 
 //    html:  // html body 
	// };

	// transporter.sendMail(mailOptions, function(error, info){
 //    if(error){
 //        return console.log(error);
 //    }
 //    console.log('Message sent: ' + info.response);
	// });
	




	// console.log(req.body);
	// var sub = new Sub(req.body);
	// sub.save(function(err, results){
	// 	if(err){
	// 		console.log("error", err);
	// 	}else{
	// 		res.json(results);
	// 	}
	// })
}

// index method (loads existing mongs and renders the index view)
// mongs.index = function(req, res) {
	// Mong.find({}, function(err, results) {
	// 	if(err) {
	// 		res.send('something went wrong!');
	// 	} else {
	// 		res.render('index', {mongs: results});
	// 	}
	// })
	// res.render("index");
// }

// add method for adding a mong to the db
// mongs.add = function(req, res) {
	// var new_mong = new Mong({name: req.body.name, age: req.body.age});
	// new_mong.save(function(err) {
	// 	if(err) {
	// 		res.send('something went wrong!');
	// 	} else {
	// 		res.redirect('/');
	// 	}
	// })
// }





// mongs.delete = function(req, res){
// 	Mong.remove({_id: req.params.id}, function(err, results){
// 		res.redirect('/');
// 	})
// }

module.exports = subs;






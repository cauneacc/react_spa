var mysql = require('mysql');
var nodemailer = require('nodemailer'); 

const db = mysql.createConnection ({
	host: 'localhost',
	user: 'user',
	password: 'password',
	database: 'spa_server'
});

// connect to database
db.connect((err) => {
	if (err) {
		throw err;
	}
	console.log('Connected to database');
});
global.db = db;

var transporter = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "cf151f6e64ded5",
		pass: "f7adfb862e23b9"
	}
});

function sendEmail(email){
	var mailOptions = {
		from: 'bot@spaapp.com',
		to: email,
		subject: 'Reminder to write about your day',
		text: 'Write about you day. It\'s easy!'
	};
	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
}

whereToSendEmails=[];
let query = "select data, email from calendar;";
db.query(query, (err, result) => {
	if (err) {
		console.log(query);
		throw err;
	}
	var max = result.length;
	currentDate=new Date();
	for (var i = 0; i < max; i++) {
		dates=JSON.parse(result[i].data);
		maxDates=dates.length;
		for (var dateCounter = 0; dateCounter < maxDates; dateCounter++) {
			auxDate=new Date(dates[dateCounter].dateText);
			if(currentDate.setHours(0,0,0,0)===auxDate.setHours(0,0,0,0)){
				if(dates[dateCounter].text===''){
					whereToSendEmails.push(result[i].email);
					maxDates=dateCounter;
				}
			}
		}
	}
	console.log('whereToSendEmails',whereToSendEmails);
	for (var i = 0; i < whereToSendEmails.length; i++) {
		sendEmail(whereToSendEmails[i]);
	}
	
	db.end();
});



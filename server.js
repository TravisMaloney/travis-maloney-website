const express = require('express');
const app = express();
const engines = require('consolidate');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.engine('html', engines.mustache);
app.set('view engine', 'html');

// NEW CODE
app.use('/public', express.static(__dirname + '/public'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/stylesheets', express.static(__dirname + '/stylesheets'));


// END OF NEW CODE

app.get("/", function(req,res){
    res.render('index.html')
});

app.listen(8080, () => {
	console.log('Server Started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});

app.get('/contact', function (req, res) {
  var mailOpts, smtpTrans;
  //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
  smtpTrans = nodemailer.createTransport({
      service: 'Gmail',
      host: "smtp.gmail.com",
      auth: {
          user: "maloney.travis1@gmail.com",
          pass: ''
      }
  });
  //Mail options
  mailOpts = {
      to: 'travis.maloney1@gmail.com',
      subject: req.query.subject,
      text: req.query.contentmessage + ' .......from ' + req.query.name + ' at ' + req.query.from
  };

  smtpTrans.sendMail(mailOpts, function (error, response) {
      if(error){
            console.log(error);
        res.end('');
     }else{
            console.log("Message sent: " + response.message);
        res.end('');
         }
  });
});

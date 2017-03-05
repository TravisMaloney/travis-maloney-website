var express = require('express')
var app = express()
var router = express.Router();


app.set('port', (process.env.PORT || 80))
app.use(express.static(__dirname + '/public'))

router.get('/', function(request, response) {
  response.render('index')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

module.express = router;
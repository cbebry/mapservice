exports.view = function(params) {

	return {
		handler: function(request) {
			console.log("Inside home.controller.js::view");
			//var mu = require('mu2');
			//mu.root = __dirname + '/../views/home';

			//var theReturn = function(request) {
			//	return function(data) { request.reply(data.toString()); }
			//}
			
			request.reply.view("home/home.html", {greeting: 'hello world' }).send();
			//mu.compileAndRender('home.mustache', {'welcome': 'Welcome!'}).on('data', theReturn(request));
		}
	};
};
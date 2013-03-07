exports.view = function(params) {

	return {
		handler: function(request) {
			console.log("Inside home.controller.js::view");
			//var mu = require('mu2');
			//mu.root = __dirname + '/../views/home';

			//var theReturn = function(request) {
			//	return function(data) { request.reply(data.toString()); }
			//}
			
			request.reply("temporary until view templating is in");
			//mu.compileAndRender('home.mustache', {'welcome': 'Welcome!'}).on('data', theReturn(request));
		}
	};
};
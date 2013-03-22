exports.update = function(params) {

	return {
		handler: function(request) {
			console.log("Inside util.controller.js::update");
			
			var sys = require('sys')
			var exec = require('child_process').exec;
			function puts(error, stdout, stderr) { sys.puts(stdout) }
			exec("git pull --all", puts);
			
			request.reply.view("home/home.html", {greeting: 'Update complete' }).send();
		}
	};
};
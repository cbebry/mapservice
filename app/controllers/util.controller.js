//Currently defunct. Don't re-enable this for now.
//Probably will end up using a tool like Capistrano instead.
exports.update = function(params) {

	return {
		handler: function(request) {
			console.log("Inside util.controller.js::update");
			
			var sys = require('sys')
			var exec = require('child_process').exec;
			
			exec("git pull --all", function (error, stdout, stderr) {
				sys.puts(stdout);
				request.reply.view("home/home.html", {greeting: stdout }).send();
			});
		}
	};
};

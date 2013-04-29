exports.view = function(params) {

	return {
		handler: function(request) {
			console.log("Inside home.controller.js::view");
            
			request.reply.view("home/home", {greeting: 'hello world' });
		}
	};
};
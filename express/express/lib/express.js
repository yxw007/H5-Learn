const Application = require("./application");
const Router = require("./router");

module.exports = createApplication;

function createApplication() {
	return new Application();
}

createApplication.Router = Router;

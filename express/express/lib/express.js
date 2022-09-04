const Application = require("./application");
const Router = require("./router");
const Static = require("../middleware/static");

module.exports = createApplication;

function createApplication() {
	return new Application();
}

createApplication.Router = Router;
createApplication.static = Static;

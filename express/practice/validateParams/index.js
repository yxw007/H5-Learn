const express = require('express');
const app = express();
const port = 3000;

// Middleware function to validate request parameters
function validateParams(req, res, next) {
	const { param } = req.query;
	if (param && param === 'valid') {
		next(); // Proceed to the next middleware or route handler
	} else {
		res.status(400).json({ error: 'Invalid parameter' }); // Return error message
	}
}

// Route that uses the middleware
app.get('/demo', validateParams, (req, res) => {
	res.send('Request parameters are valid!');
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

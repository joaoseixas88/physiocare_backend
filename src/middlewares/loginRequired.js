const jwt = require("jsonwebtoken");

const loginRequired = async (req, res, next) => {
	const { authorization } = req.headers;

	if (!authorization) {
		return res.status(401).json({ errors: ["Login required"] });
	}
	const [, token] = authorization.split(" ");

	try {
		const data = await jwt.verify(token, process.env.TOKEN_SECRET);

		const { id, email } = data;


		req.user = {
			id, email
		};

		return next();

	} catch (err) {
		return res.status(401).json({ errors: ["Expired or invalid token"] });
	}
};


module.exports =  { loginRequired };

import jwt from 'jsonwebtoken';
import config from '../config';

export default (req, res, next) => {
	const authorizationHeader = req.headers['authorization'];
	let token;

	if(authorizationHeader){
		token = authorizationHeader.split(' ')[1]
	}
	if(token){
		jwt.verify(token, config.jwtsecret, (err, decoded) => {

			if(err){
				res.status(401).json({ error: 'Failed to authenticate' })
			} else {
				req.userId = decoded.id;
				next();
			}
		})
	}else{
		res.status(403).json({ 
			error: 'No token provided'
		});
	}
}
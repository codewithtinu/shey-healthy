const jwt = require('jsonwebtoken');

module.exports = async(req, res, next) => {
    try {
        const token = req.headers["authorization"].split(" ")[1];
    // verify the token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err){
            return res.status(401).send({message: "Invalid token", success: false});
        }else {
            req.body.userId = decoded.id;
            next();
        }
    })
    } catch (error) {
        res.status(401).send({message: 'Auth faild', success:false})
    }
}
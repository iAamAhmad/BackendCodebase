const jwt=require("jsonwebtoken");

const authenticateWithToken=(req,res,next)=>{
    try {
         req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
        let token = req.headers.authorization.split(" ")[1];

        if(!token){
            return res.status(401).json({message:"Access Denied , token missing"})
        }
    
        jwt.verify(token,process.env.PRIVATE_KEY,(err, user)=>{
            if(err){
                return res.status(403).json({message:"You are not authorized"})
            }
            req.user=user;
            next()
        }  ) 
    } catch (error) {
        res.status(500).json("Internal server Error")
    }
}

const jwt = require("jsonwebtoken");

//* Role based middleware by passing parameter.
const authenticateWithRoleBase = (requiredRole) => {
  return (req, res, next) => {
    const token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Access Denied, token missing" });
    }

    const authToken = token.split(" ")[1];

    try {
      const user = jwt.verify(authToken, process.env.PRIVATE_KEY);

      if (requiredRole && user.role !== requiredRole) {
        return res.status(403).json({ message: "You are not authorized for this action" });
      }
      req.user = user;
      next();
    } catch (error) {
      return res.status(403).json({ message: "You are not authorized" });
    }
  };
};
//* In simple Way.
const authenticateWithTokenInSimpleWay = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access Denied, token missing" });
  }
  const authToken = token.split(" ")[1];
  try {
    const user = jwt.verify(authToken, process.env.PRIVATE_KEY);
    if (user.role === "admin") {
      req.user = user;
      next();
    } else {
      return res.status(403).json({ message: "You are not authorized for this action" });
    }
  } catch (error) {
    return res.status(403).json({ message: "You are not authorized" });
  }
};

module.exports = {authenticateWithToken,authenticateWithTokenInSimpleWay, authenticateWithRoleBase
};
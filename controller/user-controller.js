const user = require("../model/User");
const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = User.Users.find();
  } catch (err) {
    return console.log(err);
  }
  if (!users) {
    return res.status(500).json({ message: "Unexpected error" });
  }
  return res.status(200).json({ users });
};

const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (
    !name &&
    name.trim() === "" &&
    !email.trim() === "" &&
    !password.trim() === "") 
    {
    return res.status(422).json({ message: "Invalid Inputs" });
    }
  try{
  let user=new User({name, email, password});
  user=user.save
}
catch(err){
    return next(err)
}

if(!user)  {
    return res.status(500).json({ message: "err0r" });
}
return res.status(200).json({ user });
}
module.exports = { getAllUsers, signUp };

const User = require('../model/UserModel');


exports.getAllUsers = async(req,res) => {
    try{
     const docs = await User.find()

     res.status(200).json({
        status: 'sucess',
        data: docs 
      });
    }catch(e){
        res.status(400).json({
            status: 'fail',
            message: err.message,
          });
    }
}

exports.getUser = async(req,res) => {
    try{
     const id = req.params.id
     const docs = await User.findById(id)
     
     res.status(200).json({
        status: 'sucess',
        data: docs 
      });

    }catch(e){
        res.status(400).json({
            status: 'fail',
            message: err.message,
          });
    }
}

exports.createUser = async (req, res) => {
  try {
    const { email, login, password, passwordConfirm } = req.body;

    if (password !== passwordConfirm) {
      return res.status(400).json({
        status: 'fail',
        message: 'Passwords do not match',
      });
    }

    const newUser = await User.create({
      email,
      name: login,
      password,
      passwordConfirm,
    });

    newUser.password = undefined; 

    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (updates.password || updates.passwordConfirm) {
      return res.status(400).json({
        status: 'fail',
        message: 'Not for password updates.',
      });
    }

    const user = await User.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'No user found with that ID',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'No user found with that ID',
      });
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

const categoryValidationSchema={
  name:{
    in:['body'],
    exists:{
      errorMessage:'name feild is required'
    },
    notEmpty:{
      errorMessage:'name cannot be empty'
    },
    trim:true
  }
}
const categoryidValidationSchema={
  id:{
    in:['params'],
    isMongoId:{
      errorMessage:'invalid id format'
    }
  }
}
module.exports={
  categoryValidationSchema,
  categoryidValidationSchema
}
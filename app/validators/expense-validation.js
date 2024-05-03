const Category=require('../models/categories-mod')
const expenseValidationSchema={
  expenseDate:{
    in:['body'],
    exists:{
      errorMessage:'expense date is required'
    },
    notEmpty:{
      errorMessage:'expense date cannot be empty' 
    },
    isDate:{
      options:{format:'yyyy-mm-dd'}
    },
    custom:{
      options:function(value){
        if(new Date(value)>new Date()){
          throw new Error('expense date cannot be greater than today')
        }
        return true
      }
    }
  },
  title:{
    in:['body'],
    exists:{
      errorMessage:'title is required'
    },
    notEmpty:{
      errorMessage:'title cannot be empty'
    },
    trim:true
  },
  amount:{
    in:['body'],
    exists:{
      errorMessage:'amount is required'
    },
    notEmpty:{
      errorMessage:'amount cannot be empty'
    },
    trim:true
  },
  Category:{
    in:['body'],
    exists:{
      errorMessage:'category is required'
    },
    notEmpty:{
      errorMessage:'category cannot be empty'
    },
    isMongoId:{
      errorMessage:'invalid ObjectId provided'
    },
    custom:{
      options:function(value){
        return Category.findById(value)
        .then(category=>{
          if(!category){
            throw new Error('category id doesnot exist')
          }
          return true
        })
      }
    }

  }
}
const expenseIdValidationSchema={
  id:{
    in:['params'],
    isMongoId:{
      errorMessage:'invalid mongodb id'
    }
  }
}

module.exports={
  expenseValidationSchema,
  expenseIdValidationSchema
}
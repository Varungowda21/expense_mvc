const mongoose=require('mongoose')
const {Schema,model}=mongoose
const ExpenseSchema = new Schema({
  expenseDate:{
    type:Date ,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  amount:{
    type:Number,
    required:true,
    min:1
  },
  Category:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:'Category'
  },
  description:{
    type:String
  }
  })


  const Expense=model('Expense',ExpenseSchema)
module.exports=Expense


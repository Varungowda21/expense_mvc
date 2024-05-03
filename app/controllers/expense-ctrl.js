const { validationResult } = require('express-validator')
const Expense=require('../models/expense-mod')
const expenseCtrl={}
expenseCtrl.alllist=(req,res)=>{
  Expense.find()
  .then(expense=>{
    res.json(expense)
  })
  .catch(err=>{
    console.log(err)
    res.status(500).json({error:'Something went wrong'})
  })
}
expenseCtrl.createe=(req,res)=>{
  const errors=validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const body=req.body
  const expense=new Expense(body)
  expense.save()

  .then(expObj=>{
    res.status(201).json(expObj)
  })
  .catch(err=>{
    console.log(err)
    res.status(500).json({error:'Something went wrong'})
  })
}

expenseCtrl.remove=(req,res)=>{
  const errors=validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const id=req.params.id
  Expense.findByIdAndDelete(id)
  .then(expense=>{
    res.status(201).json(expense)
  })
  .catch(err=>{
    console.log(err)
    res.status(500).json({error:'Something went wrong'})
  })
}
expenseCtrl.update=(req,res)=>{
  const errors=validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const id= req.params.id
  const body=req.body
  Expense.findByIdAndUpdate(id,body,{new:true})
  .then(expense=>{
    res.status(201).json(expense)
  })
  .catch(err=>{
    console.log(err)
    res.status(500).json({error:'Something went wrong'})
  })
}

module.exports=expenseCtrl
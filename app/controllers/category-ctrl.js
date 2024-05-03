const { validationResult } = require('express-validator')
const Category=require('../models/categories-mod')
const categoryCtrl={}

categoryCtrl.createe=(req,res)=>{
  const errors=validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const body=req.body
  const catObj=new Category(body)
  catObj.save()
  .then(obj=>{
    res.status(201).json(obj)
  })
  .catch(err=>{
    console.log(err)
    res.status(500).json({error:'Something went wrong'})
  })
}
categoryCtrl.alllist=(req,res)=>{
  Category.find()
  .then(categories=>{
    res.json(categories)
  })

   .catch(err=>{
    console.log(err)
  res.status(500).json({error:'something went wrong'})
})
}
categoryCtrl.remove=(req,res)=>{
  const id=req.params.id
  Category.findByIdAndDelete(id)
  .then((category) => {
    if(!category){
      return res.status(404).json({error:'record not found'})
    }
    res.json(category)
  })
  .catch((err)=>{
    res.json(err)
  })
}
categoryCtrl.update=(req,res)=>{
  const errors=validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const id = req.params.id
  const body=req.body
  Category.findByIdAndUpdate(id,body,{new:true})
  .then(cat=>{
    if(!cat){
      return res.status(404).json({error:'record not found'})
    }
    return res.json(cat)
  })
  .catch(err=>{
    res.json(err)
  })
}

module.exports=categoryCtrl
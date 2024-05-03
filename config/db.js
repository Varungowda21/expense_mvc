const mongoose=require('mongoose')
const configDB=()=>mongoose.connect('mongodb://127.0.0.1:27017/expense-app-mar24')
.then(
  ()=>{
    console.log("conneted")
  }
)
.catch(
(err)=>{
  console.log('error',err)
}              
)

module.exports=configDB
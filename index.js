const express=require('express')
const cors=require('cors')
const app=express()
const port=3111
const configDB=require('./config/db')
const {checkSchema}=require('express-validator')
const expenseCtrl=require('./app/controllers/expense-ctrl')
const categoryCtrl=require('./app/controllers/category-ctrl')
const {
  categoryValidationSchema,
  categoryidValidationSchema
}=require('./app/validators/category-validation')
const {
  expenseValidationSchema,
  expenseIdValidationSchema
}=require('./app/validators/expense-validation')

app.use(express.json())
app.use(cors())
configDB()

app.post('/api/categories',checkSchema(categoryValidationSchema),categoryCtrl.createe)

app.get('/api/categories',categoryCtrl.alllist)

app.put('/api/categories/:id',checkSchema(categoryValidationSchema),checkSchema(categoryidValidationSchema),categoryCtrl.update)

app.delete('/api/categories/:id',checkSchema(categoryidValidationSchema),categoryCtrl.remove)


app.post('/api/expenses',checkSchema(expenseValidationSchema),expenseCtrl.createe)

app.get('/api/expenses',expenseCtrl.alllist)

app.put('/api/expenses/:id',checkSchema(expenseValidationSchema),checkSchema(expenseIdValidationSchema),expenseCtrl.update)

app.delete('/api/expenses/:id',checkSchema(expenseIdValidationSchema),expenseCtrl.remove)

app.listen(port,()=>{
  console.log('server running ',port)
})
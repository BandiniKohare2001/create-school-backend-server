import express from "express";
const app = express();
app.use(express.json());
const PORT = 5000;
const students = []
app.get('/health', (req, res) => {
    res.json({ status: 'all good' })
})
app.get('/students', (req, res) => {  
    res.json({
        success: true,
        data: students,
        message: 'Successfully fetch all students'
    });
});
app.post('/student',(req,res)=>{
    const {name,age,city,mobile}=req.body
      const id=Math.floor(Math.random()*100000)
      if(!name){
        return res.json({
          status:'error',
          message:"please add name of Student"
        })
      }
      if(!age){
        return res.json({
          status:'error',
          message:"please add age of Student"
        })
      }
      if(!city){
        return res.json({
          status:'error',
          message:"please add city of Student"
        })
      }
      if(!mobile){
        return res.json({
          status:'error',
          message:"please add mobile number of Student"
        })
      }
      const obj={
        id:id,
        name:name,
        age:age,
        city:city,
        mobile:mobile       
      }
      students.push(obj)
    res.json({
        status:'ok',
        list:obj,
        message:'New Student Added Successfully'
    })
 })
 app.get('/student',(req,res)=>{
    const {name} = req.query;
    let result=null;
    students.forEach((obj)=>{
      if(obj.name===name){
        result=obj;
      }
    })
    if(result===null){
        return res.json({
            status: 'error',
            message: "data not found"
        })
    }
    res.json({
      status:'ok',
      data:result,
      massage:'Data fetched Successfully'
    })
   })
app.listen(PORT, () => {
    console.log(`server runnig on port ${PORT}.`);
});
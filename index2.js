import  Express  from "express";
import mongoose, {model, Schema} from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
// import student from "./models/student";

const app = Express();

app.use(Express.json());

const PORT = 5000;

//const MONGODB_URI = 'mongodb+srv://abhijeetkokat2003:Abhijeet%40123@abhi.aq8u6iz.mongodb.net/ecomers';

const connectMongoDB = async () => {
  const conne = await mongoose.connect(process.env.MONGODB_URI);

  if(conne){
    console.log('mongoDB connected successfully. ');
  }
};

connectMongoDB();

const productSchema = new Schema({
  image:String,
 title: String,
 description: String,
 price:String,
 brand:String,

 

});

const product= model('product',productSchema);



app.get('/products', async (req, res) => {

const products = await product.find()


    res.json({
        success: true,
        data: products,
        message: `successfully fecth data. `,

    });
});

app.post  ('/product', async (req, res) => {
    const { image,
      title,
      description,
      price,brand } = req.body;

    if (!image) {

        return res.json({
            success: false,
            message: `image is required `,

        });
    }

    if (!title) {

        return res.json({
            success: false,
            message: `title is required `,

        });
    }

    if (!description) {

        return res.json({
            success: false,
            message: `description is required `,

        });
    }

    if (!price) {

        return res.json({
            success: false,
            message: `price is required `,

        });
    }

    // const id = Math.floor(Math.random() * 1000) + 1;

    const newproduct = new product({
      image,
      title,
      description,
      price,
      brand
    })
    const saveproduct = await  newproduct.save();

    res.json({
        success: true,
        data: saveproduct,
        message: `successfully added new data. `,

    });

})

app.get('/boy', async (req, res) => {
    const { email } = req.query;
    let boy = null;

    const student = await student.findOne({email:email})

    students.forEach((stud) => {
        if (stud.id == id) {
            boy = stud;
        }

    })

    if (boy == null) {

        return res.json({
            success: false,
            message: `student not found `,
        })
    }

    res.json({
        success: true,
        data: boy,
        message: `successfully added new student. `,
    })



})
app.get('/samosa', (req, res)=>{
    res.json({"msg":'Samosa is testy'});
})



app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})




























// MONGODB_URI = mongodb+srv://abhijeetkokat2003:Abhijeet%40123@abhi.aq8u6iz.mongodb.net/ecomers;










// import { Schema,model } from "mongoose";


// const studentSchema = new Schema({
//     name: String,
//     age: Number,
//     mobile:String,
//     email: String
  
//    });
  
//   const student= model('student',studentSchema);


//   export default student
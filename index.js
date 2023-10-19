import express from "express";
const app = express();

app.use(express.json());

app.get('/health', (req, res)=>{
    res.json({status: 'all good'})
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server runnig on port ${PORT}.`);
});
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



app.listen(PORT, () => {
    console.log(`server runnig on port ${PORT}.`);
});
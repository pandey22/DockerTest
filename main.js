const express = require('express')
const app = express();

const PORT = process.env.port || 8000

app.get('/',(req,res)=>{
    return res.json({message:"Hey this is NodeJS container"});
});

app.listen(PORT,() => console.log(`Server started on PORT:${PORT}`));

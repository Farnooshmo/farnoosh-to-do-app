const PORT = process.env.PORT ?? 8000;
const express = require("express");
const app = express();
app.get('/todos', async (req, res)=>{
    try {
        // await 

    }catch (err){
        console.error(error)
    }
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

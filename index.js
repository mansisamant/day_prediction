import express from "express";

const app = express();
const port = 3000;


app.get("/",(req,res)=>{
    const d = new Date();
    const day =d.getDay();
    let type = "weekday";
    let adv = "work hard its a week day";
    if(day===0 || day ===6){
        type = "weekend";
        adv = "yayy its a weekend!";
    }
    res.render("index.ejs",{
        dayType: type,
        advice: adv
    });
});



app.listen(port,()=>{
    console.log("Listening on port"+port);
});
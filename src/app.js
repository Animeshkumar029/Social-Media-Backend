import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import router from "./routes/index.routes.js";
import commentRouter from "./routes/comments.route.js";
import likeRouter from "./routes/likes.routes.js";
import followRouter from "./routes/follow.routes.js";
const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(cookieParser());


app.use("/api/v1",router);

app.get("/",(_req,res)=>{
    res.send("this is the backend for my social media");
})

app.use("/api/v1",commentRouter);
app.use("/api/v1",likeRouter);
app.use("/api/v1",followRouter);



// app.all("*",(_req,res)=>{
//     res.status(404).json({
//         success:false,
//         message:"Error: Page not found"
//     })
// })


export default app;

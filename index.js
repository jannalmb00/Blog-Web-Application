import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var posts =[];
const selectedCategory =["Food","Travel","Motivational"]
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
  res.render("index.ejs");
});
app.get("/create",(req,res)=>{
  res.render("create.ejs");
});
app.post("/create",(req,res)=>{
  
  var title = req.body["title"];
  var author = req.body["author"];
  var category = req.body["category"];
  var content = req.body["content"];
  posts.push({"title":title,
              "author": author,
              "category":selectedCategory[category-1],
              "content":content});
  console.log(posts[0]);
  res.render("index.ejs", { posts: posts });
            
})
app.get("/travel",(req,res)=>{
  res.render("travel.ejs");
});
app.get("/food",(req,res)=>{
  res.render("food.ejs");
});
app.get("/motivational",(req,res)=>{
  res.render("motivational.ejs");
});

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`);
})



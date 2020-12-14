const mysql = require('mysql');
const express=require('express');
const cors = require('cors');
var app=express();
const bodyparser=require('body-parser');

app.use(cors());
app.use(bodyparser.json());

//Establish connection with mysql
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "/*YourPassword*/",
  databse: "/*YourDatabaseName*/"
});

//Return connection status
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//Define Port
app.listen(8080,()=>
console.log('Server started at port 8080')
);

//Define user table
const userTable='/User';

//CREATE
app.post(userTable,(req,res)=>{
  let task=req.body;
  con.query("INSERT INTO aluminia.User SET ?",task,(err,rows,fields)=>{
  if(err) throw err;
  res.send(JSON.stringify(rows))
  })
})

//READ
app.get(userTable,(req,res)=>{
  con.query('SELECT * from aluminia.User',(err,rows,fields)=>{
    if(err) throw err;
    res.json(rows);
  })
})

//UPDATE
app.put(userTable+'/:user_name',(req,res)=>{
  let task=req.body;
  con.query('UPDATE aluminia.User SET `Name`=?, `birthdate`=?, `Mobile_Number`=?, `Profile_Image_URL`=? where `user_name`=?',[task.Name,task.birthdate,task.Mobile_Number,task.Profile_Image_URL,req.params.user_name],(err,rows,fields)=>{
  if(err) throw err;
  res.send('Updated Successfully')
  })
})

//DELETE
app.delete(userTable+'/:user_name',(req,res)=>{
  con.query('DELETE FROM aluminia.User WHERE `user_name`=?',[req.params.user_name],(err,rows,fields)=>{
    if(err) throw err;
    res.send('Task Deleted Successfully')
  })
})

app.get(userTable+'/:user_name',(req,res)=>{
  con.query('SELECT * FROM aluminia.User WHERE `user_name`=?',[req.params.user_name],(err,rows,fields)=>{
    if(err) throw err;
    res.json(rows);
  })
})

// ***************************
//Define education table
const educationTable='/Education';

//CREATE
app.post(educationTable,(req,res)=>{
  let task=req.body;
  con.query("INSERT INTO aluminia.Education SET ?",task,(err,rows,fields)=>{
  if(err) throw err;
  res.send(JSON.stringify(rows))
  })
})

//READ
app.get(educationTable,(req,res)=>{
  con.query('SELECT * from aluminia.Education',(err,rows,fields)=>{
    if(err) throw err;
    res.json(rows);
  })
})

//UPDATE
app.put(educationTable+'/:user_name/:School_Name',(req,res)=>{
  let task=req.body;
  con.query('UPDATE aluminia.Education SET `School_Name`=?,`Degree`=?,`Duration`=?,`Percentage`=? where `user_name`=? AND `School_Name`=?',[task.School_Name,task.Degree,task.Duration,task.Percentage,req.params.user_name,params.School_Name],(err,rows,fields)=>{
  if(err) throw err;
  res.send('Updated Successfully')
  })
})

//DELETE
app.delete(educationTable+'/:user_name/:School_Name',(req,res)=>{
  con.query('DELETE FROM aluminia.Education WHERE `user_name`=?  AND `School_Name`=?',[req.params.user_name,req.params.School_Name],(err,rows,fields)=>{
    if(err) throw err;
    res.send('Task Deleted Successfully')
  })
})

app.get(educationTable+'/:user_name',(req,res)=>{
  con.query('SELECT * FROM aluminia.Education WHERE `user_name`=?',[req.params.user_name],(err,rows,fields)=>{
    if(err) throw err;
    res.json(rows);
  })
})


// ***************************
//Define work table
const workTable='/Work_Experience';

//CREATE
app.post(workTable,(req,res)=>{
  let task=req.body;
  con.query("INSERT INTO aluminia.Work_Experience SET ?",task,(err,rows,fields)=>{
  if(err) throw err;
  res.send(JSON.stringify(rows))
  })
})

//READ
app.get(workTable,(req,res)=>{
  con.query('SELECT * from aluminia.Work_Experience',(err,rows,fields)=>{
    if(err) throw err;
    res.json(rows);
  })
})

//UPDATE
app.put(workTable+'/:user_name/:Company',(req,res)=>{
  let task=req.body;
  con.query('UPDATE aluminia.Work_Experience SET `Company`=?,`Duration`=?,`Designation`=? where `user_name`=? AND `Company`=?',[task.Company,task.Duration,task.Designation,req.params.user_name,req.params.Company],(err,rows,fields)=>{
  if(err) throw err;
  res.send('Updated Successfully')
  })
})

//DELETE
app.delete(workTable+'/:user_name/:Company',(req,res)=>{
  con.query('DELETE FROM aluminia.Work_Experience WHERE `user_name`=? AND `Company`=?',[req.params.user_name,req.params.Company],(err,rows,fields)=>{
    if(err) throw err;
    res.send('Task Deleted Successfully')
  })
})

app.get(workTable+'/:user_name',(req,res)=>{
  con.query('SELECT * FROM aluminia.Work_Experience WHERE `user_name`=?',[req.params.user_name],(err,rows,fields)=>{
    if(err) throw err;
    res.json(rows);
  })
})




// ***************************
//Define post table
const postTable='/Post';

//CREATE
app.post(postTable,(req,res)=>{
  let task=req.body;
  con.query("INSERT INTO aluminia.Post SET ?",task,(err,rows,fields)=>{
  if(err) throw err;
  res.send(JSON.stringify(rows))
  })
})

//READ
app.get(postTable,(req,res)=>{
  con.query('SELECT * from aluminia.Post',(err,rows,fields)=>{
    if(err) throw err;
    res.json(rows);
  })
})

//UPDATE
app.put(postTable+'/:user_name/:Post_Id',(req,res)=>{
  let task=req.body;
  con.query('UPDATE aluminia.Post SET `Picture_URL`=?,`Content`=?,`Timestamp`=`current_timestamp()` where `user_name`=? AND `Post_Id`=?',[task.Picture_URL,task.Content,req.params.user_name,req.params.Post_Id],(err,rows,fields)=>{
  if(err) throw err;
  res.send('Updated Successfully')
  })
})

//DELETE
app.delete(postTable+'/:user_name/:Post_Id',(req,res)=>{
  con.query('DELETE FROM aluminia.Post WHERE `user_name`=? AND `Post_Id`=?',[req.params.user_name,req.params.Post_Id],(err,rows,fields)=>{
    if(err) throw err;
    res.send('Task Deleted Successfully')
  })
})

app.get(postTable+'/:user_name',(req,res)=>{
  con.query('SELECT * FROM aluminia.Post WHERE `user_name`=?',[req.params.user_name],(err,rows,fields)=>{
    if(err) throw err;
    res.json(rows);
  })
})




// ***************************
//Define likes table
const likeTable='/Likes';

//CREATE
app.post(likeTable,(req,res)=>{
  let task=req.body;
  con.query("INSERT INTO aluminia.Likes SET ?",task,(err,rows,fields)=>{
  if(err) throw err;
  res.send(JSON.stringify(rows))
  })
})

//READ
app.get(likeTable,(req,res)=>{
  con.query('SELECT * from aluminia.Likes',(err,rows,fields)=>{
    if(err) throw err;
    res.json(rows);
  })
})

//DELETE
app.delete(postTable+'/:user_name/:Post_Id',(req,res)=>{
  con.query('DELETE FROM aluminia.Likes WHERE `user_name`=? AND `Post_Id`=?',[req.params.user_name,req.params.Post_Id],(err,rows,fields)=>{
    if(err) throw err;
    res.send('Task Deleted Successfully')
  })
})

app.get(postTable+'/:user_name/:Post_Id',(req,res)=>{
  con.query('SELECT * FROM aluminia.Likes WHERE `user_name`=? AND `Post_Id`=?',[req.params.user_name,req.params.Post_Id],(err,rows,fields)=>{
    if(err) throw err;
    res.json(rows);
  })
})



// ***************************
//Define location table
const locationTable='/Location';

//CREATE
app.post(locationTable,(req,res)=>{
  let task=req.body;
  con.query("INSERT INTO aluminia.Location SET ?",task,(err,rows,fields)=>{
  if(err) throw err;
  res.send(JSON.stringify(rows))
  })
})

//READ
app.get(locationTable,(req,res)=>{
  con.query('SELECT * from aluminia.Location',(err,rows,fields)=>{
    if(err) throw err;
    res.json(rows);
  })
})

//UPDATE
app.put(locationTable+'/:user_name',(req,res)=>{
  let task=req.body;
  con.query('UPDATE aluminia.Location SET `City`=?,`State`=?,`Country`=? where `user_name`=?' ,[task.City,task.State,task.Country,req.params.user_name],(err,rows,fields)=>{
  if(err) throw err;
  res.send('Updated Successfully')
  })
})

//DELETE
app.delete(locationTable+'/:user_name',(req,res)=>{
  con.query('DELETE FROM aluminia.Location WHERE `user_name`=? ',[req.params.user_name],(err,rows,fields)=>{
    if(err) throw err;
    res.send('Task Deleted Successfully')
  })
})

app.get(postTable+'/:user_name',(req,res)=>{
  con.query('SELECT * FROM aluminia.Location WHERE `user_name`=?',[req.params.user_name],(err,rows,fields)=>{
    if(err) throw err;
    res.json(rows);
  })
})



// ***************************
//Define job table
const jobTable='/Job';

//CREATE
app.post(jobTable,(req,res)=>{
  let task=req.body;
  con.query("INSERT INTO aluminia.Job SET ?",task,(err,rows,fields)=>{
  if(err) throw err;
  res.send(JSON.stringify(rows))
  })
})

//READ
app.get(jobTable,(req,res)=>{
  con.query('SELECT * from aluminia.Job',(err,rows,fields)=>{
    if(err) throw err;
    res.json(rows);
  })
})

//UPDATE
app.put(jobTable+'/:user_name/:Job_id',(req,res)=>{
  let task=req.body;
  con.query('UPDATE aluminia.Job SET `Description`=?,`Timestamp`=`current_timestamp()` where `user_name`=? AND `Jost_id`=?',[task.Description,req.params.user_name,req.params.Job_id],(err,rows,fields)=>{
  if(err) throw err;
  res.send('Updated Successfully')
  })
})

//DELETE
app.delete(jobTable+'/:user_name/:Job_id',(req,res)=>{
  con.query('DELETE FROM aluminia.Job WHERE `user_name`=? AND `Job_id`=?',[req.params.user_name,req.params.Job_id],(err,rows,fields)=>{
    if(err) throw err;
    res.send('Task Deleted Successfully')
  })
})

app.get(jobTable+'/:user_name',(req,res)=>{
  con.query('SELECT * FROM aluminia.Job WHERE `user_name`=?',[req.params.user_name],(err,rows,fields)=>{
    if(err) throw err;
    res.json(rows);
  })
})



// ***************************
//Define connection table
const connectionTable='/Connection';

//CREATE
app.post(connectionTable,(req,res)=>{
  let task=req.body;
  con.query("INSERT INTO aluminia.Connection SET ?",task,(err,rows,fields)=>{
  if(err) throw err;
  res.send(JSON.stringify(rows))
  })
})

//READ
app.get(connectionTable,(req,res)=>{
  con.query('SELECT * from aluminia.Connection',(err,rows,fields)=>{
    if(err) throw err;
    res.json(rows);
  })
})

//DELETE
app.delete(connectionTable+'/:user_name/:Connected_id',(req,res)=>{
  con.query('DELETE FROM aluminia.Connection WHERE `user_name`=? AND `connection_uid`=?',[req.params.user_name,req.params.connection_uid],(err,rows,fields)=>{
    if(err) throw err;
    res.send('Task Deleted Successfully')
  })
})

app.get(connectionTable+'/:user_name',(req,res)=>{
  con.query('SELECT * FROM aluminia.Connection WHERE `user_name`=?',[req.params.user_name],(err,rows,fields)=>{
    if(err) throw err;
    res.json(rows);
  })
})



// ***************************
//Define comment table
const commentTable='/Comment';

//CREATE
app.post(commentTable,(req,res)=>{
  let task=req.body;
  con.query("INSERT INTO aluminia.Comment SET ?",task,(err,rows,fields)=>{
  if(err) throw err;
  res.send(JSON.stringify(rows))
  })
})

//READ
app.get(commentTable,(req,res)=>{
  con.query('SELECT * from aluminia.Comment',(err,rows,fields)=>{
    if(err) throw err;
    res.json(rows);
  })
})

//UPDATE
app.put(commentTable+'/:user_name/:Comment_id',(req,res)=>{
  let task=req.body;
  con.query('UPDATE aluminia.Comment SET `timestamp`=`current_timestamp()`,`Content`=? where `user_name`=? AND `Comment_id`=?',[task.Content,req.params.user_name,req.params.Comment_id],(err,rows,fields)=>{
  if(err) throw err;
  res.send('Updated Successfully')
  })
})

//DELETE
app.delete(commentTable+'/:user_name/:Comment_id',(req,res)=>{
  con.query('DELETE FROM aluminia.Comment where `user_name`=? AND `Comment_id`=?',[req.params.user_name,req.params.Comment_id],(err,rows,fields)=>{
    if(err) throw err;
    res.send('Task Deleted Successfully')
  })
})

app.get(commentTable+'/:user_name/:Post_id',(req,res)=>{
  con.query('SELECT * FROM aluminia.Comment WHERE `user_name`=? AND `Post_Id`=?',[req.params.user_name,req.params.Post_Id],(err,rows,fields)=>{
    if(err) throw err;
    res.json(rows);
  })
})

















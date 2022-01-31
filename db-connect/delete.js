const dbConnect = require("./mongodb");

const deleteData = async ()=>{
    const db = await dbConnect();
    const data  = await db.deleteMany({name:"update"});
    if(data.acknowledged){
        console.log(data  ,"data deleted ")
    }
}

deleteData();
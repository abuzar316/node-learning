const dbConnect = require("./mongodb");

const upDate = async ()=>{
    const db = await dbConnect();
    const data = await db.update(
        {name:"MI Note Pro 5"},{$set : {name:"update"}}
    )
    console.log(data);
}

upDate();
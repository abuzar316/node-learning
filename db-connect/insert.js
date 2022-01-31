const dbConnect = require("./mongodb")

const inertData = async () => {
    const db = await dbConnect();
    const data = await db.insertMany(
        [
            { name: "MI Note Pro 5", brand: 'MI', price: "5000", category: "mobile" },
            { name: "MI Note Pro 6", brand: 'VIVO', price: "8000", category: "mobile" },
            { name: "MI Note Pro 8", brand: 'OPPO', price: "7000", category: "mobile" }
        ]
    )
    if (data.acknowledged) {

        console.log("data inerted")
    }
}

inertData()
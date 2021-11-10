const fs = require('fs')
const csvParser = require('csv-parser')

const filepath = "./exampleData.csv"

fs.createReadStream(filepath)
.on('error',(error)=>{
console.log("plz choose correct file")
console.log(error)
})

.pipe(csvParser())
.on('data',(row)=>{
    let str = `${row['BUYER_NAME']} bought ${row['CANDY_PURCHASED']} pieces of candy on ${row['PURCHASE_DATE']} and paid $ ${row['CASH_PAID']}.`
    console.log(str)
})


.on('end',()=>{
    console.log("CSV file successfully parsed")    
})


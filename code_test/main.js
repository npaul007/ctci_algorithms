const fs = require('fs');

const writeHighCountySpend = function (rows) {
    let dict = {};
    for(let i = 0; i < rows.length; i++) {
        if( i > 0 ) {
            let col = rows[i].split(',');
            console.log(`${col[6]}-${col[10]}`);
        }
    }
} 

fs.readFile(`./data.csv`,'utf8',(err,data) => {
    if(!err) {
        let rows = data.toString().split("\n");
        let columns = rows[0].split(",");
        console.log(columns)
        writeHighCountySpend(rows);
    }
});
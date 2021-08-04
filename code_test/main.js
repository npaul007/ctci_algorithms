const fs = require('fs');

const writeHighCountySpend = function (rows) {
    let dict = {};

    for(let i = 0; i < rows.length; i++) {
        if( i > 0 ) {
            let col = rows[i].split(',');
            let county_state = `${col[6]}-${col[7]}`;
            let cost_to_acquire = Number(col[10].replace(/[$]/g,''));

            if( dict[county_state] === undefined ) {
                dict[county_state] = {
                    total:cost_to_acquire,
                    frequency:1,
                    average:null,
                    getAverage:function() {
                        return this.total / this.frequency;
                    },
                    setAverage:function(){
                        this.average = this.getAverage();
                    }
                };
            }
            else {
                dict[county_state].total += cost_to_acquire;
                dict[county_state].frequency ++; 
            }
        }
    }

    let list = [];
    for( entry in  dict ) {
        let item = dict[entry];
        item.setAverage();

        let s = entry.split("-");
        item.state = s[1];
        item.county = s[0];

        list.push(item);
    }

    list.sort((a,b) => b.average - a.average );

    let csvString = "State,County,Average Cost to Acquire\r\n";
    for(let i = 0; i < list.length && i < 50; i++) {
        let item = list[i];
        let row = `${item.state},${item.county},$${item.average}\r\n`;
        csvString += row;
    }

    fs.writeFile('./high_county_spend.csv',csvString,(err) => {
        if(err) {
            console.error(err);
        }
        else {
            console.log('high_county_spend.csv written successfully');
        }
    });
} 

function fixRows(rows) {
    for(let i = 0; i < rows.length; i++) {
        let escaped = rows[i].split('"');
        
        if( escaped.length > 1 ) {
            escaped[1] = escaped[1].replace(/[,]/g,' ');
            rows[i] = escaped.join("");
        }
    }
}

function __main__ () {
    fs.readFile(`./data.csv`,'utf8',(err,data) => {
        if(!err) {
            let rows = data.toString().split("\n");
            let columns = rows[0].split(",");
            
            // fixing the rows since business names can have commas which can screw things up
            fixRows(rows);

            writeHighCountySpend(rows);
        }
    });

}

__main__();

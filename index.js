const moment = require("moment");
const axios = require('axios');
const fs = require('fs');

data = JSON.parse(fs.readFileSync(process.env.DUNDERGITCALL_FILE));
data.datetime = moment().format();

if (data.webhook !== undefined) {
    axios.post(data.webhook, data)
        .then((res) => {
            fs.writeFileSync(process.env.DUNDERGITCALL_FILE, JSON.stringify(data));

            console.log(`statusCode: ${res.statusCode}`);
            console.log(res);
        })
        .catch((error) => {
            console.error(error);
        })
} else {
    fs.writeFileSync(process.env.DUNDERGITCALL_FILE, JSON.stringify(data));
}

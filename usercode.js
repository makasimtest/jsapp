const moment = require("moment");
const axios = require('axios');

module.exports = (data) => {
    data.datetime = moment().format();
    data.app = "jsrepo";

    if (data.webhook !== undefined) {
        axios.post(data.webhook, data)
            .then((res) => {
                data.response = "ok";
            })
            .catch((error) => {
                data.response = error;
            });
    }

    return data;
};

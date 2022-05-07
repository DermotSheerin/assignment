// const pool = require('../../postgres-node/queries');

const employees = {

    index(request, response) {
        // const employees =
        const viewData = {
            title: "employee title",              // title for the browser tab
        };
        response.render('employees', viewData);
    },

};

module.exports = employees;


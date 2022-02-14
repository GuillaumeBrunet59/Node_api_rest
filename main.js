const express = require("express");

const app = express();

// const ContactRouter = require('./api/routers/contact.router');
// app.use('/contact', new ContactRouter().router);

// const CategoryRouter = require('./api/routers/category.router')
// app.use('/category', new CategoryRouter().router);
const routers = require('./api/routers');
for(const route in routers) {
    app.use(`/${route}`, new routers[route]().router);
}

app.use('/', function(req, res){
    res.send("ok");
});

//TEST
// const BaseService = require('./api/services/base.service');
// const sql = "SELECT * FROM test";
// const test = async () => {
//     const result = await BaseService.executeQuery(sql);
//     const bp = 1;
// }
// test();

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
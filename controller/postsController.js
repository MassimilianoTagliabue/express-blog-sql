const connection = require("../data/db");

//index
const index = (req, res) => {
    const sql = `SELECT * FROM posts`

   connection.query(sql, (err, posts) =>{
    if(err) return res.status(500).json({error : "Database query failed"});
    res.json(posts);
   })
};

//show
const show = (req, res) => {

    

};

// //create
// const create = (req, res) => {
// };

// //update
// const update = (req, res) => {
// };

// //modify
// const modify = (req, res) => {
// };

//destroy
const destroy = (req, res) => {

    
};


module.exports = {

    index,
    show,
    destroy
}
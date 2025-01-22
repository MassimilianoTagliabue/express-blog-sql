const connection = require("../data/db");

//index
const index = (req, res) => {
    const sql = `SELECT * FROM posts`

   connection.query(sql, (err, posts) =>{
    if (err) {
        return res.status(500).json({
          message: "Errore interno del server",
        });
      } else {
        return res.status(200).json({
          status: "success",
          data: posts,
        });
      }
    });
};



//show
const show = (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM posts WHERE posts.id = ?`
    
    connection.query(sql, [id], (err, posts) => {
        if(err){
            res.status(500).json({
            message:"Errore interno al server"
        });
        }else if(posts.length=== 0){
            res.status(404).json({
                message:"post non trovato"
            });
        }else{
            res.status(200).json({
                status: "Success",
                data: posts[0]
            });
        }

    })

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
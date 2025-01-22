
//index
const index = (req, res) => {

   res.json("sono index");
   
};

//show
const show = (req, res) => {

    res.json("sono show");

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

    res.json("sono destroy");
};


module.exports = {

    index,
    show,
    destroy
}
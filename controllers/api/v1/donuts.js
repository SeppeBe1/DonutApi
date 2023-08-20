const Donut = require("../../../models/Donut.js");



function getAllDonuts(req, res) {
  
    Donut.find({ })
      .then(result => {
        if (!result) {
          res.status(404).json({
            "status": "failed",
            "error": error,

          });
        } else {
          res.json({
            "status": "success",
            "result": result,

          });
        }
      })
      .catch(err => res.status(500).json(err));
  }

  function getDonut(req, res) {
    const { id } = req.params;
    Donut.findById(id)
      .then(results => {
        if (results.length === 0) {
          res.status(404).json({ 
            "status": "failed",
            "result": results
          });
        } else {
          res.json({
            "status": "success",
            "result": results,
          });
        }
      })
      .catch(err => res.status(500).json({
        "status": "error",
        "message": err
      }));
  }

  function updateDonut(req, res) {
    const { id } = req.params;
    
    Donut.findByIdAndUpdate(id, { orderStatus: req.body.orderStatus}, { new: true })
      .then(result => {
        if (!result) {
          res.status(404).json({
            "status": "failed",
            "result": "Donut not found",
            "data": result
          });
        } else {
          res.json({
            "status": "success",
            "data": result
          });
        }
      })
      .catch(err => res.status(500).json({
        "status": "failed",
        "result": err,
      }));
  }




  function createDonut(req, res) {

  
    const donutname = req.body.donutname;
    const topping = req.body.topping;
    const glaze = req.body.glaze;
    const dough = req.body.dough;

    const companyname = req.body.companyname;
    const streetname = req.body.streetname;
    const housenumber = req.body.housenumber;
    const city = req.body.city;
    const postalcode = req.body.postalcode;

    const orderAmount = req.body.orderAmount;
    const orderStatus = req.body.orderStatus;
    
    
  
    
    const newDonut = new Donut({
        donutname: donutname ,
        topping: topping,
        glaze: glaze,
        dough: dough,

        companyname: companyname,
        streetname: streetname,
        housenumber: housenumber,
        city: city,
        postalcode: postalcode,
  
        orderAmount: orderAmount,
        orderStatus: orderStatus,
    });
  
    newDonut.save().then(result => {
        res.json({
            "status": "success",
            "result": result
        });
    }).catch(error => {
        console.error("Error while saving new donut:", error); // Log the error
        res.json({
            "status": "error",
            "message": error.message // Provide a meaningful error message
        });
    });
}

  module.exports.getAllDonuts = getAllDonuts;
  module.exports.getDonut = getDonut;
  module.exports.updateDonut = updateDonut;
  module.exports.createDonut = createDonut;
const express = require("express");
const bodyParser = require("body-parser");
var multer = require("multer");
var app = express();
const router = express.Router();
const Graduate = require("../models/graduate");
var multer  =   require('multer');
var app = express();


require("dotenv").config;

app.use(bodyParser.json());

router.get("/graduates", function (req, res) {
  Graduate.find(function (err, graduates) {
    res.json(graduates);
  });
});
router.get("/graduates/:id", function (req, res) {
  Graduate.findById(req.params.id, function (err, graduate) {
    if (!graduate) {
      res.status(404).send("No result found");
    } else {
      res.json(graduate);
    }
  });
});

router.post("/graduates", function (req, res) {
  upload(req, res, function (err) {
    console.log(req.files);
    if (err) {
      return res.end("Error uploading file.");
    }
    let graduate = new Graduate(req.body);
    console.log(graduate);
    graduate
      .save()
      .then((graduate) => {
        res.send(graduate);
      })
      .catch(function (err) {
        res.status(422).send("Graduate add failed");
      });
  });
});


router.post('/graduates', function(req, res) {
  upload(req,res,function(err) {
    console.log(req.files)
    if(err) {
        return res.end("Error uploading file.");
    }

  let graduate = new Graduate(req.body);
  console.log(graduate)

  graduate.save()
    .then(graduate => {
      res.send(graduate);
    })
    .catch(function(err) {
      res.status(422).send('Graduate add failed');
    });
  });
});

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});
var upload = multer({ storage : storage}).single('file');
app.get('/',function(req,res){
      res.sendFile(__dirname + "/index.html");
})

router.patch('/graduates/:id', function(req, res){
  Graduate.findByIdAndUpdate(req.params.id, req.body)
    .then(function () {
      res.json("Graduate updated");
    })
    .catch(function (err) {
      res.status(422).send("Graduate update failed.");
    });
});

router.delete("/graduates/:id", function (req, res) {
  Graduate.findById(req.params.id, function (err, graduate) {
    if (!graduate) {
      res.status(404).send("Graduate not found");
    } else {
      Graduate.findByIdAndRemove(req.params.id)
        .then(function () {
          res.status(200).json("Graduate deleted");
        })
        .catch(function (err) {
          res.status(400).send("Graduate delete failed.");
        });
    }
  });
});

router.post("/api/forma", (req, res) => {
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465, //port secure
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  let mailOptions = {
    from: data.email,
    to: process.env.EMAIL,
    subject: `Message from ${data.employer}`,
    html: `
      <h3>Informations</h3>
      <h3>Name: ${data.fullName}</h3>
      <p>email: ${data.email}</p>
      <p>Employer: ${data.employer}</p>
      <h3>Message</h3>
      <p>${data.message}</p>
    `,
  };
  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      response.send(error);
    } else {
      response.send("Success");
    }
  });
  smtpTransport.close();
});

module.exports = router;

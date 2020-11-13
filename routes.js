const express = require("express");
const route = express.Router();
const teachers = require("./teachers");

route.get("/", function(req, res){
    return res.redirect("teachers")
})

route.get("/teachers", function(req, res) {
    return res.render("teachers/index")
});

route.get("/teachers/create", function(req, res){
    return res.render("teachers/create")
})

route.post("/teachers", teachers.post);



module.exports = route
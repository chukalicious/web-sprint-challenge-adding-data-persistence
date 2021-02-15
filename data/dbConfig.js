// Complete your db configuration using the `environment` variable.
const knex = require("knex");
const knexfile = require("../knexfile.js");

//I'm not connecting this to anything. there was no lesson on this type of
//import and no clear instructions.
const environment = process.env.NODE_ENV || "development";

module.exports = knex(knexfile.development);

// build your `Project` model here

// const knex = require("knex");
// const config = require("../../knexfiel.js");

db = require("../../data/dbConfig");

module.exports = {
  get,
  post,
};

function get() {
  return db("projects");
}

function post() {}

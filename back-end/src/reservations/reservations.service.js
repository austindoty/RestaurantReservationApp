const knex = require("../db/connection");

function list() {
  return knex("reservations")
    .select("*")
    .orderBy("reservations.reservation_date");
}

function create(reservation) {}
module.exports = {
  list,
  create,
};

const knex = require("../db/connection");

function list() {
  return knex("reservations")
    .select("*")
    .orderBy("reservations.reservation_date");
}

function create(reservation) {
  return knex("reservations as r")
    .insert(reservation)
    .returning("*")
    .then((newReservation) => newReservation[0]);
}

module.exports = {
  list,
  create,
};

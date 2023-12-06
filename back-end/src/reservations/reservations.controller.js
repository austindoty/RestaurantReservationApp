/**
 * List handler for reservation resources
 */

const reservationsService = require("./reservations.service.js");
const errorHandler = require("../errors/errorHandler");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
  const data = await reservationsService.list();
  res.json({ data });
}

async function create(req, res) {
  const reservation = req.body.data;
  const { reservation_id } = await service.create(reservation);
  reservation.reservation_id = reservation_id;
  res.status(201).json({ data: reservation });
}

module.exports = {
  list: asyncErrorBoundary(list),
  create: asyncErrorBoundary(create),
};

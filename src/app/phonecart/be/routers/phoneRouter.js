const express = require("express");
const phoneRoute = express.Router();
const {
  deletePhoneByID,
  getAllPhones,
  getPhoneByID,
} = require("../controller/phoneController");

phoneRoute.get("", getAllPhones);
phoneRoute.get("/:id", getPhoneByID);
phoneRoute.delete("/:id", deletePhoneByID);

module.exports = phoneRoute;

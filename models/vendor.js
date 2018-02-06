const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  tin: { type: String, required: true },      // tin = taxpayer id # EIN or SS#
  companyName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  contactName: { type: String, required: true },
  contactPhone: { type: String, required: true },
  contactEmail: { type: String, required: true },
 });

const Company = mongoose.model("Company", bookSchema);

module.exports = Company;
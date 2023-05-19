const mongoose = require("mongoose");

const universitySchema = {
  name: String,
  adress: String,
  // faculties: objectId,
  faculties: Array,
};

const University = mongoose.model("univerisities", universitySchema);

const create = async (uni) => {
  const university = new University(uni);
  return await university.save();
};

const getAll = async () => {
  return await University.find({});
};

const getUniByName = async (name) => {
  return await University.findOne({ name });
};

const getUniById = async (id) => {
  return await University.findOne({ _id: id });
};

const getFacultiesOfUni = async (id) => {
  const university = University.findOne({ _id: id });
  return await university.faculties;
};

const update = async (id, uni) => {
  return await University.updateOne({ _id: id }, uni);
};

const remove = async (id) => {
  return await University.deleteOne({ _id: id });
};

module.exports = {
  create,
  getAll,
  update,
  getUniByName,
  getUniById,
  getFacultiesOfUni,
  remove,
};

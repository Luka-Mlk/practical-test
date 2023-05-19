const mongoose = require("mongoose");

const facultySchema = {
  name: String,
  adress: String,
  // faculties: objectId,
  unis: Array,
};

const Faculty = mongoose.model("faculties", facultySchema);

const create = async (uni) => {
  const university = new Faculty(uni);
  return await university.save();
};

const getAll = async () => {
  return await Faculty.find({});
};

const getFaculByName = async (id) => {
  return await Faculty.findOne({ _id: id });
};

const getUnisOfFaculties = async (id) => {
  const university = Faculty.findOne({ _id: id });
  return await university.unis;
};

const update = async (id, uni) => {
  return await Faculty.updateOne({ _id: id }, uni);
};

const remove = async (id) => {
  return await Faculty.deleteOne({ _id: id });
};

module.exports = {
  create,
  getAll,
  update,
  getFaculByName,
  getUnisOfFaculties,
  remove,
};

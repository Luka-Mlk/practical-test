const uniBase = require("../pkg/university");
const faculBase = require("../pkg/faculty");
// adduni addFacul updateFacul updateUni

const addUni = async (req, res) => {
  try {
    const uni = await uniBase.create(req.body);
    return res.status(202).send(uni);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
};

const addFaculToUni = async (req, res) => {
  try {
    const facul = await faculBase.create(req.body.facul);
    const uni = await uniBase.getUniByName(req.body.uni_name);
    uni;
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
};

const updateFacul = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
};

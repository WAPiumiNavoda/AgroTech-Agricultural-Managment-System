const Guidance = require("../models/AddGuidanceProgramsModel");

const addGuidance = (req, res) => {
  const {
    programNo,
    programName,
    programDescription,
  } = req.body;

  console.log(req.body);

  const newGuidance = new Guidance({
   programNo,
   programName,
   programDescription
  });

  newGuidance
    .save()
    .then((createdGuidance) => {
      res.status(200).json(createdGuidance);
    })
    .catch((err) => {
      console.log(error);
    });
};

const getguidance = async (req, res) => {
  try {
    const guidance = await Guidance.find();

    res.status(200).json(guidance);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateGuidance = async (req, res) => {
  const guidanceId = req.params.id;

  try {
    const guidance = await Guidance.findById(guidanceId);

    if(!guidance){
       res.status(404).json("There is a no Programs");
    }

    const {programNo,programName,programDescription} = req.body;
    
    const progr = await Guidance.findByIdAndUpdate(guidanceId, {programNo,programName,programDescription});

    res.status(201).json({
      "Updated": true
    })

  } catch (error) { 
    res.status(400).json(error.message);
  }
}

const removeGuidance = async (req, res) => {
  const guidanceId = req.params.id;

  try {
    const progr = await Guidance.findById(guidanceId);

    if(!progr){
      return res.status(404).json("There is a no Programs");
    }

    const removeGuidance = await Guidance.findByIdAndDelete(guidanceId);
    res.status(200).json(removeGuidance);
    
  } catch (error) { 
    res.status(400).json(error.message);
  }
}

module.exports = {
  addGuidance,
  getguidance,
  updateGuidance,
  removeGuidance,
};
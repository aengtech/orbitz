import Tip from '../models/tip.js'

export const getTips = async (req, res) => {
  try {
    const tip = await Tip.find();

    res.status(200).json(tip);
  } catch (error) {
    res.status(404).json({ message: error.message});
  }
}

export const createTip = async (req, res) => {
  const dets = req.body;

  const newTip = new Tip(dets);
  try {
     await newTip.save();
      res.status(201).json(newTip);
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
} 
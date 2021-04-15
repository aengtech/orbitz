import mongoose from 'mongoose';
import Car from '../models/car.js'

export const getCars = async (req, res) => {
  try {
    const car = await Car.find();

    res.status(200).json(car);
  } catch (error) {
    res.status(404).json({ message: error.message});
  } 
}

export const createCar = async (req, res) => {
  const specs = req.body;

  const newCar = new Car(specs);
  try {
     await newCar.save();
      res.status(201).json(newCar);
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}

export const updateCar = async (req, res) => {
  const { id } = req.params;
  const { } = req.body;

  if (!Mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that Id`);

  const updatePost = { _id: id };

  await Car.findByIdAndUpdate(id, updatedPost, { new: true});

  res.json(updatedPost);
}
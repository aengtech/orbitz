import Car from '../models/car.js'

export const getCars = async (req, res) => {
  try {
    const car = await Car.find();

    res.status(200).json(car);
  } catch (error) {
    res.status(404).json({ message: error.message});
  }
}


export const getCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    res.status(200).json(car);
  } catch (error) {
    res.status(400).json({  message: error.message });
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
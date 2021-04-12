import mongoose from 'mongoose';

const TipSchema = mongoose.Schema({
  title: { type: String, required: true},
  summary: { type: String, required: true},
  details: { type: String },
  selectedImg: {type: String }
});

const Tip = mongoose.model('Tip', TipSchema);

export default Tip;
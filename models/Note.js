import { Schema, models, model } from "mongoose";
const NoteSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  date: {
    type: String,
  },
  timeInMilliseconds: {
    type: Number,
  },
  textOfFeedback: {
    type: String,
  },
});
export default models.Note || model("Note", NoteSchema);

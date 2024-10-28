import mongoose from "mongoose";

const FeedBackSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  reviewerId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  performance: String,
  areasForImprovement: String,
  additionalComments: String,
  date: {
    type: Date,
    default: Date.now()
  }

});

FeedBackSchema.index({ employeeId: 1, reviewerId: 1 }, { unique: true });

export default mongoose.model("FeedBack", FeedBackSchema)
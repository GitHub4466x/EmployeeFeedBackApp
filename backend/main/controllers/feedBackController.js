import mongoose from "mongoose";
import Feedback from "../models/feedBackModel.js";
import Employee from "../models/employeeModel.js";
import { populate } from "dotenv";

const getFeedBacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate("reviewerId", 'name jobRole').populate("employeeId", 'name jobRole');
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFeedBackByEmployeeId = async (req, res) => {
  const { employeeId } = req.body;


  try {
    const feedback = await Feedback.find({ employeeId }).populate("reviewerId", 'name jobRole').populate("employeeId", 'name jobRole');
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPendingFeedbackById = async (req, res) => {
  const { employeeId } = req.body;

  try {
    const reviewedEmployees = await Feedback.find(
      { reviewerId: employeeId },
      'employeeId'
    ).exec();

    const reviewedEmployeeIds = reviewedEmployees.map(feedback => feedback.employeeId);
    const pendingEmployees = await Employee.find({
      _id: { $nin: [...reviewedEmployeeIds, employeeId] }
    });
    res.status(200).json(pendingEmployees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }


};



const submitFeedback = async (req, res) => {
  const { employeeId, reviewerId, performance, areasForImprovement, additionalComments } = req.body;

  try {
    const existingFeedback = await Feedback.findOne({ employeeId, reviewerId });

    if (existingFeedback) {
      return res.status(400).json({ message: "Feedback from this reviewer already exists for this employee." });
    }
    const feedback = new Feedback({
      employeeId,
      reviewerId,
      performance,
      areasForImprovement,
      additionalComments
    });

    await feedback.save();
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteFeedback = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedFeedback = await Feedback.findByIdAndDelete(id);
    if (!deletedFeedback)
      return res.status(404).json({ message: "Feedback not found" });
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default {
  getFeedBackByEmployeeId,
  getFeedBacks,
  getPendingFeedbackById,
  submitFeedback,
  deleteFeedback
};
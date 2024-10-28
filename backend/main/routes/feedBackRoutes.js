import { Router } from "express";
import feedBackController from "../controllers/feedbackController.js";


const feedBackRoutes = Router();

feedBackRoutes.post("/feedbackById", feedBackController.getFeedBackByEmployeeId)
feedBackRoutes.get("/feedbacks", feedBackController.getFeedBacks)
feedBackRoutes.post("/pendingFeedbacks", feedBackController.getPendingFeedbackById)
feedBackRoutes.post("/addFeedback", feedBackController.submitFeedback)
feedBackRoutes.delete("/deleteFeedback/:id", feedBackController.deleteFeedback)

export default feedBackRoutes
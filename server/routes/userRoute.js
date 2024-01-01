import express from 'express';
import { bookVisit, cancelBooking, createUser, getAllBookings, getAllFavourites, toFav } from '../controllers/userCtrl.js';

const router = express.Router();
router.post("/register",createUser);
router.post("/bookVisit/:id", bookVisit);
router.get("/allBookings",getAllBookings);
router.delete("/removeBooking/:id",cancelBooking);
router.post("/toFav/:rid",toFav);
router.get("/allFav",getAllFavourites);

export {router as userRoute}
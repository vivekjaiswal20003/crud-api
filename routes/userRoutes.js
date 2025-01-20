import { Router } from "express";
import { createUser,fetchUsers,updateUser,showUser,deleteUser } from "../controller/userController.js";
import authenticateToken from "../middleware/authMiddleware.js"
import login from "../controller/authController.js"

const router = Router();

// Public Routes
router.post('/login', login);
router.post('/', createUser);

// Protected Routes
router.put("/:id",authenticateToken,updateUser)
router.get("/:id",authenticateToken,showUser)
router.get("/",authenticateToken,fetchUsers) // all records 
router.delete("/:id",authenticateToken,deleteUser)

export default router;

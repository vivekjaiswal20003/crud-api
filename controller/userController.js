import prisma from "../DB/db.config.js";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";

// create new user in database
export const createUser = async (req, res) => {
  // to check all the required fields are there or not
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;
  // if user already exist
  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (findUser) {
    return res.json({
      status: 400,
      message: "Email Already Taken please another email.",
    });
  }
  // now create user
  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // create user to be stored in database
    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });
    res.status(201).json({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      createdAt: newUser.created_at,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// fetch all users
export const fetchUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({});
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// * Show user
export const showUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ data: user });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
// update the user
export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;

  try {
    await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: {
        name,
        email,
        password,
      },
    });
  
    return res.json({ status: 200, message: "User updated successfully" });
    
  } catch (error) {
    res.status(500).json({ error: "Server error"})
    
  }
};

// * Delete user
export const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    await prisma.user.delete({ where: { id: Number(userId) } });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

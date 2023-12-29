import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const createUser = async (req, res, next) => {
  const { email, username, password } = req.body;

  try {
    // Periksa apakah email sudah ada di dalam basis data
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'Email sudah terdaftar' });
    }

    // Hashing dan salting password sebelum disimpan
    const hashedPassword = await bcrypt.hash(password, 10); // Angka 10 adalah jumlah salt rounds

    // Buat pengguna baru dengan password yang sudah di-hash
    const newUser = new User({ email, username, password: hashedPassword });
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Cari pengguna berdasarkan email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Email atau password salah' });
    }

    // Bandingkan password yang diinputkan dengan password di database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Email atau password salah' });
    }

    // Jika email dan password valid, buat token JWT yang kedaluwarsa dalam 10 menit
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '10m' }
    );

    // Kirim token JWT sebagai respon
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
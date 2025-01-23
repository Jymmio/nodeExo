const express = require('express');
const bcrypt = require('bcrypt');
const userRepository = require('../repositories/userRepo');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { email, password, avatarURL } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }

    try {
        // Vérifie si l'utilisateur existe déjà
        const existingUser = await userRepository.findByEmail(email);
        if (existingUser) {
            return res.status(401).json({ error: 'User already exists.' });
        }

        // Hash le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crée un nouvel utilisateur
        const user = await userRepository.create({
            email,
            password: hashedPassword,
            avatarURL
        });

        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
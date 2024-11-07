const bcrypt = require("bcryptjs");

let users = []; // In-memory user store (for testing purposes)

export default async function signup(req, res) {
    if (req.method === "POST") {
        const { email, password } = req.body;

        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({ email, password: hashedPassword });
        res.status(201).json({ message: "User registered successfully." });
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}

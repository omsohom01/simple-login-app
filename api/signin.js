const bcrypt = require("bcryptjs");

export default async function signin(req, res) {
    if (req.method === "POST") {
        const { email, password } = req.body;

        const user = users.find(user => user.email === email);
        if (!user) {
            return res.status(400).json({ message: "User not found." });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Incorrect password." });
        }

        res.status(200).json({ message: "Login successful." });
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}

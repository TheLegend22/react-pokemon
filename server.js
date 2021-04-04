const express = require("express");

const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, "./public")));

app.use(express.urlencoded({extended: true  }));

let PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server Listned on port ${PORT}`));

// Handle production
if (process.env.NODE_ENV === "production") {
    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

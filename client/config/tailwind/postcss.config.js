const tailwindcss = require("tailwindcss");

module.exports = {
    plugins: [
        tailwindcss("./config/tailwind/tailwind.config.js"),
        require("autoprefixer")
    ]
};
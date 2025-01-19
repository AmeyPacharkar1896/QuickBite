const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        // Serve index.html
        const filePath = path.join(__dirname, 'index.html');
        try {
            const output = fs.readFileSync(filePath);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(output.toString());
        } catch (err) {
            res.writeHead(500);
            res.end("Error loading index.html");
        }
    } else if (req.url === "/screen/restaurant_list_screen.html") {
        // Serve restaurant_list_screen.html
        const filePath = path.join(__dirname, 'screen', 'restaurant_list_screen.html');
        try {
            const output = fs.readFileSync(filePath);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(output.toString());
        } catch (err) {
            res.writeHead(500);
            res.end("Error loading restaurant_list_screen.html");
        }
    } else if (req.url === "/screen/restaurant_details_screen.html") {
        // Serve restaurant_details_screen.html
        const filePath = path.join(__dirname, 'screen', 'restaurant_details_screen.html');
        try {
            const output = fs.readFileSync(filePath);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(output.toString());
        } catch (err) {
            res.writeHead(500);
            res.end("Error loading restaurant_details_screen.html");
        }
    } else if (req.url == "/style.css") {
        // Serve CSS files
        const filePath = path.join(__dirname, "/style.css");
        try {
            const output = fs.readFileSync(filePath);
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(output);
        } catch (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("CSS file not found");
        }
    } else if (req.url == "/script.js") {
        const filePath = path.join(__dirname, "/script.js");
        try {
            const output = fs.readFileSync(filePath);
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(output);
        } catch (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("Js file not found");
        }
    } else if (req.url == "/logic/restaurant_details_logic/restaurant_details_logic.js") {
        const filePath = path.join(__dirname, "/logic/restaurant_details_logic", "/restaurant_details_logic.js");
        try {
            const output = fs.readFileSync(filePath);
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(output);
        } catch (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("Js file not found");
        }
    } else if (req.url == "/logic/restaurant_details_logic/load_selected_restaurants.js") {
        const filePath = path.join(__dirname, "/logic/restaurant_details_logic", "/load_selected_restaurants.js");
        try {
            const output = fs.readFileSync(filePath);
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(output);
        } catch (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("Js file not found");
        }
    } else if (req.url == "/logic/restaurant_list_logic/feed_logic.js") {
        const filePath = path.join(__dirname, "/logic/restaurant_list_logic", "/feed_logic.js");
        try {
            const output = fs.readFileSync(filePath);
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(output);
        } catch (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("Js file not found");
        }
    } else if (req.url == "/logic/restaurant_list_logic/filter_logic.js") {
        const filePath = path.join(__dirname, "/logic/restaurant_list_logic", "/filter_logic.js");
        try {
            const output = fs.readFileSync(filePath);
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(output);
        } catch (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("Js file not found");
        }
    } else if (req.url == "/logic/restaurant_list_logic/navigation_logic.js") {
        const filePath = path.join(__dirname, "/logic/restaurant_list_logic", "/navigation_logic.js");
        try {
            const output = fs.readFileSync(filePath);
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(output);
        } catch (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("Js file not found");
        }
    } else if (req.url == "/logic/restaurant_list_logic/sidebar_logic.js") {
        const filePath = path.join(__dirname, "/logic/restaurant_list_logic", "/sidebar_logic.js");
        try {
            const output = fs.readFileSync(filePath);
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(output);
        } catch (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("Js file not found");
        }
    } else if (req.url == "/logic/restaurant_list_logic/restaurant_list_logic.js") {
        const filePath = path.join(__dirname, "/logic/restaurant_list_logic", "/restaurant_list_logic.js");
        try {
            const output = fs.readFileSync(filePath);
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(output);
        } catch (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("Js file not found");
        }
    } else if (req.url == "/data/data_structure.js") {
        const filePath = path.join(__dirname, "/data/data_structure.js");
        try {
            const output = fs.readFileSync(filePath);
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(output);
        } catch (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("Js file not found");
        }
    } else {
        // Handle 404
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Page not found");
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

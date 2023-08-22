"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/', (req, res) => {
    res.send("Hello from Page Router");
});
exports.router.post('/Post', (req, res) => {
    // Data sent to route should look like this:{"name":"Yodahea","age": 8}
    const { name, age } = req.body;
    res.send(`Hello ${name} from Page Router. You are ${age} years old`);
});

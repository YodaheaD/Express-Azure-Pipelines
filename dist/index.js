"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const logger_1 = __importDefault(require("./src/utils/logger"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const page_1 = require("./src/page");
app.use(express_1.default.static('public'));
//const PORT = process.env.PORT;
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use('/page', page_1.router);
app.get('/', (req, res) => {
    res.send("Hello from Express Api in Azure Pipeline");
});
app.listen(8080, () => {
    logger_1.default.info(`Server running on port  8080`);
});

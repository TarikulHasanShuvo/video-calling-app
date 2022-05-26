const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const socket = require("./src/socket");
socket(server);
app.use(cors());

app.get('/', (req, res) => {
	res.send('Serer is Running');
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

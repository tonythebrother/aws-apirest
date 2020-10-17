const express = require("express");
const app = express();

//ajustes
app.set('port', process.env.PORT || 3000);

//middlwares
app.use(express.json());

//rutas
app.use(require("./routes/login"));

//iniciando el servidor
app.listen(app.get('port'), () => {
    console.log("Server on port " + app.get('port') + "\nhttp://localhost:" + app.get('port'));
})
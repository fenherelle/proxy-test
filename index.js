const express = require("express");
const cors = require("cors");
const axios = require('axios'); 
const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "*", // reemplazar por dominio donde estará la aplicacion: ej. localhost:3001
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Express listening on port ${PORT}`)
})

app.post("/dostuff", cors(corsOptions), async function (req, res) {

    const name = req.body.name;
    const email = req.body.email;

    axios.post('http://45.236.128.157/mailingsystem', {
        name: name,
        email: email
      })
      .then(function (response) {
        console.log(response);
        res.send({ status: 'Okidoki' })
      })
      .catch(function (error) {
        console.log(error);
      });

});

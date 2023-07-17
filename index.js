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

app.get("/", cors(corsOptions), async function (req, res) {

    axios.post('http://45.236.128.157/mailingsystem', {
        name: 'MP',
        email: 'mpcarrascoojeda@gmail.com'
      })
      .then(function (response) {
        console.log(response);
        res.send({ status: 'Okidoki' })
      })
      .catch(function (error) {
        console.log(error);
      });

});

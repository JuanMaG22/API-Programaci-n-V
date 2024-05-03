import express from "express";
import cors from "cors";
import productRouter from "./routes/product.route.js";
// import db from "./database/db.js;"

//const express = require('express') // importar express
const app = express() // Inicializar estancia de express
const port = process.env.PORT || 3000 // En que puerto se va a desplegar la api

// bd conection
app.use(express.json()); // Envio-Recepcion de informacion en formato tipo json
app.use(cors()); // Consumo de API desde otros puertos diferentes al PORT
app.use(express.static("public")); //Contenedor de archivos estaticos - carpeta publica

// http://localhost:3000/products
// app.get("/products", (req, res) => {
//     //res.send("Hola mundo");
//     res.status(200).json({
//         success: true,
//         data: [
//             {
//                 subject: "programacion v",
//                 description : "Esta es mi primera api", 
//                 semester: "7",
//                 date: new Date().toDateString(),
//             },
//         ],
//     });
// });

app.use("/products", productRouter);

//endpoints
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

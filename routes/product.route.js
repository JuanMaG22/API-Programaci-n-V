import express from "express";
import { products } from "../controllers/product.controller.js";

const router = express.Router();

// // http://localhost:3000/products
// router.get("/", (req, res) => {
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
router.get("/", products)
export default router;
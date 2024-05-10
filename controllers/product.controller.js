import Product from "../models/product.model.js";

export const products = async(req, res) =>{
    const productList = await Product.findAll();

    res.status(200).json({
        succes: true,
        data: productList
    });
};


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
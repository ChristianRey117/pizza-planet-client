// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";
import axios from "axios";

const baseUrl = 'http://localhost:5000/productos'

const setProducts = (dataProducts)=>{
  products = dataProducts;
}
let products = [];

export default {products, setProducts};

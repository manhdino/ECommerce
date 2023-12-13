// import { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../../components/Sidebar/rating";
import { useState } from "react";
const title = "Our Products";
import Data from "../../products.json";
// const newProductsData = [
//   {
//     id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead1235",
//     category: "Beauty",
//     name: "ULTRABOOST 22 SHOES",
//     seller: "Addidas",
//     price: 420,
//     stock: 20,
//     ratings: 4,
//     ratingsCount: 3725,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
//     shipping: 1,
//     quantity: 0,
//   },
//   {
//     id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead12364",
//     category: "Beauty",
//     name: "ULTRABOOST 22 SHOES",
//     seller: "Addidas",
//     price: 420,
//     stock: 20,
//     ratings: 4,
//     ratingsCount: 3725,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
//     shipping: 1,
//     quantity: 0,
//   },
//   {
//     id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead123",
//     category: "Shoes",
//     name: "ULTRABOOST 22 SHOES",
//     seller: "Addidas",
//     price: 420,
//     stock: 20,
//     ratings: 4,
//     ratingsCount: 3725,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
//     shipping: 1,
//     quantity: 0,
//   },
//   {
//     id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead6245",
//     category: "Shoes",
//     name: "ULTRABOOST 22 SHOES",
//     seller: "Addidas",
//     price: 420,
//     stock: 20,
//     ratings: 4,
//     ratingsCount: 3725,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
//     shipping: 1,
//     quantity: 0,
//   },
//   {
//     id: "124e13b9-2d54-4b2f-a74d-a77b362d6eadterqtq",
//     category: "Shoes",
//     name: "ULTRABOOST 22 SHOES",
//     seller: "Addidas",
//     price: 420,
//     stock: 20,
//     ratings: 4,
//     ratingsCount: 3725,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
//     shipping: 1,
//     quantity: 0,
//   },
//   {
//     id: "124e13b9-2d54-4b2f-a74d-a77b362d6eadgadfafd",
//     category: "Shoes",
//     name: "ULTRABOOST 22 SHOES",
//     seller: "Addidas",
//     price: 420,
//     stock: 20,
//     ratings: 4,
//     ratingsCount: 3725,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
//     shipping: 1,
//     quantity: 0,
//   },
//   {
//     id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
//     category: "Shoes",
//     name: "ULTRABOOST 22 SHOES",
//     seller: "Addidas",
//     price: 420,
//     stock: 20,
//     ratings: 4,
//     ratingsCount: 3725,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
//     shipping: 1,
//     quantity: 0,
//   },
//   {
//     id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
//     category: "Shoes",
//     name: " ULTRABOOST DNA SHOES",
//     seller: "Addidas",
//     price: 196,
//     stock: 19,
//     ratings: 5,
//     ratingsCount: 4355,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg",
//     shipping: 14,
//     quantity: 0,
//   },
//   {
//     id: "307f166f-1d04-4573-bc37-2f461ea9d4f7",
//     category: "Bags",
//     name: "SUPERNOVA SHOES",
//     seller: "Addidas",
//     price: 245,
//     stock: 20,
//     ratings: 4,
//     ratingsCount: 3972,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg",
//     shipping: 1,
//     quantity: 0,
//   },
//   {
//     id: "4bf9798f-63bc-4a83-b0c6-6a3b816fe922",
//     category: "Phones",
//     name: "LITE RACER ADAPT 3.0 SHOES",
//     seller: "Addidas",
//     price: 229,
//     stock: 10,
//     ratings: 5,
//     ratingsCount: 1764,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5f085fedf4e678095abad01056711_9366/Lite_Racer_Adapt_3.0_Shoes_Black_FX8802_01_standard.jpg",
//     shipping: 32,
//     quantity: 0,
//   },
//   {
//     id: "9496d72b-04ec-41f8-9bc3-0a7c9697be8e",
//     category: "Bags",
//     name: "4DFWD SHOES",
//     seller: "Addidas",
//     price: 287,
//     stock: 11,
//     ratings: 4,
//     ratingsCount: 799,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c5d1994dfd343e28567ad4400dd351d_9366/4DFWD_Shoes_Black_Q46447_01_standard.jpg",
//     shipping: 49,
//     quantity: 0,
//   },
//   {
//     id: "6e5593d3-557b-43cf-8dab-a5140faedfb0",
//     category: "Phones",
//     name: "KAPTIR 2.0 SHOES",
//     seller: "Addidas",
//     price: 138,
//     stock: 19,
//     ratings: 3,
//     ratingsCount: 4372,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0846e90b15144861b33dacf500e3cfd1_9366/Kaptir_2.0_Shoes_White_H00276_01_standard.jpg",
//     shipping: 19,
//     quantity: 0,
//   },
//   {
//     id: "9c0c13c2-54e4-4001-809b-afbd9d84037d",
//     category: "Beauty",
//     name: "4DFWD PULSE SHOES",
//     seller: "Addidas",
//     price: 226,
//     stock: 1,
//     ratings: 4,
//     ratingsCount: 2870,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a8256bb7ca34da49ff8ad5600bb2812_9366/4DFWD_Pulse_Shoes_White_Q46221_01_standard.jpg",
//     shipping: 15,
//     quantity: 0,
//   },
//   {
//     id: "c9d1f410-d28f-49d9-9b01-d759b5acbeea",
//     category: "Beauty",
//     name: "ZX 1K BOOST SHOES",
//     seller: "Addidas",
//     price: 319,
//     stock: 7,
//     ratings: 4,
//     ratingsCount: 1360,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e540bae86d5456aa034ada300ebf46c_9366/ZX_1K_Boost_Shoes_Grey_H00430_01_standard.jpg",
//     shipping: 50,
//     quantity: 0,
//   },
//   {
//     id: "1564a06b-692f-4f2e-8413-9c8a1cc2da77",
//     category: "Phones",
//     name: "NMD_R1 V2 SHOES",
//     seller: "Addidas",
//     price: 260,
//     stock: 4,
//     ratings: 5,
//     ratingsCount: 1976,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2a18c4e3f104d52a697ad6a01477bb7_9366/NMD_R1_V2_Shoes_Black_GX6367_01_standard.jpg",
//     shipping: 46,
//     quantity: 0,
//   },
//   {
//     id: "ac44095f-230e-4502-8816-dea3eaae8320",
//     category: "Bags",
//     name: "NMD_R1 PRIMEBLUE SHOES",
//     seller: "Addidas",
//     price: 437,
//     stock: 1,
//     ratings: 4,
//     ratingsCount: 565,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e03e7a2a9cb44dfac2bad6a00f95888_9366/NMD_R1_Primeblue_Shoes_White_GZ9261_01_standard.jpg",
//     shipping: 36,
//     quantity: 0,
//   },
//   {
//     id: "d0803f97-966f-4296-ad31-a7f70fc86fab",
//     category: "Phones",
//     name: "TIRO TRACK PANTS",
//     seller: "Addidas",
//     price: 146,
//     stock: 15,
//     ratings: 5,
//     ratingsCount: 3702,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg",
//     shipping: 29,
//     quantity: 0,
//   },
//   {
//     id: "8a5b4a9c-76ea-4fbb-9c70-9548de4eab01",
//     category: "Bags",
//     name: "TIRO 21 TRACK PANTS",
//     seller: "Addidas",
//     price: 109,
//     stock: 6,
//     ratings: 5,
//     ratingsCount: 1688,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg",
//     shipping: 48,
//     quantity: 0,
//   },
//   {
//     id: "b357e19b-4dd9-4fc7-b5c0-9ed5255464ba",
//     category: "Phones",
//     name: "PRIMEBLUE SST TRACK PANTS",
//     seller: "Addidas",
//     price: 63,
//     stock: 46,
//     ratings: 4,
//     ratingsCount: 50,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg",
//     shipping: 20,
//     quantity: 0,
//   },
//   {
//     id: "e4220958-06d2-4d50-96fa-0163a563f43d",
//     category: "Beauty",
//     name: "TIRO 21 TRACK PANTS",
//     seller: "Addidas",
//     price: 148,
//     stock: 41,
//     ratings: 3,
//     ratingsCount: 4483,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg",
//     shipping: 8,
//     quantity: 0,
//   },
//   {
//     id: "124e13b9-2d54-4b2f-a74d-a77b362d6eads",
//     category: "Shoes",
//     name: "ULTRABOOST 22 SHOES",
//     seller: "Addidas",
//     price: 420,
//     stock: 20,
//     ratings: 4,
//     ratingsCount: 3725,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
//     shipping: 1,
//     quantity: 0,
//   },
//   {
//     id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86s",
//     category: "Shoes",
//     name: "ULTRABOOST DNA SHOES",
//     seller: "Addidas",
//     price: 196,
//     stock: 19,
//     ratings: 5,
//     ratingsCount: 4355,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg",
//     shipping: 14,
//     quantity: 0,
//   },
//   {
//     id: "307f166f-1d04-4573-bc37-2f461ea9d4f7d",
//     category: "Bags",
//     name: "SUPERNOVA SHOES",
//     seller: "Addidas",
//     price: 245,
//     stock: 20,
//     ratings: 4,
//     ratingsCount: 3972,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg",
//     shipping: 1,
//     quantity: 0,
//   },
//   {
//     id: "4bf9798f-63bc-4a83-b0c6-6a3b816fe922g",
//     category: "Phones",
//     name: "LITE RACER ADAPT 3.0 SHOES",
//     seller: "Addidas",
//     price: 229,
//     stock: 10,
//     ratings: 5,
//     ratingsCount: 1764,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5f085fedf4e678095abad01056711_9366/Lite_Racer_Adapt_3.0_Shoes_Black_FX8802_01_standard.jpg",
//     shipping: 32,
//     quantity: 0,
//   },
//   {
//     id: "9496d72b-04ec-41f8-9bc3-0a7c9697be8eg",
//     category: "Bags",
//     name: "4DFWD SHOES",
//     seller: "Addidas",
//     price: 287,
//     stock: 11,
//     ratings: 4,
//     ratingsCount: 799,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c5d1994dfd343e28567ad4400dd351d_9366/4DFWD_Shoes_Black_Q46447_01_standard.jpg",
//     shipping: 49,
//     quantity: 0,
//   },
//   {
//     id: "6e5593d3-557b-43cf-8dab-a5140faedfb0g",
//     category: "Phones",
//     name: "KAPTIR 2.0 SHOES",
//     seller: "Addidas",
//     price: 138,
//     stock: 19,
//     ratings: 3,
//     ratingsCount: 4372,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0846e90b15144861b33dacf500e3cfd1_9366/Kaptir_2.0_Shoes_White_H00276_01_standard.jpg",
//     shipping: 19,
//     quantity: 0,
//   },
//   {
//     id: "9c0c13c2-54e4-4001-809b-afbd9d84037dg",
//     category: "Beauty",
//     name: "4DFWD PULSE SHOES",
//     seller: "Addidas",
//     price: 226,
//     stock: 1,
//     ratings: 4,
//     ratingsCount: 2870,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a8256bb7ca34da49ff8ad5600bb2812_9366/4DFWD_Pulse_Shoes_White_Q46221_01_standard.jpg",
//     shipping: 15,
//     quantity: 0,
//   },
//   {
//     id: "c9d1f410-d28f-49d9-9b01-d759b5acbeeag",
//     category: "Beauty",
//     name: "ZX 1K BOOST SHOES",
//     seller: "Addidas",
//     price: 319,
//     stock: 7,
//     ratings: 4,
//     ratingsCount: 1360,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e540bae86d5456aa034ada300ebf46c_9366/ZX_1K_Boost_Shoes_Grey_H00430_01_standard.jpg",
//     shipping: 50,
//     quantity: 0,
//   },
//   {
//     id: "1564a06b-692f-4f2e-8413-9c8a1cc2da776",
//     category: "Phones",
//     name: "NMD_R1 V2 SHOES",
//     seller: "Addidas",
//     price: 260,
//     stock: 4,
//     ratings: 5,
//     ratingsCount: 1976,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2a18c4e3f104d52a697ad6a01477bb7_9366/NMD_R1_V2_Shoes_Black_GX6367_01_standard.jpg",
//     shipping: 46,
//     quantity: 0,
//   },
//   {
//     id: "ac44095f-230e-4502-8816-dea3eaae8320s",
//     category: "Bags",
//     name: "NMD_R1 PRIMEBLUE SHOES",
//     seller: "Addidas",
//     price: 437,
//     stock: 1,
//     ratings: 4,
//     ratingsCount: 565,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e03e7a2a9cb44dfac2bad6a00f95888_9366/NMD_R1_Primeblue_Shoes_White_GZ9261_01_standard.jpg",
//     shipping: 36,
//     quantity: 0,
//   },
//   {
//     id: "d0803f97-966f-4296-ad31-a7f70fc86fab3",
//     category: "Phones",
//     name: "TIRO TRACK PANTS",
//     seller: "Addidas",
//     price: 146,
//     stock: 15,
//     ratings: 5,
//     ratingsCount: 3702,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg",
//     shipping: 29,
//     quantity: 0,
//   },
//   {
//     id: "8a5b4a9c-76ea-4fbb-9c70-9548de4eab015",
//     category: "Bags",
//     name: "TIRO 21 TRACK PANTS",
//     seller: "Addidas",
//     price: 109,
//     stock: 6,
//     ratings: 5,
//     ratingsCount: 1688,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg",
//     shipping: 48,
//     quantity: 0,
//   },
//   {
//     id: "b357e19b-4dd9-4fc7-b5c0-9ed5255464bae",
//     category: "Phones",
//     name: "PRIMEBLUE SST TRACK PANTS",
//     seller: "Addidas",
//     price: 63,
//     stock: 46,
//     ratings: 4,
//     ratingsCount: 50,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg",
//     shipping: 20,
//     quantity: 0,
//   },
//   {
//     id: "e4220958-06d2-4d50-96fa-0163a563f43dg",
//     category: "Beauty",
//     name: "TIRO 21 TRACK PANTS",
//     seller: "Addidas",
//     price: 148,
//     stock: 41,
//     ratings: 3,
//     ratingsCount: 4483,
//     img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg",
//     shipping: 8,
//     quantity: 0,
//   },
// ];

const CategoryShowCase = () => {
  const btnText = "Shop Now";
  const [items, setItems] = useState(Data);
  const filterItem = (categItem) => {
    const updateItems = Data.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItems(updateItems);
  };
  return (
    <div className="course-section style-3 padding-tb">
      <div className="course-shape one">
        <img src="/src/assets/images/shape-img/icon/01.png" alt="education" />
      </div>
      <div className="course-shape two">
        <img src="/src/assets/images/shape-img/icon/02.png" alt="education" />
      </div>
      <div className="container">
        {/* section header */}
        <div className="section-header">
          <h2 className="title">{title}</h2>
          <div className="course-filter-group">
            <ul className="lab-ul">
              <li onClick={() => setItems(Data)}>All</li>
              <li onClick={() => filterItem("Sneaker")}>Sneaker</li>
              <li onClick={() => filterItem("Pants")}>Pants</li>
              <li onClick={() => filterItem("Boot")}>Boot</li>
              <li onClick={() => filterItem("Bag")}>Bag</li>
            </ul>
          </div>
        </div>

        {/* section body */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
            {items.slice(0, 8).map((elem) => {
              const { id, img, category, name, seller, price } = elem;

              return (
                <Link to={`/shop/${id}`} key={id}>
                  <div className="col">
                    <div className="course-item style-4">
                      <div className="course-inner">
                        <div className="course-thumb">
                          <img src={img} alt="" />
                          <div className="course-category">
                            <div className="course-cate">{category}</div>
                            <div className="course-reiew">
                              <Rating />
                            </div>
                          </div>
                        </div>

                        {/* content  */}
                        <div className="course-content">
                          {/* <Link to="/shop/1234"> */}
                          <h5>{name}</h5>
                          {/* </Link> */}
                          <div className="course-footer">
                            <div className="course-author">
                              {/* <Link to="/team-single" className="ca-name"> */}
                              <h1 className="ca-name">{seller}</h1>
                              {/* </Link> */}
                            </div>
                            <div className="course-price">{price}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-5 ">
            <Link to="/shop" className="btn-shop-home">
              <span>{btnText}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowCase;
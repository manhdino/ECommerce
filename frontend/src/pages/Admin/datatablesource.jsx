export const userColumns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "username",
    headerName: "UserName",
    width: 180,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.avatar} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "fullname",
    headerName: "Full Name",
    width: 180,
  },
  {
    field: "email",
    headerName: "Email",
    width: 220,
  },
  {
    field: "password",
    headerName: "Password",
    width: 300,
  },

  {
    field: "phone",
    headerName: "Phone",
    width: 120,
  },
  {
    field: "address",
    headerName: "Address",
    width: 280,
  },
];

export const productColumns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "product",
    headerName: "Product",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.name.slice(0, 1) + params.row.name.slice(1).toLowerCase()}
        </div>
      );
    },
  },
  {
    field: "category",
    headerName: "Category",
    width: 160,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
    renderCell: (params) => {
      return <>{"$" + params.row.price}</>;
    },
  },
  {
    field: "seller",
    headerName: "Seller",
    width: 100,
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 90,
    renderCell: (params) => {
      return <div style={{ marginLeft: 10 }}>{params.row.stock}</div>;
    },
  },
  {
    field: "ratings",
    headerName: "Ratings",
    width: 90,
    renderCell: (params) => {
      return <div style={{ marginLeft: 15 }}>{params.row.ratings}</div>;
    },
  },
  {
    field: "description",
    headerName: "Description",
    width: 500,
  },
];
export const productRows = [
  {
    id: 1,
    category: "Sneaker",
    name: "ULTRABOOST 22",
    seller: "Addidas",
    price: 420,
    stock: 20,
    ratings: 4,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
    quantity: 1,
    description:
      "Inspired by the original low-profile tennis shoe, the Nike Killshot 2 updates the upper with a variety of textured leathers to create a fresh look. From soft suedes to smooth leathers with the perfect sheen, it's court-side attitude with a modern touch.",
  },
  {
    id: 2,
    category: "Sneaker",
    name: "ULTRABOOST DNA",
    seller: "Addidas",
    price: 196,
    stock: 19,
    ratings: 5,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg",
    quantity: 1,
    description:
      "Inspired by the original low-profile tennis shoe, the Nike Killshot 2 updates the upper with a variety of textured leathers to create a fresh look. From soft suedes to smooth leathers with the perfect sheen, it's court-side attitude with a modern touch.",
  },
  {
    id: 3,
    category: "Sneaker",
    name: "SUPERNOVA",
    seller: "Addidas",
    price: 245,
    stock: 20,
    ratings: 4,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg",
    quantity: 1,
    description:
      "Inspired by the original low-profile tennis shoe, the Nike Killshot 2 updates the upper with a variety of textured leathers to create a fresh look. From soft suedes to smooth leathers with the perfect sheen, it's court-side attitude with a modern touch.",
  },
  {
    id: 4,
    category: "Sneaker",
    name: "LITE RACER ADAPT 3.0 ",
    seller: "Addidas",
    price: 229,
    stock: 10,
    ratings: 5,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5f085fedf4e678095abad01056711_9366/Lite_Racer_Adapt_3.0_Shoes_Black_FX8802_01_standard.jpg",
    quantity: 1,
    description:
      "Inspired by the original low-profile tennis shoe, the Nike Killshot 2 updates the upper with a variety of textured leathers to create a fresh look. From soft suedes to smooth leathers with the perfect sheen, it's court-side attitude with a modern touch.",
  },
  {
    id: 5,
    category: "Sneaker",
    name: "4DFWD ",
    seller: "Addidas",
    price: 287,
    stock: 11,
    ratings: 4,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c5d1994dfd343e28567ad4400dd351d_9366/4DFWD_Shoes_Black_Q46447_01_standard.jpg",
    quantity: 1,
    description:
      "Inspired by the original low-profile tennis shoe, the Nike Killshot 2 updates the upper with a variety of textured leathers to create a fresh look. From soft suedes to smooth leathers with the perfect sheen, it's court-side attitude with a modern touch.",
  },
  {
    id: 6,
    category: "Sneaker",
    name: "KAPTIR 2.0 ",
    seller: "Addidas",
    price: 138,
    stock: 19,
    ratings: 3,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0846e90b15144861b33dacf500e3cfd1_9366/Kaptir_2.0_Shoes_White_H00276_01_standard.jpg",
    quantity: 1,
    description:
      "Inspired by the original low-profile tennis shoe, the Nike Killshot 2 updates the upper with a variety of textured leathers to create a fresh look. From soft suedes to smooth leathers with the perfect sheen, it's court-side attitude with a modern touch.",
  },
  {
    id: 7,
    category: "Sneaker",
    name: "4DFWD PULSE ",
    seller: "Addidas",
    price: 226,
    stock: 1,
    ratings: 4,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a8256bb7ca34da49ff8ad5600bb2812_9366/4DFWD_Pulse_Shoes_White_Q46221_01_standard.jpg",
    quantity: 1,
    description:
      "Inspired by the original low-profile tennis shoe, the Nike Killshot 2 updates the upper with a variety of textured leathers to create a fresh look. From soft suedes to smooth leathers with the perfect sheen, it's court-side attitude with a modern touch.",
  },
  {
    id: 8,
    category: "Sneaker",
    name: "ZX 1K BOOST ",
    seller: "Addidas",
    price: 319,
    stock: 7,
    ratings: 4,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e540bae86d5456aa034ada300ebf46c_9366/ZX_1K_Boost_Shoes_Grey_H00430_01_standard.jpg",
    quantity: 1,
    description:
      "Inspired by the original low-profile tennis shoe, the Nike Killshot 2 updates the upper with a variety of textured leathers to create a fresh look. From soft suedes to smooth leathers with the perfect sheen, it's court-side attitude with a modern touch.",
  },
  {
    id: 9,
    category: "Sneaker",
    name: "NMD_R1 V2 ",
    seller: "Addidas",
    price: 260,
    stock: 4,
    ratings: 5,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2a18c4e3f104d52a697ad6a01477bb7_9366/NMD_R1_V2_Shoes_Black_GX6367_01_standard.jpg",
    quantity: 1,
    description:
      "Inspired by the original low-profile tennis shoe, the Nike Killshot 2 updates the upper with a variety of textured leathers to create a fresh look. From soft suedes to smooth leathers with the perfect sheen, it's court-side attitude with a modern touch.",
  },
  {
    id: 10,
    category: "Sneaker",
    name: "NMD_R1 PRIMEBLUE ",
    seller: "Addidas",
    price: 437,
    stock: 1,
    ratings: 4,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e03e7a2a9cb44dfac2bad6a00f95888_9366/NMD_R1_Primeblue_Shoes_White_GZ9261_01_standard.jpg",
    quantity: 1,
    description:
      "Inspired by the original low-profile tennis shoe, the Nike Killshot 2 updates the upper with a variety of textured leathers to create a fresh look. From soft suedes to smooth leathers with the perfect sheen, it's court-side attitude with a modern touch.",
  },
];

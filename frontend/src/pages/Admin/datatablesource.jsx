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
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "title",
    headerName: "Title",
    width: 200,
  },

  {
    field: "description",
    headerName: "Description",
    width: 400,
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
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 100,
  },
];
export const productRows = [
  {
    id: 1,
    name: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Ultra Boot Sneaker Red",
    description: "This product is new arrived",
    category: "Sneaker",
    price: "$150",
    stock: 20,
  },
  {
    id: 2,
    name: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Ultra Boot Sneaker Red",
    description: "This product is new arrived",
    category: "Sneaker",
    price: "$150",
    stock: 20,
  },
  {
    id: 3,
    name: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Ultra Boot Sneaker Red",
    description: "This product is new arrived",
    category: "Sneaker",
    price: "$150",
    stock: 20,
  },
  {
    id: 4,
    name: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Ultra Boot Sneaker Red",
    description: "This product is new arrived",
    category: "Sneaker",
    price: "$150",
    stock: 20,
  },
  {
    id: 5,
    name: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Ultra Boot Sneaker Red",
    description: "This product is new arrived",
    category: "Sneaker",
    price: "$150",
    stock: 20,
  },
  {
    id: 6,
    name: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Ultra Boot Sneaker Red",
    description: "This product is new arrived",
    category: "Sneaker",
    price: "$150",
    stock: 20,
  },
  {
    id: 7,
    name: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Ultra Boot Sneaker Red",
    description: "This product is new arrived",
    category: "Sneaker",
    price: "$150",
    stock: 20,
  },
  {
    id: 8,
    name: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Ultra Boot Sneaker Red",
    description: "This product is new arrived",
    category: "Sneaker",
    price: "$150",
    stock: 20,
  },
  {
    id: 9,
    name: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Ultra Boot Sneaker Red",
    description: "This product is new arrived",
    category: "Sneaker",
    price: "$150",
    stock: 20,
  },
  {
    id: 10,
    name: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Ultra Boot Sneaker Red",
    description: "This product is new arrived",
    category: "Sneaker",
    price: "$150",
    stock: 20,
  },
];

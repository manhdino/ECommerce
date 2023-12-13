export const userColumns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "user",
    headerName: "User",
    width: 160,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "fullname",
    headerName: "Full Name",
    width: 160,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 120,
  },
  {
    field: "address",
    headerName: "Address",
    width: 300,
  },
  {
    field: "country",
    headerName: "Country",
    width: 120,
  },

  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    fullname: "Jon Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    phone: "224321243",
    address: "Truong Dinh HN",
    country: "VN",
  },
  {
    id: 2,
    username: "Snow",
    fullname: "Jon Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "passive",
    email: "1snow@gmail.com",
    phone: "224321243",
    address: "Truong Dinh HN",
    country: "VN",
  },
  {
    id: 3,
    username: "Snow",
    fullname: "Jon Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "pending",
    email: "1snow@gmail.com",
    phone: "224321243",
    address: "Truong Dinh HN",
    country: "VN",
  },
  {
    id: 4,
    username: "Snow",
    fullname: "Jon Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    phone: "224321243",
    address: "Truong Dinh HN",
    country: "VN",
  },
  {
    id: 5,
    username: "Snow",
    fullname: "Jon Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    phone: "224321243",
    address: "Truong Dinh HN",
    country: "VN",
  },
  {
    id: 6,
    username: "Snow",
    fullname: "Jon Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "passive",
    email: "1snow@gmail.com",
    phone: "224321243",
    address: "Truong Dinh HN",
    country: "VN",
  },
  {
    id: 7,
    username: "Snow",
    fullname: "Jon Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "pending",
    email: "1snow@gmail.com",
    phone: "224321243",
    address: "Truong Dinh HN",
    country: "VN",
  },
  {
    id: 8,
    username: "Snow",
    fullname: "Jon Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    phone: "224321243",
    address: "Truong Dinh HN",
    country: "VN",
  },
  {
    id: 9,
    username: "Snow",
    fullname: "Jon Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "pending",
    email: "1snow@gmail.com",
    phone: "224321243",
    address: "Truong Dinh HN",
    country: "VN",
  },
  {
    id: 10,
    username: "Snow",
    fullname: "Jon Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    phone: "224321243",
    address: "Truong Dinh HN",
    country: "VN",
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

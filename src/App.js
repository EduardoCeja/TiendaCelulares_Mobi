import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  TextField,
  Typography,
  Badge,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import {
  Settings,
  AddShoppingCart,
  ShoppingCart,
  PhoneAndroid
} from "@material-ui/icons";

import "./styles.css";

const useStyles = makeStyles({
  root: {
    width: 300
  },
  table: {
    minWidth: 650
  }
});

const App = () => {
  
  const classes = useStyles();
  const celulares = [
    {
      id: "0",
      imagen: "img/mobiles/samsung/samsung-galaxy-a20.webp",
      modelo: "Samsung Galaxy A20",
      precio: "699",
      stock: "4"
    },
    {
      id: "1",
      imagen: "img/mobiles/nokia/nokia-808-pureview.png",
      modelo: "Nokia 808 PureView",
      precio: "370",
      stock: "12"
    },
    {
      id: "2",
      imagen: "img/mobiles/zte/zte-blade-a5.png",
      modelo: "Zte Blade A5",
      precio: "580",
      stock: "4"
    },
    {
      id: "3",
      imagen: "img/mobiles/huawei/huawei-p20-pro.png",
      modelo: "Huawei P20 Pro",
      precio: "1279",
      stock: "6"
    },
    {
      id: "4",
      imagen: "img/mobiles/huawei/huawei-p30-lite.png",
      modelo: "Huawei P30 Lite",
      precio: "1499",
      stock: "3"
    },
    {
      id: "5",
      imagen: "img/mobiles/xiaomi/xiaomi-redmi-note-9s.jpg",
      modelo: "Xiaomi Redmi Note 9s",
      precio: "1435",
      stock: "2"
    },
    {
      id: "6",
      imagen: "img/mobiles/motorola/motorola-g8-power-lite.png",
      modelo: "Motorola G8 Power Lite",
      precio: "679",
      stock: "4"
    },
    {
      id: "7",
      imagen: "img/mobiles/nokia/nokia-1208.webp",
      modelo: "Nokia 1208",
      precio: "35",
      stock: "9"
    },
    {
      id: "8",
      imagen: "img/mobiles/blackberry/blackberry-curve-8520.png",
      modelo: "Blackberry Curve 8520",
      precio: "89",
      stock: "13"
    },
    {
      id: "9",
      imagen: "img/mobiles/iphone/iphone-5.png",
      modelo: "Iphone 5",
      precio: "379",
      stock: "5"
    },
    {
      id: "10",
      imagen: "img/mobiles/samsung/samsung-galaxy-note-20.png",
      modelo: "Samsung Galaxy Note 20",
      precio: "699",
      stock: "3"
    },
    {
      id: "11",
      imagen: "img/mobiles/xiaomi/xiaomi-redmi-note-8-pro.png",
      modelo: "Xiaomi Redmi Note 8 Pro",
      precio: "1359",
      stock: "3"
    },
    {
      id: "12",
      imagen: "img/mobiles/samsung/samsung-galaxy-a10.webp",
      modelo: "Samsung Galaxy A10",
      precio: "470",
      stock: "5"
    },
    {
      id: "13",
      imagen: "img/mobiles/zte/zte-maven-2-z831.png",
      modelo: "Zte Maven 2 Z8360",
      precio: "245",
      stock: "11"
    },
    {
      id: "14",
      imagen: "img/mobiles/sony-xperia/sony-xperia-II.png",
      modelo: "Sony Xperia II",
      precio: "489",
      stock: "4"
    },
    {
      id: "15",
      imagen: "img/mobiles/huawei/huawei-y7.png",
      modelo: "Huawei Y7",
      precio: "765",
      stock: "1"
    },
    {
      id: "16",
      imagen: "img/mobiles/xiaomi/xiaomi-smartphone.png",
      modelo: "Xiaomi Smartphone",
      precio: "289",
      stock: "10"
    },
    {
      id: "17",
      imagen: "img/mobiles/samsung/samsung-galaxy-s20.webp",
      modelo: "Samsung Galaxy S20",
      precio: "1299",
      stock: "1"
    },
    {
      id: "18",
      imagen: "img/mobiles/sony-xperia/sony-xperia-z2.png",
      modelo: "Sony Xperia Z2",
      precio: "199",
      stock: "13"
    },
    {
      id: "19",
      imagen: "img/mobiles/nokia/nokia-6-ta-1025.png",
      modelo: "Nokia 6 TA 1025",
      precio: "129",
      stock: "8"
    },
    {
      id: "20",
      imagen: "img/mobiles/huawei/huawei-y9-prime.png",
      modelo: "Huawei Y9 Prime",
      precio: "899",
      stock: "2"
    },
    {
      id: "21",
      imagen: "img/mobiles/blackberry/blackberry-torch-9850.png",
      modelo: "Blackberry Torch 9850",
      precio: "166",
      stock: "12"
    },
    {
      id: "22",
      imagen: "img/mobiles/samsung/samsung-galaxy-a30.png",
      modelo: "Samsung Galaxy A30",
      precio: "899",
      stock: "2"
    },
    {
      id: "23",
      imagen: "img/mobiles/zte/zte-zmax-pro.png",
      modelo: "Zte Zmax Pro",
      precio: "168",
      stock: "9"
    },
    {
      id: "24",
      imagen: "img/mobiles/sony-xperia/sony-xperia-l4.png",
      modelo: "Sony Xperia L4",
      precio: "1399",
      stock: "1"
    },
    {
      id: "25",
      imagen: "img/mobiles/sony-xperia/sony-xperia-10.png",
      modelo: "Sony Xperia 10",
      precio: "600",
      stock: "6"
    },
    {
      id: "26",
      imagen: "img/mobiles/samsung/samsung-galaxy-j7.webp",
      modelo: "Samsung Galaxy J7",
      precio: "520",
      stock: "4"
    },
    {
      id: "27",
      imagen: "img/mobiles/huawei/huawei-p-smart.png",
      modelo: "Huawei P Smart",
      precio: "550",
      stock: "5"
    },
    {
      id: "28",
      imagen: "img/mobiles/nokia/nokia-5233.png",
      modelo: "Nokia 5233",
      precio: "189",
      stock: "7"
    },
    {
      id: "29",
      imagen: "img/mobiles/blackberry/blackberry-9100.png",
      modelo: "Blackberry 9100",
      precio: "50",
      stock: "16"
    },
    {
      id: "30",
      imagen: "img/mobiles/motorola/motorola-one-macro.png",
      modelo: "Motorola One Macro",
      precio: "619",
      stock: "7"
    },
    {
      id: "31",
      imagen: "img/mobiles/sony-xperia/sony-xperia-5.png",
      modelo: "Sony Xperia 5",
      precio: "430",
      stock: "5"
    },
    {
      id: "32",
      imagen: "img/mobiles/blackberry/blackberry-key2.webp",
      modelo: "Blackberry Key 2",
      precio: "2879",
      stock: "1"
    },
    {
      id: "33",
      imagen: "img/mobiles/zte/zte-blade-vantage.png",
      modelo: "Zte Blade Vantage",
      precio: "279",
      stock: "13"
    },
    {
      id: "34",
      imagen: "img/mobiles/zte/zte-avid-trio.png",
      modelo: "Zte Avid Trio",
      precio: "348",
      stock: "10"
    },
    {
      id: "35",
      imagen: "img/mobiles/sony-xperia/sony-xperia-l1-white.png",
      modelo: "Sony Xperia L1 White",
      precio: "175",
      stock: "8"
    },
    {
      id: "36",
      imagen: "img/mobiles/motorola/motorola-e6.jpg",
      modelo: "Motorola E6",
      precio: "489",
      stock: "4"
    },
    {
      id: "37",
      imagen: "img/mobiles/blackberry/blackberry-keyone.png",
      modelo: "Blackberry Keyone",
      precio: "1378",
      stock: "3"
    },
    {
      id: "38",
      imagen: "img/mobiles/nokia/nokia-c3.png",
      modelo: "Nokia C3",
      precio: "119",
      stock: "14"
    },
    {
      id: "39",
      imagen: "img/mobiles/huawei/huawei-p30-pro.png",
      modelo: "Huawei P30 Pro",
      precio: "1179",
      stock: "1"
    },
    {
      id: "40",
      imagen: "img/mobiles/zte/zte-blade-max-view.png",
      modelo: "Zte Blade Max View",
      precio: "432",
      stock: "6"
    },
    {
      id: "41",
      imagen: "img/mobiles/lg/lg-k51.png",
      modelo: "LG K560",
      precio: "720",
      stock: "8"
    },
    {
      id: "42",
      imagen: "img/mobiles/iphone/iphone-11-pro-max.png",
      modelo: "Iphone 11 Pro Max",
      precio: "3450",
      stock: "1"
    },
    {
      id: "43",
      imagen: "img/mobiles/nokia/nokia-2-3.png",
      modelo: "Nokia 2.3",
      precio: "660",
      stock: "5"
    },
    {
      id: "44",
      imagen: "img/mobiles/xiaomi/xiaomi-redmi-note-9-pro.png",
      modelo: "Xiaomi Redmi Note 9 Pro.png",
      precio: "1289",
      stock: "2"
    },
    {
      id: "45",
      imagen: "img/mobiles/motorola/motorola-g8-plus.png",
      modelo: "Motorola G8 Plus",
      precio: "570",
      stock: "3"
    },
    {
      id: "46",
      imagen: "img/mobiles/lg/lg-q60.webp",
      modelo: "LG Q60",
      precio: "789",
      stock: "2"
    },
    {
      id: "47",
      imagen: "img/mobiles/lg/lg-k40-s.png",
      modelo: "LG K40 S",
      precio: "449",
      stock: "3"
    },
    {
      id: "48",
      imagen: "img/mobiles/iphone/iphone-6s-plus.png",
      modelo: "Iphone 6s Plus",
      precio: "689",
      stock: "4"
    },
    {
      id: "49",
      imagen: "img/mobiles/iphone/iphone-6.png",
      modelo: "Iphone 6",
      precio: "375",
      stock: "6"
    },
    {
      id: "50",
      imagen: "img/mobiles/sony-ericsson/sony-ericsson-w300i.png",
      modelo: "Sony Ericsson W300I",
      precio: "77",
      stock: "14"
    },
    {
      id: "51",
      imagen: "img/mobiles/lg/lg-g4.png",
      modelo: "LG G4",
      precio: "279",
      stock: "11"
    },
    {
      id: "52",
      imagen: "img/mobiles/motorola/motorola-g9.jpg",
      modelo: "Motorola G9",
      precio: "949",
      stock: "8"
    },
    {
      id: "53",
      imagen: "img/mobiles/iphone/iphone-8.png",
      modelo: "Iphone 8",
      precio: "945",
      stock: "7"
    },
    {
      id: "54",
      imagen: "img/mobiles/motorola/motorola-g8-power.jpg",
      modelo: "Motorola G8 Power",
      precio: "600",
      stock: "5"
    },
    {
      id: "55",
      imagen: "img/mobiles/xiaomi/xiaomi-redmi-note-8.png",
      modelo: "Xiaomi Redmi Note 8",
      precio: "759",
      stock: "4"
    },
    {
      id: "56",
      imagen: "img/mobiles/iphone/iphone-11-pro.png",
      modelo: "Iphone 11 Pro",
      precio: "2479",
      stock: "2"
    },
    {
      id: "57",
      imagen: "img/mobiles/lg/lg-k20.png",
      modelo: "LG K20",
      precio: "435",
      stock: "4"
    },
    {
      id: "58",
      imagen: "img/mobiles/blackberry/blackberry-4396.png",
      modelo: "Blackberry 4396",
      precio: "50",
      stock: "12"
    },
    {
      id: "59",
      imagen: "img/mobiles/xiaomi/xiaomi-redmi-note-10-lite.png",
      modelo: "Xiaomi Redmi Note 10 Lite",
      precio: "1499",
      stock: "2",
      marca: "xiaomi"
    }
  ];

  const [data, setData] = React.useState(celulares);
  const [cantidad, setCantidad] = React.useState([]);
  const [shoppingCart, setShoppingCart] = React.useState([]);

  const handleChange = (quantity, index) => {
    let clone = [...cantidad];
    clone[index] = quantity;
    setCantidad(clone);
  };

  const addShopCart = (item, index) => {
    
    const aux = shoppingCart.find((x) => x.model === item.modelo);
    //console.log(item);
    if (!aux) {
      const cellphone = {
        model: item.modelo,
        unitPrice: item.precio,
        quantity: cantidad[index],
        totalPrice: item.precio * cantidad[index]
      };
      setShoppingCart([...shoppingCart, cellphone]);
    }
  };

  return (
    
    <React.Fragment>
      <h1>Tienda de Celulares Mobi</h1>
      <Badge
        badgeContent={shoppingCart.length}
        color="error"
        style={{ float: "right" }}
      >
        <ShoppingCart />
        
      </Badge>

      <br />
      <br />

      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Modelo</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell align="center">
                <Settings color="primary" />
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.slice(0, 5).map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.modelo}</TableCell>
                <TableCell>{item.precio}</TableCell>
                <TableCell>
                  <TextField
                    id={`quantity_${index}`}
                    size="small"
                    variant="outlined"
                    name="quantity"
                    onChange={(event) =>
                      handleChange(event.target.value, index)
                    }
                  />
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => addShopCart(item, index)}
                  >
                    <AddShoppingCart />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <br />
      <br />
      <br />

      <Typography variant="h5" gutterBottom>
        Detalle carrito
      </Typography>

      <List>
        {shoppingCart.map((product, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>
                <PhoneAndroid />
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary={product.model}
              secondary={`Cantidad: ${product.quantity}`}
            />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default App;

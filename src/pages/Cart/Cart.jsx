import { Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../../contexts/CartContextProvider";
import Header from "../../components/Header/Header";

const Cart = () => {
  const { cart, getCart, changeTripCount, deleteTripInCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="back-img">
      <Header />
      <p className="back" onClick={() => navigate(-1)}>
        Previous page
      </p>
      <Container>
        <h1 className="page-title">TRIP CART</h1>
        {cart?.trips?.length > 0 ? (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="center">
                      Type
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Image
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Price
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      SubPrice
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Count
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="right">
                      Delete
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.trips.map((elem) => (
                    <TableRow
                      key={elem.item.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {elem.item.title}
                      </TableCell>
                      <TableCell align="center">{elem.item.type}</TableCell>
                      <TableCell align="right">
                        <img
                          width="40px"
                          src={elem.item.img}
                          alt={elem.item.title}
                        />
                      </TableCell>
                      <TableCell align="right">{elem.item.price}</TableCell>
                      <TableCell align="right">{elem.subPrice}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() =>
                            changeTripCount(elem.count + 1, elem.item.id)
                          }
                        >
                          <AddIcon />
                        </IconButton>

                        {elem.count}

                        <IconButton
                          onClick={() => {
                            elem.count > 0
                              ? changeTripCount(elem.count - 1, elem.item.id)
                              : deleteTripInCart(elem.item.id);
                          }}
                        >
                          <RemoveIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={() => deleteTripInCart(elem.item.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="price-order">
              <Typography variant="h5">
                Total price: {cart.totalPrice} KGS
                <br />
                <NavLink style={{ textDecoration: "none" }} to="/payment">
                  <Button className="btn-all" variant="outlined">
                    Order now for {cart.totalPrice} KGS
                  </Button>
                </NavLink>
              </Typography>
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h2>Cart is empty</h2>
            <br />
            <br />
            <Button
              className="btn-all"
              variant="outlined"
              component={Link}
              to="/booking"
            >
              Return to trips
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;

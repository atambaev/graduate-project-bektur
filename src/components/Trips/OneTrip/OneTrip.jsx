import React, { useState } from "react";
import { useCart } from "../../../contexts/CartContextProvider";
import { useFav } from "../../../contexts/FavContextProvider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./OneTrip.scss";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import CardTravelIcon from "@mui/icons-material/CardTravel";

const OneTrip = ({ item }) => {
  const { addDelCart, isTripInCart } = useCart();
  const [inCart, setInCart] = useState(isTripInCart(item.id));

  const { addDelFav, isTripInFav } = useFav();
  const [inFav, setInFav] = useState(isTripInFav(item.id));

  const [countLike, setCountLike] = useState(0);
  const like = () => {
    setCountLike(countLike + 1);
  };

  return (
    <div className="cart-outer">
      <div className="container">
        <div className="cart">
          <CardMedia
            className="cart-img"
            sx={{ maxWidth: 345 }}
            component="img"
            height="240"
            image={item.img}
            alt={item.title}
          />
          <div className="content">
            <div>
              <p>{item.title}</p>
            </div>
            <div>
              <p>{item.price} KGS</p>
            </div>
            <div>
              <p>Region: {item.type}</p>
            </div>
            <div>
              <p>{item.description}</p>
            </div>
            <CardActions>
              <IconButton
                color={inCart ? "success" : "inherit"}
                onClick={() => {
                  addDelCart(item);
                  setInCart(isTripInCart(item.id));
                }}
              >
                <CardTravelIcon />
              </IconButton>

              <IconButton
                color={inFav ? "success" : "inherit"}
                onClick={() => {
                  addDelFav(item);
                  setInFav(isTripInFav(item.id));
                }}
              >
                <LoyaltyIcon />
              </IconButton>

              <IconButton onClick={like}>
                <FavoriteIcon /> {countLike}
              </IconButton>

              <Button component={Link} to={`detail/${item.id}`} size="small">
                More about trip
              </Button>
            </CardActions>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneTrip;

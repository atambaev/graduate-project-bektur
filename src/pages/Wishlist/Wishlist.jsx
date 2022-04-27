import { Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useFav } from "../../contexts/FavContextProvider";
import Header from "../../components/Header/Header";

const Fav = () => {
  const { fav, getFav, deleteTripInFav } = useFav();
  const navigate = useNavigate();

  useEffect(() => {
    getFav();
  }, []);

  return (
    <div className="back-img">
      <Header />
      <p className="back" onClick={() => navigate(-1)}>
        Previous page
      </p>
      <h1 className="page-title" style={{ textAlign: "center" }}>
        WISHLIST
      </h1>

      {/* <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIosNewIcon fontSize="large" />
      </IconButton> */}
      <br />
      {/* <NavLink
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        to="/booking"
      >
        <Button style={{}} variant="contained">
          Go to shop
        </Button>
      </NavLink> */}
      <Container
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {fav?.trips?.length > 0 ? (
          <>
            {fav.trips.map((elem) => (
              <Card style={{ margin: "10px 0" }} sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={elem.item.img}
                  alt={elem.item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {elem.item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {elem.item.type}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton onClick={() => deleteTripInFav(elem.item.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <Button
                    component={Link}
                    to={`/booking/detail/${elem.item.id}`}
                    size="small"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            ))}
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            {/* <HeartBrokenIcon color="action" sx={{ fontSize: 100 }} /> */}
            <h2>Wishlist is empty</h2>
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

export default Fav;

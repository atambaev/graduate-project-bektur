import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";
import { useTripContext } from "../../contexts/TripContextProvider";
import { useUserContext } from "../../contexts/CommentContextProvider";
import { useAuth } from "../../contexts/AuthContextProvider";
import { notify } from "../../components/Toastify/Toastify";
import Spinner from "../../components/Spinner/Spinner";
import Header from "../../components/Header/Header";
import "./TripDetail.scss";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";

const TripDetail = () => {
  const { prodId } = useParams();
  const { getOneTrip, forEditVal, saveView } = useTripContext();
  const { addComment, trips, getComment, deleteComment } = useUserContext();
  const [rec, setRec] = useState([]);
  const [viewed, setViewed] = useState(forEditVal);
  const navigate = useNavigate();

  const { currentUser } = useAuth();

  useEffect(() => {
    getComment(prodId);
  }, []);

  const [inpValues, setInpValues] = useState({
    comment: "",
    user: "",
    prodId: prodId,
  });

  useEffect(() => {
    getOneTrip(prodId);
  }, []);

  useEffect(() => {
    setInpValues({
      ...inpValues,
      user: currentUser.user,
    });
  }, [currentUser]);

  useEffect(() => {
    if (viewed) {
      viewed.count++;
    }
  }, []);

  useEffect(() => {
    if (viewed) {
      saveView(viewed);
    }
  }, []);

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };

    setInpValues(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inpValues.comment.trim()) {
      notify("error", "Fill the field");
      return;
    }

    let obj = {
      ...inpValues,
    };
    addComment(obj);
    setInpValues({
      ...inpValues,
      comment: "",
    });
  };

  useEffect(() => {
    recomendation();
  }, [trips]);

  async function recomendation() {
    let newArr = await trips.filter((elem) => {
      return elem.type === forEditVal.type;
    });
    setRec(newArr);
  }

  return (
    <div className="detail-outer">
      <Header />
      <div className="prod-detail">
        <div className="container">
          <h2 className="page-title">ADDITIONAL INFORMATION</h2>
          <div>
            {forEditVal ? (
              <div>
                <div className="info">
                  <img width="400px" src={forEditVal.img} alt="" />

                  <h2>{forEditVal.title}</h2>

                  <p>Region: {forEditVal.type}</p>

                  <p>{forEditVal.description}</p>

                  <h4>{forEditVal.price} KGS</h4>

                  <p>Date: {forEditVal.date}</p>

                  <FaceRetouchingNaturalIcon sx={{ color: "white" }} />
                  <p style={{ color: "white", margin: "0", padding: "0" }}>
                    {forEditVal.count}
                  </p>
                </div>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "30px 0",
                  }}
                >
                  <Card
                    className="comment-box"
                    sx={{
                      maxWidth: 800,
                      border: "1px solid grey",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <CardContent>
                      <form onSubmit={(e) => handleSubmit(e)}>
                        {trips?.map((item) => (
                          <Box
                            key={item.id}
                            style={{
                              borderBottom: "1px solid black",
                              display: "flex",
                              justifyContent: "center",
                              maxWidth: "750px",
                              minWidth: "500px",
                            }}
                          >
                            <div>
                              <IconButton>
                                <PersonIcon fontSize="large" />
                              </IconButton>
                            </div>
                            <div>
                              <p style={{ fontWeight: "bold" }}>{item.user}</p>
                              <p style={{ opacity: "0.6" }}>
                                {new Date().toLocaleString()}
                              </p>
                              <p>{item.comment}</p>
                              {item.user === currentUser.user ? (
                                <IconButton onClick={() => deleteComment(item)}>
                                  <DeleteIcon />
                                </IconButton>
                              ) : (
                                ""
                              )}
                            </div>
                          </Box>
                        ))}
                        <TextField
                          name="comment"
                          id="outlined-basic"
                          label="Comment"
                          variant="outlined"
                          multiline
                          rows={2}
                          onChange={(e) => handleChange(e)}
                          sx={{ my: 1, maxWidth: "350px" }}
                        />

                        <br />
                        <Button
                          className="btn-all"
                          type="submit"
                          variant="outlined"
                        >
                          Add comment
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </Box>
              </div>
            ) : (
              <Spinner />
            )}
          </div>
        </div>

        <div>
          {rec && rec.length > 0
            ? rec.map((elem) => (
                <Card
                  sx={{
                    maxWidth: 245,
                    marginRight: "5px",
                    marginBottom: "10px",
                  }}
                  key={elem.id}
                  onClick={() => navigate("/booking")}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={elem.img}
                      alt={elem.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {elem.title}
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div">
                        Type: {elem.type}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))
            : " "}
        </div>
      </div>
    </div>
  );
};

export default TripDetail;

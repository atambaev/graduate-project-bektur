import { Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTripContext } from "../../../contexts/TripContextProvider";
import { TRIPS_LIMIT } from "../../../helpers/consts";
import LiveSearch from "../../LiveSearch/LiveSearch";
import Spinner from "../../Spinner/Spinner";
import Filter from "../Filter/Filter";
import OneTrip from "../OneTrip/OneTrip";
import "./TripList.scss";

const TripList = () => {
  const { getTrips, trips, pageTotalCount } = useTripContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+searchParams.get("_page") || 1);
  const [type, setType] = useState(searchParams.get("type") || "all");

  const paramsWithType = () => {
    return {
      _limit: TRIPS_LIMIT,
      _page: page,
      type: type,
      // price_gte: slider,
      q: searchParams.get("q") || "",
    };
  };

  const paramsNoType = () => {
    return {
      _limit: TRIPS_LIMIT,
      _page: page,
      // price_gte: slider,
      q: searchParams.get("q") || "",
    };
  };

  useEffect(() => {
    if (searchParams.get("type")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, []);

  useEffect(() => {
    getTrips();
  }, [searchParams]);

  useEffect(() => {
    if (type === "all") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [page, type]);

  const handleReset = () => {
    setType("all");
    setSearchParams({
      _limit: TRIPS_LIMIT,
      _page: page,
      q: "",
    });
  };

  return (
    <div className="trip-list">
      <div className="container">
        <div>
          <div className="search-filter">
            <LiveSearch />
            <Filter
              type={type}
              setType={setType}
              setPage={setPage}
              handleReset={handleReset}
            />
          </div>
          <div style={{ margin: "30px 0", textAlign: "center" }}>
            <Pagination
              sx={{ display: "inline-block" }}
              count={pageTotalCount}
              variant="outlined"
              color="primary"
              onChange={(e, pageVal) => setPage(pageVal)}
              page={page}
            />
          </div>
        </div>
        <br />
        <Grid container spacing={2}>
          {trips && trips.length > 0 ? (
            trips.map((item) => <OneTrip key={item.id} item={item} />)
          ) : (
            <Spinner />
          )}
        </Grid>
      </div>
    </div>
  );
};

export default TripList;

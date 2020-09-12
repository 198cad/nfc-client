import React from "react";
import { Grid } from "@material-ui/core";
import CoffeCard from "./CoffeCard";

const Content = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <CoffeCard />
      </Grid>
    </Grid>
  );
};

export default Content;

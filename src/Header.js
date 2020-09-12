import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { AcUnitRounded } from "@material-ui/icons";

const useStyle = makeStyles(() => ({
  typographyStyle: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyle();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography alias="h1" className={classes.typographyStyle}>
          Laborum amet consequat duis sint elit sunt in Lorem Lorem proident.
        </Typography>
        <AcUnitRounded />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

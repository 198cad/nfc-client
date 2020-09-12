import React, { useEffect, useState } from "react";
import socket from "./socket";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      uid: "",
    };
  }

  componentDidMount() {
    socket.on("uid", (data) => {
      this.setState({ uid: data });
    });
  }
  render() {
    return <p>{this.state.uid}</p>;
  }
}

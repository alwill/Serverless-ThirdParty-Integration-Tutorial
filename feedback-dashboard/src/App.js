import React, { Component } from "react";
import * as signalR from "@aspnet/signalr";
import "./App.css";
import FeedbackCard from "./FeedbackCard";

class App extends Component {
  constructor() {
    super();
    fetch(process.env.REACT_APP_SIGNALR_CONNECTION, {
      method: "GET",
      headers: {
        "x-functions-key": process.env.REACT_APP_SIGNALR_CONNECTION_API_KEY
      }
    })
      .then(resp => resp.json())
      .then(data => {
        let signalROptions = {
          accessTokenFactory: () => data.accessToken
        };
        var hubConnection = new signalR.HubConnectionBuilder()
          .withUrl(data.url, signalROptions)
          .configureLogging(signalR.LogLevel.Information)
          .build();

        hubConnection.start();

        hubConnection.on("feedback", data => {
          const newList = this.state.feedbackList;
          newList.push(data.submission.data);
          this.setState({
            feedbackList: newList
          });
        });
      });

    this.state = {
      feedbackList: []
    };
  }

  render() {
    const feedbackList = this.state.feedbackList.map(item => {
      return <FeedbackCard feedback={item} />;
    });
    return <div>{feedbackList}</div>;
  }
}

export default App;

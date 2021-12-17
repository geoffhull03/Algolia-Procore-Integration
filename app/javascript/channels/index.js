// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

import React from "react"
import ReactDOM from "react-dom";
import Home from "../components/Home"

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Home />,
      document.getElementById('home')
    )
  })
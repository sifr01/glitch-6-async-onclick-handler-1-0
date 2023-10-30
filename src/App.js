import React from "react";
import Button from "./Button";
import "./styles.css";
// const puppeteer = require('puppeteer');


export default function App() {
  const [url, setUrl] = React.useState(null);
  const fetchRandomDogPic = async () => {
    let res = await fetch("https://dog.ceo/api/breeds/image/random");
    const { message: url } = await res.json();
    return new Promise((resolve) => {
      // adding delay of 4s
      setTimeout(() => {
        setUrl(url);
        resolve();
      }, 4000);
    });
  };

  return (
    <div className="App">
      <h1>Async onClick handler</h1>
      <Button onClick={fetchRandomDogPic}>Fetch dog pic</Button>
      {url && <img src={url} alt="random dog" />}
    </div>
  );
}

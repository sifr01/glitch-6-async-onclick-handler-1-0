import React from "react";

export default function Button(props) {
  const [buttonState, setButtonState] = React.useState("loaded");
  const onClick = async () => {
    setButtonState("loading");
    await props.onClick();
    setButtonState("loaded");
  };
  return (
    <button onClick={onClick} disabled={buttonState === "loading"}>
      {buttonState === "loaded" ? props.children : "Fetching..."}
    </button>
  );
}

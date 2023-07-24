"use client";

import { Button } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    console.log("click!");
    setCounter(counter + 1);
  };

  return (
    <>
      <Button onClick={handleClick} variant="outlined">
        Нажми на меня
      </Button>
      <div>Вы нажали {counter} раз</div>
    </>
  );
}

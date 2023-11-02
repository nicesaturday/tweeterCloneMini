import { useState } from "react";

type result = [(data: any) => void, any];

export default function useMutation(url: string): result {
  const [state, setState] = useState();
  function enter(data: any) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setState(data));
  }

  return [enter, state];
}

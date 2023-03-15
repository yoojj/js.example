import { useEffect, useState } from "preact/hooks";
import { Button } from "@/common/components/Button.tsx";



export default function Counter(props: { value: string }) {

  const [count, setCount] = useState(props.value);

  return (
    <div>
      <p>{count}</p>
      <Button onClick={ () => setCount(count - 1) }>-</Button>
      <Button onClick={ () => setCount(count + 1) }>+</Button>
    </div>
  );
}

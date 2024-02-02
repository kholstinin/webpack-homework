import React, {Suspense} from "react";
const Button = React.lazy(() => import("app2"));

export default function Main() {
  return (
    <div>
      <div style={{
        margin:"10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"greenyellow"
      }}>
        <h1>App1</h1>
      </div>
      <Suspense fallback={"loading..."}>
        <Button/>
      </Suspense>
    </div>)
}

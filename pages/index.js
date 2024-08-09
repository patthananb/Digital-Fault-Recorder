import styles from "@/styles/Home.module.css"
import * as React from "react";

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";

//home page
export default function Home() {
  return (
    <>
    <NextUIProvider>
      <div>
        <h1>
          this is home page
        </h1>
      </div>
      </NextUIProvider>
    </>
  )
}

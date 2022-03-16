/* @refresh reload */
import { App } from "@features/app"
import { render } from "solid-js/web"
import "./index.css"

render(() => <App />, document.getElementById("root") as HTMLElement)

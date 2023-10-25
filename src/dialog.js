import "./styles.css";
import { taskCreated } from "./newTask";


const button = document.querySelector("#newTask");
const main = document.querySelector("main")

export function dialogFunc() {
    button.addEventListener("click", () =>{
        let dial = document.createElement("dialog")
        main.appendChild(dial)

        let h3 = document.createElement("h3")
        h3.textContent = "New task"
        dial.appendChild(h3)

        let textput = document.createElement("input")
        textput.id = "textput"
        dial.appendChild(textput)

        let dateput = document.createElement("input")
        dateput.id = "dateput"
        dateput.type = "date"
        dial.appendChild(dateput)

        let btn = document.createElement("button")
        btn.id = "closeDial"
        btn.textContent = "Add"
        dial.appendChild(btn)

        dial.showModal()

        btn.addEventListener("click", ()=>{
            taskCreated()
            
        })
    })
}


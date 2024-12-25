import { main } from "./index";
import menuImage from './menu.jpg'
export function drawMenu(){
    //the only image
    const menu = document.createElement('img')
    menu.src = menuImage
    menu.classList.add('menu')
    main.appendChild(menu)
}
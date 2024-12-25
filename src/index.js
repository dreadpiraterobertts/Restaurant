import './style.css'
import logoimage from './logo.jpg'
import { drawAbout } from './about'
import { drawMenu } from './menu'

export const main = document.getElementById("content")
export const header = document.querySelector("header")
export const buttons = document.querySelectorAll('button')

//image for the header
export function makeHeader (){
    const logo = document.createElement("img")
    logo.src=logoimage
    header.appendChild(logo)
}
makeHeader()
export function clearMain (){
    main.innerHTML = ""
}
//home button
buttons[0].addEventListener('click',()=>{
    clearMain()
    drawHome()
})
//menu button
buttons[1].addEventListener('click',()=>{
    clearMain()
    drawMenu()
})

//about button
buttons[2].addEventListener('click',()=>{
    clearMain()
    drawAbout()
})

export function drawHome(){
    //title for the page(h1)
const title = document.createElement("h1")
title.innerHTML="Los Pollos Hermanos"
main.appendChild(title)

//description for the home page(p)
const description = document.createElement('p')
description.innerHTML = `This is Los Pollos Hermanos a well beloved chicken fast food restaurant. 
If you want the mexican spices make sure to pay us a visit. <br>
I am Gustavo Fring and I make an honest living from only making chickens the community love. 
You can find more about me on the <span>about</span> section`
main.appendChild(description)

//opening hours (h3)
const opening = document.createElement('h3')
opening.innerHTML = "We are open"
main.appendChild(opening)
//the hours (ul)
const lists = document.createElement('ul')
lists.innerHTML = `
<li>Sunday: 8am - 8pm</li>
<li>Monday: 6am - 6pm</li>
<li>Tuesday: 6am - 6pm</li>
<li>Wednesday: 6am - 6pm</li>
<li>Thursday: 6am - 10pm</li>
<li>Friday: 6am - 10pm</li>
<li>Saturday: 8am - 10pm</li>
`
main.appendChild(lists)

}
drawHome()


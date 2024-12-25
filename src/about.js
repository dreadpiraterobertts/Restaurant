import {main} from "./index";



export function drawAbout(){
     //title for the page(h1)
    const title = document.createElement("h1")
    title.innerHTML="About"
    main.appendChild(title)
    
    //description for the home page(p)
    const description = document.createElement('p')
    description.innerHTML = `As mentioned before my name is Gustavo Fring. I am an active member in society
    and help with what I can to give back to the community. <br> I fund the police department for no other reason
    than I am not involved in any meth business whatsoever.<br> I also fund schools,hospitals and give random scholarships
    for people that i definetely dont want to make my meth chef.`
    main.appendChild(description)
    

    
}

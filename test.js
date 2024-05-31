"use strict"
const did = (id) => document.getElementById(id);

let count = 100;

function Home(){
  console.log("HOME CALL");
  let b = document.body;

  const h1 = document.createElement("h1");
  h1.innerHTML = "Welcome to home page";
  b.appendChild(h1);

  const p = document.createElement("p");
  p.innerHTML = "Some random text in the paragraph tag";
  b.append(p);

}

window.addEventListener("load", () => Home());
//window.onLoad = () => {Home()};

function About(){
  //remove all elements
  let b = document.body;

  const h1 = document.createElement("h1");
  h1.innerHTML = "About page";
  b.appendChild(h1);

  const p = document.createElement("p");
  p.innerHTML = "Some random text in the paragraph tag";
  b.append(p);
}

//navigating :
const aboutLink = did("routeToAbout");
aboutLink.addEventListener("click", About);



//On route change, append the page to the body element, staying on the same page
//Also changing the displayed url.



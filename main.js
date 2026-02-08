document.addEventListener("DOMContentLoaded", ()=>{

  
  /* ========= QUOTES ========= */
  const quoteEl = document.getElementById("quote");

  const quotes = [
    "Dive into words",
    "Books calm minds",
    "Stories never sleep"
  ];

  let i=0;

  setInterval(()=>{
    if(quoteEl){
      quoteEl.textContent = quotes[i];
      i=(i+1)%quotes.length;
    }
  },3000);



  /* ========= AUTHOR OF DAY ========= */
  const authorEl = document.getElementById("author");

  if(authorEl){
    const authors = ["Mark Twain","Virginia Woolf","Oscar Wilde"];
    authorEl.textContent =
      authors[new Date().getDate()%authors.length];
  }



  /* ========= FEATURED BOOKS ========= */
  const grid = document.getElementById("featuredGrid");

  if(grid){

    const featured = [
      {title:"Anne of Green Cables",img:"images/books/green.jpg"},
      {title:"The Alchemist",img:"images/books/alchemist.jpg"},
      {title:"Hobbit", img:"images/books/hobbit.jpg"},
      {title:"Matilda",img:"images/books/matilda.jpg"},
      {title:"Black Forest",img:"images/books/black.jpg"}
    ];

    featured.forEach(b=>{
      const card=document.createElement("div");
      card.className="card";
      card.innerHTML=`<img src="${b.img}"><h4>${b.title}</h4>`;
      grid.appendChild(card);
    });
  }

});



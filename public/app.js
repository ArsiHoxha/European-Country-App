

//here we get info abour our flagsflamuri1 = document.getElementById("Russia");
const flamuri2 = document.getElementById("Germany");
const flamuri3 = document.getElementById("United Kingdom");
const flamuri4 = document.getElementById("France");
const flamuri5 = document.getElementById("Italy");
const flamuri6 = document.getElementById("Spain");
const flamuri7 = document.getElementById("Ukraine");
const flamuri8 = document.getElementById("Poland");
const flamuri9 = document.getElementById("Romania");
const flamuri10 = document.getElementById("Netherlands");
const flamuri11 = document.getElementById("Belgium");
const flamuri12 = document.getElementById("Czech Republic (Czechia)");
const flamuri13 = document.getElementById("Greece");
const flamuri14 = document.getElementById("Portugal");
const flamuri15 = document.getElementById("Sweden");
const flamuri16 = document.getElementById("Hungary");
const flamuri17 = document.getElementById("Belarus");
const flamuri18 = document.getElementById("Austria");
const flamuri19 = document.getElementById("Serbia");
const flamuri44 = document.getElementById("Switzerland");
const flamuri20 = document.getElementById("Bulgaria");
const flamuri21 = document.getElementById("Denmark");
const flamuri22 = document.getElementById("Finland");
const flamuri23 = document.getElementById("Slovakia");
const flamuri24 = document.getElementById("Norway");
const flamuri25 = document.getElementById("Ireland");
const flamuri26 = document.getElementById("Croatia");
const flamuri27 = document.getElementById("Moldova");
const flamuri28 = document.getElementById("Bosnia and Herzegovina");
const flamuri29 = document.getElementById("Albania");
const flamuri30 = document.getElementById("Lithuania");
const flamuri31 = document.getElementById("North Macedonia");
const flamuri32 = document.getElementById("Slovenia");
const flamuri33 = document.getElementById("Latvia");
const flamuri34 = document.getElementById("Estonia");
const flamuri35 = document.getElementById("Montenegro");
const flamuri36 = document.getElementById("Luxembourg");
const flamuri37 = document.getElementById("Malta");
const flamuri38 = document.getElementById("Iceland");
const flamuri39 = document.getElementById("Andorra");
const flamuri40 = document.getElementById("Monaco");
const flamuri41 = document.getElementById("Liechtenstein");
const flamuri42 = document.getElementById("San Marino");
const flamuri43 = document.getElementById("Vatikan");

const kerko = document.getElementById("kerko")
const kerkoB = document.getElementById("shtyp")

const messagesDiv = document.getElementById("messages");

// Retrieve messages from server-side storage
const messages = JSON.parse(localStorage.getItem("messages")) || [];

// Display all messages in the div


//do te krijome listen
const flamujte = [
  flamuri2,
  flamuri3,
  flamuri4,
  flamuri5,
  flamuri6,
  flamuri7,
  flamuri8,
  flamuri9,
  flamuri10,
  flamuri11,
  flamuri12,
  flamuri13,
  flamuri14,
  flamuri15,
  flamuri16,
  flamuri17,
  flamuri18,
  flamuri19,
  flamuri20,
  flamuri21,
  flamuri22,
  flamuri23,
  flamuri24,
  flamuri25,
  flamuri26,
  flamuri27,
  flamuri28,
  flamuri29,
  flamuri30,
  flamuri31,
  flamuri32,
  flamuri33,
  flamuri34,
  flamuri35,
  flamuri36,
  flamuri37,
  flamuri38,
  flamuri39,
  flamuri40,
  flamuri41,
  flamuri42,
  flamuri43,
  flamuri44
];
kerkoB.addEventListener('click',()=>{

  
for(var i = 0;i<flamujte.length;i++){

  if(kerko.value == flamujte[i].id){
    flamujte[i].style.display = "inline-block"        
    kerko.value = ""

  }
}
})


  //do te aksesojme secilin Flamur

flamujte.forEach((flamur) => {
  flamur.addEventListener("mousedown", () => {


    const kodiL = "1a9e08b2a21f4118b85813d65e27824b";
    const shteti = flamur.id;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '003501d3a2msh0e600a8594c8bdep1bc592jsn60f6511a6149',
        'X-RapidAPI-Host': 'country-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    fetch('https://country-by-api-ninjas.p.rapidapi.com/v1/country?name='+shteti, options)
      .then(response => response.json())
      .then(response => console.log(response['0']['capital']))
    
    
   console.log("pershendetje")


    if(shteti == "Italy"){
      console.log("i")
    }
    const url ="https://newsapi.org/v2/everything?q=" +shteti +"&from=2023-03-0&sortBy=publishedAt&apiKey=" +kodiL;
    if(shteti == "Italy"){
      const ushq ="https://www.themealdb.com/api/json/v1/1/filter.php?a=italian";
      merrUshqimet(ushq)
    }else if(shteti == "United Kingdom"){
      const ushq ="https://www.themealdb.com/api/json/v1/1/filter.php?a=british";
    merrUshqimet(ushq)
    }else if(shteti == "France"){
      const ushq ="https://www.themealdb.com/api/json/v1/1/filter.php?a=french";
      merrUshqimet(ushq)
    }else if(shteti == "Spain"){
      const ushq ="https://www.themealdb.com/api/json/v1/1/filter.php?a=spanish";
      merrUshqimet(ushq)
    }else if(shteti == "Poland"){
      const ushq ="https://www.themealdb.com/api/json/v1/1/filter.php?a=Polish";
      merrUshqimet(ushq)
    }else if(shteti == "Netherlands"){
      const ushq ="https://www.themealdb.com/api/json/v1/1/filter.php?a=Dutch";
      merrUshqimet(ushq)
    }else if(shteti == "Greece"){
      const ushq ="https://www.themealdb.com/api/json/v1/1/filter.php?a=greek";
      merrUshqimet(ushq)
    }else if(shteti == "Portugal"){
      const ushq ="https://www.themealdb.com/api/json/v1/1/filter.php?a=Portuguese";
      merrUshqimet(ushq)
    }else if(shteti == "Ireland"){
      const ushq ="https://www.themealdb.com/api/json/v1/1/filter.php?a=Irish";
      merrUshqimet(ushq)
    }else if(shteti == "Croatia"){
      const ushq ="https://www.themealdb.com/api/json/v1/1/filter.php?a=Croatian";
      merrUshqimet(ushq)
    }
    merrLajmet(url);
  });
});



//prove



async function merrUshqimet(ushq) {
  const kerkoUsh = await fetch(ushq)
  const merrUsh = await kerkoUsh.json();
  


  //do te aksesojme secilin mish
  for(var i = 0;i<merrUsh['meals'].length;i++){
    const emri = merrUsh['meals'][i]['strMeal'] 

    let listaEmrave = []
    listaEmrave.push(emri)
   
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="+listaEmrave+""

    const kerkoEMrinProduktit =await  fetch(url)
    const merrEmrinProduktit =await  kerkoEMrinProduktit.json()
    const emriUsh = merrEmrinProduktit['meals'][0]['strMeal']
    const pershkrimiush = merrEmrinProduktit['meals'][0]['strInstructions']
    console.log(pershkrimiush)
    
    let linqet = merrEmrinProduktit['meals'][0]['strYoutube']



    const imgush = merrUsh['meals'][i]['strMealThumb'];
    const imazhi = document.createElement("img");
    const link = document.createElement("a");
    const emriUshN = document.createElement('h1')
    const tekstiPershkrues = document.createElement('h2')
    emriUshN.innerText = emriUsh
    emriUshN.id = "emriUshN"
    tekstiPershkrues.id = "teskstiPershkrues"
    tekstiPershkrues.innerHTML = pershkrimiush
    link.href = linqet;
    link.id = "linkuUshq";
    link.innerHTML = linqet;    
    imazhi.src = imgush;
    
    document.body.appendChild(imazhi)
    document.body.appendChild(emriUshN) 
    document.body.appendChild(tekstiPershkrues) + "<br>"

    document.body.appendChild(link)
  
  }


}
async function merrLajmet(url) {
  const kerkoL = await fetch(url);
  const merrL = await kerkoL.json();

  for (var i = 0; i < merrL["articles"].length; i++) {
    const foto = merrL["articles"][i]["urlToImage"];
    const linku = merrL["articles"][i]["url"];
    const imazhi = document.createElement("img");
    const link = document.createElement("a");
    link.href = linku;
    link.id = "link";
    link.innerHTML = linku;
    imazhi.src = foto;
    imazhi.id = "imazh";

    const imazhet = [];
    imazhet.push(imazhi);
    imazhet.forEach((imazh) => {
      const titulli = document.createElement("h1");

      titulli.id = "titull";

      const pershkrimi = document.createElement("h2");
      pershkrimi.id = "pershkrimi";
      pershkrimi.innerHTML = merrL["articles"][i]["description"];

      titulli.innerHTML = merrL["articles"][i]["title"];

      document.body.appendChild(titulli);
      document.body.appendChild(imazhi);
      document.body.appendChild(pershkrimi);
      document.body.appendChild(link);
    });
  }
}

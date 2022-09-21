const logos = {
    "BFMTV":"https://upload.wikimedia.org/wikipedia/commons/b/b6/Logo_BFM_TV_%282019%29.png",
    "Francetvinfo.fr":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Franceinfo.svg/1024px-Franceinfo.svg.png",
    "Eurosport.fr":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Eurosport_Logo_2015.svg/2560px-Eurosport_Logo_2015.svg.png",
    "Le Monde":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Le_Monde.svg/1200px-Le_Monde.svg.png",
    "Ouest-France":"https://upload.wikimedia.org/wikipedia/fr/thumb/7/72/Logo_Ouest-France.svg/1200px-Logo_Ouest-France.svg.png",
    "Sud Ouest":["#D52A13","black"],
    "Le Parisien":["#1EA0E6","black"],
    "AlloCiné":["#FBCB01","black"],
    "20 Minutes":["#0B4892","black"],
    "Butfootballclub.fr":["#DC0000","black"],
    "Yahoo Entertainment":["#602AD2","black"],
    "Nice-Matin":["#005FA7","black"],
    "jeuxvideo.com":["#FF3900","black"],
    "L'Indépendant":["#154E86","black"]
}


document.getElementById('actualites').innerHTML = "";
fetch('https://newsapi.org/v2/top-headlines?country=fr&apiKey=6189388f39cd46daa3134136181674e4').then((resp)=>resp.json()).then((resp)=>{
    for (let a of resp.articles) {
        if (a.content != null) {
            if (a.description == null) {
                description = '';
            }
            else {
                description = a.description
            }
            console.log(a)
            document.getElementById('actualites').innerHTML += "<div style='background-color : #464649; color: white;'><strong style='font-size: x-large'>"+a.title+"</strong><img height='50' src='"+logos[a.source.name]+"'><br>"+description+"</div><br>"    
        }
    }
})
//! Affichage des personnage

var bouton = document.getElementById("list")
bouton.addEventListener("click", function() {list()} )
var visible = document.getElementById("infos");
var visibleDivPlanete = document.getElementById("liste");
var nextlink = " "
var previouslink = " "


function list(){
visibleDivPlanete.className = "visible"

    fetch("https://swapi.co/api/planets/")
    .then (
        function(response){
            return response.json()
        }
    )
    .then (
        function (data){
            nextlink = data.next
            previouslink = data.previous

            var parent =  document.getElementById('liste')
            parent.innerText = ""
            
            for (let i = 0; i <= 9; i++) {
            var div = document.createElement("div")
            var div2 = document.createElement("div")
            var text = document.createElement("p")

            text.innerHTML = data.results[i].name
            div.appendChild(text, div.firstChild)
            parent.appendChild(div)
            div.appendChild(div2)
            div.setAttribute("class", "divlist")
            var infof = document.createElement("p");
            infof.innerHTML= "voir les stats";
            infof.addEventListener("click", function(){info(data.results[i].url)})
            div2.appendChild(infof);
            }
    }
    )
}

//! Affichage des information  des personnages

function info(detail){
    visible.className= "vue"
    visible.className = "visible"
    fetch (detail)
        .then (
            function(response){
                return response.json()
            }
        )
        .then (
            function(data){
                var parent = document.getElementById("infos");
                parent.innerHTML= "";

                var idt = document.createElement("h3");
                idt.innerHTML= "Nom";
                
                parent.appendChild(idt);
                var id = document.createElement("p");
                id.innerHTML= data.name;
                
                parent.appendChild(id);
                var nomt = document.createElement("h3");
                nomt.innerHTML= "Durée de rotation";
                
                parent.appendChild(nomt);
                var nom = document.createElement("p");
                nom.innerHTML= data.rotation_period;
                
                parent.appendChild(nom);
                var hauteurt = document.createElement("h3");
                hauteurt.innerHTML= "Periode orbital";
                
                parent.appendChild(hauteurt);
                var hauteur = document.createElement("p");
                hauteur.innerHTML= data.orbital_period;
                
                parent.appendChild(hauteur);
                var imaget = document.createElement("h3");
                imaget.innerHTML= "Diametre";
                
                parent.appendChild(imaget);
                var cheveux = document.createElement("p");
                cheveux.innerHTML= data.diameter;

                parent.appendChild(cheveux);
                var vetement = document.createElement("h3");
                vetement.innerHTML= "Climat";
                
                parent.appendChild(vetement);
                var skin = document.createElement("p");
                skin.innerHTML= data.climate;
                
                parent.appendChild(skin);
                var Yeux = document.createElement("h3");
                Yeux.innerHTML= "Graviter";
                
                parent.appendChild(Yeux);
                var yeux = document.createElement("p");
                yeux.innerHTML= data.gravity;

                parent.appendChild(yeux);
                var genre = document.createElement("h3");
                genre.innerHTML= "Terrain";
                
                parent.appendChild(genre);
                var genres = document.createElement("p");
                genres.innerHTML= data.terrain;
                
                parent.appendChild(genres)
                var wter = document.createElement("h3");
                wter.innerHTML= "Surface d'eau";
                
                parent.appendChild(wter);
                var water = document.createElement("p");
                water.innerHTML= data.surface_water;

                parent.appendChild(water);
                var popu = document.createElement("h3");
                popu.innerHTML= "Population";
                
                parent.appendChild(popu);
                var popula = document.createElement("p");
                popula.innerHTML= data.population;
                
                parent.appendChild(popula);

                
            }
        )
}

//! Fonction suivant des personnages 

var suiv = document.getElementById("suivant")
suiv.addEventListener("click", function() {suivant()} )

function suivant(){
    visible.className = "invisible"
    fetch(nextlink)
    .then (
        function(response){
            return response.json()
        }
    )
    .then (
        function (data){
            nextlink = data.next
            previouslink = data.previous

            var parent =  document.getElementById('liste')
            parent.innerText = ""
            
            for (let i = 0; i <= 9; i++) {
            var div = document.createElement("div")
            var div2 = document.createElement("div")
            var text = document.createElement("p")

            text.innerHTML = data.results[i].name
            div.appendChild(text, div.firstChild)
            parent.appendChild(div)
            div.appendChild(div2)
            div.setAttribute("class", "divlist")
            var infof = document.createElement("p");
            infof.innerHTML= "voir les stats";
            infof.addEventListener("click", function(){info(data.results[i].url)})
            div2.appendChild(infof);
            }
    }
    )
}

//! Fonction precedent des personnages


var prece = document.getElementById("precedent")
prece.addEventListener("click", function() {precedent()} )

function precedent(){
    visible.className = "invisible"
    fetch(previouslink)
    .then (
        function(response){
            return response.json()
        }
    )
    .then (
        function (data){
            nextlink = data.next
            previouslink = data.previous

            var parent =  document.getElementById('liste')
            parent.innerText = ""
            
            for (let i = 0; i <= 9; i++) {
            var div = document.createElement("div")
            var div2 = document.createElement("div")
            var text = document.createElement("p")

            text.innerHTML = data.results[i].name
            div.appendChild(text, div.firstChild)
            parent.appendChild(div)
            div.appendChild(div2)
            div.setAttribute("class", "divlist")
            var infof = document.createElement("p");
            infof.innerHTML= "voir les stats";
            infof.addEventListener("click", function(){info(data.results[i].url)})
            div2.appendChild(infof);
            }
    }
    )
}
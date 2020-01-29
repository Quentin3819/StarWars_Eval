//! Affichage des personnage

var bouton = document.getElementById("list")
bouton.addEventListener("click", function() {list()} )
var visible = document.getElementById("infos");
var visibleDivPerso = document.getElementById("liste");
var nextlink = " "
var previouslink = " "

function list(){
    visibleDivPerso.className = "visible"

    fetch("https://swapi.co/api/people/")
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
                nomt.innerHTML= "Taille";
                
                parent.appendChild(nomt);
                var nom = document.createElement("p");
                nom.innerHTML= data.height;
                
                parent.appendChild(nom);
                var hauteurt = document.createElement("h3");
                hauteurt.innerHTML= "Poids";
                
                parent.appendChild(hauteurt);
                var hauteur = document.createElement("p");
                hauteur.innerHTML= data.mass;
                
                parent.appendChild(hauteur);
                var imaget = document.createElement("h3");
                imaget.innerHTML= "Couleur Cheveux";
                
                parent.appendChild(imaget);
                var cheveux = document.createElement("p");
                cheveux.innerHTML= data.hair_color;

                parent.appendChild(cheveux);
                var vetement = document.createElement("h3");
                vetement.innerHTML= "Vetement";
                
                parent.appendChild(vetement);
                var skin = document.createElement("p");
                skin.innerHTML= data.skin_color;
                
                parent.appendChild(skin);
                var Yeux = document.createElement("h3");
                Yeux.innerHTML= "Couleur Yeux";
                
                parent.appendChild(Yeux);
                var yeux = document.createElement("p");
                yeux.innerHTML= data.eye_color;

                parent.appendChild(yeux);
                var genre = document.createElement("h3");
                genre.innerHTML= "Genre";
                
                parent.appendChild(genre);
                var genres = document.createElement("p");
                genres.innerHTML= data.gender;
                
                parent.appendChild(genres)

                
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


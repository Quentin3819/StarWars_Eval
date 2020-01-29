var xhr = new XMLHttpRequest();

function rechercher() {
    xhr.onload = function() {
        var name = JSON.parse(xhr.responseText).results;

        for (i = 0; i < name.length; i++) {
            var liste = document.createElement("p");
            var sec = document.getElementById("sec");
            liste.setAttribute("onclick","detail1('"+name[i].name+"','"+name[i].height+"','"+name[i].mass+"','"+name[i].gender+"');");
            sec.insertBefore(liste, sec.firstChild);
            liste.innerHTML = name[i].name;

        }
    }
    sec.innerHTML = " ";
    var inp = document.getElementById("rec").value;
    xhr.open('GET', 'https://swapi.co/api/people/?search=' + inp);
    xhr.send();
}


function detail1(o,p,q,r) {
    var visibleDivRecherche = document.getElementById("divDetails");
    visibleDivRecherche.className = "visible"
    var parents = document.getElementById("divDetails");
    var n = document.createElement("p");
    n.innerHTML += "<h2>Nom</h2><p>" + o + "</p><br>";
    var haut = document.createElement("p");
    haut.innerHTML += "<h2>Hauteur</h2><p>" + p + "</p><br>";
    var poids = document.createElement("p");
    poids.innerHTML += "<h2>Poids</h2><p>" + q + "</p><br>";
    var genre = document.createElement("p");
    genre.innerHTML += "<h2>Genre</h2><p>" + r + "</p><br>";
    document.getElementById("divDetails").innerHTML = " "
    parents.appendChild(n);
    parents.appendChild(haut);
    parents.appendChild(poids);
    parents.appendChild(genre);
}

var xhr = new XMLHttpRequest();

function rechercher2() {
    xhr.onload = function() {
        var name = JSON.parse(xhr.responseText).results;

        for (i = 0; i < name.length; i++) {
            var liste = document.createElement("p");
            var sec = document.getElementById("sec2");
            liste.setAttribute("onclick","detail2('"+name[i].name+"','"+name[i].climate+"','"+name[i].diameter+"');")
            sec.insertBefore(liste, sec.firstChild);
            liste.innerHTML = name[i].name;

        }
    }
    sec.innerHTML = " ";
    var inp = document.getElementById("rec2").value;
    xhr.open('GET', 'https://swapi.co/api/planets/?search=' + inp);
    xhr.send();
}

function detail2(x,y,z) {
    var visibleDivRecherche = document.getElementById("divDetails");
    visibleDivRecherche.className = "visible"
    var parents = document.getElementById("divDetails");
    var nom = document.createElement("p");
    nom.innerHTML += "<h2>Nom</h2><p>" + x + "</p><br>";
    var temp = document.createElement("p");
    temp.innerHTML += "<h2>Climat</h2><p>" + y + "</p><br>";
    var diams = document.createElement("p");
    diams.innerHTML += "<h2>Diametre</h2><p>" + z + "</p><br>";
    document.getElementById("divDetails").innerHTML = " "
    parents.appendChild(nom);
    parents.appendChild(temp);
    parents.appendChild(diams);
}

function kerro(data) {
    var teksti = "";

    teksti = "<h1>" + data.otsikko + "</h1>";
    teksti += "<p>" + data.kuvaus + "</p>";
    teksti += '<img src="https://maijavo.github.io/Tehtava3/digi.jpg" alt="Kuva" width="300">';
    teksti += "<h3>Opintojakso</h3>";
    teksti += "<p>" + data.opintojakso.nimi + " (" + data.opintojakso.tunnus + "), " + data.opintojakso.opintopisteet + " op</p>";

    teksti += "<h3>Sisältö</h3><ul>";
    data.sisalto.forEach(aihe => {
        teksti += "<li>" + aihe + "</li>";
    });
    teksti += "</ul>";

    teksti += "<h3>Tekniikat</h3><ul>";
    data.tekniikat.forEach(tekniikka => {
        teksti += '<li><a href="' + tekniikka.linkki + '" target="_blank">' + tekniikka.aihe + "</a></li>";
    });
    teksti += "</ul>";

    document.getElementById("vastaus").innerHTML = teksti;
}


fetch("https://maijavo.github.io/Tehtava3/harjoitus3.JSON")
    .then(response => response.json()) 
    .then(responseJson => kerro(responseJson)) 
    .catch(error => {
        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    });
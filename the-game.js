function startGame() {
    var island = prompt("Je wordt wakker op een eiland in het midden van de oceaan.\nJe staat voor een keuze\nZoek resources of zorg voor onderdak").toLowerCase();
    if (island == "zoek resources") {
        var island = prompt("Je hebt de eerste nacht overleeft, maar nu wordt je heel dorstig en koud wakker\nZoek water of maak een vuurtje").toLowerCase();
        if (island == "maak een vuurtje") {
            var island = prompt("Door het vuurtje ben je in de nacht lekker warm gebleven\nJe hebt nu hele erge dorst, maar je wilt ook uit de wind zitten in de nacht\nZorg voor onderdak of zoek water").toLowerCase();
            if (island == "zoek water") {
                var island = prompt("Je hebt een zoet water bron gevonden vlak bij het strand\nMaar stiekem ben je er wel klaar mee om al 3 dagen op het eiland te zitten\nProbeer te ontsnappen of maak een hutje").toLowerCase();
                if (island == "maak een hutje") {
                    island = prompt("Je hutje heeft de nacht overleeft, maar hij gaat het niet eeuwig vol houdenn\nOok begin je ondertussen honder te krijg\nZoek voedsel of maak een vlot").toLowerCase();
                    if (island == "maak een vlot") {
                        island = prompt("Je vlot kan je gewicht dragen en hij drijft\nMaar je twijfelt over hoe je hem moet besturen\nMaak een zeil of maak een peddel").toLowerCase();
                        if (island == "maak een zeil") {
                            island = prompt("Het zeil vangt genoeg wind om je van het eiland te halen\nTegen de verveling heb je twee dingen te doen\nBagage verzamelen of ontdek het eiland").toLowerCase();
                            if (island == "bagage verzamelen") {
                                island = prompt("Tijdens het verzamelen heb je een volleybal gevonden\nNoem hem Wilson of gooi hem weg").toLowerCase();
                                if (island == "noem hem wilson") {
                                    island = prompt("Leuke naam!\nNu zit er maar een ding op\nDat is je terug reis\nBegin aan terug reis").toLowerCase();
                                    if (island == "begin aan terug reis") {
                                        alert("Gefeliciteerd!\nTijdens je terugreis kwam je een boot tegen die je terug bracht naar je familie");
                                    } else {
                                        verkeerd();
                                    }
                                } else if (island == "gooi hem weg") {
                                    alert("Helaas!\nJe hebt de volleybal weggegooid, maar nu wordt je gek van de stemmen in je hoofd\nWaardoor je gek werd");
                                } else {
                                    verkeerd();
                                }
                            } else if (island = "ontdek het eiland") {
                                alert("Helaas!\nTijdens het wandelen ben je op een hele giftige slang gaan staan.\n En laten we het erop houden dat je het niet hebt overleeft");
                            } else {
                                verkeerd();
                            }
                        } else if (island == "maak een peddel") {
                            alert("Helaas!\nJe had zoveel moeite gestoken erin gestoken om je peddel te maken\nDat je gelijk weg wou, maar onderweg werd je te moe door het peddelen\nJe overleed ter plekke")
                        } else {
                            verkeerd();
                        }
                    } else if (island == "zoek voedsel") {
                        alert("Helaas!\nTijdens het zoeken van eten viel er een kokosnoot op je hoofd");
                    } else {
                        verkeerd();
                    }
                } else if (island == "probeer te ontsnappen") {
                    alert("Helaas!\nJe probeerde te gaan zwemmen, maar je wist niet dat er haaien om het eiland heen zwommen");
                } else {
                    verkeerd();
                }
            } else if (island = "zorg voor onderdak") {
                alert("Helaas!\nJe hebt niet optijd water gevonden, waardoor je overleed");
            } else {
                verkeerd();
            }
        } else if (island = "zoek water") {
            island = prompt("Je hebt een water bron gevonden\nMaar je begint ook een beetje honger te krijgen\nZoek eten of maak een hutje");
            if (island == "maak een hutje") {
                island = prompt("Je hutje is eindelijk klaar maar na zo'n lange dag werken. Heb je nog een keuze\nEten zoeken of een vuurtje maken")
            } else if (island == "zoek eten") {
                alert("Helaas!\nHet ging in de avond stormen, en terwijl je lekker aan het genieten was. Werd je getroffen door bliksem")
            }
        } else {
            verkeerd();
        }
    }
}

function verkeerd() {
    alert("Verkeerde input, begin opnieuw")
}
//Stijn Dusseldorp
//Software Developer

function startGame() {
    island = prompt("Je wordt wakker op een eiland in het midden van de oceaan.\nJe staat voor een keuze\nZoek resources of zorg voor onderdak").toLowerCase();
    document.getElementById("keuze1").innerHTML = island;
    if (island == "zoek resources") {
        island = prompt("Je hebt de eerste nacht overleeft, maar nu wordt je heel dorstig en koud wakker\nZoek water of maak een vuurtje").toLowerCase();
        document.getElementById("keuze2").innerHTML = island;
        if (island == "maak een vuurtje") {
            island = prompt("Door het vuurtje ben je in de nacht lekker warm gebleven\nJe hebt nu hele erge dorst, en je zag ergens een bron water\nHoeveel liter water nee je mee?\nAntwoord ic alleen getallen");
            document.getElementById("keuze3").innerHTML = island;
            if (island >= 5) {
                island = prompt("Je hebt gelukkig genoeg water mee genomen\nMaar stiekem ben je er wel klaar mee om al 3 dagen op het eiland te zitten\nProbeer te ontsnappen of maak een hutje").toLowerCase();
                document.getElementById("keuze4").innerHTML = island;
                if (island == "maak een hutje") {
                    island = prompt("Je hutje heeft de nacht overleeft, maar hij gaat het niet eeuwig vol houden\nOok begin je ondertussen honder te krijg\nZoek voedsel of maak een vlot").toLowerCase();
                    document.getElementById("keuze5").innerHTML = island;
                    if (island == "maak een vlot") {
                        island = prompt("Je vlot kan je gewicht dragen en hij drijft\nMaar je twijfelt over hoe je hem moet besturen\nMaak een zeil of maak een peddel").toLowerCase();
                        document.getElementById("keuze6").innerHTML = island;
                        if (island == "maak een zeil") {
                            island = prompt("Het zeil vangt genoeg wind om je van het eiland te halen\nTegen de verveling heb je twee dingen te doen\nBagage verzamelen of ontdek het eiland").toLowerCase();
                            document.getElementById("keuze7").innerHTML = island;
                            if (island == "bagage verzamelen") {
                                island = prompt("Tijdens het verzamelen heb je een volleybal gevonden\nNoem hem Wilson of gooi hem weg").toLowerCase();
                                document.getElementById("keuze8").innerHTML = island;
                                if (island == "noem hem wilson") {
                                    island = prompt("Leuke naam!\nNu zit er maar een ding op\nDat is je terug reis\nBegin aan terug reis").toLowerCase();
                                    document.getElementById("keuze9").innerHTML = island;
                                    if (island == "begin aan terug reis") {
                                        alert("Gefeliciteerd!\nTijdens je terugreis kwam je een boot tegen die je terug bracht naar je familie");
                                    } else {
                                        verkeerd();
                                    }
                                } else if (island == "gooi hem weg") {
                                    alert("Helaas!\nJe hebt de volleybal weggegooid, maar nu wordt je gek van de stemmen in je hoofd\nWaardoor je gek werd");
                                    document.getElementById("keuze8").innerHTML = island;
                                } else {
                                    verkeerd();
                                }
                            } else if (island = "ontdek het eiland") {
                                alert("Helaas!\nTijdens het wandelen ben je op een hele giftige slang gaan staan.\n En laten we het erop houden dat je het niet hebt overleeft");
                                document.getElementById("keuze7").innerHTML = island;
                            } else {
                                verkeerd();
                            }
                        } else if (island == "maak een peddel") {
                            alert("Helaas!\nJe had zoveel moeite gestoken erin gestoken om je peddel te maken\nDat je gelijk weg wou, maar onderweg werd je te moe door het peddelen\nJe overleed ter plekke");
                            document.getElementById("keuze6").innerHTML = island;
                        } else {
                            verkeerd();
                        }
                    } else if (island == "zoek voedsel") {
                        alert("Helaas!\nTijdens het zoeken van eten viel er een kokosnoot op je hoofd");
                        document.getElementById("keuze5").innerHTML = island;
                    } else {
                        verkeerd();
                    }
                } else if (island == "probeer te ontsnappen") {
                    alert("Helaas!\nJe probeerde te gaan zwemmen, maar je wist niet dat er haaien om het eiland heen zwommen");
                    document.getElementById("keuze4").innerHTML = island;
                } else {
                    verkeerd();
                }
            } else if (island <= 4) {
                alert("Helaas!\nJe hebt te weinig water meegenomen. Waardoor je alsnog uitdroogde");
                document.getElementById("keuze3").innerHTML = island;
            } else {
                verkeerd();
            }
        } else if (island = "zoek water") {
            island = prompt("Je hebt een water bron gevonden\nMaar je begint ook een beetje honger te krijgen\nZoek eten of maak een hutje").toLowerCase();
            document.getElementById("keuze2").innerHTML = island;
            if (island == "maak een hutje") {
                island = prompt("Je hutje is eindelijk klaar maar na zo'n lange dag werken. Heb je nog een keuze\nEten zoeken of een vuurtje maken").toLowerCase();
                document.getElementById("keuze3").innerHTML = island;
                if (island == "eten zoeken") {
                    alert("Helaas\nHet enige wat je kon vinden was een kogelvis. Je had hem alleen verkeerd bereid");
                    document.getElementById("keuze4").innerHTML = island;
                } else if (island == "een vuurtje maken") {
                    alert("Helaas!\nNadat je het vuur had gemaakt, nam de wind toe.\nDoor je vuurtje is het hele eiland afebrandt.");
                    document.getElementById("keuze4").innerHTML = island;
                } else {
                    verkeerd();
                }

            } else if (island == "zoek eten") {
                alert("Helaas!\nHet ging in de avond stormen, en terwijl je lekker aan het genieten was. Werd je getroffen door bliksem");
                document.getElementById("keuze3").innerHTML = island;
            } else {
                verkeerd();
            }
        } else {
            verkeerd();
        }
    } else if (island == "zorg voor onderdak") {
        island = prompt("Je hebt nu een knus huisje maar nog geen eten of drinken\nZoek eten of zoek drinken").toLowerCase();
        document.getElementById("keuze1").innerHTML = island;
        if (island == "zoek eten") {
            island = prompt("Nu je lekker eten hebt gevonden, sta je voor de volgende keuze\nPoging tot ontsnappen of een vuurtje maken").toLowerCase();
            document.getElementById("keuze2").innerHTML = island;
            if (island == "Poging tot ontsnappen") {
                alert("Helaas!\nJe probeerde te gaan zwemmen, maar je werd ondergetrokken door de onderstroming en kwam niet meer boven het water uit");
                document.getElementById("keuze3").innerHTML = island;
            } else if (island == "een vuurtje maken") {
                alert("Helaas\nJe hebt geen water kunnen vinden waardoor je uitdroogde");
                document.getElementById("keuze3").innerHTML = island;
            } else {
                verkeerd();
            }

        } else if (island == "zoek drinken") {
            alert("Helaas!\nJe liep boven op een afgrond, en beneden zag je een plas met water. Je sprong erin, maar het was niet diep genoeg.");
            document.getElementById("keuze2").innerHTML = island;

        } else {
            verkeerd();
        }
    } else {
        verkeerd();
    }
}

function verkeerd() {
    alert("Verkeerde input, begin opnieuw");
}
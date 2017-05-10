var playerPlay = true;
var endGame = false;
var IAWin = false;
var playerWin = false;
var idCase;
var pionachecker;
var pionajouer;
var IAplayed = false;
var clicks = 0;
var caseContent = new Array('');
/*var CanWin = false;*/


function play(idCase)
{
    var isfull = false;
    
    if (endGame == false)
    {
        IAplayed = false;
        /*alert('function play ok');*/
        var contenuCase = document.getElementById(idCase).textContent;
        if(/*contenuCase != "O" && contenuCase != "X"*/contenuCase == '')
        {
            document.getElementById(idCase).innerHTML = "X";
            endGame = checkVictory('X');
            isfull = verifPlateauPlein();
        }
        else
        {
            return;    
        }
        if (isfull == false && endGame == false)
        {
            playerPlay = false;
            IAplay();
            isfull = verifPlateauPlein();
            endGame = checkVictory('O');
            playerPlay = true;
        }
    }
};

function IAplay()
{
    var caseContent = new Array('');
    var i;
    var coinvides = new Array();
    
    /*alert('function IAplay OK');*/
    
    // récupère le contenu des cases dans un tableau
    
    for (i = 1; i < 10; i++)
    {
        caseContent.push(document.getElementById('case'+i).textContent);
    }
    
    
    // l'IA vérifie si elle peut gagner
    IAplayed = checkWhoCanWin('O', 'O', caseContent);
    // l'IA vérifie si le joueur peut gagner
    if (IAplayed == false)
    {
        IAplayed = checkWhoCanWin('X', 'O', caseContent);
    }
    // si le centre est vide, l'IA joue au centre
    if (document.getElementById("case5").textContent == '' && IAplayed == false)
    {
        document.getElementById("case5").innerHTML = 'O';
        IAplayed =true;
        return;
    }
    // si un des coins est vide, l'IA joue dans un des coins au hasard
    i=1;
    while(i<=9)
    {
        if (document.getElementById('case'+i).textContent=='' && IAplayed == false)
        {
            coinvides.push(i);
        }
        switch(i)
        {
            case 1: 
                {
                    i=3;
                    break;
                }
            case 3:
                {
                    i=7;
                    break;
                }
            case 7:
                {
                    i=9;
                    break;
                }
            case 9:
                {
                    i++; // permet de sortir de la boucle
                    break;
                }
        }
    }
    if (coinvides.length != 0 && IAplayed == false)
    {
        rndm = Math.floor(Math.random() * (coinvides.length-1));
        document.getElementById('case'+coinvides[rndm]).innerHTML = 'O';
        IAplayed = true;
    }
    else // dernière possibilité : l'IA joue au hasard si la case est vide
    {
        while (IAplayed == false)
        {
            rndm = Math.floor(Math.random() * 9) + 1;
            if (document.getElementById('case'+rndm).textContent == '')
            {
                document.getElementById('case'+rndm).innerHTML = 'O' ;
                IAplayed = true;
            }
        }
    }
};

function checkWhoCanWin(pionachecker, pionajouer, caseContent)
{
    /*alert('function checkWhoCanWin OK');*/
    for (i = 1; i < 10; i++)
        {
            if (caseContent[i] == '')
                {
                    switch(i)
                    {
                        case 1: // conditions de victoire si la case 1 est vide
                            {
                                if (  (caseContent[2]==pionachecker)&&(caseContent[3]==pionachecker)
                                    ||(caseContent[4]==pionachecker)&&(caseContent[7]==pionachecker)
                                    ||(caseContent[5]==pionachecker)&&(caseContent[9]==pionachecker))
                                {
                                    document.getElementById("case1").innerHTML = pionajouer;
                                    IAplayed = true;
                                    return true;
                                }
                                break;
                            }
                        case 2: // conditions de victoire si la case 2 est vide
                            {
                                if (  (caseContent[1]==pionachecker)&&(caseContent[3]==pionachecker)
                                    ||(caseContent[5]==pionachecker)&&(caseContent[8]==pionachecker))
                                {
                                    document.getElementById("case2").innerHTML = pionajouer;
                                    IAplayed = true;
                                    return true;
                                }
                                break;
                            }
                        case 3: // conditions de victoire si la case 3 est vide
                            {
                                if (  (caseContent[1]==pionachecker)&&(caseContent[2]==pionachecker)
                                    ||(caseContent[6]==pionachecker)&&(caseContent[9]==pionachecker)
                                    ||(caseContent[5]==pionachecker)&&(caseContent[7]==pionachecker))
                                {
                                    document.getElementById("case3").innerHTML = pionajouer;
                                    IAplayed = true;
                                    return true;
                                }
                                break;
                            }
                        case 4: // conditions de victoire si la case 4 est vide
                            {
                                if (  (caseContent[1]==pionachecker)&&(caseContent[7]==pionachecker)
                                    ||(caseContent[5]==pionachecker)&&(caseContent[6]==pionachecker))
                                {
                                    document.getElementById("case4").innerHTML = pionajouer;
                                    IAplayed = true;
                                    return true;
                                }
                                break;
                            }
                        case 5: // conditions de victoire si la case 5 est vide
                            {
                                if (  (caseContent[1]==pionachecker)&&(caseContent[9]==pionachecker)
                                    ||(caseContent[2]==pionachecker)&&(caseContent[8]==pionachecker)
                                    ||(caseContent[3]==pionachecker)&&(caseContent[7]==pionachecker)
                                    ||(caseContent[4]==pionachecker)&&(caseContent[6]==pionachecker))
                                {
                                    document.getElementById("case5").innerHTML = pionajouer;
                                    IAplayed = true;
                                    return true;
                                }
                                break;
                            }
                        case 6: // conditions de victoire si la case 6 est vide
                            {
                                if (  (caseContent[3]==pionachecker)&&(caseContent[9]==pionachecker)
                                    ||(caseContent[4]==pionachecker)&&(caseContent[5]==pionachecker))
                                {
                                    document.getElementById("case6").innerHTML = pionajouer;
                                    IAplayed = true;
                                    return true;
                                }
                                break;
                            }
                        case 7: // conditions de victoire si la case 7 est vide
                            {
                                if ((  caseContent[1]==pionachecker)&&(caseContent[4]==pionachecker)
                                    ||(caseContent[3]==pionachecker)&&(caseContent[5]==pionachecker)
                                    ||(caseContent[8]==pionachecker)&&(caseContent[9]==pionachecker))
                                {
                                    document.getElementById("case7").innerHTML = pionajouer;
                                    IAplayed = true;
                                    return true;
                                }
                                break;
                            }
                        case 8: // conditions de victoire si la case 8 est vide
                            {
                                if ( (caseContent[2]==pionachecker)&&(caseContent[5]==pionachecker)
                                    ||(caseContent[7]==pionachecker)&&(caseContent[9]==pionachecker))
                                {
                                    document.getElementById("case8").innerHTML = pionajouer;
                                    IAplayed = true;
                                    return true;
                                }
                                break;
                            }
                        case 9:
                            {
                                if (  (caseContent[1]==pionachecker)&&(caseContent[5]==pionachecker)
                                    ||(caseContent[3]==pionachecker)&&(caseContent[6]==pionachecker)
                                    ||(caseContent[7]==pionachecker)&&(caseContent[8])==pionachecker)
                                {
                                    document.getElementById("case9").innerHTML = pionajouer;
                                    IAplayed = true;
                                    return true;
                                }
                                break;
                            }
                        
                    }
                }
        }
    return 0;
};

function viderplateau()
{
    window.location.reload();
};

function checkVictory(pion)
{
    var caseContent = new Array('');
    
    for (i = 1; i < 10; i++) // récupère le contenu des cases
    {
        caseContent.push(document.getElementById('case'+i).textContent);
    }
    
    if ( ((caseContent[1]==caseContent[2])&&(caseContent[2]==caseContent[3])&&(caseContent[2]==pion)) //horizontal 1
       ||((caseContent[4]==caseContent[5])&&(caseContent[5]==caseContent[6])&&(caseContent[5]==pion)) //horizontal 2
       ||((caseContent[7]==caseContent[8])&&(caseContent[8]==caseContent[9])&&(caseContent[8]==pion)) //horizontal 3
       ||((caseContent[1]==caseContent[4])&&(caseContent[4]==caseContent[7])&&(caseContent[4]==pion)) //vertical 1
       ||((caseContent[2]==caseContent[5])&&(caseContent[5]==caseContent[8])&&(caseContent[5]==pion)) //vertical 2
       ||((caseContent[3]==caseContent[6])&&(caseContent[6]==caseContent[9])&&(caseContent[6]==pion)) //vertical 3
       ||((caseContent[1]==caseContent[5])&&(caseContent[5]==caseContent[9])&&(caseContent[5]==pion)) //diagonal 1
       ||((caseContent[3]==caseContent[5])&&(caseContent[5]==caseContent[7])&&(caseContent[5]==pion))) //diagonal 2
    {
        /*alert("test chckvictory()");*/
        if (pion == 'O')
        {
            alert("Partie terminée\nVous avez perdu !");
            viderplateau();
            return true;
        }
        else if (pion == 'X')
        {
            alert("Bravo! vous avez gagné");
            viderplateau();
            return true;
        }
    }
    else
    {
        return false;
    }
};

function verifPlateauPlein()
{
    var Content = new Array();
    
    for (i = 1; i < 10; i++) // récupère le contenu des cases
    {
        if (document.getElementById('case'+i).textContent != '')
        {
            Content.push(document.getElementById('case'+i).textContent);
        }
    }
    if (Content.length==9)
    {
        alert("plateau plein");
        viderplateau();
        return true;
    }
    else
    {
        return false;
    }
    
};
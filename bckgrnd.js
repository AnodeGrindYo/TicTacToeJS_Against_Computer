var bckgrnd = document.getElementById("bckgrnd");
var ctx = bckgrnd.getContext("2d");

//met le canevas en plein écran
bckgrnd.height = window.innerHeight;
bckgrnd.width = window.innerWidth;

//des digits pour faire comme dans Matrix
var digit = "01";
//convertit les  string en arrays of single characters
digit = digit.split("");
		

var font_size = 20;
var columns = bckgrnd.width / font_size; //nombre de colonnes pour la pluie
//un tableau, un caractère, un par colonne
var caractere = [];
//x est la coordonnée en x
var x;
//1 = y coordonnée du caractère(au départ, la même pour chacun des caractères)
for (x = 0; x < columns; x++)
{
	caractere[x] = 1;
}

//tracer les digits
function draw()
{
    var y;
	//background noir pour le canvas
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, bckgrnd.width, bckgrnd.height);
	
	ctx.fillStyle = "#00ff04"; //texte vert
	ctx.font = font_size + "px arial";
	
	//boucler
	for(var i = 0; i < caractere.length; i++)
	{
		//un caractère random
		var text = digit[Math.floor(Math.random()*digit.length)];
		//x = i*font_size, y = valeur de caractere[i]*font_size
        y = caractere[i]*font_size;
		ctx.fillText(text, i*font_size, y);
		
		
		//on ajoute un peu de random au reset, pour le style
		if(caractere[i]*font_size > bckgrnd.height && Math.random() > 0.975)
			caractere[i] = 0;
		
		caractere[i]++;
	}
}

setInterval(draw, 33);
( function( $ ) 
 {
    /**
     * span-letters.js
     */
    $.fn.spanLetters = function() 
    {
        // parcoure chaque element
        this.each( function() 
                    {   
            
                        var words, i, text;

                        // Crée un tableau avec chaque lettre du texte à un indice différent
                        words = $( this ).text().split( '' );

                        // parcoure les lettres et les place entre eds balises span
                        for ( i = 0; i in words; i++ ) 
                        {
                            words[i] = '<span class="sl' + ( i + 1 ) + ' span-letter">' + words[i] + '</span>'
                        };

                        // regroupe notre tableau de lettres entourées de span dans un string
                        text = words.join( '' );

                        // Remplace le string original par le nouveau string
                        $( this ).html( text );
                    }
                 )
    }
}( jQuery ));

// Appelle la fonction soanLetters sur la cible
$( ".container" ).spanLetters();

targets = $( ".container span" ); // Sélectionne nos spans
duration = 1000; // Durée de l'effet
speed = 100; // vitesse de l'animation entre les lettres
infiniteLoop = false // définit si l'animation doit continuer à se déclencher

// Ajoute la classe d'animation à la lettre, puis la supprime plus tard
function animateLetter( value ) 
{
  if ( turnedOn ) 
  { 
    $( value ).addClass( "active" );
    setTimeout( function() 
                {
                    stopAnimateLetter( value );  
                }, duration 
              );    
  }  
};

// Supprime la classe animation des lettres
function stopAnimateLetter( value ) 
{
  $( value ).removeClass( "active" );  
};

// déclenche la fonction
function startEverything() 
{ 
  // parcoure la collection de spans
  targets.each( function( index, value ) 
               {
                // delai entre l'animation de chaque lettre
                timer = setTimeout( function() 
                                    {
                                      animateLetter( value );
                                    }, speed * index );
                });    
  
  // ne boucle pas si le déclencheur est un clic
  if ( clicked ) 
  {
    
    clicked = false; 
    
  } else 
  {   
    // Boucle infinie
    if ( infiniteLoop ) 
    { // Si le bouclage est sur On
      if ( turnedOn ) 
      { // Si l'animation n'est pas finie
        setTimeout( function() 
                   {
                      startEverything();  
                   }, index * speed );
      }  
    }    
  }  
}

// fonction qui arrête tout
function stopEverything() 
{ 
  clearTimeout( timer );  
  turnedOn = false;  
  // ajoute un delai
  setTimeout( function() 
             {
                targets.each( function( index, value ) 
                             {
                                  stopAnimateLetter( value );
                             });
             }, 200 );  
}

// Déclenchement souris hover
$( ".container" )
    .mouseenter( function() 
                {  
                    turnedOn = true;
                    clicked = false;
                    startEverything();
                })
    .mouseleave( function() 
                {  
                    stopEverything();
                });

// déclenchement par clic
$( ".button" ).on( "click", function() 
                    {   
                        clicked = true;
                        turnedOn = true;    
                        startEverything();  
                    });

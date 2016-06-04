$("#bonusmode").hide();                                 //To hide contents of game
$("input").click(function ()
  {  
      var currentid=$(this).attr('id');                 //Gets the id name of the element clicked
      currentid="#"+currentid;                          //Converting idname into string
    
      $("#opening").hide();                             //hides the menubar
      $("#bonusmode").show();                           //Shows the contents of the mode chosen  

    var ran = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];  //array containing nos from 0 to 15
    var arr = [];                                       //array that stores randomly generated nos between 0-15
    var rand = "";                                      //to fix 2 positions with no. between 0-7
    var arrpics = [];                                   //array to store names of image file
    var flag = 0;

    for (var i = 0; i < ran.length; i++)              /* Code that randomly shuffles nos from 0-15 */
      {
        flag = 0;
        arr[i] = Math.floor(Math.random() * 16);        //randomly generates an integer
        for(var j = 0; j < ran.length; j++)             //makes sure that the integer hasnot been generated before  
          {
            if(ran[j] == arr[i])
              {
                ran[j] = 20;
                flag = 1;
              }
          }
        if(flag == 0)
          {
            i--;
          }
      }   

    for (var i = 0; i < arr.length; i+=2)             //loop to fix 2 positions with same no.
      {
        ran[arr[i]] = i/2;
        ran[arr[i+1]] = i/2;
      }
  
    for (var i = 0; i < ran.length; i++)              //loop to assign image details to the corresponding nos. 
      {
        switch(ran[i])
          {
            case 0: arrpics[i] = "A.jpg";
                    break;
            case 1: arrpics[i] = "C.jpg";
                    break;
            case 2: arrpics[i] = "P.jpg";
                    break;
            case 3: arrpics[i] = "Q.jpg";
                    break;
            case 4: arrpics[i] = "R.jpg";
                    break;
            case 5: arrpics[i] = "T.jpg";
                    break;
            case 6: arrpics[i] = "U.jpg";
                    break;
            case 7: arrpics[i] = "Z.jpg";
                    break;
          } 
      }

  var text="";                                         //variable to write html from js     

  for (var i = 0; i < arrpics.length; i++)           // loop that makes all 16 images to be alike
    {
      if(i == 0)
        text = "<div><p>";
        text += "<img src=\"hide.jpg\" id=\""+i+"\">";
          if( (i+1) % 4 == 0)
            text += "<br>";
          if(i == arrpics.length)
            text += "</p></div>"
    }

  document.getElementById('disp').innerHTML = text;     // writes html into div element

  var score = 0;                                        // var that counts the no. of correct moves
  var wrong = 0;                                        // var that counts the no. of wrong moves
  var no = 0;                                           // var to make sure two tiles are open
  var idname = "";                                      // var to store id name when no=1      
  var idname1 = "";                                     // var to store id name when no=2  
  var idno = "";                                        // var to store id no, when no=1
  var idno1 = "";                                       // var to store id no, when no=2 
  var inter=0;                                          // to count time left      
  var rem="";                                           // string to write into div

    if($(currentid).attr('id')=="opt2")                 // checks if user took up 30 sec challenge  
      {
        inter=29;
          setInterval(function()                        // Shows time remaining
            {
              rem="Time remaining: "+inter+"s";
              document.getElementById('timer').innerHTML=rem;
              inter--;
            }, 1000);
          setTimeout(function()                         //Displays score at the end of 30 sec
            {
              alert( "TIME OVER..\n\nSCORE IS " + (score*4) + "\n\nTRY TO ACHIEVE A HIGHER SCORE IN THIS MODE\n\nPRESS 'OK' TO GO MAIN MENU");
              history.go(0);
            },30000);
      }

    if($(currentid).attr('id')=="opt3")                 // checks if user took up one min challenge
      {
        inter=59;
          setInterval(function()                        // Shows time remaining
            { 
              rem="Time remaining: "+inter+"s";         
              document.getElementById('timer').innerHTML=rem;
              inter--;
            }, 1000);
          setTimeout(function()                         // Displays score at the end of one min        
            {
              alert( "TIME OVER..\n\nSCORE IS " + (score*2) + "\n\nTRY TO ACHIEVE A HIGHER SCORE IN THIS MODE\n\nPRESS 'OK' TO GO MAIN MENU");
              history.go(0);
            },60000);
      } 

  $('img').click( function()                            // function to be called when user clicks on an image/tile        
    {
      for(i = 0; i < 16; i++)                             // loop to display the corresponding image by changing the source of current image
        {
          if( $(this).attr('id') == i )
            {
              $(this).attr("src",arrpics[i]);
              no++;
              break;
            }
        }

      idname1 = "#" + ($(this).attr('id'));               // stores id name as a string                      
      idno1 = ($(this).attr('id'));                       // stores id as a number  

      if(no == 2)                                         // when no=2
        { 
         setTimeout( function()                         // delays for a certain time  
          {
            no = 0;
          
            /* compares if the source string of both images are same and both are not the same image */

            if( ($(idname1).attr('src')) == ($(idname).attr('src'))&&(($(idname1).attr('id') != idno)))   
              { 
                $(idname).attr("id",score + 20);       // changes the id no. of element 1 so that it is inaccesible then        
                $(idname1).attr("id",score + 21);      // changes the id no. of element 1 so that it is inaccesible then        
                score++;                               // increases the score

                if(score == 8)                        // when all tiles are opened    
                  {
                    if($(currentid).attr('id')=="opt2")
                      {
                        alert( "GAME OVER..\n\nSCORE IS " + (score*4) + "\n\nYOU'VE REACHED MAX. SCORE! CONGRATS!!\n\nPRESS 'OK' TO GO MAIN MENU");
                        history.go(0);
                      }
                    else if($(currentid).attr('id')=="opt3")
                     {
                        alert( "GAME OVER..\n\nSCORE IS " + (score*2) + "\n\nYOU'VE REACHED MAX. SCORE! CONGRATS!!\n\nPRESS 'OK' TO GO MAIN MENU");
                        history.go(0);
                      }
                    else
                      {
                        alert( "GAME OVER..\n\nSCORE IS "+(2*wrong)+"\n\nTRY TO ACHIEVE A LOWER SCORE IN THIS MODE\n\nPRESS 'OK' TO GO MAIN MENU");
                        history.go(0);
                      }                      // refreshes the page
                  }  

              }
          
            else
              {
                $(idname).attr("src","hide.jpg");       // sets the source of image back to hide
                $(idname1).attr("src","hide.jpg");        
                wrong++;                                //counts the no. of wrong moves  
              }

            idname = " ";                               // renews id name
            idno = "";                                  // renews id no.

          } , 500 );
        }
      else
        { 
          idname = "#" + ($(this).attr('id'));             // forms id name as a string 
          idno = ($(this).attr('id'));                     // extracts id no 
        }
    });


  });

function clickfn()                                      // refreshes page when user presses go back button
  {
    history.go(0);
  }
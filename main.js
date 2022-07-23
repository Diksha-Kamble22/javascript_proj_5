console.log('Hello World!');
var my_first_name="Rolls-Royce Motor Car was a British luxury car";

      console.log(my_first_name);
  
 var my_last_name="This car is subsidiary of BMW";

      console.log(my_last_name);

var my_full_name=my_first_name+ " &  " +my_last_name;

     console.log(my_full_name);

var length_of_full_name=my_full_name.length;
  
     console.log(length_of_full_name);

var slice_of_Full_name=my_full_name.slice(0,17);
 
     console.log(slice_of_Full_name);

var move_to_all_letters_capital=my_full_name.toUpperCase();

     console.log(move_to_all_letters_capital);

var move_to_all_letters_small=my_full_name.toLowerCase();

     console.log(move_to_all_letters_small);

var characters_of_full_name=my_full_name.charAt(1);

     console.log(characters_of_full_name);
     
   my_full_name.charCodeAt(1);
     console.log(my_full_name);


var a_string="mango is the king of mango-kingdom";
     console.log(a_string);

var replace_string=a_string.replace(/mango/g,"Green");

     console.log(replace_string);


var normal_string="volvo";
 
var repeat_string=normal_string.repeat(3);

     console.log(repeat_string);



var count=99;

     console.log(count);

var count= count+3;

     console.log(count);

  count--;

    console.log(count);

  count=count<=87;

     console.log(count);


  count=count*878;

     console.log(count);

  count=count!=61;

     console.log(count);

var boolean_ex2=(55<10087);

    console.log(boolean_ex2);

var boolean_ex3=(628%00) || (3445*979);

    console.log(boolean_ex3);

var boolean_ex4=(554!=0000) && (664<!99);

    console.log(boolean_ex4);
    
    
const OBJECT=["TIE","SOIL","NEELAM","SHREE NAGAR","BOOK"];
     
     console.log(OBJECT);

var spck=OBJECT.toString();
  
     console.log(spck);

   OBJECT.unshift("#2004");

          console.log(OBJECT);

   OBJECT.shift();

          console.log(OBJECT);

   OBJECT.push("33");

          console.log(OBJECT);
 
   OBJECT.reverse();   // .reverse& .sort are given same output
   
          console.log(OBJECT);

   OBJECT.pop();

          console.log(OBJECT);

var length_ofOBJECT=OBJECT.length;
      console.log(length);
  
var last_country=OBJECT[length_ofOBJECT-1];
      console.log(last_country);

var len_lastCOUNTRY=last_country.length;
      console.log(len_lastCOUNTRY);

var char_ofcountry=last_country.charAt(len_lastCOUNTRY-1);
      console.log(char_ofcountry);

var charcode_ofcountry=last_country.charCodeAt(len_lastCOUNTRY-1);
      console.log(charcode_ofcountry);

var secondOBJECT="          {^-_-^}          ";
    console.log(secondOBJECT);

    secondOBJECT=secondOBJECT.trim(); 

function display_second_country(){ 

     document.getElementById("java_2").innerHTML = secondOBJECT;
    }
  
    console.log(secondOBJECT);                                                      

var work1="substract";
    
 if(work1=="substract"){

       console.log("substract into excel sheet");
   }    
 else {
       console.log("divide into excel sheet");
  }
  
 var excel_sheet="substract";
       excel_sheet="bodmas";
       
  if (excel_sheet=="add"){
       console.log("add DATA into excel sheet");
   }
  else if (excel_sheet=="substract"){
 
       console.log("substract DATA into excelsheet");
    }
  else if (excel_sheet == " multiply "){

       console.console.log (" multiply DATA into excel sheet ");
    }
  else {
       console.log("divide DATA into excel sheet" );
    }
    
var LOL=24;
  
var BAE="24";
   
 console.log(LOL==BAE);
 console.log(BAE===LOL);
 console.log(LOL!=LOL);
 console.log(BAE!==LOL);

const students=[" soheil "," minakshi "," om "," raghav "," priya "];
 
const above_18 =["minakshi","om","priya"];

   for( var i=0; i < students.length ; i++){
           
        var current_login=students[i];
          
        var isVALIDlogin=false;
  
    for (var j=0; j < above_18.length ; j++) { 
            
         var valid_login_jth_index = above_18 [j] ;
 
          if(current_login===valid_login_jth_index){
                
          isVALIDlogin=true;
          }
    }

    console.log(students[i])
        
   if(isVALIDlogin){
   
         console.log("it is true");
                           
   else {           
         
         console.log("is not true");
       }
    
 var string_2=" NEHA ";
    
      for (var id = 0; id < students.length; id++) {
                string_2 = string_2 + students[id];
            
                 console.log(string_2);
              }
  
var loop=103
   
   while(loop<108)
     {
     console.log(loop*23);
   
     loop++;
   }
   
     console.log("a loop");
    
 var num=194;
 
    do{
      console.log(loop);

      loop++;

   } while (loop%20); 
  
  
    
  console.log("TABLE");
        
   for(var i=1;i<=10;i++){
     
      console.log(i*3);
    }
    console.log("table of 44");
    
    for (var i = 1; i <= 10; i++) {
    
      console.log(i * 44);
    }
    
    
    console.log("/....");
    
    for (var i = 24; i < 33; i++) {
    
      console.log(i);
    }

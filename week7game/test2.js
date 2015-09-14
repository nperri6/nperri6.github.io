function fillBackpack(){ 
 for (i = 0; backpack.length < 3; i++){ 
   if (heroine.posX === books[i].posX && heroine.posY === books[i].posY){ 
     backpack.push(books[i]);
     console.log("You found a book!"); 
   }
   else 
     console.log("Keep Looking");  
 }

}
and here's the error
 if (heroine.posX === books[i].posX && heroine.posY === books[i].posY){
                                ^
TypeError: Cannot read property 'posX' of undefined
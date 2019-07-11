function calc()
{
let total_price;
let words_input=Number(document.simulazione.words_number.value);
//Dropdownmenu
let docgen=document.getElementById("doctype");
let doctype=docgen.options[docgen.selectedIndex].value;
//Radio Buttons
//let few_words_button=document.getElementById("fewwords");
//let many_words_button=document.getElementById("manywords");

//Problema scrivendo 1000
if (doctype == "general_text" && words_input < 1000) {

   total_price=(words_input*2);
   document.simulazione.total.value=total_price + "$";
}
  else if (doctype == "general_text" && words_input > 1000)
   {
     total_price=(words_input*3);
     document.simulazione.total.value=total_price + "$";
   }


   else if (doctype == "specialized_text" && words_input > 1000)
    {
      total_price=(words_input*10);
      document.simulazione.total.value=total_price + "$";
    }

else {
  total_price=(words_input*5);
  document.simulazione.total.value=total_price + "$";
}

// RESET WORD Number
//document.getElementById("words_numberid").value = "";
}

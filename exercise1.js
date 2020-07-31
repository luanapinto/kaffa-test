function validateFormat(){
    formatted = false;
    numberOnly = false;

    cnpj = document.getElementById("cnpjEx1");

    //Verifying if string is a CNPJ formatted
    if(cnpj.value.length == 18) {
        //Using ascii table to check if dots, slash and dash are in their proper positions in the string
        if(cnpj.value.charCodeAt(2)==46 && cnpj.value.charCodeAt(6)==46 && cnpj.value.charCodeAt(10)==47 && cnpj.value.charCodeAt(15)==45) {
            formatted = true;
            for(i=0; i<18; i++)
                //Using ascii table to check if the other characters are in the range of all numbers in ascii table
                if(i!=2 && i!= 6 && i!= 10 && i!= 15 && !(cnpj.value.charCodeAt(i)>47 && cnpj.value.charCodeAt(i)<58))
                    formatted = false;
        }
    }
    //Verifying if string is number only
    else if(cnpj.value.length == 14)
        for(i=0; i<14; i++)
            //Using ascii table to check if all characters are in the range of all numbers in ascii table
            if(cnpj.value.charCodeAt(i)>47 && cnpj.value.charCodeAt(i)<58)
                numberOnly = true;

    if(formatted){
        $(".resultEx1").remove();
        $(".exercise1").append(
            '<label class="resultEx1">This string ('+ cnpj.value +') is a CNPJ formatted (00.000.000/0000-00)!</label>');
        document.getElementById("cnpjEx1").value = "";
    }
    else if(numberOnly){
        $(".resultEx1").remove();
        $(".exercise1").append(
            '<label class="resultEx1">This string ('+ cnpj.value +') is a CNPJ with only numbers (00000000000000)!</label>');
        document.getElementById("cnpjEx1").value = "";
    }
    else{
        $(".resultEx1").remove();
        $(".exercise1").append(
            '<label class="resultEx1">This string ('+ cnpj.value +') doesn\'t look like a CNPJ!</label>');
        document.getElementById("cnpjEx1").value = "";
    }
}

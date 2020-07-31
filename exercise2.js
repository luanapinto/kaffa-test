function validateDigits(){
    valid = false;
    formatted = false;
    numberOnly = false;
    cnpj = document.getElementById("cnpjEx2");

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
        auxCNPJ = "";
        for(i=0; i<18; i++)
            if(i!=2 && i!=6 && i!= 10 && i!=15)
                auxCNPJ = auxCNPJ.concat(cnpj.value.charAt(i)); 
        cnpj.value = auxCNPJ;
        numberOnly = true;
    }

    if(numberOnly){
        firstDigit = (cnpj.value.charAt(0)*5 + cnpj.value.charAt(1)*4 + cnpj.value.charAt(2)*3 + 
            cnpj.value.charAt(3)*2 + cnpj.value.charAt(4)*9 + cnpj.value.charAt(5)*8 +
            cnpj.value.charAt(6)*7 + cnpj.value.charAt(7)*6 + cnpj.value.charAt(8)*5 + 
            cnpj.value.charAt(9)*4 + cnpj.value.charAt(10)*3 + cnpj.value.charAt(11)*2)%11;
        if(firstDigit <2)
            firstDigit = 0;
        else
            firstDigit = 11- firstDigit;
        
        secondDigit = (cnpj.value.charAt(0)*6 + cnpj.value.charAt(1)*5 + cnpj.value.charAt(2)*4 + 
        cnpj.value.charAt(3)*3 + cnpj.value.charAt(4)*10 + cnpj.value.charAt(5)*9 +
        cnpj.value.charAt(6)*7 + cnpj.value.charAt(7)*7 + cnpj.value.charAt(8)*6 + 
        cnpj.value.charAt(9)*5 + cnpj.value.charAt(10)*4 + cnpj.value.charAt(11)*3 + cnpj.value.charAt(12)*2)%11;

        if(firstDigit == cnpj.value.charAt(12) && secondDigit == cnpj.value.charAt(13)){
            console.log("X");
            valid = true;
        console.log(firstDigit + " = " + cnpj.value.charAt(12) + " / " + secondDigit + " = " + cnpj.value.charAt(13));
        }
    }
    else{
        $(".resultEx2").remove();
        $(".exercise2").append(
            '<label class="resultEx2">Please, enter a valid CNPJ!</label>');
        document.getElementById("cnpjEx2").value = "";
    }

    if(valid){
        $(".resultEx2").remove();
        $(".exercise2").append(
            '<label class="resultEx2">This CNPJ ('+ cnpj.value +') is a well-formed CNPJ, considering the \"check digits\" as defined by Receita Federal.</label>');
        document.getElementById("cnpjEx2").value = "";
    }
    else if(numberOnly){
        $(".resultEx2").remove();
        $(".exercise2").append(
            '<label class="resultEx2">This CNPJ ('+ cnpj.value +') is <b>NOT</b> a well-formed CNPJ, considering the \"check digits\" as defined by Receita Federal.</label>');
        document.getElementById("cnpjEx2").value = "";
    }
}
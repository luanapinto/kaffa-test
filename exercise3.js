function verifyIntersection(){

    intersection = false;
    
    x1A = parseInt(document.getElementById("x1A").value);
    x2A = parseInt(document.getElementById("x2A").value);
    y1A = parseInt(document.getElementById("y1A").value);
    y2A = parseInt(document.getElementById("y2A").value);
    x1B = parseInt(document.getElementById("x1B").value);
    x2B = parseInt(document.getElementById("x2B").value);
    y1B = parseInt(document.getElementById("y1B").value);
    y2B = parseInt(document.getElementById("y2B").value);

    if(!Number.isInteger(x1A) || !Number.isInteger(x2A) || !Number.isInteger(y1A) || !Number.isInteger(y2A) || !Number.isInteger(x1B) || !Number.isInteger(x2B) || !Number.isInteger(y1B) || !Number.isInteger(y2B)){
        $(".resultEx3").remove();
        $(".exercise3").append(
            '<label class="resultEx3">Please, insert valid numbers in all gaps</label>');
    }
    else{

        if((x1B<=x2A && x1B>=x1A && y1B>=y1A && y1B<=y2A)
        || (x2B<=x2A && x2B>=x1A && y1B>=y1A && y1B<=y2A)
        || (x1B<=x2A && x1B>=x1A && y2B>=y1A && y2B<=y2A) 
        || (x2B<=x2A && x2B>=x1A && y2B>=y1A && y2B<=y2A)){
            intersection = true;
        }

        if(intersection){
            $(".resultEx3").remove();
            $(".exercise3").append(
                '<label class="resultEx3">intersects(A,B)=><b>TRUE</b></label>');
            document.getElementById("x1A").value = "";
            document.getElementById("x2A").value = "";
            document.getElementById("y1A").value = "";
            document.getElementById("y2A").value = "";
            document.getElementById("x1B").value = "";
            document.getElementById("x2B").value = "";
            document.getElementById("y1B").value = "";
            document.getElementById("y2B").value = "";
        }
        else{
            $(".resultEx3").remove();
            $(".exercise3").append(
                '<label class="resultEx3">intersects(A,B)=><b>FALSE</b></label>');
                document.getElementById("x1A").value = "";
                document.getElementById("x2A").value = "";
                document.getElementById("y1A").value = "";
                document.getElementById("y2A").value = "";
                document.getElementById("x1B").value = "";
                document.getElementById("x2B").value = "";
                document.getElementById("y1B").value = "";
                document.getElementById("y2B").value = "";
        }
    }
}
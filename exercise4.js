function ComputeArea(){
    countArea = 0;

    intersection = false;
    x1A = parseInt(document.getElementById("x1C").value);
    x2A = parseInt(document.getElementById("x2C").value);
    y1A = parseInt(document.getElementById("y1C").value);
    y2A = parseInt(document.getElementById("y2C").value);
    x1B = parseInt(document.getElementById("x1D").value);
    x2B = parseInt(document.getElementById("x2D").value);
    y1B = parseInt(document.getElementById("y1D").value);
    y2B = parseInt(document.getElementById("y2D").value);

    if(!Number.isInteger(x1A) || !Number.isInteger(x2A) || !Number.isInteger(y1A) || !Number.isInteger(y2A) || !Number.isInteger(x1B) || !Number.isInteger(x2B) || !Number.isInteger(y1B) || !Number.isInteger(y2B)){
        $(".resultEx4").remove();
        $(".exercise4").append(
            '<label class="resultEx4">Please, insert valid numbers in all gaps</label>');
    }
    else{
        if((x1B<=x2A && x1B>=x1A && y1B>=y1A && y1B<=y2A) // Checking if there is intersection
        || (x2B<=x2A && x2B>=x1A && y1B>=y1A && y1B<=y2A)
        || (x1B<=x2A && x1B>=x1A && y2B>=y1A && y2B<=y2A) 
        || (x2B<=x2A && x2B>=x1A && y2B>=y1A && y2B<=y2A)){
            intersection = true;
        }

        if(intersection){

            if(x1B>=x1A && x1B<=x2A){  //checking how many points intersect horizontally
                horizontal = x2A - x1B + 1;
            }
            else{
                horizontal = x2B - x1A + 1;
            }
            if(y1B>=y1A && y1B<=y2A){   //checking how many points intersect Vertically
                vertical = y2A - y1B + 1;
            }
            else{
                vertical = y2B - y1A + 1;
            }
            countArea = horizontal * vertical;

            $(".resultEx4").remove();
            $(".exercise4").append(
                '<label class="resultEx4">areaOfIntersection(A,B) = '+ countArea +'</label>');
            document.getElementById("x1C").value = "";
            document.getElementById("x2C").value = "";
            document.getElementById("y1C").value = "";
            document.getElementById("y2C").value = "";
            document.getElementById("x1D").value = "";
            document.getElementById("x2D").value = "";
            document.getElementById("y1D").value = "";
            document.getElementById("y2D").value = "";
        }
        else{
            $(".resultEx4").remove();
            $(".exercise4").append(
                '<label class="resultEx3">areaOfIntersection(A,B) = 0</label>');
                document.getElementById("x1C").value = "";
                document.getElementById("x2C").value = "";
                document.getElementById("y1C").value = "";
                document.getElementById("y2C").value = "";
                document.getElementById("x1D").value = "";
                document.getElementById("x2D").value = "";
                document.getElementById("y1D").value = "";
                document.getElementById("y2D").value = "";
        }
    }
}

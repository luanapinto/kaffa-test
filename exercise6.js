function restClient(){
    $(".resultEx6").remove();

    fetch('http://worldclockapi.com/api/json/utc/now')
    .then(response => response.json())
    .then(data => {
        dateUTC = data.currentDateTime;
        timeUTC = data.currentDateTime;
        dateUTC = dateUTC.substring(8,10) + '/' + dateUTC.substring(5,7) + '/' + dateUTC.substring(0,4);
        timeUTC = timeUTC.substring(11,13) + ':' + timeUTC.substring(14,16);

        auxTime = parseInt(timeUTC.substring(0,2));
        auxDay = parseInt(dateUTC.substring(0,2));
        auxMonth = parseInt(dateUTC.substring(3,5));
        auxYear = parseInt(dateUTC.substring(6,12));
        
        //I don't know if there was a simple method to get Local date and time, so I implemented this way
        if(auxTime < 3){  //if UTC time is after midnight and before 3am, local time (Brasilia) will be 3 hours less
            if(auxDay == 1){ // if UTC time is after midnight and before 3am and date is first day in a month, local date will be 1 day less
                if(auxMonth == 1){ // if UTC time is after midnight and before 3am and date is january 1st, local date will be 1  year less, on december 31st
                    auxMonth = 12;
                    auxYear--;
                }
                else if(auxMonth==5 || auxMonth==7 || auxMonth==8 || auxMonth==10 ||auxMonth==12){ //months that previously month have 31 days 
                    auxMonth--;
                    auxDay=31;
                }
                else if(auxMonth==2 || auxMonth==4 || auxMonth==6 || auxMonth==9 || auxMonth==11){ //months that previously month have 30 days 
                    auxMonth--;
                    auxDay = 30;
                }
                else if(auxMonth==3){ // months that previously month have 28 or 29 days 
                    auxMonth--;
                    if(auxYear%4==0)
                        auxDay = 29;
                    else
                    auxDay = 28;
                }
            }
            else
                auxDay--;
                auxTime += 21;
        }
        else
            auxTime-=3;

        if(auxMonth<10)
            dateLocal = auxDay + '/0' + auxMonth + '/' + auxYear;
        else
            dateLocal = auxDay + '/' + auxMonth + '/' + auxYear;

        timeLocal = auxTime + ':' + timeUTC.substring(3,5);

        $(".restClient").append(
            '<div class="resultEx6">' +    
                '<label><b>LOCAL:</b></label><br>'+
                '<label><b>Date</b>: '+ dateLocal +' | <b>Time</b>: '+ timeLocal +' </label><br><br>' +
                '<label><b>UTC:</b></label><br>' +
                '<label><b>Date</b>: '+ dateUTC +' | <b>Time</b>: '+ timeUTC +' </label>' +
            '</div>'
        );

    })

}

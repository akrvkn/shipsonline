$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://docs.google.com/spreadsheets/d/1VdlOTyBsSf8Qcr3TIc6x34rORbNQ7n2QcCNRe3zHg6c/gviz/tq?tqx=out:csv&sheet=Лист1",
        //url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRLp9NBEyUUSTMF22ZmmOn3L6sOU4hFoIGybetEsLqjdK-xjhAQkAoapFp_LHloxcsw39BgZPZvyZHK/pub?gid=0&single=true&output=csv",
        dataType: "text",
        cache: false,
        success: function(data) {processData(data);}
    });
});

function processData(allText) {
    //console.log(allText);
    let all = allText.split(/\r\n|\n/);
    let row = '';
    for(let i=1;i<all.length;i++){
        row = all[i].split(',');
        let r = '<tr><td>'+row[1].replace(/"/g, '') +'</td><td>'+row[2].replace(/"/g, '') +'</td><td>'+row[3].replace(/"/g, '')+'</td><td>'+row[4].replace(/"/g, '') +'</td></tr>';
        if(row[1].length > 0) {
            $('#tablo').append(r);
        }
    }

}

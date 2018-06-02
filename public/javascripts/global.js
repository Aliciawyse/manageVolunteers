// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable();

});


// Functions =============================================================

// Fill table with data
function populateTable() {

    $.ajax({
        url: '/users/userlist',
        dataType: 'json',
        success: function(data){

            //console.log(data);
            //data = JSON.parse(data);

            //var freq = {};

            //for every record
            for (var i=0; i<25;i++) {

               console.log(data[i]);

                //grab email
                //var email = data[i].email_address;

                //parse email
                // for(var y=0; y < email.length; y++){
                //
                //     if(freq[email[y]]){
                //         freq[email[y]] = freq[email[y]] + 1;
                //     }
                //     else {
                //         freq[email[y]] = 1;
                //     }
                // }
            }

            // var keys2 = Object.keys(freq);
            //
            // keys2.sort(function(a, b) { return freq[b] - freq[a] });
            //
            // var secondTableContent='';
            //
            // for(var i=0; i < keys2.length; i++){
            //     // console.log(keys2[i],freq[keys2[i]]);
            //
            //     secondTableContent += '<tr>';
            //     secondTableContent += '<td>' + keys2[i] + '</td>';
            //     secondTableContent += '<td>' + freq[keys2[i]] + '</td>';
            //     secondTableContent += '</tr>';
            //
            //     $('#characterFrequency table tbody').html(secondTableContent);
            // }
        }
    });
}

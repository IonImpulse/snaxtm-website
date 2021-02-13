$(document).ready(function(){
    $(function() {
        $('body').removeClass('fade');
    });
});

function checkPassword() {
    // THIS IS NOT MEAN TO BE SECURE
    // DO NOT USE THIS FOR ACTUAL PASSWORDS
    // IT'S JUST A SIMPLE WAY TO CHECK IF TWO VALUES
    // MATCH WITHOUT PUTTING THE ACTUAL VALUE IN
    // THE CODE
    const try_value = document.getElementById(`utterance-field`).value.toLowerCase();    
    const hashed_value = stringToHash(try_value);
    // Convert to 32bit integer 
    function stringToHash(string) { 
                  
        var hash = 0; 
          
        if (string.length == 0) return hash; 
          
        for (i = 0; i < string.length; i++) { 
            char = string.charCodeAt(i); 
            hash = ((hash << 5) - hash) + char; 
            hash = hash & hash; 
        } 
          
        return hash; 
    }

    console.log(`${try_value} hashed = ${hashed_value}`);

    if (hashed_value == 2032989608) {
        // Simulate a mouse click:
        window.location.href = "/pages/coupon.html";
    }
}
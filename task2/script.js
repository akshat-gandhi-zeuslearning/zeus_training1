function formSubmit() {
    var name = document.getElementById("your-name");
    var comment = document.getElementById("comment-id");
    var gender_male = document.getElementById("gender_male");
    var gender_female = document.getElementById("gender_female");
    /*if (name.value.length === 0 && comment.value.length === 0 && (!gender_male.checked && !gender_female.checked)) {
        alert("Please enter all details.  with his age in the form");
    }*/
    
    if (name.value.length == 0) {
        alert("Please enter your name with middlename and surname");
        document.getElementById("your-name").focus();
    }
    if(comment.value.length ==0)
        {
        alert("Please enter your Comments.");
        document.getElementById("comment-id").focus();
        }

    if(!gender_male.checked && !gender_female.checked )
        {
            alert("Please enter gender")

        }   
}


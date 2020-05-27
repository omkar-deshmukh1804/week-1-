function displayInfo()
{

    var person = {
        fname: '',
        lname: '',
        contact: Number,
        email: '',
        education: '',
        gender: '',
        
        setInfo(f_name,l_name,contact,email,edu,gender) {
            this.fname = f_name;
            this.lname = l_name;
            this.contact = contact;
            this.email = email;
            this.education = edu;
            this.gender = gender
        }
    }
    var f_name = document.getElementById("fname").value; 
    var l_name = document.getElementById("lname").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var edu = document.getElementById("edu").value;

    if ( gender == "Male")
    {
        document.getElementById("profile-img").innerHTML = "<img src='male.png' />"
        


    }
    else {
        document.getElementById("profile-img").innerHTML = "<img src='female.png'/>"
    }
    person.setInfo(f_name, l_name, contact, email, edu,gender);
    
    
    document.getElementById("new-fullname").innerHTML = person.fname + " " + person.lname;
    
    document.getElementById("new-email").innerHTML = person.email;
    document.getElementById("new-gender").innerHTML = person.gender;
    document.getElementById("new-contact").innerHTML = person.contact;
    document.getElementById("new-education").innerHTML = person.education;

}
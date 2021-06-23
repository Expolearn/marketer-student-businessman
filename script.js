  
$(document).ready(function () {
  var person = document.getElementById("person");
  var developer = document.getElementById("developer");
  var marketer = document.getElementById("marketer");
  var student = document.getElementById("student");
  var businessman = document.getElementById("businessman");

  class Person {
    constructor(
      firstname,
      lastname,
      emailAddress,
      physicalAddress,
      PhoneNumber,
      profession
    ) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.emailAddress = emailAddress;
      this.physicalAddress = physicalAddress;
      this.PhoneNumber = PhoneNumber;
      this.profession = profession;
    }

    getPersonDetails(fname, lName, email, address, phone, prof) {
      var details;
      details =
        "Hi! " +
        fname +
        " " +
        lName +
        "<br/> phone number: " +
        phone +
        "<br/> EmailAddress: " +
        email +
        "<br/>Residence " +
        address +
        "<br/>" +
        "Profession: " +
        prof;
      return details;
    }
  }

  var personClass = new Person();
  var personDetails = personClass.getPersonDetails(
    "Murendeni",
    "Ramavhale",
    "murendeni@gmail.com",
    " 14 Rd Johannesburg",
    071453553,
    " N/A"
  );
  person.innerHTML = personDetails;

  class Developer extends Person {
    constructor() {
      super();
    }

    getDevskills(skills, exp) {
      var details =
        "<br/><strong> Skills</strong>: " +
        skills +
        "<br> <strong> Experience: </strong>" +
        exp;
      return details;
    }
  }

  var dev = new Developer();
  var developerDetails = dev.getPersonDetails(
    "Tshifhiwa",
    "Sinugo",
    "sinugo@gmail.com",
    " 7th Rd Johannesburg",
    "+27 73953553",
    " Developer"
  );
  developer.innerHTML =
    developerDetails + dev.getDevskills(["java", "C", "C++", "Python"], 5);

     class Marketer extends Person {
    constructor() {
      super();
    }

    getmarkskills(skills, exp) {
      var details =
        "<br/><strong> Skills</strong>: " +
        skills +
        "<br> <strong> Experience: </strong>" +
        exp;
      return details;
    }
  }

  var mark = new Marketer();
  var marketerDetails = mark.getPersonDetails(
    "Mashudu",
    "mulaudzi",
    "muaudzi@hotmail.com",
    " P.O.BOX 98,TSHIFUDI ,0979",
    "+27 762852677",
    " Sales representives",
  );
  marketer.innerHTML =
    marketerDetails + mark.getmarkskills(["Advertising", "Sales", "Digital marketer", "Social media marketer"], "9 years");


class Student extends Person {
    constructor() {
      super();
    }

    getstudskills(skills, level) {
      var details =
        "<br/><strong> Skills</strong>: " +
        skills +
        "<br> <strong> Level: </strong>" +
        level;
      return details;
    }
  }

  var stud = new Student();
  var studentDetails = stud.getPersonDetails(
    "mulisa",
    "mulaudzi",
    "ndou@hotmail.com",
    " P.O.Box 85,THOHOYANDOU ,0950",
    "+27 818838467",
    " Computer sences",
  );
  student.innerHTML =
    studentDetails + stud.getstudskills(["AI", "HCI", "software engineering", "algorithms"]," 2nd year");

    class Businessman extends Person {
    constructor() {
      super();
    }

    getbusiskills(skills, exp) {
      var details =
        "<br/><strong> Skills</strong>: " +
        skills +
        "<br> <strong> Experience: </strong>" +
        exp;
      return details;
    }
  }

  var busi = new Businessman();
  var businessmanDetails = busi.getPersonDetails(
    "ndivhuwo",
    "Ndadza",
    "ndadza@gmail.com",
    " 89th Rd durban",
    "+27 646744670",
    " Businessman"
  );
  businessman.innerHTML =
    businessmanDetails + busi.getbusiskills(["House Sales", "Car dealer", "Live Stock", "Industrial"], "10 years");


    
});
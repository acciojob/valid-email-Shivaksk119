function validEmail(str) {
	//your JS code here.
	  let splitMail1 = str.split("@");
	  if(splitMail1.length<2) {
		  return false;
	  }

	  if(splitMail1[0]=="") {
		return false;se
	  }
	  
	  let secondHalf = splitMail1[1];
	  let splitMail2 = secondHalf.split('.');

	  if(splitMail2.length==3) {
		if(splitMail2[1]!="com") {
			return false;
		}
		if(splitMail2[2]!="in") {
			return false;
		}
	  }

	  if(splitMail2.length<2) {
		  return false;
	  }
  
	  let half2 = splitMail2[1];
	  if(half2!='com') {
		  return false;
	  }
	  return true;
	  
	  
  }

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));

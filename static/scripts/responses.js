function getBotResponse(input) {
   
    //basic responses
    if (input == "hello") {
        return "Hello There!";
    } else if (input == "Thanks") {
        return "Thanks! Stay Safe :)";
    } else if (input == "help") {
        return "1-See Available Doctors! 2-Book for Appointment! 3-Appointement Update! 4-Instant Emergency Support!"; 
    } else {
        return "I can't Understand! Sorry";
    }


}
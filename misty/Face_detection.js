
/*misty.RegisterEvent("FaceRecognition", "FaceRecognition", 250);
misty.MoveHead(-100, 0, 0, null, null, null);
misty.StartFaceRecognition();*/



// FaceDetection event callback
/*function _FaceRecognition() {
    misty.Debug("Face detected!");
    // Play an audio clip
    misty.PlayAudio("s_Joy3.wav");
    // Change LED to white
    misty.ChangeLED(255, 255, 255);
    // Stop face detection
    misty.StopFaceDetection();
    exit;
};*/


function registerFaceRec(){
	misty.AddPropertyTest("FaceRec", "PersonName", "exists", "", "string");
	misty.RegisterEvent("FaceRec", "FaceRecognition", 1000, true);
}
misty.StartFaceRecognition();
registerFaceRec();
misty.MoveHead(-100, 0, 0, null, null, null);

function _FaceRec(data) {
	// Check if the FaceRec event was triggered by a stranger
	if (data.PropertyTestResults[0].PropertyValue == "unknown person"){
		//misty.StopFaceRecognition();
        //misty.PlayAudio("dont_recognized_you.wav");

	} 
	else {
        misty.StopFaceRecognition();
		//play joy sound
        //misty.PlayAudio("s_Joy3.wav");
        misty.PlayAudio("been_recognized_as.wav");
        misty.DisplayText("Recognized as " + data.PropertyTestResults[0].PropertyValue, "1");
        // Change LED to green
        misty.ChangeLED(0, 255, 0);
        // wait 2 seconds
        misty.Pause(2000);
        misty.DisplayText(" ", "1");
        misty.Pause(2000);
        // Change LED to white
        misty.ChangeLED(255, 255, 255);

  	}
}


/*function _FaceRecognition(data) {
    //misty.Debug(JSON.stringify(data));
    //show output on debug
    misty.Debug(data.AdditionalResults[0].Confidence);
    // stop face recognition
    misty.StopFaceRecognition();
    // change led to blue
    misty.ChangeLED(0, 0, 255);
    misty.PlayAudio("s_Joy3.wav");
    // wait for 2 seconds
    misty.Pause(2000);
    // change led to white
    misty.ChangeLED(255, 255, 255);
    // move head up
    misty.MoveHead(100, 0, 0, null, null, null);
    // display text
    misty.DisplayText("Recognized as" + data, 15);
    // wait for 2 seconds
    misty.Pause(5000);
    // move head down
    misty.MoveHead(0, 0, 0, null, null, null);
    

}*/
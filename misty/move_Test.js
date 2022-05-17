
misty.StartFaceRecognition();
while (misty.GetBatteryLevel() > 20) {
    misty.DriveTime(50, 0, 5000, 0);
    
}

function sendAudio() {
    // 1. Get file input
    const fileInput = document.querySelector("input[type='file']");
    const file = fileInput.files[0];

    // 2. Validation: file selected or not
    if (!file) {
        alert("Please upload a cough audio file before proceeding.");
        return;
    }

    // 3. Validation: file type
    const allowedTypes = ["audio/wav", "audio/mpeg"];
    if (!allowedTypes.includes(file.type)) {
        alert("Only .wav or .mp3 audio files are allowed.");
        return;
    }

    // 4. (Frontend-only) Simulate analysis result
    // This will be replaced later by backend ML output
    const simulatedResult = {
        risk: "Low",
        message: "Based on the cough sound analysis, the result indicates a lower risk."
    };

    // 5. Store result temporarily (browser memory)
    localStorage.setItem("tb_result", JSON.stringify(simulatedResult));

    // 6. Navigate to result page
    window.location.href = "result.html";
}

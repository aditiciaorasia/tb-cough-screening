/* =========================
   SIGNUP MODAL
========================= */

const openSignup =
    document.getElementById("openSignup");

const closeSignup =
    document.getElementById("closeSignup");

const signupModal =
    document.getElementById("signupModal");

const signupForm =
    document.getElementById("signupForm");



/* GLOBAL MODAL FUNCTION */

function openSignupModal() {

    if (signupModal) {

        signupModal.classList.add("active");

    }

}



/* NAVBAR SIGNUP BUTTON */

if (openSignup) {

    openSignup.addEventListener("click", () => {

        openSignupModal();

    });

}



/* CLOSE MODAL */

if (closeSignup) {

    closeSignup.addEventListener("click", () => {

        signupModal.classList.remove("active");

    });

}



/* CLOSE ON OUTSIDE CLICK */

if (signupModal) {

    signupModal.addEventListener("click", (e) => {

        if (e.target === signupModal) {

            signupModal.classList.remove("active");

        }

    });

}



/* FORM SUBMIT */

if (signupForm) {

    signupForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const patientData = {

            name:
                document.getElementById("name").value,

            phone:
                document.getElementById("phone").value,

            age:
                document.getElementById("age").value,

            gender:
                document.getElementById("gender").value,

            height:
                document.getElementById("height").value,

            weight:
                document.getElementById("weight").value
        };


        // Store patient info

        localStorage.setItem(
            "patientData",
            JSON.stringify(patientData)
        );


        // Change navbar text

        if (openSignup) {

            openSignup.innerText =
                "Welcome, " + patientData.name;

        }


        // Close modal

        signupModal.classList.remove("active");


        // Success message

        alert("Registration Successful!");

    });

}





/* =========================
   FILE INPUT + ANALYSIS
========================= */

document.addEventListener("DOMContentLoaded", function () {

    // AUDIO INPUT

    const fileInput =
        document.getElementById("audioUpload");


    // AUDIO FILE NAME

    const fileName =
        document.getElementById("fileName");


    // XRAY INPUT

    const xrayInput =
        document.getElementById("xrayUpload");


    // XRAY FILE NAME

    const xrayFileName =
        document.getElementById("xrayFileName");


    // ANALYZE BUTTON

    const analyzeBtn =
        document.getElementById("analyzeBtn");


    // LOADER

    const loader =
        document.getElementById("loader");



    /* AUDIO FILE */

    if (fileInput && fileName) {

        fileInput.addEventListener("change", () => {

            if (fileInput.files.length > 0) {

                fileName.innerText =
                    "Selected: " +
                    fileInput.files[0].name;

            } else {

                fileName.innerText =
                    "No audio selected";

            }

        });

    }



    /* XRAY FILE */

    if (xrayInput && xrayFileName) {

        xrayInput.addEventListener("change", () => {

            if (xrayInput.files.length > 0) {

                xrayFileName.innerText =
                    "Selected: " +
                    xrayInput.files[0].name;

            } else {

                xrayFileName.innerText =
                    "No X-ray selected";

            }

        });

    }



    /* GLOBAL ANALYSIS FUNCTION */

    window.sendAudio = function () {

        const audioUploaded =
            fileInput &&
            fileInput.files.length > 0;

        const xrayUploaded =
            xrayInput &&
            xrayInput.files.length > 0;



        // REQUIRE AT LEAST ONE INPUT

        if (!audioUploaded && !xrayUploaded) {

            alert(
                "Please upload cough audio, chest X-ray, or both."
            );

            return;
        }



        // BUTTON STATE

        if (analyzeBtn) {

            analyzeBtn.innerText =
                "Analyzing...";

            analyzeBtn.disabled = true;

        }


        // LOADER

        if (loader) {

            loader.classList.remove("hidden");

        }



        // FAKE PROCESSING

        setTimeout(() => {

            const risks =
                ["Low", "Medium", "High"];


            const randomRisk =
                risks[
                Math.floor(
                    Math.random() * risks.length
                )
                ];


            let result;



            /* LOW */

            if (randomRisk === "Low") {

                result = {

                    risk: "Low",

                    confidence: "82%",

                    message:
                        "The uploaded inputs indicate a lower likelihood of TB-related abnormalities."

                };

            }



            /* MEDIUM */

            else if (randomRisk === "Medium") {

                result = {

                    risk: "Medium",

                    confidence: "76%",

                    message:
                        "The uploaded inputs show moderate indicators associated with respiratory irregularities."

                };

            }



            /* HIGH */

            else {

                result = {

                    risk: "High",

                    confidence: "91%",

                    message:
                        "The uploaded inputs contain characteristics commonly associated with high TB risk."

                };

            }



            /* INPUT SOURCES */

            result.inputsUsed = [];


            if (audioUploaded) {

                result.inputsUsed.push(
                    "Cough Audio"
                );

            }


            if (xrayUploaded) {

                result.inputsUsed.push(
                    "Chest X-Ray"
                );

            }



            // SAVE RESULT

            localStorage.setItem(
                "tb_result",
                JSON.stringify(result)
            );



            // REDIRECT

            window.location.href =
                "result.html";

        }, 2500);

    };

});
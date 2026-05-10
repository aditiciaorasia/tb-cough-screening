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


// Open modal

if (openSignup) {

    openSignup.addEventListener("click", () => {

        signupModal.classList.add("active");

    });

}


// Close modal

if (closeSignup) {

    closeSignup.addEventListener("click", () => {

        signupModal.classList.remove("active");

    });

}


// Close on outside click

if (signupModal) {

    signupModal.addEventListener("click", (e) => {

        if (e.target === signupModal) {

            signupModal.classList.remove("active");

        }

    });

}


// Form submit

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

        openSignup.innerText =
            "Welcome, " + patientData.name;


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

    // File input

    const fileInput =
        document.getElementById("audioUpload");

    // File name display

    const fileName =
        document.getElementById("fileName");

    // Analyze button

    const analyzeBtn =
        document.getElementById("analyzeBtn");

    // Loader

    const loader =
        document.getElementById("loader");



    // File selection

    if (fileInput && fileName) {

        fileInput.addEventListener("change", () => {

            if (fileInput.files.length > 0) {

                fileName.innerText =
                    "Selected: " +
                    fileInput.files[0].name;

            } else {

                fileName.innerText =
                    "No file selected";

            }

        });

    }



    // Global analyze function

    window.sendAudio = function () {

        // Check upload

        if (!fileInput ||
            fileInput.files.length === 0) {

            alert(
                "Please upload a cough audio file first."
            );

            return;
        }



        // Loading state

        if (analyzeBtn) {

            analyzeBtn.innerText =
                "Analyzing...";

            analyzeBtn.disabled = true;
        }


        if (loader) {

            loader.classList.remove("hidden");

        }



        // Fake processing delay

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



            // LOW

            if (randomRisk === "Low") {

                result = {

                    risk: "Low",

                    confidence: "82%",

                    message:
                        "The cough pattern indicates a lower likelihood of TB-related symptoms."

                };

            }


            // MEDIUM

            else if (randomRisk === "Medium") {

                result = {

                    risk: "Medium",

                    confidence: "76%",

                    message:
                        "The cough pattern shows moderate indicators associated with respiratory irregularities."

                };

            }


            // HIGH

            else {

                result = {

                    risk: "High",

                    confidence: "91%",

                    message:
                        "The cough pattern contains characteristics commonly associated with high TB risk."

                };

            }



            // Save result

            localStorage.setItem(
                "tb_result",
                JSON.stringify(result)
            );



            // Redirect

            window.location.href =
                "result.html";

        }, 2500);

    };

});
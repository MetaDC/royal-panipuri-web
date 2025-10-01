document
  .getElementById("bookingForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    // Show the loader and change button text
    document.getElementById("loader").style.display = 'inline-block';
    document.querySelector(".bookNow").style.display = 'none';
    document.getElementById("submit").disabled = true;

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;
    const date = document.getElementById("date").value;
    const specification = document.getElementById("specification").value;

    const data = {
      emails: ["mubinvhora1112@gmail.com"],
      subject: "New Website Booking - Diwizon",
      message: `<strong>Name</strong> : ${name}<br/> <strong>Phone</strong> : ${phone}<br/> <strong>Location</strong> : ${location}<br/> <strong>Date</strong> : ${date}<br/> <strong>Specification</strong> : ${specification}`,
    };

    try {
      const response = await fetch("https://mailer-5x4h33dpla-uc.a.run.app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resultText = await response.text();

      // Hide the loader and enable the button again
      document.getElementById("loader").style.display = 'none';
      document.querySelector(".bookNow").style.display = 'inline-block';
      document.getElementById("submit").disabled = false;

      if (response.ok) {
        alert("Success: Your enquiry has been submitted!");
        document.getElementById("bookingForm").reset();
        window.location.href = "thankyou.html";
      } else {
        alert(`Error: ${resultText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("loader").style.display = 'none';
      document.querySelector(".sendNow").style.display = 'inline-block';
      document.getElementById("submit").disabled = false;
      alert("An error occurred. Please try again later.");
    }
  });
// document
//   .getElementById("feedbackForm")
//   .addEventListener("submit", async function (e) {
//     e.preventDefault();

//     // Show the loader and change button text
//     document.getElementById("loader").style.display = 'inline-block';
//     document.querySelector(".bookNow").style.display = 'none';
//     document.getElementById("submit").disabled = true;

//     const name = document.getElementById("name").value;
//     const phone = document.getElementById("phone").value;
//     const message = document.getElementById("message").value;

//     const data = {
//       emails: ["matinshaikh79070@gmail.com"],
//       subject: "New Feedback From Website - Diwizon",
//       message: `<strong>Name</strong> : ${name}<br/> <strong>Phone</strong> : ${phone}<br/> <strong>message</strong> : ${message}`,
//     };

//     try {
//       const response = await fetch("https://mailer-5x4h33dpla-uc.a.run.app/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const resultText = await response.text();

//       // Hide the loader and enable the button again
//       document.getElementById("loader").style.display = 'none';
//       document.querySelector(".sendNow").style.display = 'inline-block';
//       document.getElementById("submit").disabled = false;

//       if (response.ok) {
//         alert("Success: Your enquiry has been submitted!");
//         document.getElementById("feedbackForm").reset();
//         window.location.href = "thankyou.html";
//       } else {
//         alert(`Error: ${resultText}`);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       document.getElementById("loader").style.display = 'none';
//       document.querySelector(".bookNow").style.display = 'inline-block';
//       document.getElementById("submit").disabled = false;
//       alert("An error occurred. Please try again later.");
//     }
//   });

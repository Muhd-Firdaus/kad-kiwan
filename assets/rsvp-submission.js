var link = 'https://script.google.com/macros/s/AKfycbxRLSeGdwmuS61PaR_W_5_2NxhePOxPRXMOcfb2A9Dl-djeKrs1CPQUYCy0VOmA1JHtjg/exec';

document.getElementById("rsvp-submission").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = new FormData(this);
    const btnText = document.getElementById("btn-text");
    const btnSpinner = document.getElementById("btn-spinner");
    const submitBtn = document.getElementById("submit-btn");

    // Tunjuk loading
    btnText.style.display = "none";
    btnSpinner.style.display = "inline-block";
    submitBtn.disabled = true;

    // Gantikan URL di bawah dengan URL Web App Google Apps Script anda
    fetch(link, {
        method: "POST",
        body: form
    })
    .then(response => response.text())
    .then(result => {
        Swal.fire({
            icon: 'success',
            title: 'Terima kasih!',
            text: 'Maklumat anda telah berjaya dihantar.',
            timer: 2500,
            showConfirmButton: false
        });

        // Reset borang & butang
        document.getElementById("rsvp-submission").reset();
    })
    .catch(error => {
        console.log(error),
        Swal.fire({
            icon: 'error',
            title: 'Ralat!',
            text: 'Terdapat masalah semasa menghantar borang. Sila cuba lagi.',
        });
    })
    .finally(() => {
        btnText.style.display = "inline";
        btnSpinner.style.display = "none";
        submitBtn.disabled = false;
    });
});

document.getElementById("ucapan-submission").addEventListener("submit", function(e) {
e.preventDefault();

    const form = new FormData(this);
    const btnText = document.getElementById("btn-text-ucapan");
    const btnSpinner = document.getElementById("btn-spinner-ucapan");
    const submitBtn = document.getElementById("submit-btn-ucapan");

    // Tunjuk loading
    btnText.style.display = "none";
    btnSpinner.style.display = "inline-block";
    submitBtn.disabled = true;

    // Gantikan URL di bawah dengan URL Web App Google Apps Script anda
    fetch(link, {
        method: "POST",
        body: form
    })
    .then(response => response.text())
    .then(result => {
        Swal.fire({
            icon: 'success',
            title: 'Terima kasih!',
            text: 'Maklumat anda telah berjaya dihantar.',
            timer: 2500,
            showConfirmButton: false
        });

        // Reset borang & butang
        document.getElementById("rsvp-submission").reset();
    })
    .catch(error => {
        console.log(error),
        Swal.fire({
            icon: 'error',
            title: 'Ralat!',
            text: 'Terdapat masalah semasa menghantar borang. Sila cuba lagi.',
        });
    })
    .finally(() => {
        btnText.style.display = "inline";
        btnSpinner.style.display = "none";
        submitBtn.disabled = false;
    });
});
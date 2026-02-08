
let menuIcon = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('.navbar'); 

menuIcon.onclick = () => { 
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 
};



let sections = document.querySelectorAll('section'); 
let navLinks = document.querySelectorAll('header nav a'); 

window.onscroll = () => { 
    sections.forEach(sec => { 
        let top = window.scrollY; 
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight; 
        let id = sec.getAttribute('id'); 

        if(top >= offset && top < offset + height) { 
            navLinks.forEach(links => { 
                links.classList.remove('active'); 
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });



    let header = document.querySelector('header'); 
    header.classList.toggle('sticky', window.scrollY > 100);    
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active'); 

};

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact from', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });

ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', { 
    strings: ['Anwendungsentwickler', 'Programmierer', 'Software'], 
    typeSpeed: 100, 
    backSpeed: 100, 
    backDelay: 1000, 
    loop: true
});




/**
 * Kontaktformular Handler
 * Sendet Formulardaten via AJAX und zeigt Erfolgsmeldung
 */
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const form = this;
    const formData = new FormData(form);
    const successMessage = document.getElementById("successMessage");
    const submitButton = form.querySelector('input[type="submit"]');
    
    // Button während des Sendens deaktivieren
    submitButton.disabled = true;
    submitButton.value = "Wird gesendet...";
    
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "./sql/DB2.php", true);
    
    xhr.onload = function() {
        submitButton.disabled = false;
        submitButton.value = "Send Message";
        
        try {
            const response = JSON.parse(xhr.responseText);
            
            if (xhr.status === 200 && response.success) {
                // Erfolg anzeigen
                successMessage.textContent = response.message;
                successMessage.style.display = "block";
                
                // Formular zurücksetzen
                form.reset();
                
                // Erfolgsmeldung nach 3 Sekunden ausblenden
                setTimeout(function() {
                    successMessage.style.display = "none";
                }, 3000);
            } else {
                // Fehler anzeigen
                alert("Fehler: " + (response.message || "Unbekannter Fehler"));
                console.error("Server-Fehler:", response);
            }
        } catch (e) {
            console.error("Fehler beim Parsen der Antwort:", e);
            alert("Ein unerwarteter Fehler ist aufgetreten.");
        }
    };
    
    xhr.onerror = function() {
        submitButton.disabled = false;
        submitButton.value = "Send Message";
        alert("Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung.");
        console.error("Netzwerkfehler beim Senden des Formulars");
    };
    
    xhr.send(formData);
});


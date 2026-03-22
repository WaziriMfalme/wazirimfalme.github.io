document.addEventListener('DOMContentLoaded', () => {
    
    alert("Welcome to UBUNTU! Join us in planting trees and building a greener Uganda.");

    
    const ageStr = prompt("How old are you? (Enter your age in years)");
    const age = parseInt(ageStr, 10);
    const messageElement = document.getElementById("greenMessage");

    if (isNaN(age) || age < 0) {
        messageElement.innerHTML = "Please enter a valid positive number for your age.";
    } else if (age >= 18) {
        const wantsToHelp = confirm(
            "You are 18 or older!\n\n" +
            "Would you like to support tree planting and green economy projects in rural Uganda?\n" +
            "Click OK to learn how to donate or get involved."
        );

        messageElement.innerHTML = wantsToHelp
            ? 'Thank you! Every contribution helps farmers plant trees and earn from carbon credits. ' +
              '<a href="https://example.com/donate" target="_blank" rel="noopener noreferrer">Learn how to donate</a>.'
            : "No worries — just visiting helps spread the word about green economy and tree planting!";
    } else if (age >= 8 && age <= 17) {
        messageElement.innerHTML =
            "You're between 8 and 17 — the perfect age to grow a love for nature! 🌳<br>" +
            "During school holidays, you can join tree-planting days, learn how trees help the planet, " +
            "or even plant a small tree at home or school. Every tree counts in the fight against climate change!";
    } else {
        messageElement.innerHTML =
            "Thanks for visiting UBUNTU! Everyone — young or old — can help build a greener future.";
    }

    
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    } else {
        setTheme('nature'); 
    }

    document.querySelectorAll('.theme-buttons button').forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme') ||
                          btn.textContent.toLowerCase().trim();
            if (['light', 'dark', 'nature'].includes(theme)) {
                setTheme(theme);
            }
        });
    });

    
    const treeImg = document.getElementById("treeImg");
    const hoverDesc = document.getElementById("hoverDesc");

    if (treeImg && hoverDesc) {
        const show = () => { hoverDesc.style.display = "block"; };
        const hide = () => { hoverDesc.style.display = "none"; };

        treeImg.addEventListener("mouseover", show);
        treeImg.addEventListener("mouseout",  hide);
        treeImg.addEventListener("focus",     show);
        treeImg.addEventListener("blur",      hide);
    }
});
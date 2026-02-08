// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Optional: Close menu when clicking a link (good UX on mobile)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});.investors-list {
    position: relative;
}

.investor-card {
    background: white;
    margin: 2rem 0;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    position: relative;
}

.investor-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1rem;
    border-bottom: 2px solid #007bff;
    padding-bottom: 0.5rem;
}

.investor-header h2 {
    margin: 0;
    color: #007bff;
}

.era {
    font-style: italic;
    color: #555;
    font-size: 1.1rem;
}

.investor-card blockquote {
    font-style: italic;
    color: #444;
    margin: 1rem 0;
    padding-left: 1rem;
    border-left: 4px solid #007bff;
}

.lesson {
    font-weight: 600;
    margin-top: 1rem;
    color: #007bff;
}
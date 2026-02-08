// search.js - Simple client-side search for static site

const pages = [
    { title: "Home", url: "index.html", desc: "Master stock investing basics to advanced with Buffett principles" },
    { title: "Basics", url: "basics.html", desc: "Stock market fundamentals, terms, how stocks work" },
    { title: "Value Investing Strategies", url: "value-investing.html", desc: "Buy undervalued stocks with margin of safety Graham Buffett" },
    { title: "Famous Investors", url: "famous-investors.html", desc: "Warren Buffett, Benjamin Graham, Peter Lynch profiles" },
    { title: "Key Rules & Principles", url: "key-rules.html", desc: "Investment rules, margin of safety, circle of competence" },
    { title: "Margin Trading", url: "margin-trading.html", desc: "Leverage borrowing risks and rewards" },
    { title: "Margin Calculator", url: "margin-calculator.html", desc: "Calculate equity borrowed amounts leverage effects" },
    { title: "Options Simulator", url: "options-simulator.html", desc: "Model call put payoffs theoretical pricing" },
    { title: "Resources", url: "resources.html", desc: "Books websites tools for stock investing education" },
    // Add more as you create pages
];

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const input = document.getElementById('search-input');

    if (!form || !input) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = input.value.trim().toLowerCase();
        if (!query) return;

        const results = pages.filter(page => 
            page.title.toLowerCase().includes(query) || 
            page.desc.toLowerCase().includes(query)
        );

        if (results.length === 0) {
            alert("No matches found for '" + query + "'. Try keywords like 'Buffett', 'margin', 'PE ratio'.");
            return;
        }

        // Simple: redirect to first match (or show dropdown later)
        window.location.href = results[0].url;
        // Future upgrade: show list of results below search bar
    });
});

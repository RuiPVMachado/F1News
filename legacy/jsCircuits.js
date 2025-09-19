// Simplified JavaScript just for handling button clicks and tab switching
document.querySelectorAll('.circuit-buttons .button').forEach(button => {
    button.addEventListener('click', (e) => {
        const circuitId = e.target.dataset.circuit;

        // Update active button
        document.querySelectorAll('.circuit-buttons .button').forEach(btn =>
            btn.classList.remove('active'));
        e.target.classList.add('active');

        // Show selected circuit section
        document.querySelectorAll('.circuit-section').forEach(section =>
            section.classList.add('hidden'));
        document.getElementById(`${circuitId}-section`).classList.remove('hidden');
    });
});

// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        const tabsContainer = e.target.closest('.tabs').parentElement;
        const tabId = e.target.dataset.tab;

        // Update active tab
        tabsContainer.querySelectorAll('.tab').forEach(t =>
            t.classList.remove('active'));
        e.target.classList.add('active');

        // Update active content
        tabsContainer.querySelectorAll('.tab-content').forEach(content =>
            content.classList.remove('active'));
        tabsContainer.querySelector(`#${tabId}`).classList.add('active');
    });
});
// script.js
// This script adds interactivity to the button in the HTML file.
// When the button is clicked, it toggles the visibility of the hidden content.
window.addEventListener('load', function() {
    console.log('Page loaded!');

    // Getting references to the button and the hidden content
    const button = document.getElementById('toggleBtn');
    const content = document.getElementById('hiddenContent');
    
    console.log('Button:', button);
    console.log('Content:', content);
    
    // Adding click event listener to the button
    button.addEventListener('click', function() {
        console.log('Button clicked!');
        
        if (content.style.display === 'none' || content.style.display === '') {
            // Show content
            content.style.display = 'block';
            button.textContent = 'Hide Content';
            console.log('Showing content');
        } else {
            // Hide content  
            content.style.display = 'none';
            button.textContent = 'Show Hidden Content';
            console.log('Hiding content');
        }
    });
    
    // Initially hiding the content
    content.style.display = 'none';
    console.log('Content initially hidden');
});
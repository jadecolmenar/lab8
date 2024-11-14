const words = ["Web Developer", "UX/UI Designer", "App Devloper", "Creator"];
    let index = 0;
    
    const typedElement = document.getElementById('typing-effect');
    
    function typeWord(word, callback) {
        typedElement.textContent = ""; // Clear current text
        let i = 0;

        const typingInterval = setInterval(() => {
            typedElement.textContent += word[i];
            i++;
            if (i === word.length) {
                clearInterval(typingInterval);
                if (callback) callback();
            }
        }, 100); // Type each letter every 100ms
    }

      // Function to enlarge text
      function enlargeText() {
        document.body.style.fontSize = "larger";
    }

    // Function to toggle background and text color
    function toggleColor() {
        document.body.style.backgroundColor = document.body.style.backgroundColor === "white" ? "lightblue" : "white";
        document.body.style.color = document.body.style.color === "black" ? "darkblue" : "black";
    }

    // Function to display alt text of images
    function showAltText(imageId) {
        alert(document.getElementById(imageId).alt);
    } 

    // fuction to delete text
    function deleteWord(callback) {
        let i = typedElement.textContent.length;

        const deletingInterval = setInterval(() => {
            typedElement.textContent = typedElement.textContent.slice(0, i - 1);
            i--;
            if (i === 0) {
                clearInterval(deletingInterval);
                if (callback) callback();
            }
        }, 50); // Delete each letter every 50ms
    }
    function changeWord() {
        index = (index + 1) % words.length; // Cycle through words array
        typeWord(words[index], () => {
            setTimeout(() => {
                deleteWord(() => {
                    setTimeout(changeWord, 1000); // Wait 1 second before changing to the next word
                });
            }, 2000); // Wait 2 seconds before starting to delete
        });
    }

    typeWord(words[index], () => {
        setTimeout(() => {
            deleteWord(() => {
                setTimeout(changeWord, 1000); // Wait 1 second before starting the next cycle
            });
        }, 2000); // Wait 2 seconds before starting to delete
    });

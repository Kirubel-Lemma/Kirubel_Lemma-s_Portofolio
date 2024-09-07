<script>
        const titles = ["IT Support Specialist,", "Network Administrator,", "System Administrator,", "Front-End Web Developer"];
        let index = 0;
        const typewriterElement = document.getElementById("typewriter");

        function typewriter() {
            if (index < titles.length) {
                let currentText = titles[index];
                typewriterElement.innerHTML = "";
                let letterIndex = 0;

                function type() {
                    if (letterIndex < currentText.length) {
                        typewriterElement.innerHTML += currentText.charAt(letterIndex);
                        letterIndex++;
                        setTimeout(type, 150);
                    } else {
                        setTimeout(() => {
                            index++;
                            if (index >= titles.length) index = 0;
                            typewriter();
                        }, 2000);
                    }
                }

                type();
            }
        }

        typewriter();
		
		// Dynamic greeting
        function setGreeting() {
            const greetingElement = document.getElementById("greeting");
            const now = new Date();
            const hours = now.getHours();
            
            let greeting;

            if (hours < 12) {
                greeting = "Good Morning";
            } else if (hours < 18) {
                greeting = "Good Afternoon";
            } else {
                greeting = "Good Evening";
            }

            greetingElement.textContent = `${greeting}`;
        }

        setGreeting();
</script>

// 90s Retro JavaScript Effects
document.addEventListener('DOMContentLoaded', function() {
    
    // Visitor counter with random increment
    function updateVisitorCounter() {
        const counter = document.querySelector('.visitor-counter');
        if (counter) {
            let count = parseInt(localStorage.getItem('visitorCount')) || 1337;
            count += Math.floor(Math.random() * 3) + 1;
            localStorage.setItem('visitorCount', count);
            counter.innerHTML = `
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wjRDKufw5lGjPgAABsAMBgRDgxLdFgGDFAPOBUUOlGHGmUaOKB6kJC3AwJaABAA==">
                You are visitor #${count.toString().padStart(6, '0')}
            `;
        }
    }

    // Matrix-style digital rain effect (optional background)
    function createMatrixRain() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '1';
        canvas.style.opacity = '0.1';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        const matrixArray = matrix.split("");

        const fontSize = 10;
        const columns = canvas.width / fontSize;
        const drops = [];

        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        function drawMatrix() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00ff00';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        setInterval(drawMatrix, 35);
    }

    // Add retro alert messages
    function addRetroAlerts() {
        const alertMessages = [
            "Welcome to the World Wide Web!",
            "This site is best viewed in 800x600 resolution",
            "Don't forget to bookmark this page!",
            "Join our web ring for more cool sites!",
            "Y2K compliant since 1999!"
        ];

        // Show random alert every 30 seconds
        setInterval(() => {
            if (Math.random() > 0.7) {
                const message = alertMessages[Math.floor(Math.random() * alertMessages.length)];
                alert(message);
            }
        }, 30000);
    }

    // Retro cursor trail effect
    function createCursorTrail() {
        const colors = ['#ff00ff', '#00ffff', '#ffff00', '#ff0080', '#00ff80'];
        let colorIndex = 0;

        document.addEventListener('mousemove', function(e) {
            const trail = document.createElement('div');
            trail.style.position = 'fixed';
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            trail.style.width = '6px';
            trail.style.height = '6px';
            trail.style.background = colors[colorIndex % colors.length];
            trail.style.borderRadius = '50%';
            trail.style.pointerEvents = 'none';
            trail.style.zIndex = '9999';
            trail.style.boxShadow = `0 0 10px ${colors[colorIndex % colors.length]}`;
            
            document.body.appendChild(trail);
            colorIndex++;

            setTimeout(() => {
                if (trail.parentNode) {
                    trail.parentNode.removeChild(trail);
                }
            }, 1000);
        });
    }

    // Add sound effects (placeholder - would need actual audio files)
    function addSoundEffects() {
        const sounds = {
            click: () => console.log("*BEEP*"),
            hover: () => console.log("*BOOP*"),
            load: () => console.log("*DIAL-UP SOUNDS*")
        };

        // Add click sounds to navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                sounds.click();
                // Add screen flash effect
                document.body.style.background = '#ffffff';
                setTimeout(() => {
                    document.body.style.background = '';
                }, 100);
            });

            link.addEventListener('mouseenter', sounds.hover);
        });
    }

    // Retro loading screen simulation
    function showLoadingScreen() {
        const loadingDiv = document.createElement('div');
        loadingDiv.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            color: #00ff00;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            font-family: 'Courier New', monospace;
        `;

        const loadingText = document.createElement('div');
        loadingText.innerHTML = `
            <h2 style="margin-bottom: 20px; text-shadow: 0 0 10px #00ff00;">LOADING CYBERSPACE...</h2>
            <div style="font-size: 0.8rem; margin-bottom: 10px;">Connecting to mainframe...</div>
            <div style="font-size: 0.8rem; margin-bottom: 10px;">Initializing neural interface...</div>
            <div style="font-size: 0.8rem; margin-bottom: 10px;">Downloading the future...</div>
            <div style="width: 200px; height: 20px; border: 2px solid #00ff00; margin-top: 20px;">
                <div id="progress-bar" style="height: 100%; background: #00ff00; width: 0%; transition: width 0.3s;"></div>
            </div>
            <div style="margin-top: 10px; font-size: 0.8rem;">Press any key to continue...</div>
        `;
        
        loadingDiv.appendChild(loadingText);
        document.body.appendChild(loadingDiv);

        // Animate progress bar
        let progress = 0;
        const progressBar = loadingDiv.querySelector('#progress-bar');
        const interval = setInterval(() => {
            progress += Math.random() * 15 + 5;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
            }
            progressBar.style.width = progress + '%';
        }, 200);

        // Remove loading screen on any key press or after 5 seconds
        const removeLoading = () => {
            loadingDiv.remove();
            document.removeEventListener('keydown', removeLoading);
        };
        
        document.addEventListener('keydown', removeLoading);
        setTimeout(removeLoading, 5000);
    }

    // Add typewriter effect to welcome text
    function typewriterEffect() {
        const text = document.querySelector('.retro-text');
        if (text) {
            const originalText = text.textContent;
            text.textContent = '';
            let i = 0;
            
            const typeInterval = setInterval(() => {
                if (i < originalText.length) {
                    text.textContent += originalText.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 50);
        }
    }

    // Random glitch effect
    function addGlitchEffect() {
        setInterval(() => {
            if (Math.random() > 0.95) {
                const elements = document.querySelectorAll('h1, h2, h3');
                const randomElement = elements[Math.floor(Math.random() * elements.length)];
                
                if (randomElement) {
                    const originalText = randomElement.textContent;
                    const glitchChars = '!@#$%^&*()_+{}|:"<>?';
                    let glitchText = '';
                    
                    for (let i = 0; i < originalText.length; i++) {
                        if (Math.random() > 0.8) {
                            glitchText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
                        } else {
                            glitchText += originalText[i];
                        }
                    }
                    
                    randomElement.textContent = glitchText;
                    setTimeout(() => {
                        randomElement.textContent = originalText;
                    }, 100);
                }
            }
        }, 5000);
    }

    // Initialize all effects
    updateVisitorCounter();
    setTimeout(showLoadingScreen, 500); // Show loading screen after brief delay
    setTimeout(() => {
        createMatrixRain();
        addRetroAlerts();
        createCursorTrail();
        addSoundEffects();
        typewriterEffect();
        addGlitchEffect();
    }, 2000);

    // Easter egg: Konami code
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.keyCode);
        konamiCode = konamiCode.slice(-10);
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            document.body.style.transform = 'rotate(360deg)';
            document.body.style.transition = 'transform 2s';
            alert('🎉 KONAMI CODE ACTIVATED! Welcome to the elite hacker club! 🎉');
            setTimeout(() => {
                document.body.style.transform = '';
            }, 2000);
        }
    });

    console.log(`
    ╔══════════════════════════════════════╗
    ║  Welcome to the 90s Web Experience!  ║
    ║                                      ║
    ║  Try the Konami Code: ↑↑↓↓←→←→BA      ║
    ║  This site is totally radical! 🤘   ║
    ╚══════════════════════════════════════╝
    `);
});
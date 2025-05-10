document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const lockScreen = document.getElementById('lock-screen');
    const startButton = document.getElementById('start-prank');

    // Enter fullscreen
    function enterFullscreen() {
        const elem = document.documentElement;
        try {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
            console.log('Fullscreen requested');
        } catch (err) {
            console.error('Fullscreen failed:', err);
        }
    }

    // Exit fullscreen and hide lock screen
    function exitPrank() {
        try {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            lockScreen.classList.remove('active');
            lockScreen.style.display = 'none';
            startScreen.style.display = 'none';
            console.log('Prank exited');
        } catch (err) {
            console.error('Exit fullscreen failed:', err);
        }
    }

    // Start prank
    startButton.addEventListener('click', () => {
        console.log('Start prank button clicked');
        startScreen.style.display = 'none';
        lockScreen.style.display = 'flex';
        lockScreen.classList.add('active');
        enterFullscreen();
    });

    // ESC key to exit
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            exitPrank();
        }
    });

    // Prevent context menu (optional, to enhance prank)
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Log initialization
    console.log('Prank script initialized');
});
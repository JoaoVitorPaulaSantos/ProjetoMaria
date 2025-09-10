document.addEventListener('DOMContentLoaded', () => {
    // --- Contador em tempo real ---
    const startDate = new Date('2024-11-01T00:00:00'); // Defina a data de início

    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date();
        const difference = now.getTime() - startDate.getTime();

        const seconds = Math.floor(difference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        const displaySeconds = seconds % 60;
        const displayMinutes = minutes % 60;
        const displayHours = hours % 24;

        countdownElement.textContent = `${days} dias, ${displayHours} horas, ${displayMinutes} minutos e ${displaySeconds} segundos`;
    }

    // Chama a função a cada segundo
    setInterval(updateCountdown, 1000);

    // Chama a função logo ao carregar a página para evitar o "atraso" inicial
    updateCountdown();

    // --- Lógica da música ---
    const music = document.getElementById('background-music');
    const playButton = document.getElementById('play-button');

    playButton.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            playButton.textContent = 'Música Tocando';
        } else {
            music.pause();
            playButton.textContent = 'Clique para ouvir';
        }
    });

    // --- Animações ---
    const photoCards = document.querySelectorAll('.photo-card');
    const messageSection = document.querySelector('.message');

    const isElementInView = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleScroll = () => {
        photoCards.forEach(card => {
            if (isElementInView(card)) {
                card.classList.add('fade-in');
            }
        });
        if (isElementInView(messageSection)) {
            messageSection.classList.add('slide-up');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
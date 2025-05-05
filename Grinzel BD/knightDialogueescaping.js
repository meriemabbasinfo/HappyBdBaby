// Typewriter effect for knight's message
const knightText = `
    Sir Anes Bettahar... you’ve made the noble choice. Sometimes, battles are best won not with a sword, but with heart and patience. You showed wisdom today — and that, my friend, is the mark of a true king. 👑

Now... allow me to share a truth most warriors learn the hard way:
Your lady — the enchanting Meriem — is fierce, loyal, and full of fire. But even the strongest hearts are ruled now and then by the tides of emotion… and sometimes, yes, even a little hormonal magic.

So when the storm hits — when she cries, when she’s moody, or goes silent — remember, it’s not a test of love. It’s a test of understanding. Be gentle. Be her peace. Her protector. Her knight — just as she is yours
`;

let i = 0;
const knightMessage = document.getElementById('knight-text');

function typeWriter() {
    if (i < knightText.length) {
        knightMessage.innerHTML += knightText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

window.onload = typeWriter;
const bgMusic = document.getElementById('bg-music');
const soundIcon = document.getElementById('sound-icon');

let isPlaying = true;

soundIcon.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        soundIcon.textContent = '🔇'; // Mute icon
    } else {
        bgMusic.play();
        soundIcon.textContent = '🔊'; // Sound icon
    }
    isPlaying = !isPlaying;
});
<script>
    // Show the link after 10 seconds (10,000 milliseconds)
    setTimeout(() => {
        document.getElementById("delayed-link").classList.remove("hidden");
    }, 30000);
</script>

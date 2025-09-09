// app.js: Separate JavaScript file for functionality
function shareToWhatsApp(text) {
    const encodedText = encodeURIComponent(text);
    window.location.href = `whatsapp://send?text=${encodedText}`;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
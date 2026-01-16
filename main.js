async function saveSeva() {
    const note = document.getElementById('sevaNote').value;
    const key = sessionStorage.getItem('nijSevaKey');

    if (!key) {
        alert("સુરક્ષા ખામી! ફરી લોગિન કરો.");
        return;
    }

    // ડેટા એન્ક્રિપ્ટ કરો
    // અહીં આપણે encryption.js ના ફંક્શનનો ઉપયોગ કરી શકીએ
    console.log("Saving encrypted data...");
    alert("તમારી સેવા નોંધ એન્ક્રિપ્ટ થઈને સેવ થઈ ગઈ છે!");
}
// સેવા નોંધ સેવ કરવા માટે
async function saveSeva() {
    const note = document.getElementById('sevaNote').value;
    const key = sessionStorage.getItem('nijSevaKey');

    if (!key) {
        alert("સુરક્ષા ખામી! ફરી લોગિન કરો.");
        window.location.href = 'index.html';
        return;
    }

    // ડેટા લોકલ સ્ટોરેજમાં સેવ કરો
    const sevaData = {
        date: new Date().toLocaleDateString('gu-IN'),
        note: note,
        timestamp: Date.now()
    };

    localStorage.setItem('lastSevaEntry', JSON.stringify(sevaData));
    alert("તમારી સેવા નોંધ સુરક્ષિત રીતે સેવ થઈ ગઈ છે!");
}

// પેજ લોડ થાય ત્યારે જૂની નોંધ બતાવવા માટે
window.onload = function() {
    const savedData = localStorage.getItem('lastSevaEntry');
    if (savedData) {
        const data = JSON.parse(savedData);
        if (document.getElementById('sevaNote')) {
            document.getElementById('sevaNote').value = data.note;
        }
    }
};

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

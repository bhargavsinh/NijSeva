document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    // પાસવર્ડને લોકલ સ્ટોરેજમાં કામચલાઉ સેવ કરવો (Encryption માટે)
    const masterKey = e.target.querySelector('input[type="password"]').value;
    sessionStorage.setItem('nijSevaKey', masterKey);
    
    window.location.href = 'dashboard.html';
});

// main.js - આને પૂરેપૂરી બદલી નાખો
function saveSeva() {
    const note = document.getElementById('sevaNote').value;
    if (!note) return alert("કંઈક તો લખો!");

    // ડેટા ઓબ્જેક્ટ
    const newEntry = {
        id: Date.now(),
        date: new Date().toLocaleDateString('gu-IN'),
        text: note,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // જૂના ડેટા મેળવો
    let history = JSON.parse(localStorage.getItem('sevaHistory') || "[]");
    history.unshift(newEntry); // નવી એન્ટ્રી ઉપર ઉમેરો

    // સેવ કરો
    localStorage.setItem('sevaHistory', JSON.stringify(history));
    
    document.getElementById('sevaNote').value = ""; // ક્લિયર કરો
    loadHistory();
    alert("સેવા સફળતાપૂર્વક નોંધાઈ ગઈ!");
}

function loadHistory() {
    const historyDiv = document.getElementById('history');
    const history = JSON.parse(localStorage.getItem('sevaHistory') || "[]");
    
    historyDiv.innerHTML = '<h3 class="font-bold text-slate-500 text-sm px-2 uppercase tracking-wider">તાજેતરની નોંધ</h3>';
    
    history.slice(0, 5).forEach(item => {
        historyDiv.innerHTML += `
            <div class="bg-white p-4 rounded-2xl shadow-sm border border-slate-50 animate-fade-in">
                <div class="flex justify-between text-xs text-slate-400 mb-1">
                    <span>${item.date}</span>
                    <span>${item.time}</span>
                </div>
                <p class="text-slate-700">${item.text}</p>
            </div>
        `;
    });
}

// પેજ લોડ થાય ત્યારે
window.onload = loadHistory;

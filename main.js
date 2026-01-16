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
// Swaroop Settings Update Function
function updateSwaroopSettings() {
    const name = document.getElementById('inputSwaroopName').value;
    const gadi = document.getElementById('inputGadi').value;
    const imageInput = document.getElementById('swaroopImage');

    if (!name) return alert("કૃપા કરીને નામ લખો");

    const swaroopData = {
        name: name,
        gadi: gadi,
        lastUpdated: new Date().toLocaleDateString('gu-IN')
    };

    // Image Handle (Base64 conversion for LocalStorage)
    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            swaroopData.image = e.target.result;
            localStorage.setItem('swaroopInfo', JSON.stringify(swaroopData));
            alert("સ્વરૂપ માહિતી સેવ થઈ ગઈ!");
            location.reload();
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        localStorage.setItem('swaroopInfo', JSON.stringify(swaroopData));
        alert("માહિતી સેવ થઈ ગઈ!");
    }
}

// પેજ લોડ વખતે ડેટા બતાવો
function loadSwaroopInfo() {
    const data = JSON.parse(localStorage.getItem('swaroopInfo'));
    if (data) {
        if (document.getElementById('displaySwaroopName')) {
            document.getElementById('displaySwaroopName').innerText = data.name;
        }
        if (document.getElementById('swaroopImgPreview') && data.image) {
            document.getElementById('swaroopImgPreview').innerHTML = `<img src="${data.image}" class="w-full h-full object-cover">`;
        }
        // Input fields માં પણ ડેટા ભરો
        if (document.getElementById('inputSwaroopName')) document.getElementById('inputSwaroopName').value = data.name;
        if (document.getElementById('inputGadi')) document.getElementById('inputGadi').value = data.gadi;
    }
}

// Window load પર ફંક્શન કોલ કરો
window.addEventListener('load', loadSwaroopInfo);


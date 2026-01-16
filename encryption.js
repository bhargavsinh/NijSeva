// AES Encryption Logic
async function encryptData(text, masterKey) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    
    // સાદો પાસવર્ડ કીમાં ફેરવાશે
    const key = await crypto.subtle.importKey(
        "raw", encoder.encode(masterKey.padEnd(32)), "AES-GCM", false, ["encrypt"]
    );

    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const encrypted = await window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv }, key, data
    );

    return {
        cipherText: btoa(String.fromCharCode(...new Uint8Array(encrypted))),
        iv: btoa(String.fromCharCode(...iv))
    };
}

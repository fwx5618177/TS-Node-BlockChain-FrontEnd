let nonce = 0;

async function generateHash(input: string): Promise<string> {
    const msgBuffer = new TextEncoder().encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    const hashHex = hashArray.map(val => ('00' + val.toString(16)).slice(-2)).join('');

    console.log('hash:', msgBuffer, hashBuffer, hashArray, hashHex);
    return hashHex;
}

async function calculateHashWithNonce(nonce: number): Promise<string> {
    const data = 'Hello World' + nonce;
    
    return generateHash(data);
}

async function mine(): Promise<void> {
    let hash: string;

    do {
        hash = await calculateHashWithNonce(++nonce);
    } while(hash.startsWith('0000') === false);

    console.log('hash: ', hash, 'nonce:', nonce);
}

module.exports = {
    mine,
}
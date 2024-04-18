const url = "https://api.dictionaryapi.dev/api/v2/entries/en/<word>"

async function getDict() {
    const api = await fetch(url);
    const response = await api.json();
    console.log(response);
}

getDict();
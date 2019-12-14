// Rewrite current function using async/await
async function loadJson(url) {
    let promise = await fetch(url);
    let content;
    if (promise.status == 200) {
        content = await promise.json();
        return content;
    } else {
        throw new Error(promise.status);
    }
}

loadJson('no-such-user.json')
    .catch(alert); // Error: 404
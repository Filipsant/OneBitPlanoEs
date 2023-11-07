const users = [];
async function fetchUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    if (user.massage) {
        alert('Usuario não encontrado');
    }
    else {
        users.push(user);
        alert(`O usuario ${user.login} foi salvo.\n` +
            `\nid: ${user.id}` +
            `\nlogin: ${user.login}` +
            `\nBio: ${user.bio}` +
            `\nRepositorios públicos: ${user.public_repos}`);
    }
}
async function showUser(username) {
    const user = users.find(user => user.login === username);
    if (typeof user === 'undefined') {
        alert('Usuario não encontrado!');
    }
    else {
        const response = await fetch(user.repos_url);
        const repos = await response.json();
        let message = `id: ${user.id}\n` +
            `\nlogin: ${user.login}` +
            `\nBio: ${user.bio}` +
            `\nRepositorios Publicos: ${user.public_repos}`;
        repos.forEach(repo => {
            message += `\nNome:${repo.name}` +
                `\nDescrição ${repo.description}` +
                `\nEstrelas: ${repo.stargazers_count}` +
                `\nÉ um fork: ${repo.fork ? 'Sim' : 'Não'}\n`;
        });
        alert(message);
    }
}
function showAllUsers() {
    let message = 'Usuarios:\n';
    users.forEach(user => {
        message += `\n- ${user.login}`;
    });
    alert(message);
}
function showReposTotal() {
    const reposTotal = users.reduce((accumulator, user) => (accumulator + user.public_repos), 0);
    alert(`O grupo possui um total de ${reposTotal} repositorios públicados!`);
}
function showTopFive() {
    const topFive = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 5);
    let message = 'Top 5 usúarios com mais repositorios públicados:\n';
    topFive.forEach((user, index) => {
        message += `\n${index + 1}- ${user.login}: ${user.public_repos} repositórios`;
    });
    alert(message);
}
async function main() {
    await fetchUser('isaacpontes');
    await fetchUser('isaacpontes');
    await fetchUser('julianaconde');
    await fetchUser('pcaldass');
    await fetchUser('lucasqueirogaa');
    await fetchUser('frans203');
    await fetchUser('LeDragoX');
    await fetchUser('filipsant');
    await showUser('filipsant');
    await showUser('isaacpontes');
    showAllUsers();
    showReposTotal();
    showTopFive();
}
main();

let username, div;

function defineCampos() {
  username = document.getElementById('user');
  div = document.getElementById('principal');
}

function buscaUser() {
  event.preventDefault();
  defineCampos();
  if (username.value != '') {
    var url = `https://api.github.com/users/${username.value}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        div.innerHTML = `<img src="${data.avatar_url}" id="img" />
        <p id="names" >Nome: ${data.name}</p>
        <p >Usuário: ${data.login}</p>
        <p >Repositórios: ${data.public_repos}</p>
        <p >Seguidores: ${data.followers}</p>
        <p >Seguindo: ${data.following}</p>
        <a href="${data.repos_url}" id="link">Link dos Repositórios</a>`;
      });
  }
}

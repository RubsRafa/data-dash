# Data Dashboard 

### Sobre o Projeto
__Data Dashboard__ tem como objetivo a construção da visualização de uma tabela de dados, os quais são obtidos de uma API simulada utilizando json-server.
O projeto tem como finalidade renderizar informações sobre foto, nome, cargo, data de admissão e telefone de funcionários. Além disso, é possível pesquisar por funcionários específicos a partir do seu nome, cargo e número de telefone.

### Bibliotecas utilizadas
- axios: Utilizado para realizar requisições HTTP.
- json-server: Ferramenta para simplificar a criação de uma API REST completa a partir de um arquivo JSON.
- styled-components: Utilizada para estilização em aplicações React.

## Pré- requisitos
Para esse projeto, foram utilizadas as seguintes ferramentas:
- [__Git__](https://git-scm.com/): Versão 2.42.0, para realizar o versionamento do código.
- [__GitHub__](https://github.com/): Para armazenamento do código.
- [__Yarn__](https://yarnpkg.com/): Gerenciador de pacotes. Versão 1.22.21.

## Instalação
1. Abra o terminal da sua máquina e clone o repositório usando HTTPS ou SSH. Segue um exemplo usando SSH:
```bash
git clone git@github.com:RubsRafa/data-dash.git
```

2. Navegue até a pasta do projeto:
```bash
cd data-dash
```

3. Instale as dependências:
```bash
yarn install
```

4. Para visualizar os dados simulados, é necessário rodar o seguinte comando para consumir a API simulada:
```bash
npx json-server db.json
# or
yarn json-server db.json
```

5. Abra outro terminal e rode o seguinte comando para inicializar o projeto:
```bash
yarn run dev
```

*A API simulada estará disponível localmente na porta 3000. A aplicação estará disponível locamente na porta 5173.

*Lembre-se de adicionar o arquivo `.env.local` na raiz do projeto, utilizando a variável de ambiente exemplo do arquivo `.env.example`, apontando para o endereço da API simulada.
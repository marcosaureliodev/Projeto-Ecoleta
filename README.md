![HomeEcoleta](https://github.com/marcosaureliodev/Projeto-Ecoleta/blob/master/assets/HomeEcoletaIpad.PNG)

# Projeto-Ecoleta
 Tem como objetivo manter uma conexão entre empresas e outras entidades que coletam resíduos, resíduos esses (organicos e inorganicos), ajudando pessoas e entidades que necessitam descartar esses materiais "resíduos". Esta solução vêem ajudar a previnir um grander problema que é o descarte  inadequado do lixo,  onde esta solução também vem ajudar e facílitar o processo de reciclagem e reutilização dos materias coletados.

# By Next Level Week da Rocketseat

Projeto **Open Source** desenvolvido na primeira semana **Next Level Week** da **Rocketseat**, com o uso das seguintes tecnologias: **_TypeScript, Node, React e React Native._**

![LICENÇA](https://img.shields.io/badge/LICENÇA-MIT-GREEN) ![node](https://img.shields.io/badge/node-12.17.0-GREEN) ![web](https://img.shields.io/badge/npm-6.14.4-red) ![web](https://img.shields.io/badge/web-react-blue) ![mobile](https://img.shields.io/badge/mobile-react_native-purple)
![server](https://img.shields.io/badge/server-nodejs-orange) 

# :computer: Desenvolvedor
[<img src="https://avatars3.githubusercontent.com/u/63154006?s=460&u=42ba311a73dfa829f5ea8cd220fd054ee05314cb&v" width=115 > <br> <sub> Marcos Aurélio </sub>](https://github.com/marcosaureliodev) |
| :---: |  

## **:wine_glass: COMO UTILIZAR**

### Configurações Iniciais

Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina. 

Se você estiver utilizando o **Linux**, você pode optar por instalar o **Node** através do gerênciador de versões <kbd>[asdf]</kbd> para facilitar o processo de mudança da versão do **Node**, quando for necessário.

Você pode optar também por utilizar o **yarn** no lugar do **npm**. Você pode instalar clicando nesse <kbd>[link][yarn]</kbd>, ou através do <kbd>[asdf]</kbd>.

Após ter o **Node** instalado, instale as dependências do **React e React Native (Expo)** de forma global, utilizando os comandos:

```sh
# React:
$ npm install create-react-app -g

# Expo (React Native):
$ npm install -g expo-cli 
```

Você precisa renomear o arquivo `.env-example` para `.env` e inserir as informações que condizem com o seu **host**:

```sh
$ mv .env-example .env
```

Instale as dependências contidas nos arquivos `package.json` que se encontram na raíz do repositório (para o gerenciamento de commits), no diretório do **server**, no diretório do **website** e no diretório **mobile**. Para instalar as dependências, basta abrir o terminal no diretório e digitar o comando:

```sh
$ npm install
# ou
$ yarn
```

Exemplos:
```sh
# Instalando as dependências do commitlint:
$ cd ./ecoleta
$ npm install

# Instalando as dependências do server:
$ cd ./sources/server
$ npm install

# Instalando as dependências do website:
$ cd ./sources/website
$ npm install

# Instalando as dependências do mobile:
$ cd ./sources/mobile
$ npm install
```

Veja os arquivos **`package.json`** do <kbd>[commitlint](./package.json)</kbd>, <kbd>[server](./sources/server/package.json)</kbd>, <kbd>[website](./sources/website/package.json)</kbd> e <kbd>[mobile](./sources/mobile/package.json)</kbd>.

### Utilizando o Server

```sh
# Abrindo o terminal no diretório do servidor:
$ cd ./sources/server

# Executando a aplicação em modo de desenvolvimento:
$ npm run dev

# Instanciando o banco de dados:
$ npm run knex:migrate

# Povoando o banco de dados (seeds):
$ npm run knex:seed
```

> Veja a parte de **scripts {}** do arquivo <kbd>[package.json](./sources/server/package.json)</kbd> para saber quais scripts estão disponíveis.

### Utilizando o Website

```sh
# Abrindo o terminal no diretório do website:
$ cd ./sources/website

# Executando o website no modo de desenvolvimento:
$ npm run start
```

> Se o browser não abrir automaticamente, acesse: http://localhost:3000.

### Utilizando o Mobile

Instale o aplicativo <kbd>[Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en)</kbd> no seu smartphone.

```sh
# Abrindo o terminal no diretório do mobile:
$ cd ./sources/mobile

# Executando o mobile no modo de desenvolvimento:
$ npm run start
```

Agora, abra o aplicativo do expo e no modo **LAN** faça o scan do QRCode.

> Se tiver algum problema para executar o aplicativo nesse modo, tente desabilitar o firewall da sua máquina.

Se tiver algum problema com as fontes, utilize o comando:
```sh
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
```

**\* Lembre de inserir no arquivo `.env` o IP exato que foi gerado pelo seu mobile após utilizar o comando `npm run start`.**

## **:octocat: COMO CONTRIBUIR**
  
  - Verifique as **[Issues](https://github.com/x0n4d0/ecoleta/projects/1)** que estão abertas e se já não existe alguma com a sua feature;
  - Abra uma **Issue** com o nome e descrição da sua feature e assine com o seu usuário informando que irá fazê-la;
  - Faça um **[fork](https://help.github.com/pt/github/getting-started-with-github/fork-a-repo)** do repositório;
  - Entre no sua página do GitHub e faça um **clone** do seu **fork**;
  - Crie uma *branch* com o nome da sua feature: `git chechout -b feat/minhaFeature`;
  - Faça as alterações necessárias no código ou na documentação;
  - Instale as dependências do *commitlint* na raíz do projeto para a verificação dos commits: `npm install` ou `yarn`;
  - Faça o *commit* das suas alterações seguindo as [convenções de commit](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/), adicione na descrição o id da sua Issue em parênteses e lembre de fechar a sua Issue com o id no rodapé do commit:

  ```
    <tipo>(escopo opcional): <descrição> (#x)

    [corpo do commit]

    Close #x
  ```
  Exemplo:
  ```sh
    feat: adicionado componente para tal coisa (#52)

    Foi adicionado um componente para tal coisa com o objetivo de melhorar tal coisa, deixando o projeto de tal maneira.

    Close #52
  ```
  - Faça um *push* para a sua *branch*: `git push origin feat/minhaFeature`;
  - Agora é só abrir um *pull request* no repositório que você fez o *fork* e assim que acontecer o *merge* sua Issue será fechada e suas alterações irão fazer parte do projeto;
  - Depois que o *merge* da sua pull request for feito, você pode deletar a sua *branch*.

# :bookmark_tabs: Licença

Esse repositório está licenciado pela MIT LICENSE. Para mais informações detalhadas, leia o arquivo [LICENSE](https://github.com/marcosaureliodev/Projeto-Ecoleta/blob/master/LICENSE) contido nesse repositório.

# Jogo Genius com React Native

Este é um jogo Genius desenvolvido em React Native, onde o jogador deve repetir uma sequência de luzes gerada aleatoriamente.

## Como Jogar

1.  O jogo exibe uma grade de 3x3 quadrados que piscam em uma sequência aleatória.
2.  O jogador deve tocar nos quadrados na mesma ordem em que piscaram.
3.  Se o jogador acertar a sequência, o jogo adiciona um novo passo à sequência e continua.
4.  Se o jogador errar a sequência, o jogo exibe uma mensagem de erro e reinicia o nível.
5.  O jogo possui três níveis de dificuldade: fácil, médio e difícil.
6.  A cada 4 rodadas completadas, o nível de dificuldade aumenta automaticamente.

## Como Executar o Jogo

1.  Certifique-se de ter o Node.js e o Expo CLI instalados em seu computador.
2.  Clone este repositório:

    ```bash
    git clone [https://github.com/seu-usuario/jogo-genius.git](https://www.google.com/search?q=https://github.com/seu-usuario/jogo-genius.git)
    ```

3.  Navegue até o diretório do projeto:

    ```bash
    cd jogo-genius
    ```

4.  Instale as dependências:

    ```bash
    npm install
    ```

5.  Inicie o jogo:

    ```bash
    expo start
    ```

6.  Use o aplicativo Expo Go em seu dispositivo móvel para visualizar o jogo ou execute-o em um emulador.

## Estrutura do Projeto

* `App.js`: Ponto de entrada do aplicativo.
* `components/Quadrado.js`: Componente para cada quadrado na grade.
* `screens/Jogo.js`: Tela principal do jogo.
* `assets/`: Pasta para armazenar imagens e sons (opcional).

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## Tutorial de como upar arquivos no GitHub

1.  **Crie uma conta no GitHub:**
    * Acesse o site do GitHub e crie uma conta gratuita.
2.  **Crie um repositório:**
    * Clique no botão "New repository" no canto superior direito da página.
    * Dê um nome ao seu repositório e adicione uma descrição (opcional).
    * Escolha se o repositório será público ou privado.
    * Clique em "Create repository".
3.  **Envie seus arquivos:**
    * **Usando a interface do GitHub:**
        * Na página do seu repositório, clique em "Upload files".
        * Arraste e solte seus arquivos ou clique em "choose your files" para selecioná-los.
        * Adicione uma mensagem de commit (uma breve descrição das suas alterações).
        * Clique em "Commit changes".
    * **Usando o Git:**
        * Instale o Git em seu computador.
        * Clone seu repositório para o seu computador:

            ```bash
            git clone [https://github.com/seu-usuario/jogo-genius.git](https://www.google.com/search?q=https://github.com/seu-usuario/jogo-genius.git)
            ```

        * Copie seus arquivos para a pasta do repositório.
        * Adicione os arquivos ao Git:

            ```bash
            git add .
            ```

        * Faça um commit com uma mensagem descritiva:

            ```bash
            git commit -m "Adicionando meus arquivos"
            ```

        * Envie os arquivos para o GitHub:

            ```bash
            git push origin main
            ```

4.  **Visualize seus arquivos:**
    * Acesse a página do seu repositório no GitHub para ver seus arquivos.

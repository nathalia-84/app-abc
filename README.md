### Instalaçao

Para rodar um aplicativo criado com Vite em uma máquina após ter feito um pull request em um repositório do Git, siga os passos abaixo:

1. Faça o clone do repositório: No seu PC, abra o terminal (ou prompt de comando) e execute o seguinte comando para clonar o repositório Git para o seu ambiente local:

   ```
   git clone <URL do repositório>
   ```

   Certifique-se de substituir `<URL do repositório>` pela URL do repositório Git onde você fez o pull request.

2. Navegue até o diretório do projeto: Use o comando `cd` para navegar até o diretório do projeto clonado.

   ```
   cd nome-do-diretorio
   ```

   Substitua `nome-do-diretorio` pelo nome do diretório do projeto clonado.

3. Verifique a branch: Verifique em qual branch você fez o pull request usando o comando:

   ```
   git branch --all
   ```

   Isso exibirá todas as branches disponíveis no repositório, e a branch atual estará destacada.

4. Altere para a branch do pull request: Se o pull request foi feito em uma branch diferente da atual, use o comando `git checkout` para mudar para a branch correta:

   ```
   git checkout nome-da-branch
   ```

   Substitua `nome-da-branch` pelo nome da branch do pull request.

5. Instale as dependências: Execute o seguinte comando para instalar as dependências do projeto dentro do diretorio frontend:

   ```
   npm install
   ```

   Isso instalará todas as dependências necessárias listadas no arquivo `package.json`.

6. Execute o aplicativo: Após a instalação das dependências, inicie o servidor de desenvolvimento do Vite executando o seguinte comando:

   ```
   npm run dev
   ```

   O servidor de desenvolvimento será iniciado e o aplicativo será executado localmente. O Vite detectará automaticamente as alterações no código-fonte e atualizará o aplicativo no navegador em tempo real.

7. Abra o aplicativo no navegador: Abra o navegador da web de sua preferência e acesse o seguinte URL:

   ```
   http://localhost:3000
   ```

   O seu aplicativo Vite será exibido no navegador.

A partir desse ponto, você pode visualizar e testar as alterações feitas no pull request. Lembre-se de que esses passos são uma visão geral básica e podem variar dependendo da estrutura específica do seu projeto Vite e do fluxo de trabalho do Git. Certifique-se de seguir as instruções adicionais fornecidas pelo mantenedor do repositório ou pela documentação para testar e revisar o pull request corretamente.

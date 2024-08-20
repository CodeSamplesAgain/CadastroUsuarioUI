<h1>Cadastro de Usuário - UI</h1>
<p>Interface em Vue de um sistema simples que faz o controle de usuário englobando cadastro, login, recuperação de senha e listagem.</p>
<h2>Instalação</h2>
<p>Clonar o repositório.</p>
<pre>> git clone https://github.com/CodeSamplesAgain/CadastroUsuarioUI.git</pre>
<p>Instalar as dependências usando npm.</p>
<pre>> npm install</pre>
<p>Rodar o servidor.</p>
<pre>> npm run dev</pre>
<p>Após isso a UI deve estar funcionando normalmente.</p>
<p>Dada a possível complexidade de tornar possível o envio de emails utilizando a rede local, foi também disponibilizada uma rota que lista os pedidos de recuperação de senha com emails e códigos gerados.</p>
<pre>http://127.0.0.1:8000/api/resets</pre>
<p>Portanto, para acessar a página de recuperação, bastará acessar o link a seguir.</p>
<pre>http://localhost:5173/{{CODIGO}}</pre>

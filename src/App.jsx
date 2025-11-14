import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('Verificando conexão...');

  useEffect(() => {
    const testarConexao = async () => {
      try {
        const resposta = await fetch('http://localhost:3000/usuarios');
        if (!resposta.ok) {
          throw new Error(`Erro: ${resposta.status}`);
        }
        const dados = await resposta.text();
        setStatus(`Conexão OK! Usuários encontrados: ${dados.length}`);
      } catch (erro) {
        setStatus(`Falha na conexão: ${erro.message}`);
      }
    };

    testarConexao();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Teste de Conexão com Back-End</h1>
      <p>{status}</p>
    </div>
  );
}

export default App;

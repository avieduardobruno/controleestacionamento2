import React from 'react';

function App() {
    return (
        <div>
            <header>
                <h1>Controle de Estacionamento</h1>
                <nav>
                    <ul>
                        <li><a href="#cadastro">Cadastro de Reserva</a></li>
                        <li><a href="#listar">Listar Vagas</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section id="cadastro">
                    <h2>Cadastro de Reserva</h2>
                    <form id="cadastro-form">
                        <label htmlFor="placa">Placa do Veículo:</label>
                        <input type="text" id="placa" required /><br />

                        <label htmlFor="proprietario">Nome do Proprietário:</label>
                        <input type="text" id="proprietario" required /><br />

                        <label htmlFor="apartamento">Número do Apartamento:</label>
                        <input type="text" id="apartamento" required /><br />

                        <label htmlFor="bloco">Bloco do Apartamento:</label>
                        <input type="text" id="bloco" required /><br />

                        <label htmlFor="modelo">Modelo do Veículo:</label>
                        <input type="text" id="modelo" required /><br />

                        <label htmlFor="cor">Cor do Veículo:</label>
                        <input type="text" id="cor" required /><br />

                        <label htmlFor="vaga">Número da Vaga:</label>
                        <input type="text" id="vaga" required /><br />

                        <button type="submit">Salvar</button>
                    </form>
                </section>

                <section id="listar">
                    <h2>Listar Vagas</h2>
                    <ul id="vagas-list"></ul>
                </section>
            </main>

            {/* O JavaScript pode ser importado como um módulo separado */}
            <script src="script.js"></script>
        </div>
    );
}

export default App;

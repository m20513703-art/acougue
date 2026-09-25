"use strict";

/* =========================================================
   AÇOUGUE — SISTEMA DE ENCOMENDAS
   ========================================================= */

/* =========================
   CONFIGURAÇÕES
   ========================= */

const WHATSAPP = "5519981123401";

const ENDERECO =
    "Rua Guanabara, nº 26 - Divinolândia - SP";

const CHAVE_CARRINHO =
    "acougue_encomenda";


/* =========================
   HORÁRIOS
   ========================= */

const HORARIOS = {
    0: { abertura: "08:00", fechamento: "13:00" }, // Domingo
    1: { abertura: "08:00", fechamento: "18:00" }, // Segunda
    2: { abertura: "08:00", fechamento: "18:00" }, // Terça
    3: { abertura: "08:00", fechamento: "18:00" }, // Quarta
    4: { abertura: "08:00", fechamento: "18:00" }, // Quinta
    5: { abertura: "08:00", fechamento: "18:00" }, // Sexta
    6: { abertura: "08:00", fechamento: "20:00" }  // Sábado
};


/* =========================
   PRODUTOS
   ========================= */

const PRODUTOS = {

    bovina: [

        {
            id: "bovina-picanha",
            nome: "Picanha",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "bovina-contra-file",
            nome: "Contra-filé",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "bovina-alcatra",
            nome: "Alcatra",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "bovina-fraldinha",
            nome: "Fraldinha",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "bovina-patinho",
            nome: "Patinho",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "bovina-coxao-mole",
            nome: "Coxão Mole",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "bovina-coxao-duro",
            nome: "Coxão Duro",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "bovina-acem",
            nome: "Acém",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "bovina-costela",
            nome: "Costela Bovina",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "bovina-cupim",
            nome: "Cupim",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "bovina-musculo",
            nome: "Músculo",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "bovina-peito",
            nome: "Peito Bovino",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "bovina-figado",
            nome: "Fígado Bovino",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "bovina-rabada",
            nome: "Rabada",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "bovina-ossobuco",
            nome: "Ossobuco",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "bovina-carne-moida",
            nome: "Carne Moída",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "bovina-bife-role",
            nome: "Bife à Rolê",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "bovina-bife",
            nome: "Bife para Churrasco",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "bovina-carne-panela",
            nome: "Carne para Panela",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "bovina-carne-strogonoff",
            nome: "Carne para Strogonoff",
            unidade: "kg",
            imagem: "🥩"
        }

    ],


    /* =========================
       CARNE SUÍNA
       ========================= */

    suina: [

        {
            id: "suina-pernil",
            nome: "Pernil Suíno",
            unidade: "kg",
            imagem: "🐖"
        },

        {
            id: "suina-lombo",
            nome: "Lombo Suíno",
            unidade: "kg",
            imagem: "🐖"
        },

        {
            id: "suina-bisteca",
            nome: "Bisteca Suína",
            unidade: "kg",
            imagem: "🐖"
        },

        {
            id: "suina-costelinha",
            nome: "Costelinha Suína",
            unidade: "kg",
            imagem: "🐖"
        },

        {
            id: "suina-panceta",
            nome: "Panceta",
            unidade: "kg",
            imagem: "🐖"
        },

        {
            id: "suina-paleta",
            nome: "Paleta Suína",
            unidade: "kg",
            imagem: "🐖"
        },

        {
            id: "suina-toucinho",
            nome: "Toucinho",
            unidade: "kg",
            imagem: "🐖"
        },

        {
            id: "suina-bacon",
            nome: "Bacon",
            unidade: "kg",
            imagem: "🥓"
        },

        {
            id: "suina-pe",
            nome: "Pé de Porco",
            unidade: "kg",
            imagem: "🐖"
        },

        {
            id: "suina-orelha",
            nome: "Orelha Suína",
            unidade: "kg",
            imagem: "🐖"
        },

        {
            id: "suina-rabo",
            nome: "Rabo Suíno",
            unidade: "kg",
            imagem: "🐖"
        },

        {
            id: "suina-carne-moida",
            nome: "Carne Suína Moída",
            unidade: "kg",
            imagem: "🐖"
        }

    ],


    /* =========================
       FRANGO
       ========================= */

    frango: [

        {
            id: "frango-inteiro",
            nome: "Frango Inteiro",
            unidade: "kg",
            imagem: "🍗"
        },

        {
            id: "frango-peito",
            nome: "Peito de Frango",
            unidade: "kg",
            imagem: "🍗"
        },

        {
            id: "frango-file",
            nome: "Filé de Frango",
            unidade: "kg",
            imagem: "🍗"
        },

        {
            id: "frango-coxa",
            nome: "Coxa de Frango",
            unidade: "kg",
            imagem: "🍗"
        },

        {
            id: "frango-sobrecoxa",
            nome: "Sobrecoxa",
            unidade: "kg",
            imagem: "🍗"
        },

        {
            id: "frango-asa",
            nome: "Asa de Frango",
            unidade: "kg",
            imagem: "🍗"
        },

        {
            id: "frango-coracao",
            nome: "Coração de Frango",
            unidade: "kg",
            imagem: "❤️"
        },

        {
            id: "frango-moela",
            nome: "Moela de Frango",
            unidade: "kg",
            imagem: "🍗"
        },

        {
            id: "frango-figado",
            nome: "Fígado de Frango",
            unidade: "kg",
            imagem: "🍗"
        },

        {
            id: "frango-pe",
            nome: "Pé de Frango",
            unidade: "kg",
            imagem: "🍗"
        },

        {
            id: "frango-pescoco",
            nome: "Pescoço de Frango",
            unidade: "kg",
            imagem: "🍗"
        },

        {
            id: "frango-file-temperado",
            nome: "Filé de Frango Temperado",
            unidade: "kg",
            imagem: "🍗"
        }

    ],


    /* =========================
       CARNEIRO
       ========================= */

    carneiro: [

        {
            id: "carneiro-pernil",
            nome: "Pernil de Carneiro",
            unidade: "kg",
            imagem: "🐑"
        },

        {
            id: "carneiro-paleta",
            nome: "Paleta de Carneiro",
            unidade: "kg",
            imagem: "🐑"
        },

        {
            id: "carneiro-costela",
            nome: "Costela de Carneiro",
            unidade: "kg",
            imagem: "🐑"
        },

        {
            id: "carneiro-carre",
            nome: "Carré de Carneiro",
            unidade: "kg",
            imagem: "🐑"
        },

        {
            id: "carneiro-bife",
            nome: "Bife de Carneiro",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "carneiro-carne",
            nome: "Carne de Carneiro",
            unidade: "kg",
            imagem: "🐑"
        }

    ],


    /* =========================
       EMBUTIDOS
       ========================= */

    embutidos: [

        {
            id: "embutido-linguica-toscana",
            nome: "Linguiça Toscana",
            unidade: "kg",
            imagem: "🌭"
        },

        {
            id: "embutido-linguica-frango",
            nome: "Linguiça de Frango",
            unidade: "kg",
            imagem: "🌭"
        },

        {
            id: "embutido-linguica-cuiabana",
            nome: "Linguiça Cuiabana",
            unidade: "kg",
            imagem: "🌭"
        },

        {
            id: "embutido-linguica-apimentada",
            nome: "Linguiça Apimentada",
            unidade: "kg",
            imagem: "🌶️"
        },

        {
            id: "embutido-calabresa",
            nome: "Linguiça Calabresa",
            unidade: "kg",
            imagem: "🌭"
        },

        {
            id: "embutido-defumada",
            nome: "Linguiça Defumada",
            unidade: "kg",
            imagem: "🌭"
        },

        {
            id: "embutido-salsicha",
            nome: "Salsicha",
            unidade: "kg",
            imagem: "🌭"
        },

        {
            id: "embutido-paio",
            nome: "Paio",
            unidade: "kg",
            imagem: "🌭"
        },

        {
            id: "embutido-hamburguer",
            nome: "Hambúrguer",
            unidade: "unidade",
            imagem: "🍔"
        },

        {
            id: "embutido-medalhao-frango",
            nome: "Medalhão de Frango",
            unidade: "kg",
            imagem: "🍗"
        },

        {
            id: "embutido-medalhao-bacon",
            nome: "Medalhão de Bacon",
            unidade: "kg",
            imagem: "🥓"
        },

        {
            id: "embutido-bife-role",
            nome: "Bife à Rolê",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "embutido-kafta",
            nome: "Kafta",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "embutido-almondega",
            nome: "Almôndega",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "embutido-espetinho-carne",
            nome: "Espetinho de Carne",
            unidade: "unidade",
            imagem: "🍢"
        },

        {
            id: "embutido-espetinho-frango",
            nome: "Espetinho de Frango",
            unidade: "unidade",
            imagem: "🍢"
        },

        {
            id: "embutido-espetinho-linguica",
            nome: "Espetinho de Linguiça",
            unidade: "unidade",
            imagem: "🍢"
        },

        {
            id: "embutido-rocambole",
            nome: "Rocambole de Carne",
            unidade: "kg",
            imagem: "🥩"
        }

    ],


    /* =========================
       CHURRASCO
       ========================= */

    churrasco: [

        {
            id: "churrasco-carvao",
            nome: "Carvão",
            unidade: "saco",
            imagem: "🔥"
        },

        {
            id: "churrasco-sal-grosso",
            nome: "Sal Grosso",
            unidade: "unidade",
            imagem: "🧂"
        },

        {
            id: "churrasco-espeto",
            nome: "Espeto para Churrasco",
            unidade: "unidade",
            imagem: "🍢"
        },

        {
            id: "churrasco-grelha",
            nome: "Grelha para Churrasco",
            unidade: "unidade",
            imagem: "🔥"
        },

        {
            id: "churrasco-acendedor",
            nome: "Acendedor de Churrasqueira",
            unidade: "unidade",
            imagem: "🔥"
        },

        {
            id: "churrasco-tempero",
            nome: "Tempero para Churrasco",
            unidade: "unidade",
            imagem: "🧂"
        },

        {
            id: "churrasco-farofa",
            nome: "Farofa",
            unidade: "unidade",
            imagem: "🍽️"
        },

        {
            id: "churrasco-carvao-premium",
            nome: "Carvão Premium",
            unidade: "saco",
            imagem: "🔥"
        }

    ],


    /* =========================
       ASSADOS
       ========================= */

    assados: [

        {
            id: "assado-frango",
            nome: "Frango Assado",
            unidade: "unidade",
            imagem: "🍗"
        },

        {
            id: "assado-carne",
            nome: "Carne Assada",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "assado-pernil",
            nome: "Pernil Assado",
            unidade: "kg",
            imagem: "🐖"
        },

        {
            id: "assado-costela",
            nome: "Costela Assada",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "assado-panceta",
            nome: "Panceta Assada",
            unidade: "kg",
            imagem: "🥓"
        },

        {
            id: "assado-rocambole",
            nome: "Rocambole de Carne Assado",
            unidade: "kg",
            imagem: "🥩"
        },

        {
            id: "assado-medalhao",
            nome: "Medalhão de Frango Assado",
            unidade: "kg",
            imagem: "🍗"
        }

    ]

};


/* =========================
   CARRINHO
   ========================= */

let carrinho = carregarCarrinho();


function carregarCarrinho() {

    try {

        const dados =
            localStorage.getItem(CHAVE_CARRINHO);

        if (!dados) {
            return [];
        }

        const carrinhoSalvo =
            JSON.parse(dados);

        return Array.isArray(carrinhoSalvo)
            ? carrinhoSalvo
            : [];

    } catch (erro) {

        console.error(
            "Erro ao carregar carrinho:",
            erro
        );

        return [];
    }
}


function salvarCarrinho() {

    localStorage.setItem(
        CHAVE_CARRINHO,
        JSON.stringify(carrinho)
    );
}


/* =========================
   PRODUTOS
   ========================= */

function encontrarProduto(id) {

    for (
        const categoria in PRODUTOS
    ) {

        const produto =
            PRODUTOS[categoria].find(
                item => item.id === id
            );

        if (produto) {
            return produto;
        }
    }

    return null;
}


function carregarProdutos(
    categoria,
    elementoId
) {

    const elemento =
        document.getElementById(elementoId);

    if (!elemento) {
        return;
    }

    const produtos =
        PRODUTOS[categoria];

    if (
        !produtos ||
        produtos.length === 0
    ) {

        elemento.innerHTML = `
            <div class="carrinho-vazio">
                <p>Nenhum produto disponível no momento.</p>
            </div>
        `;

        return;
    }

    elemento.innerHTML =
        produtos.map(produto => {

            return `
                <article
                    class="produto-card"
                    data-produto="${produto.id}"
                >

                    <div class="produto-imagem">
                        ${produto.imagem}
                    </div>

                    <div class="produto-info">

                        <h3>
                            ${produto.nome}
                        </h3>

                        <p>
                            Disponível por ${produto.unidade}.
                        </p>

                        <div class="controle-produto">

                            <button
                                type="button"
                                class="botao-adicionar"
                                data-produto="${produto.id}"
                            >
                                Adicionar à encomenda
                            </button>

                        </div>

                    </div>

                </article>
            `;

        }).join("");
}


/* =========================
   ASSADOS
   ========================= */

function ehFimDeSemana() {

    const hoje = new Date();

    const dia =
        hoje.getDay();

    return dia === 0 || dia === 6;
}


function carregarAssados() {

    const elemento =
        document.getElementById(
            "listaAssados"
        );

    const texto =
        document.getElementById(
            "textoAssados"
        );

    if (!elemento) {
        return;
    }

    if (!ehFimDeSemana()) {

        elemento.innerHTML = `
            <div class="carrinho-vazio">

                <div class="produto-imagem">
                    🔥
                </div>

                <h3>
                    Assados do fim de semana
                </h3>

                <p>
                    Nossos assados são preparados
                    especialmente aos fins de semana.
                </p>

                <p>
                    Volte no sábado ou domingo
                    para conferir as opções disponíveis.
                </p>

            </div>
        `;

        if (texto) {

            texto.textContent =
                "Os assados são preparados aos fins de semana. Aos domingos temos frango assado.";

        }

        return;
    }

    if (texto) {

        texto.textContent =
            "Confira os assados disponíveis neste fim de semana. Aos domingos temos frango assado.";

    }

    carregarProdutos(
        "assados",
        "listaAssados"
    );
}


/* =========================
   TODOS OS PRODUTOS
   ========================= */

function carregarTodosProdutos() {

    carregarProdutos(
        "bovina",
        "listaBovina"
    );

    carregarProdutos(
        "suina",
        "listaSuina"
    );

    carregarProdutos(
        "frango",
        "listaFrango"
    );

    carregarProdutos(
        "carneiro",
        "listaCarneiro"
    );

    carregarProdutos(
        "embutidos",
        "listaEmbutidos"
    );

    carregarProdutos(
        "churrasco",
        "listaChurrasco"
    );

    carregarAssados();
}


/* =========================
   CARRINHO
   ========================= */

function adicionarProduto(id) {

    const produto =
        encontrarProduto(id);

    if (!produto) {
        return;
    }

    const itemExistente =
        carrinho.find(
            item => item.id === id
        );

    if (itemExistente) {

        itemExistente.quantidade++;

    } else {

        carrinho.push({

            id: produto.id,

            nome: produto.nome,

            unidade: produto.unidade,

            quantidade: 1

        });
    }

    salvarCarrinho();

    atualizarCarrinho();

    atualizarContador();

    mostrarMensagem(
        `${produto.nome} foi adicionado à encomenda.`
    );
}


function removerProduto(id) {

    carrinho =
        carrinho.filter(
            item => item.id !== id
        );

    salvarCarrinho();

    atualizarCarrinho();

    atualizarContador();
}


function alterarQuantidade(
    id,
    quantidade
) {

    const item =
        carrinho.find(
            produto => produto.id === id
        );

    if (!item) {
        return;
    }

    quantidade =
        parseInt(
            quantidade,
            10
        );

    if (
        isNaN(quantidade) ||
        quantidade <= 0
    ) {

        removerProduto(id);

        return;
    }

    item.quantidade =
        quantidade;

    salvarCarrinho();

    atualizarCarrinho();

    atualizarContador();
}


function quantidadeTotal() {

    return carrinho.reduce(
        (
            total,
            item
        ) => total + item.quantidade,
        0
    );
}


function atualizarContador() {

    const contador =
        document.getElementById(
            "contadorCarrinho"
        );

    if (!contador) {
        return;
    }

    contador.textContent =
        quantidadeTotal();
}


/* =========================
   MOSTRAR CARRINHO
   ========================= */

function atualizarCarrinho() {

    const lista =
        document.getElementById(
            "listaCarrinho"
        );

    if (!lista) {
        return;
    }

    if (carrinho.length === 0) {

        lista.innerHTML = `
            <div class="carrinho-vazio">

                <h3>
                    Sua encomenda está vazia
                </h3>

                <p>
                    Escolha os produtos que deseja
                    reservar e eles aparecerão aqui.
                </p>

            </div>
        `;

        return;
    }

    lista.innerHTML =
        carrinho.map(item => {

            return `
                <div
                    class="item-carrinho"
                >

                    <div>

                        <strong>
                            ${item.nome}
                        </strong>

                        <span>
                            ${item.unidade}
                        </span>

                    </div>

                    <div
                        class="controle-produto"
                    >

                        <button
                            type="button"
                            data-remover="${item.id}"
                        >
                            Remover
                        </button>

                        <input
                            type="number"
                            min="1"
                            value="${item.quantidade}"
                            data-quantidade="${item.id}"
                            aria-label="Quantidade de ${item.nome}"
                        >

                    </div>

                </div>
            `;

        }).join("");
}


/* =========================
   ABAS
   ========================= */

function abrirAba(nomeAba) {

    const abas =
        document.querySelectorAll(
            ".aba"
        );

    abas.forEach(
        aba => {

            aba.classList.remove(
                "ativa"
            );

        }
    );

    const aba =
        document.getElementById(
            nomeAba
        );

    if (aba) {

        aba.classList.add(
            "ativa"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const botoes =
        document.querySelectorAll(
            "[data-aba]"
        );

    botoes.forEach(
        botao => {

            if (
                botao.dataset.aba ===
                nomeAba
            ) {

                botao.classList.add(
                    "ativo"
                );

            } else {

                botao.classList.remove(
                    "ativo"
                );

            }

        }
    );

    fecharMenuMobile();
}


/* =========================
   MENU MOBILE
   ========================= */

function alternarMenu() {

    const navegacao =
        document.getElementById(
            "navegacao"
        );

    if (!navegacao) {
        return;
    }

    navegacao.classList.toggle(
        "aberto"
    );
}


function fecharMenuMobile() {

    const navegacao =
        document.getElementById(
            "navegacao"
        );

    if (!navegacao) {
        return;
    }

    navegacao.classList.remove(
        "aberto"
    );
}


/* =========================
   LOCALIZAÇÃO
   ========================= */

function abrirMapa() {

    const url =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(
            ENDERECO
        );

    window.open(
        url,
        "_blank"
    );
}


/* =========================
   LIMPAR ENCOMENDA
   ========================= */

function limparEncomenda() {

    if (
        carrinho.length === 0
    ) {

        mostrarMensagem(
            "Sua encomenda já está vazia."
        );

        return;
    }

    const confirmar =
        confirm(
            "Deseja realmente limpar toda a encomenda?"
        );

    if (!confirmar) {
        return;
    }

    carrinho = [];

    salvarCarrinho();

    atualizarCarrinho();

    atualizarContador();
}


/* =========================
   HORÁRIO
   ========================= */

function converterHoraParaMinutos(
    hora
) {

    const partes =
        hora.split(":");

    const horas =
        parseInt(
            partes[0],
            10
        );

    const minutos =
        parseInt(
            partes[1],
            10
        );

    return (
        horas * 60 +
        minutos
    );
}


function obterHorarioAtual() {

    const agora =
        new Date();

    const dia =
        agora.getDay();

    const horario =
        HORARIOS[dia];

    const minutosAtuais =
        agora.getHours() * 60 +
        agora.getMinutes();

    const abertura =
        converterHoraParaMinutos(
            horario.abertura
        );

    const fechamento =
        converterHoraParaMinutos(
            horario.fechamento
        );

    const aberto =
        minutosAtuais >= abertura &&
        minutosAtuais < fechamento;

    return {

        agora,

        dia,

        horario,

        minutosAtuais,

        abertura,

        fechamento,

        aberto

    };
}


function estaAberto() {

    return obterHorarioAtual().aberto;
}


function nomeDiaSemana(
    dia
) {

    const dias = [

        "domingo",
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado"

    ];

    return dias[dia];
}


function obterProximoHorarioAbertura() {

    const dados =
        obterHorarioAtual();

    const agora =
        dados.agora;

    let diasAteAbertura = 0;

    if (
        dados.minutosAtuais <
        dados.abertura
    ) {

        diasAteAbertura = 0;

    } else {

        diasAteAbertura = 1;

        let proximoDia =
            (dados.dia + 1) % 7;

        while (
            !HORARIOS[proximoDia]
        ) {

            diasAteAbertura++;

            proximoDia =
                (proximoDia + 1) % 7;
        }
    }

    const dataAbertura =
        new Date(agora);

    dataAbertura.setDate(
        agora.getDate() +
        diasAteAbertura
    );

    const diaAbertura =
        dataAbertura.getDay();

    return {

        dia:
            diaAbertura,

        horario:
            HORARIOS[diaAbertura].abertura

    };
}


function atualizarStatusFuncionamento() {

    const elemento =
        document.getElementById(
            "statusFuncionamento"
        );

    if (!elemento) {
        return;
    }

    const dados =
        obterHorarioAtual();

    if (dados.aberto) {

        elemento.innerHTML =
            `🟢 <strong>ABERTO AGORA</strong> • Fecha às ${dados.horario.fechamento}`;

        elemento.style.color =
            "#15803d";

        elemento.style.fontWeight =
            "700";

        return;
    }

    const proximo =
        obterProximoHorarioAbertura();

    const diaAtual =
        dados.dia;

    if (
        dados.minutosAtuais <
        dados.abertura
    ) {

        elemento.innerHTML =
            `🔴 <strong>FECHADO AGORA</strong> • Abre hoje às ${dados.horario.abertura}`;

    } else {

        elemento.innerHTML =
            `🔴 <strong>FECHADO AGORA</strong> • Abre ${nomeDiaSemana(proximo.dia)} às ${proximo.horario}`;

    }

    elemento.style.color =
        "#b91c1c";

    elemento.style.fontWeight =
        "700";
}


/* =========================
   WHATSAPP
   ========================= */

function enviarWhatsApp() {

    if (
        carrinho.length === 0
    ) {

        alert(
            "Sua encomenda está vazia. Adicione algum produto antes de enviar."
        );

        return;
    }

    const nome =
        document.getElementById(
            "nomeCliente"
        )?.value.trim();

    const telefone =
        document.getElementById(
            "telefoneCliente"
        )?.value.trim();

    const observacao =
        document.getElementById(
            "observacaoPedido"
        )?.value.trim();


    if (!nome) {

        alert(
            "Digite seu nome para continuar."
        );

        document.getElementById(
            "nomeCliente"
        )?.focus();

        return;
    }


    if (!telefone) {

        alert(
            "Digite seu telefone para continuar."
        );

        document.getElementById(
            "telefoneCliente"
        )?.focus();

        return;
    }


    let mensagem = "";

    mensagem +=
        "🥩 *NOVA ENCOMENDA - AÇOUGUE*";

    mensagem += "\n\n";

    mensagem +=
        "👤 *Cliente:* " +
        nome;

    mensagem += "\n";

    mensagem +=
        "📱 *Telefone:* " +
        telefone;

    mensagem += "\n\n";

    mensagem +=
        "🛒 *PRODUTOS:*";

    mensagem += "\n";


    carrinho.forEach(
        (
            item,
            indice
        ) => {

            mensagem +=
                `${indice + 1}. ${item.nome} — ${item.quantidade} ${item.unidade}`;

            mensagem += "\n";

        }
    );


    mensagem += "\n";

    mensagem +=
        "📍 *RETIRADA NO LOCAL*";

    mensagem += "\n";

    mensagem +=
        ENDERECO;

    mensagem += "\n\n";

    mensagem +=
        "💳 *Pagamento:* na retirada";

    mensagem += "\n";

    mensagem +=
        "💰 O pagamento será realizado no local.";

    if (observacao) {

        mensagem += "\n\n";

        mensagem +=
            "📝 *Observação:*";

        mensagem += "\n";

        mensagem +=
            observacao;
    }


    mensagem += "\n\n";

    mensagem +=
        "Obrigado por fazer sua encomenda!";

    const url =
        "https://wa.me/" +
        WHATSAPP +
        "?text=" +
        encodeURIComponent(
            mensagem
        );

    window.open(
        url,
        "_blank"
    );
}


/* =========================
   MENSAGEM TEMPORÁRIA
   ========================= */

function mostrarMensagem(
    texto
) {

    const antiga =
        document.getElementById(
            "mensagemSistema"
        );

    if (antiga) {
        antiga.remove();
    }

    const mensagem =
        document.createElement(
            "div"
        );

    mensagem.id =
        "mensagemSistema";

    mensagem.textContent =
        texto;

    mensagem.style.position =
        "fixed";

    mensagem.style.bottom =
        "20px";

    mensagem.style.left =
        "50%";

    mensagem.style.transform =
        "translateX(-50%)";

    mensagem.style.zIndex =
        "9999";

    mensagem.style.background =
        "#111";

    mensagem.style.color =
        "#fff";

    mensagem.style.padding =
        "14px 20px";

    mensagem.style.borderRadius =
        "10px";

    mensagem.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.3)";

    mensagem.style.fontWeight =
        "600";

    mensagem.style.maxWidth =
        "90%";

    mensagem.style.textAlign =
        "center";

    document.body.appendChild(
        mensagem
    );

    setTimeout(
        () => {

            mensagem.remove();

        },
        2500
    );
}


/* =========================
   EVENTOS
   ========================= */

document.addEventListener(
    "click",
    function (evento) {

        const botaoAba =
            evento.target.closest(
                "[data-aba]"
            );

        if (botaoAba) {

            const aba =
                botaoAba.dataset.aba;

            if (aba) {

                abrirAba(aba);

                return;
            }
        }


        const botaoAdicionar =
            evento.target.closest(
                "[data-produto]"
            );

        if (
            botaoAdicionar &&
            botaoAdicionar.classList.contains(
                "botao-adicionar"
            )
        ) {

            adicionarProduto(
                botaoAdicionar.dataset.produto
            );

            return;
        }


        const botaoRemover =
            evento.target.closest(
                "[data-remover]"
            );

        if (botaoRemover) {

            removerProduto(
                botaoRemover.dataset.remover
            );

            return;
        }

    }
);


/* =========================
   ALTERAÇÃO DE QUANTIDADE
   ========================= */

document.addEventListener(
    "change",
    function (evento) {

        const campo =
            evento.target.closest(
                "[data-quantidade]"
            );

        if (!campo) {
            return;
        }

        alterarQuantidade(
            campo.dataset.quantidade,
            campo.value
        );

    }
);


/* =========================
   BOTÃO DO MENU
   ========================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const btnMenu =
            document.getElementById(
                "btnMenu"
            );

        if (btnMenu) {

            btnMenu.addEventListener(
                "click",
                alternarMenu
            );
        }


        const btnLocalizacao =
            document.getElementById(
                "btnLocalizacao"
            );

        if (btnLocalizacao) {

            btnLocalizacao.addEventListener(
                "click",
                abrirMapa
            );
        }


        const btnMapa =
            document.getElementById(
                "btnMapa"
            );

        if (btnMapa) {

            btnMapa.addEventListener(
                "click",
                abrirMapa
            );
        }


        const btnEnviarPedido =
            document.getElementById(
                "btnEnviarPedido"
            );

        if (btnEnviarPedido) {

            btnEnviarPedido.addEventListener(
                "click",
                enviarWhatsApp
            );
        }


        const btnLimparCarrinho =
            document.getElementById(
                "btnLimparCarrinho"
            );

        if (btnLimparCarrinho) {

            btnLimparCarrinho.addEventListener(
                "click",
                limparEncomenda
            );
        }


        carregarTodosProdutos();

        atualizarCarrinho();

        atualizarContador();

        atualizarStatusFuncionamento();


        /*
         * Atualiza o horário automaticamente
         * a cada 1 minuto.
         */

        setInterval(
            function () {

                atualizarStatusFuncionamento();

                /*
                 * Quando virar o dia,
                 * atualiza também os assados.
                 */

                carregarAssados();

            },
            60000
        );

    }
);
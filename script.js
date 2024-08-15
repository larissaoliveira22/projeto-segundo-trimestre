const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual das seguintes fontes de energia é considerada renovável?",
        alternativas: [
            {
                texto: "Carvão",
                afirmacao: ""
            },
            {
                texto: "Energia eólica",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual das seguintes práticas contribui para a preservação da biodiversidade?",
        alternativas: [
            {
                texto: "Desmatamento.",
                afirmacao: ""
            },
            {
                texto: "Criação de áreas protegidas.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual das seguintes opções representa uma forma de conservação de recursos hídricos?",
        alternativas: [
            {
                texto: "Desperdício de água.",
                afirmacao: ""
            },
            {
                texto: "Reuso de água.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual tipo de poluição é mais comum nos oceanos?",
        alternativas: [
            {
                texto: "Plásticos.",
                afirmacao: ""
            },
            {
                texto: "Metais pesados.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: " Qual recurso natural é usado na produção de plástico? ",
        alternativas: [
            {
                texto: "Petróleo.",
                afirmacao: ""
            },
            {
                texto: "Gás natural.",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Muito Obrigado pela atenção!...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

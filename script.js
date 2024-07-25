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
                afirmacao: "afirmação"
            },
            {
                texto: "Energia eólica",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual das seguintes práticas contribui para a preservação da biodiversidade?",
        alternativas: [
            {
                texto: "Desmatamento.",
                afirmacao: "afirmação"
            },
            {
                texto: "Criação de áreas protegidas.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual das seguintes opções representa uma forma de conservação de recursos hídricos?",
        alternativas: [
            {
                texto: "Desperdício de água.",
                afirmacao: "afirmação"
            },
            {
                texto: "Reuso de água.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual tipo de poluição é mais comum nos oceanos?",
        alternativas: [
            {
                texto: "Plásticos.",
                afirmacao: "afirmação"
            },
            {
                texto: "Metais pesados.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: " Qual recurso natural é usado na produção de plástico? ",
        alternativas: [
            {
                texto: "Petróleo.",
                afirmacao: "afirmação"
            },
            {
                texto: "Gás natural.",
                afirmacao: "afirmação"
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

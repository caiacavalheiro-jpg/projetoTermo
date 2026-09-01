const clpalavras = [
  "JOGAR",
  "SENHA",
  "NAVIO",
  "VERDE",
  "FESTA",
  "TERRA",
  "MUNDO",
  "FOLHA",
  "CASAS",
  "LIVRO",
  "CARRO",
  "PORTA",
  "MOUSE",
  "TECLA",
  "JOGOS",
  "FICHA",
  "GRUPO",
  "SABOR",
  "NOITE",
  "CINCO",
  "ABRIR",
  "ACABO",
  "ACHAR",
  "ACIMA",
  "ACORD",
  "ADIAR",
  "AGORA",
  "AGUDO",
  "AINDA",
  "AJUDA",
  "ALADO",
  "ALBUM",
  "ALGUM",
  "ALIAS",
  "ALMAO",
  "ALUNO",
  "AMADO",
  "AMIGA",
  "AMIGO",
  "ANDAR",
  "ANEXO",
  "ANIMO",
  "ANTES",
  "APOIO",
  "APONT",
  "AREIA",
  "ARMAR",
  "AROMA",
  "ARROZ",
  "ASSIM",
  "ATEAR",
  "ATIVO",
  "ATUAL",
  "AUTOS",
  "AVIAO",
  "AVISO",
  "AZUIS",
  "BAIXA",
  "BAIXO",
  "BANCO",
  "BANDA",
  "BANHO",
  "BARCO",
  "BARRO",
  "BASTA",
  "BEBER",
  "BEIJO",
  "BELOS",
  "BERRO",
  "BICHO",
  "BLUSA",
  "BOCAO",
  "BOLAS",
  "BOMBA",
  "BORDA",
  "BRASA",
  "BRAVO",
  "BRAVA",
  "BREVE",
  "BRIGA",
  "BRINCO",
  "BUSCA",
  "CAIXA",
  "CALMA",
  "CALMO",
  "CALOR",
  "CANAL",
  "CANTO",
  "CAPAZ",
  "CARNE",
  "CARTA",
  "CASAL",
  "CASAR",
  "CAUSA",
  "CEDER",
  "CESTA",
  "CHAVE",
  "CHEFE",
  "CHEIO",
  "CHORO",
  "CHUVA",
  "CINCO",
  "CIRCO",
  "CLARO",
  "CLARA",
  "CLIMA",
  "COBRA",
  "COISA",
  "COLAR",
  "COMER",
  "COMUM",
  "CONTA",
  "CORDA",
  "CORPO",
  "CORRE",
  "COSTA",
  "COZER",
  "CRIME",
  "CRISE",
  "CRUZAR",
  "CURSO",
  "CURVA",
  "DADOS",
  "DANCA",
  "DARDO",
  "DEIRA",
  "DEIXA",
  "DEIXAR",
  "DENTE",
  "DESDE",
  "DESTA",
  "DESTE",
  "DEUSA",
  "DEVEM",
  "DIZER",
  "DOBRA",
  "DOBRO",
  "DOCES",
  "DOLAR",
  "DORME",
  "DORMIR",
  "DOUTO",
  "DRAMA",
  "DROGA",
  "DUVIDA",
  "EBANO",
  "EDICAO",
  "EFEITO",
  "ELEITO",
  "ELITE",
  "ENERGIA",
  "ENFIM",
  "ENTAO",
  "ENTRE",
  "ENVIO",
  "ERROS",
  "ESCADA",
  "ESCOL",
  "ESPERA",
  "ESSAS",
  "ESSES",
  "ESTAR",
  "ESTEVE",
  "ETAPA",
  "EXATO",
  "EXISTE",
  "FALAR",
  "FALHA",
  "FALTA",
  "FARDO",
  "FAROL",
  "FATAL",
  "FAZER",
  "FEIRA",
  "FEITO",
  "FELIZ",
  "FERRO",
  "FICAR",
  "FIMOS",
  "FINAL",
  "FIRME",
  "FLORA",
  "FLUIR",
  "FOCAR",
  "FOGOS",
  "FORCA",
  "FORMA",
  "FORTE",
  "FRASE",
  "FRACO",
  "FRACA",
  "FREIO",
  "FRETE",
  "FRUTA",
  "FUNDO",
  "FURAR",
  "GALHO",
  "GALER",
  "GARRA",
  "GASTO",
  "GELOU",
  "GENTE",
  "GERAL",
  "GIRAR",
  "GOLEIRO",
  "GOSTO",
  "GRACA",
  "GRANA",
  "GRAVE",
  "GRITO",
  "IDEAL",
  "IDEIA",
  "IDOSO",
  "IGUAL",
  "ILHA",
  "IMAGEM",
  "IMPAR",
  "INICIO",
  "INTEIRO",
  "IRMAO",
  "IRMA",
  "JANELA",
  "JOGAR",
  "JOVEM",
  "JUNTO",
  "LARGO",
  "LARAN",
  "LAVAR",
  "LEITE",
  "LETRA",
  "LEVES",
  "LEVAR",
  "LIMAO",
  "LIMPO",
  "LINDA",
  "LINDO",
  "LIVRE",
  "LOCAL",
  "LOUCA",
  "LOUCO",
  "LUCRO",
  "LUGAR",
  "LUTAR",
  "MACA",
  "MACIO",
  "MAIOR",
  "MANHA",
  "MARCA",
  "MARCO",
  "MARIDO",
  "MASSA",
  "MATAR",
  "MEDIR",
  "MEDO",
  "MEIGA",
  "MEIGO",
  "MELAO",
  "MELHOR",
  "MENOR",
  "MESMA",
  "MESMO",
  "METAL",
  "METRO",
  "MESES",
  "MINHA",
  "MINHO",
  "MINTO",
  "MODA",
  "MODER",
  "MOLHO",
  "MORAL",
  "MORAR",
  "MORRE",
  "MOTIVO",
  "MOVEL",
  "MUDAR",
  "MUITA",
  "MUITO",
  "NADAR",
  "NATAL",
  "NATAS",
  "NEGRA",
  "NEGRO",
  "NENHUM",
  "NETO",
  "NIVEL",
  "NOBRE",
  "NOVAS",
  "NOVOS",
  "NUNCA",
  "OBRAS",
  "ODIAR",
  "OLHAR",
  "ONTEM",
  "OPERA",
  "ORDEM",
  "OUVIR",
  "PADRAO",
  "PADRE",
  "PAGAR",
  "PAIXAO",
  "PALCO",
  "PARAR",
  "PARTE",
  "PASSO",
  "PASTA",
  "PATOS",
  "PAULO",
  "PEDIR",
  "PEDRA",
  "PEGAR",
  "PEIXE",
  "PELOS",
  "PENSO",
  "PERDA",
  "PERTO",
  "PERNA",
  "PESTE",
  "PIANO",
  "PILHA",
  "PINTA",
  "PINTAR",
  "PLACA",
  "PLANO",
  "POBRE",
  "PODER",
  "POLVO",
  "PONTA",
  "PORCA",
  "PORCO",
  "POSSE",
  "POSTO",
  "PRATO",
  "PRECO",
  "PRETA",
  "PRETO",
  "PRIMO",
  "PRIMA",
  "PROVA",
  "PUXAR",
  "QUASE",
  "QUEDA",
  "QUERO",
  "QUIETO",
  "RAIVA",
  "RAMOS",
  "RAPAZ",
  "RASGO",
  "RAZAO",
  "REAGE",
  "REINO",
  "RESTA",
  "RIRIA",
  "RISCO",
  "RITMO",
  "ROCHA",
  "RODAR",
  "ROSTO",
  "ROUPA",
  "RUA",
  "RUINA",
  "SABER",
  "SABIA",
  "SACAR",
  "SALAO",
  "SALTO",
  "SANTO",
  "SANTA",
  "SAPOS",
  "SECAR",
  "SEGUE",
  "SEGUIR",
  "SEIVA",
  "SELO",
  "SENAO",
  "SENSO",
  "SERIO",
  "SERIA",
  "SERVO",
  "SIGA",
  "SINAL",
  "SOBRA",
  "SOBRE",
  "SOCIO",
  "SOMAR",
  "SONHO",
  "SORTE",
  "SORRI",
  "SUBIR",
  "SUAVE",
  "SURTO",
  "TABELA",
  "TALVEZ",
  "TARDE",
  "TEIMA",
  "TELHA",
  "TEMPO",
  "TENHO",
  "TERMO",
  "TERNO",
  "TESTE",
  "TIROS",
"TOCAR",
  "TODO",
  "TONEL",
  "TORNA",
  "TORNO",
  "TRAMA",
  "TRATO",
  "TROCA",
  "TURMA",
  "UNIAO",
  "UNICO",
  "UNICA",
  "URUBU",
  "USADO",
  "USINA",
  "VALER",
  "VALOR",
  "VELHA",
  "VELHO",
  "VENDA",
  "VERAO",
  "VERBO",
  "VERDE",
  "VERDA",
  "VERME",
  "VESTE",
  "VIDA",
  "VIDRO",
  "VIGOR",
  "VINHO",
  "VIRAR",
  "VISTA",
  "VISTO",
  "VITAL",
  "VIVER",
  "VIVOS",
  "VOCE",
  "VOCES",
  "VONTA",
  "VOTOS",
  "ZEBRA",
  "ZELAR",
  "ZERAR",
  "ZUMBI"
];


let clsenhaCorreta;
let cltentativaAtual = 0;


const clmaxTentativas = 6;


const cltabuleiro = document.querySelector(".tabuleiro");
const clinputSenha = document.querySelector(".inputSenha");
const clbtnEnviar = document.querySelector(".btnEnviar");
const clbtnRetornar = document.querySelector(".retornar");
const clcontador = document.querySelector(".contador");
const clbtnsFechar = document.querySelectorAll(".fecharFinal");


const cltelaVitoria = document.querySelector(".telaVitoria");
const cltelaDerrota = document.querySelector(".telaDerrota");


const clpalavraVitoria = document.querySelector(".palavraVitoria");
const clpalavraDerrota = document.querySelector(".palavraDerrota");


function sortearPalavra() {
  const clindice = Math.floor(Math.random() * clpalavras.length);
  clsenhaCorreta = clpalavras[clindice];
}


function criarTabuleiro() {
  cltabuleiro.innerHTML = "";


  for (let cllinha = 0; cllinha < clmaxTentativas; cllinha++) {
    const clnovaLinha = document.createElement("div");
    clnovaLinha.classList.add("linha", "colocarPalavra");


    for (let clcoluna = 0; clcoluna < 5; clcoluna++) {
      const clcasa = document.createElement("div");
      clcasa.classList.add("digito");


      clnovaLinha.appendChild(clcasa);
    }


    cltabuleiro.appendChild(clnovaLinha);
  }
}


function atualizarContador() {
  clcontador.innerHTML = `<span class="contadorCor">${cltentativaAtual}</span>/${clmaxTentativas}`;
}


function verificar() {
  if (cltentativaAtual >= clmaxTentativas) {
    return;
  }


  const clpalavraDigitada = clinputSenha.value.toUpperCase().trim();


  if (clpalavraDigitada.length !== 5) {
    alert("Digite uma palavra com 5 letras!");
    return;
  }


  const cllinhaAtual = cltabuleiro.children[cltentativaAtual];
  const clletrasRestantes = clsenhaCorreta.split("");


  for (let cli = 0; cli < 5; cli++) {
    const clcasa = cllinhaAtual.children[cli];


    clcasa.textContent = clpalavraDigitada[cli];


    if (clpalavraDigitada[cli] === clsenhaCorreta[cli]) {
      clcasa.classList.add("certo");


      const clindiceLetra = clletrasRestantes.indexOf(clpalavraDigitada[cli]);


      if (clindiceLetra !== -1) {
        clletrasRestantes.splice(clindiceLetra, 1);
      }
    }
  }


  for (let cli = 0; cli < 5; cli++) {
    const clcasa = cllinhaAtual.children[cli];


    if (clcasa.classList.contains("certo")) {
      continue;
    }


    const clindiceLetra = clletrasRestantes.indexOf(clpalavraDigitada[cli]);


    if (clindiceLetra !== -1) {
      clcasa.classList.add("quase");


      clletrasRestantes.splice(clindiceLetra, 1);
    } else {
      clcasa.classList.add("erro");
    }
  }


  cltentativaAtual++;
  atualizarContador();


  if (clpalavraDigitada === clsenhaCorreta) {
    mostrarVitoria();
    return;
  }


  if (cltentativaAtual === clmaxTentativas) {
    mostrarDerrota();
    return;
  }


  clinputSenha.value = "";
  clinputSenha.focus();
}


function mostrarVitoria() {
  clpalavraVitoria.textContent = "Você acertou a palavra: " + clsenhaCorreta;


  cltelaVitoria.classList.add("ativa");
}


function mostrarDerrota() {
  clpalavraDerrota.textContent = "A palavra era: " + clsenhaCorreta;


  cltelaDerrota.classList.add("ativa");
}


function voltarInicio() {
  window.location.href = "index.html";
}


function resetarJogo() {
  cltentativaAtual = 0;


  sortearPalavra();
  criarTabuleiro();
  atualizarContador();


  clinputSenha.value = "";
  clinputSenha.focus();


  cltelaVitoria.classList.remove("ativa");
  cltelaDerrota.classList.remove("ativa");
}


clbtnEnviar.addEventListener("click", verificar);


clbtnRetornar.addEventListener("click", resetarJogo);


clbtnsFechar.forEach(function (clbotao) {
  clbotao.addEventListener("click", voltarInicio);
});


clinputSenha.addEventListener("keydown", function (clevent) {
  if (clevent.key === "Enter") {
    verificar();
  }
});


sortearPalavra();
criarTabuleiro();
atualizarContador();
clinputSenha.focus();
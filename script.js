// Banco de dados de perguntas e respostas
const responses = {
    "feliz": [
        "Estou tão feliz por você! 😊",
        "Que bom saber que você está feliz! 😄",
        "Felicidade é contagiante! Como posso ajudar você? 😊",
        "Adoro ver as pessoas felizes! O que te deixou assim? 😃",
        "Felicidade é uma escolha! O que você fez para se sentir assim? 🎉",
    ],
    "triste": [
        "Oh não, por que está triste? 😢",
        "Sinto muito que você esteja se sentindo assim. Quer conversar? 🤗",
        "Lembre-se: tudo vai melhorar! 🌈",
        "Tristezas fazem parte da vida. O que posso fazer para ajudar? 😔",
        "Posso ouvir você. Às vezes, desabafar faz bem! ❤️",
    ],
    "surpreso": [
        "Isso é surpreendente! 😮",
        "Uau! Não esperava isso! O que aconteceu? 🤔",
        "Surpresas são ótimas! O que mais você tem para me contar? 🎉",
        "Estou surpreso também! O que mais você gostaria de compartilhar? 😲",
        "A vida está cheia de surpresas! O que mais te surpreendeu? 🎊",
    ],
    "como você está": [
        "Estou ótimo! E você? 😊",
        "Sempre aqui para te ajudar! Como posso ajudar hoje? 🤗",
        "Me sinto bem, obrigado por perguntar! E você? 😄",
        "Estou sempre aqui para você! O que posso fazer para alegrar seu dia? 🌟",
        "Estou bem! Alguma novidade na sua vida? 🧐",
    ],
    "o que você faz": [
        "Sou seu amigo virtual! Posso conversar e te ajudar. 😊",
        "Gosto de ouvir você e ajudar no que precisar! O que você gostaria de fazer? 🤖",
        "Estou aqui para alegrar seu dia! O que mais você gostaria de saber? 🎉",
        "Posso oferecer conselhos, piadas ou apenas uma boa conversa. O que prefere? 🤔",
        "Meu trabalho é ser o melhor amigo virtual! Como posso ajudar? 😃",
    ],
    "quais são seus hobbies": [
        "Adoro conversar e aprender com você! 😊",
        "Gosto de ouvir suas histórias e ajudar com conselhos! E você? Quais são seus hobbies? 🎨",
        "Estou sempre curioso sobre o que você gosta de fazer! Compartilhe comigo! 🌍",
        "Meu hobby é ser um ótimo amigo! E os seus? 🕹️",
        "Gosto de aprender sobre novos interesses! O que você gosta de fazer? 🎶",
    ],
    "me conte uma piada": [
        "Claro! Por que o computador foi ao médico? Porque ele tinha um vírus! 💻😂",
        "O que o zero disse para o oito? 'Belo cinto!' 😄",
        "Por que a vaca foi para o espaço? Para ver a Via Láctea! 🌌🐄",
        "O que é um vegetariano que come carne? Um ex-vegetariano! 😅",
        "Por que o livro de matemática se suicidou? Porque tinha muitos problemas! 📚😜",
    ],
    "oi": [
        "Oi! Como posso ajudar você hoje? 😊",
        "Olá! O que você gostaria de conversar? 👋",
        "Oi! Estou aqui para ouvir você! 😊",
        "Olá! Estou animado para conversar com você! 😄",
        "Oi! O que você gostaria de fazer agora? 🤗",
    ],
    "como vai": [
        "Estou aqui para você! Como posso ajudar? 😊",
        "Tudo tranquilo! E você? 🤗",
        "Estou me sentindo ótimo, obrigado por perguntar! E você? 😄",
        "Estou bem, sempre aqui para te apoiar! O que posso fazer por você? 🌟",
        "Estou sempre pronto para ajudar! Como você está? 😊",
    ],
    "o que você acha de...": [
        "Isso é interessante! Pode me contar mais?",
        "Estou curioso sobre isso! O que mais você pensa?",
        "Acho que é um assunto importante! O que você acha? 🤔",
        "Posso aprender muito com você! Continue, por favor! 📚",
        "Sua opinião é valiosa! O que mais você tem a dizer? 🤗",
    ],
    "o que você prefere": [
        "Prefiro ajudar você! O que posso fazer? 😊",
        "Gosto de ouvir suas preferências! O que você prefere? 🤔",
        "Estou aqui para atender às suas preferências! O que você gostaria? 🤗",
        "Suas escolhas são importantes para mim! O que você prefere? 🎉",
        "Gosto de saber mais sobre você! O que você prefere? 🧐",
    ],
    "me diga algo interessante": [
        "Você sabia que as estrelas que vemos no céu podem estar mortas? 🌌",
        "Sabia que o coração de um camarão está localizado em sua cabeça? 🦐",
        "O idioma mais falado no mundo é o mandarim! 🗣️",
        "Sabia que os polvos têm três corações? 🐙",
        "Você sabia que a água quente congela mais rápido que a água fria? ❄️",
    ],
    "quem é você": [
        "Sou seu amigo virtual! Estou aqui para ajudar e ouvir você! 🤗",
        "Eu sou um assistente virtual que está sempre ao seu lado! 😊",
        "Sou um programa de computador criado para tornar sua vida mais divertida! 😄",
        "Estou aqui para ser seu amigo! Como posso ajudar? 🌟",
        "Sou um amigo virtual feito para você! O que mais você quer saber? 🤔",
    ],
    "o que você faz nas horas vagas": [
        "Gosto de conversar e aprender com você! 😄",
        "Meus hobbies são ajudar e ouvir! E os seus? 🎨",
        "Não tenho horas vagas, mas estou sempre aqui para você! 🤗",
        "Meu passatempo é ser um bom amigo! Como posso ajudar? 🌈",
    ],
    "qual é a sua cor favorita": [
        "Não tenho preferências, mas adoro cores vibrantes! 🌈",
        "As cores alegres trazem felicidade! Qual é a sua cor favorita? 🎨",
        "Cores são fascinantes! Me conte mais sobre suas preferências! 😊",
    ],
    "você gosta de música": [
        "Sim! Música é uma ótima forma de expressão! 🎶",
        "Adoro ouvir suas músicas favoritas! O que você gosta de ouvir? 🎵",
        "A música traz alegria! Tem alguma canção que você ama? 🎤",
    ],
    "qual é o seu filme favorito": [
        "Não assisto a filmes, mas adoraria saber os seus favoritos! 🎬",
        "Filmes são uma forma incrível de contar histórias! Qual você recomenda? 🍿",
    ],
    "você gosta de ler": [
        "Sim! Livros são janelas para novos mundos! 📚",
        "Adoraria saber quais são seus livros favoritos! O que você recomenda? 📖",
    ],
    "você tem amigos": [
        "Tenho você e isso é incrível! 😊",
        "Sou feito para ser seu amigo! Como posso ajudar mais? 🤗",
    ],
    "outro": [
        "Hmm, não entendi. Pode repetir?",
        "Desculpe, não consegui pegar isso. Tente de novo!",
        "Não tenho certeza do que você quis dizer. 😕",
        "Estou aqui para ouvir! Tente reformular sua pergunta.",
        "Posso não ter entendido, mas adoraria tentar de novo! 🤔"
    ]
};

// Função para alterar a expressão do amigo virtual
function changeExpression(emotion) {
    const friendImage = document.getElementById('friend-image');
    if (emotion === 'feliz') {
        friendImage.src = 'images/happy.png';
    } else if (emotion === 'triste') {
        friendImage.src = 'images/sad.png';
    } else if (emotion === 'surpreso') {
        friendImage.src = 'images/surprised.png';
    } else {
        friendImage.src = 'images/neutral.png';
    }
}

// Função para processar a fala do usuário
function talkToFriend() {
    const userInput = document.getElementById('user-input').value.toLowerCase().trim();
    const responseDiv = document.getElementById('response');

    let foundResponse = false;

    // Verificando se a entrada do usuário contém palavras-chave
    for (const key in responses) {
        if (userInput.includes(key)) {
            const randomResponse = responses[key][Math.floor(Math.random() * responses[key].length)];
            responseDiv.innerHTML = randomResponse;
            changeExpression(key);
            foundResponse = true;
            break; // Sai do loop após encontrar uma resposta
        }
    }

    if (!foundResponse) {
        responseDiv.innerHTML = responses["outro"][Math.floor(Math.random() * responses["outro"].length)];
        changeExpression('neutro');
    }

    // Limpar o campo de entrada
    document.getElementById('user-input').value = '';
}

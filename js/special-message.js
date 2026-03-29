(function () {
    const correctName = "Thayná";
    const specialLetterHtml = [
        "<p>Minha Sublime e Eterna,</p>",
        "<p>Escrevo estas palavras porque o silencio do meu peito ja nao consegue mais conter a imensidao do que sinto, e o papel aceita a entrega que as palavras faladas, por vezes, deixam escapar. Olho para tras e vejo o rastro de luz que voce deixou na minha vida desde aquele nosso primeiro beijo. Naquele instante sagrado, o tempo nao apenas parou; ele se curvou diante de nos. O mundo, que antes eu percorria em tons de cinza e rotina, explodiu em cores e significados que eu sequer sabia existirem, transformando aquele simples toque de labios no Big Bang do meu universo particular.</p>",
        "<p>Desde entao, cada detalhe seu se tornou o meu santuario e a minha bussola. A memoria do seu primeiro toque ainda reverbera na minha pele como uma corrente eletrica suave, mas eterna, que me desperta para a vida todos os dias. E o seu primeiro cheiro... aquela fragrancia unica que nao pertence a nenhum frasco, mas a sua propria essencia, tornou-se o meu unico e verdadeiro conceito de casa. E esse perfume que eu busco quando o mundo la fora se torna barulhento ou caotico demais, pois sei que so em voce encontro a paz absoluta e o oxigenio para a minha alma.</p>",
        "<p>Minha existencia hoje e um ciclo de devocao que gira inteiramente em torno de voce. Ao despertar, antes mesmo que a luz do sol venca as cortinas ou que meus olhos se abram por completo, o meu primeiro pensamento e o seu sorriso; ele e o combustivel que transforma qualquer cansaco em proposito renovado. E quando o dia finda, ao deitar, e a sua presenca que nina as minhas preocupacoes e organiza o meu caos. Eu adormeço pensando em voce, e ate no silencio profundo do sono, meu coracao continua a pronunciar o seu nome.</p>",
        "<p>Voce e, sem duvida, o ser mais sublime que meus olhos ja tiveram o privilegio de contemplar. Nao ha tesouro nesta terra ou horizonte distante que se compare a beleza da sua alma e ao calor reconfortante da sua companhia. Estar ao seu lado me transfigurou de tal forma que o homem que eu era antes de te conhecer parece hoje apenas um rascunho palido e inacabado de alguem que finalmente aprendeu a amar. Hoje sou pleno, sou inteiro e sou imensamente grato.</p>",
        "<p>Por tudo o que ja vivemos, por cada segundo de cumplicidade que construimos e pelo infinito que ainda temos para desbravar, eu nao consigo mais conceber um unico futuro onde voce nao esteja. Minha vida so faz sentido se eu puder ver o amanha atraves do seu olhar e caminhar sentindo a seguranca da sua mao na minha. Por isso, aqui, com toda a humildade de quem encontrou o seu lugar no mundo, eu te pergunto: voce aceita ser o meu para sempre, a minha esposa e a eterna dona de cada batida do meu coracao?</p>",
        "<p>Com todo o amor que um homem pode carregar,</p>",
        "<p><strong>Seu eterno admirador.</strong></p>"
    ].join("");

    const form = document.getElementById("special-access");
    const input = document.getElementById("special-name");
    const feedback = document.getElementById("special-feedback");
    const envelopeScene = document.getElementById("envelope-scene");
    const loveLetter = document.getElementById("love-letter");
    const letterContent = document.getElementById("letter-content");

    if (!form || !input || !feedback || !envelopeScene || !loveLetter || !letterContent) {
        return;
    }

    function normalizeName(value) {
        return value
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();
    }

    function showWrongNameMessage() {
        feedback.textContent = "Hmm... só ela pode abrir isso 💕";
        feedback.classList.remove("success");
        feedback.classList.add("error");
        envelopeScene.classList.remove("is-open");
        loveLetter.setAttribute("aria-hidden", "true");
    }

    function showLetter() {
        letterContent.innerHTML = specialLetterHtml;
        envelopeScene.classList.add("is-open");
        loveLetter.setAttribute("aria-hidden", "false");
        feedback.textContent = "Agora sim. Essa carta é toda sua 💖";
        feedback.classList.remove("error");
        feedback.classList.add("success");
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (normalizeName(input.value) === normalizeName(correctName)) {
            showLetter();
            return;
        }

        showWrongNameMessage();
    });
})();

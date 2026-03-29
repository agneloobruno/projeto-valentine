(function () {
    const correctName = "Thayná";

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

    function escapeHtml(text) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function buildLetterFromCurrentSection() {
        const cards = document.querySelectorAll("#O-que-eu-amo-em-voce .love-card");

        if (!cards.length) {
            return "<p>Você é o meu melhor capítulo todos os dias.</p>";
        }

        return Array.from(cards)
            .map((card) => {
                const title = card.querySelector("h3")?.textContent?.trim() || "";
                const description = card.querySelector("p")?.textContent?.trim() || "";

                if (!title && !description) {
                    return "";
                }

                return "<p><strong>" + escapeHtml(title) + ":</strong> " + escapeHtml(description) + "</p>";
            })
            .join("");
    }

    function showWrongNameMessage() {
        feedback.textContent = "Hmm... só ela pode abrir isso 💕";
        feedback.classList.remove("success");
        feedback.classList.add("error");
        envelopeScene.classList.remove("is-open");
        loveLetter.setAttribute("aria-hidden", "true");
    }

    function showLetter() {
        letterContent.innerHTML = buildLetterFromCurrentSection();
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

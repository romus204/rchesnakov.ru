// === Кэширование элементов ===
const {
    output,
    'cmd-input': input,
    'close-btn': closeBtn,
    'resume-modal': resumeModal,
    'close-resume': closeResumeBtn,
    'lang-en': langEnBtn,
    'lang-ru': langRuBtn,
    'help-trigger': helpTrigger,
    'help-modal': helpModal,
    'help-close': helpClose,
    'help-title': helpTitle,
    'help-text': helpText,
    'help-close-btn': helpCloseBtn,
    'close-resume-header': closeResumeHeader,
    'close-sound': closeSound,
    'resume-body': resumeBody,
    'resume-title': resumeTitle
} = Object.fromEntries(
    Array.from(document.querySelectorAll('[id]')).map(el => [el.id, el])
);

let currentLang = 'ru';

// === Команды ===
const COMMANDS = ['help', 'watch_all', 'about', 'skills', 'contact', 'close'];

// === Печать текста с автопрокруткой ===
function typeText(text, callback) {
    const lines = text.split('\n');
    let lineIndex = 0;
    const terminal = document.querySelector('.terminal');

    function typeLine() {
        if (lineIndex >= lines.length) {
            callback?.();
            return;
        }

        const p = document.createElement('p');
        output.appendChild(p);

        let charIndex = 0;
        const typeChar = () => {
            if (charIndex < lines[lineIndex].length) {
                p.textContent += lines[lineIndex][charIndex];
                charIndex++;

                requestAnimationFrame(() => {
                    terminal.scrollTop = terminal.scrollHeight;
                });

                setTimeout(typeChar, 5);
            } else {
                lineIndex++;
                setTimeout(typeLine, 50);
            }
        };

        typeChar();
    }

    typeLine();
}

// === Обработка команды ===
function handleCommand(cmd) {
    const command = cmd.trim().toLowerCase();
    if (command == 'close') {
        toggleResumeModal(true)
        input.value = '';
        input.focus();

        return
    }
    const response = texts[currentLang][command] || texts[currentLang].command_not_found;

    typeText(`> ${cmd}\n${response}`, () => {
        input.value = '';
        input.focus();
    });
}

// === Управление языком ===
function switchLanguage(lang) {
    currentLang = lang;
    langEnBtn.classList.toggle('active', lang === 'en');
    langRuBtn.classList.toggle('active', lang === 'ru');
    output.innerHTML = '';
    typeText(texts[lang].welcome);
}

// === Открытие/закрытие модалок ===
function toggleModal(modalId, show) {
    const modal = document.getElementById(modalId);
    if (show) {
        if (modalId === 'resume-modal') {
            // Вставляем контент резюме на текущем языке
            resumeBody.innerHTML = resumeContent[currentLang];
            resumeTitle.textContent = currentLang === 'en' ? "Resume" : "Резюме";
        }
        modal.classList.add('active');
    } else {
        modal.classList.remove('active');
        try { closeSound.play(); } catch (e) { /* ignore */ }
        input?.focus();
    }
}

function toggleResumeModal(show) {
    toggleModal('resume-modal', show);
}

function toggleHelpModal(show) {
    if (show) {
        helpTitle.textContent = helpTexts[currentLang].title;
        helpText.innerHTML = helpTexts[currentLang].body.replace(/\n/g, '<br>');
    }
    toggleModal('help-modal', show);
}

// === Инициализация событий ===
function initEventListeners() {
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && input.value) {
            handleCommand(input.value);
        }
    });

    // Резюме
    closeBtn.addEventListener('click', () => toggleResumeModal(true));
    // closeResumeBtn.addEventListener('click', () => toggleResumeModal(false));
    closeResumeHeader.addEventListener('click', () => toggleResumeModal(false));

    // Справка
    helpTrigger.addEventListener('click', () => toggleHelpModal(true));
    helpClose.addEventListener('click', () => toggleHelpModal(false));
    // helpCloseBtn.addEventListener('click', () => toggleHelpModal(false));

    // Закрытие справки по клику вне
    helpModal.addEventListener('click', (e) => {
        if (e.target === helpModal) toggleHelpModal(false);
    });

    // Закрытие резюме по клику вне
    resumeModal.addEventListener('click', (e) => {
        if (e.target === resumeModal) toggleResumeModal(false);
    });

    // Фокус всегда на инпуте
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && e.target !== input) {
            input.focus();
        }
    });

    // Язык
    langEnBtn.addEventListener('click', () => switchLanguage('en'));
    langRuBtn.addEventListener('click', () => switchLanguage('ru'));
}

// === Запуск при загрузке ===
window.addEventListener('DOMContentLoaded', () => {
    typeText(texts[currentLang].welcome, () => input.focus());
    initEventListeners();
    langRuBtn.classList.add('active');
});

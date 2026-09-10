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
const COMMANDS = ['help', 'watch_all', 'about', 'skills', 'contact', 'matrix', 'close'];

// === История команд ===
let commandHistory = [];
let historyIndex = -1; // -1 = не в истории (текущий ввод)

// === Матрица ===
let matrixRunning = false;

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
    commandHistory.push(cmd);
    historyIndex = -1;

    if (command == 'close') {
        toggleResumeModal(true)
        input.value = '';
        input.focus();

        return
    }
    if (command === 'matrix') {
        runMatrixEffect();
        input.value = '';
        input.focus();

        return;
    }
    const response = texts[currentLang][command] || texts[currentLang].command_not_found;

    typeText(`> ${cmd}\n${response}`, () => {
        input.value = '';
        input.focus();
    });
}

// === Навигация по истории команд ===
function navigateHistory(direction) {
    if (commandHistory.length === 0) return;

    if (direction === 'up') {
        if (historyIndex === -1) historyIndex = commandHistory.length - 1;
        else if (historyIndex > 0) historyIndex--;
    } else if (direction === 'down') {
        if (historyIndex === -1) return;
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
        } else {
            historyIndex = -1;
            input.value = '';
            return;
        }
    }

    input.value = commandHistory[historyIndex];
    requestAnimationFrame(() => input.setSelectionRange(input.value.length, input.value.length));
}

// === Автодополнение по Tab ===
function autocompleteCommand() {
    const partial = input.value.trim().toLowerCase();
    if (!partial) return;

    const matches = COMMANDS.filter(cmd => cmd.startsWith(partial));

    if (matches.length === 1) {
        input.value = matches[0];
    } else if (matches.length > 1) {
        let prefix = matches[0];
        for (const m of matches.slice(1)) {
            while (!m.startsWith(prefix)) prefix = prefix.slice(0, -1);
        }
        if (prefix.length > partial.length) input.value = prefix;
    }

    requestAnimationFrame(() => input.setSelectionRange(input.value.length, input.value.length));
}

// === Эффект «дождя из матрицы» ===
function runMatrixEffect() {
    if (matrixRunning) return;
    matrixRunning = true;

    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'アイウエオカキクケコサシスセソ0123456789ABCDEFXYZ';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);

    canvas.classList.add('active');

    let intervalId = null;
    let stopTimeoutId = null;

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#4cd137';
        ctx.font = `${fontSize}px monospace`;

        drops.forEach((y, i) => {
            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, i * fontSize, y * fontSize);

            if (y * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        });
    }

    function stopOnKey() { stop(); }

    function stop() {
        if (!matrixRunning) return;
        clearInterval(intervalId);
        clearTimeout(stopTimeoutId);
        canvas.classList.remove('active');
        document.removeEventListener('keydown', stopOnKey);
        document.removeEventListener('click', stopOnKey);
        setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            matrixRunning = false;
        }, 600);
    }

    intervalId = setInterval(draw, 40);
    stopTimeoutId = setTimeout(stop, 6000);

    // Откладываем подписку на следующий тик, чтобы Enter, запустивший эффект,
    // не всплыл до document и не остановил его в тот же момент
    setTimeout(() => {
        document.addEventListener('keydown', stopOnKey);
        document.addEventListener('click', stopOnKey);
    }, 0);
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
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            navigateHistory('up');
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            navigateHistory('down');
        } else if (e.key === 'Tab') {
            e.preventDefault();
            autocompleteCommand();
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

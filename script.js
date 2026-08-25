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

/// === Тексты для справки ===
const helpTexts = {
    en: {
        title: "Quick Guide",
        body: `Type commands like:\n→ <code>help</code> — show all commands\n→ <code>about</code> — about me\n→ <code>skills</code> — technologies I use\n→ <code>contact</code> — how to reach me\n→ <code>watch_all</code> — show everything\n\nPress <kbd>Enter</kbd> to run a command.\n\nClick <span style="color:#ff5f57">●</span> to view my full resume.`
    },
    ru: {
        title: "Cправка",
        body: `Введите команды:\n→ <code>help</code> — список команд\n→ <code>about</code> — обо мне\n→ <code>skills</code> — навыки\n→ <code>contact</code> — контакты\n→ <code>watch_all</code> — всё сразу\n\nНажмите <kbd>Enter</kbd> для выполнения.\n\nНажмите <span style="color:#ff5f57">●</span> для просмотра цельного резюме.`
    }
};
// ==/ === Основные тексты портфолио ===
const texts = {
    en: {
        welcome: "Welcome!\nType 'help' to see available commands or close this window for get resume.",
        help: "Available commands:\n  help — show this help\n  watch_all — display full portfolio\n  about — about me\n  skills — my skills\n  contact — how to reach me",
        watch_all: "— About Me —\nHi! I'm Roman Chesnakov, a backend engineer.\n\n— Skills —\nGo, Lua, Python, Bash, JS, PostgreSQL, ClickHouse, Redis, NATS, RabbitMQ, Docker, Kubernetes\n\n— Interests —\nNeovim, Cybersecurity, Microcontrollers, AI, Self-hosted infra\n\n— Contact —\n📧 romus204@gmail.com\n📱 t.me/just_romarik\n💼 linkedin.com/in/just-romarik\n🐙 github.com/romus204",
        about: "Backend engineer. I love building fast, reliable, and understandable systems. Interested in high-load tasks, integrations, and optimization. Skilled in creating fault-tolerant and scalable solutions. Deep infrastructure knowledge helps me see the big picture — not just the code. Constantly apply security practices from pentesting my own network and participating in related events.",
        skills: "Languages: Go, Lua, Python, Bash, JavaScript\nDatabases: PostgreSQL, ClickHouse, Redis\nBrokers: NATS, RabbitMQ\nInfra: Docker, Kubernetes\nTools: Neovim, Git, Make, CI/CD",
        contact: "📬 Email: romus204@gmail.com\n📱 Telegram: @just_romarik\n💼 LinkedIn: linkedin.com/in/just-romarik\n🐙 GitHub: github.com/romus204",
        command_not_found: "Command not found. Type 'help' for assistance."
    },
    ru: {
        welcome: "Добро пожаловать!\nВведите 'help' для списка команд, или закройте это окно для перехода к резюме.",
        help: "Доступные команды:\n  help — показать эту справку\n  watch_all — показать всё портфолио\n  about — обо мне\n  skills — мои навыки\n  contact — как со мной связаться",
        watch_all: "— Обо мне —\nПривет! Я Роман Чеснаков, backend-инженер.\n\n— Навыки —\nGo, Lua, Python, Bash, JS, PostgreSQL, ClickHouse, Redis, NATS, RabbitMQ, Docker, Kubernetes\n\n— Интересы —\nNeovim, Кибербезопасность, Микроконтроллеры, ИИ, Self-hosted\n\n— Контакты —\n📧 romus204@gmail.com\n📱 t.me/just_romarik\n💼 linkedin.com/in/just-romarik\n🐙 github.com/romus204",
        about: "Backend-инженер. Люблю делать быстрые, надёжные и понятные системы. Мне интересны задачи с высокими нагрузками, интеграциями и оптимизацией. Умею строить отказоустойчивые и масштабируемые решения. Хорошо понимаю работу инфраструктуры — это помогает смотреть на систему целиком, а не только на код. Постоянно применяю знания в области безопасности, полученные в ходе пентестов собственной сети и участия в соответствующих мероприятиях.",
        skills: "Языки: Go, Lua, Python, Bash, JavaScript\nБазы данных: PostgreSQL, ClickHouse, Redis\nБрокеры: NATS, RabbitMQ\nИнфраструктура: Docker, Kubernetes\nИнструменты: Neovim, Git, Make, CI/CD",
        contact: "📬 Email: romus204@gmail.com\n📱 Telegram: @just_romarik\n💼 LinkedIn: linkedin.com/in/just-romarik\n🐙 GitHub: github.com/romus204",
        command_not_found: "Команда не найдена. Введите 'help' для помощи."
    }
};

// === Резюме на двух языках (для модального окна) ===
const resumeContent = {
    en: `
        <h2>Hi! I'm Roman Chesnakov</h2>
        <p>Backend engineer.</p>
        <p>I love building fast, reliable, and understandable systems. I'm drawn to high-load tasks, integrations, and optimization. I know how to design fault-tolerant and scalable solutions. My deep infrastructure knowledge helps me see the whole system — not just the code. I constantly apply security practices gained from pentesting my own network and participating in related events.</p>

        <h3>🛠 Current Tech Stack</h3>
        <ul>
            <li><strong>Programming Languages</strong>: Go (Golang), Lua, Python, Bash, JavaScript</li>
            <li><strong>Databases</strong>: PostgreSQL, ClickHouse, Redis</li>
            <li><strong>Message Brokers</strong>: NATS, RabbitMQ</li>
            <li><strong>Containerization</strong>: Docker, Kubernetes (k8s)</li>
        </ul>

        <h3>🚀 Interests</h3>
        <ul>
            <li><strong>Neovim</strong> — I actively use and customize it for efficient development.</li>
            <li><strong>Cybersecurity</strong> — I’m passionate about it and apply best practices.</li>
            <li><strong>Microcontrollers & SBCs</strong> — Raspberry Pi, Orange Pi, Arduino projects in my free time.</li>
            <li><strong>AI</strong> — I build local AI tools to assist with daily tasks.</li>
            <li><strong>Self-hosted</strong> — I’m a strong advocate. I run a small home infrastructure and am currently building a cluster based on SBCs.</li>
        </ul>

        <h3>📫 How to Reach Me</h3>
        <ul>
            <li>Email: <a href="mailto:romus204@gmail.com">romus204@gmail.com</a><br></li>
            <li>Telegram: <a href="https://t.me/just_romarik" target="_blank">@just_romarik</a><br></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/just-romarik" target="_blank">Roman Chesnakov</a><br></li>
            <li>GitHub: <a href="https://github.com/romus204" target="_blank">romus204</a></li>
        </ul>
    `,
    ru: `
        <h2>Привет! Я Роман Чеснаков</h2>
        <p>Backend-инженер.</p>
        <p>Люблю делать быстрые, надёжные и понятные системы. Мне интересны задачи с высокими нагрузками, интеграциями и оптимизацией. Умею строить отказоустойчивые и масштабируемые решения. Хорошо понимаю работу инфраструктуры — это помогает смотреть на систему целиком, а не только на код. Постоянно применяю знания в области безопасности, полученные в ходе пентестов собственной сети и участия в соответствующих мероприятиях.</p>

        <h3>🛠 Текущий стек технологий</h3>
        <ul>
            <li><strong>Языки программирования</strong>: Go (Golang), Lua, Python, Bash, JavaScript</li>
            <li><strong>Базы данных</strong>: PostgreSQL, ClickHouse, Redis</li>
            <li><strong>Брокеры сообщений</strong>: NATS, RabbitMQ</li>
            <li><strong>Контейнеризация</strong>: Docker, Kubernetes (k8s)</li>
        </ul>

        <h3>🚀 Интересы</h3>
        <ul>
            <li><strong>Neovim</strong> — Активно использую и кастомизирую для эффективной разработки.</li>
            <li><strong>Кибербезопасность</strong> — Увлекаюсь и применяю лучшие практики безопасности.</li>
            <li><strong>Микроконтроллеры и SBC</strong> — Проекты на Raspberry Pi, Orange Pi, Arduino в свободное время.</li>
            <li><strong>ИИ</strong> — Создаю локальные ИИ-инструменты для помощи в повседневных задачах.</li>
            <li><strong>Self-hosted</strong> — Являюсь сторонником self-hosted решений. Владею небольшой домашней инфраструктурой. Нахожусь в процессе постройки кластера на базе SBC.</li>
        </ul>

        <h3>📫 Как со мной связаться</h3>
        <ul>
            <li>Email: <a href="mailto:romus204@gmail.com">romus204@gmail.com</a><br></li>
            <li>Telegram: <a href="https://t.me/just_romarik" target="_blank">@just_romarik</a><br></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/just-romarik" target="_blank">Roman Chesnakov</a><br></li>
            <li>GitHub: <a href="https://github.com/romus204" target="_blank">romus204</a></li>
        </ul>
    `
};

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

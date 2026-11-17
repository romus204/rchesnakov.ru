/// === Тексты для справки ===
const helpTexts = {
    en: {
        title: "Quick Guide",
        body: `Type commands like:\n→ <code>help</code> — show all commands\n→ <code>about</code> — about me\n→ <code>skills</code> — technologies I use\n→ <code>contact</code> — how to reach me\n→ <code>watch_all</code> — show everything\n→ <code>matrix</code> — activate matrix rain\n\nPress <kbd>Enter</kbd> to run a command. Use <kbd>↑</kbd>/<kbd>↓</kbd> for history and <kbd>Tab</kbd> to autocomplete.\n\nClick <span style="color:#ff5f57">●</span> to view my full resume.`
    },
    ru: {
        title: "Cправка",
        body: `Введите команды:\n→ <code>help</code> — список команд\n→ <code>about</code> — обо мне\n→ <code>skills</code> — навыки\n→ <code>contact</code> — контакты\n→ <code>watch_all</code> — всё сразу\n→ <code>matrix</code> — эффект «матрицы»\n\nНажмите <kbd>Enter</kbd> для выполнения. <kbd>↑</kbd>/<kbd>↓</kbd> — история команд, <kbd>Tab</kbd> — автодополнение.\n\nНажмите <span style="color:#ff5f57">●</span> для просмотра цельного резюме.`
    }
};

// ==/ === Основные тексты портфолио ===
const texts = {
    en: {
        welcome: "Welcome!\nType 'help' to see available commands or close this window for get resume.",
        help: "Available commands:\n  help — show this help\n  watch_all — display full portfolio\n  about — about me\n  skills — my skills\n  contact — how to reach me\n  matrix — activate the matrix",
        watch_all: "— About Me —\nHi! I'm Roman Chesnakov, Senior Backend Developer (Go).\n5+ years with Go, 8+ years in IT. High-load distributed systems, event-driven microservices.\n\n— Skills —\nGo, PostgreSQL, NATS JetStream, Redis, ClickHouse, Docker, Kubernetes, OpenTelemetry, Prometheus\n\n— Interests —\nCybersecurity & CTF, AI tooling, HomeLab, Neovim\n\n— Contact —\n📧 chesnakov.work@mail.ru\n📱 t.me/roman_chesnakov_work\n💼 linkedin.com/in/roman-chesnakov\n🐙 github.com/romus204",
        about: "Backend developer. 5+ years of Go experience, 8+ years in IT overall. I specialize in high-load distributed systems and event-driven microservice architecture.\n\n• At MAG Development (KDV group) I build core services of a last-mile delivery platform: order lifecycle, auto-assignment of couriers, routing, delivery pricing, telemetry.\n• I actively use AI tools in development (MCP, Agent Skills, subagents).\n• I study cybersecurity, play CTFs and apply these skills at work; I regularly pentest my own infrastructure and work environments.\n• I run a HomeLab to sharpen DevOps skills and explore infrastructure.",
        skills: "Languages: Go, Python, Lua, Bash, SQL\nDatabases: PostgreSQL (PostGIS), ClickHouse, Redis, Elasticsearch\nMessaging: NATS JetStream, Kafka, RabbitMQ\nAPI: gRPC, Protobuf, REST, GraphQL, WebSocket\nInfra: Docker, Kubernetes, Linux, GitLab CI/CD\nObservability: OpenTelemetry, Prometheus, Grafana, pprof\nOther: System Design, Distributed Systems, Concurrency, Algorithms, AI Agents, MCP, Information Security",
        contact: "📬 Email: chesnakov.work@mail.ru\n📞 Phone: +7 953 851 5758\n📱 Telegram: @roman_chesnakov_work\n💼 LinkedIn: linkedin.com/in/roman-chesnakov\n🐙 GitHub: github.com/romus204",
        matrix: "Wake up, Neo...",
        command_not_found: "Command not found. Type 'help' for assistance."
    },
    ru: {
        welcome: "Добро пожаловать!\nВведите 'help' для списка команд, или закройте это окно для перехода к резюме.",
        help: "Доступные команды:\n  help — показать эту справку\n  watch_all — показать всё портфолио\n  about — обо мне\n  skills — мои навыки\n  contact — как со мной связаться\n  matrix — войти в матрицу",
        watch_all: "— Обо мне —\nПривет! Я Роман Чеснаков, Senior Backend-разработчик (Go).\n5+ лет на Go, 8+ лет в IT. Высоконагруженные распределённые системы, event-driven микросервисы.\n\n— Навыки —\nGo, PostgreSQL, NATS JetStream, Redis, ClickHouse, Docker, Kubernetes, OpenTelemetry, Prometheus\n\n— Интересы —\nКибербезопасность и CTF, AI-инструменты, HomeLab, Neovim\n\n— Контакты —\n📧 chesnakov.work@mail.ru\n📱 t.me/roman_chesnakov_work\n💼 linkedin.com/in/roman-chesnakov\n🐙 github.com/romus204",
        about: "Backend-разработчик. 5+ лет опыта на Go. Общий опыт в IT — 8+ лет. Специализируюсь на высоконагруженных распределённых системах и микросервисной event-driven архитектуре.\n\n• В MAG Development (группа KDV) разрабатываю ключевые сервисы платформы доставки последней мили: жизненный цикл заказов, автоназначение курьеров, маршрутизация, стоимость доставки, телеметрия.\n• Активно использую AI-инструменты в разработке (MCP, Agent Skills, субагенты).\n• Изучаю кибербезопасность, участвую в CTF и применяю эти навыки в работе; регулярно провожу пентест собственной инфраструктуры и рабочих окружений.\n• Имею домашний HomeLab для прокачки навыков DevOps и изучения инфраструктуры.",
        skills: "Языки: Go, Python, Lua, Bash, SQL\nБазы данных: PostgreSQL (PostGIS), ClickHouse, Redis, Elasticsearch\nБрокеры: NATS JetStream, Kafka, RabbitMQ\nAPI: gRPC, Protobuf, REST, GraphQL, WebSocket\nИнфраструктура: Docker, Kubernetes, Linux, GitLab CI/CD\nНаблюдаемость: OpenTelemetry, Prometheus, Grafana, pprof\nПрочее: System Design, распределённые системы, конкурентность, алгоритмы, AI-агенты, MCP, информационная безопасность",
        contact: "📬 Email: chesnakov.work@mail.ru\n📞 Телефон: +7 953 851 5758\n📱 Telegram: @roman_chesnakov_work\n💼 LinkedIn: linkedin.com/in/roman-chesnakov\n🐙 GitHub: github.com/romus204",
        matrix: "Проснись, Нео...",
        command_not_found: "Команда не найдена. Введите 'help' для помощи."
    }
};

// === Резюме на двух языках (для модального окна) ===
const resumeContent = {
    en: `
        <h2>Hi! I'm Roman Chesnakov</h2>
        <p><strong>Senior Backend Developer (Go)</strong></p>
        <p>5+ years of Go experience, 8+ years in IT overall. I specialize in high-load distributed systems and event-driven microservice architecture. I actively use AI tools in development (MCP, Agent Skills, subagents), study cybersecurity, play CTFs and regularly pentest my own infrastructure. I run a HomeLab to sharpen DevOps skills.</p>
        <p><strong>Core stack</strong>: Go, PostgreSQL, NATS JetStream, Redis, ClickHouse, Docker, Kubernetes, OpenTelemetry, Prometheus.</p>

        <h3>💼 Experience</h3>
        <p><strong>MAG Development (KDV group)</strong> — Go Developer · Feb 2024 — present<br>
        Last-mile delivery platform: order lifecycle, routing, courier assignment, delivery pricing and telemetry.</p>
        <ul>
            <li>Took part in decomposing a large monolith into microservices: bounded contexts, API contracts, migration of business logic.</li>
            <li>Built a service for automatic order distribution among couriers with predictable behavior under concurrent event processing.</li>
            <li>Route building and optimization: Dijkstra, A*, Bellman-Ford, approximate TSP approaches.</li>
            <li>Built the delivery pricing service (time slots, variable pricing, tariff rules) and a push notification service resilient to provider outages.</li>
            <li>Built the telemetry service and observability: business/technical metrics, distributed tracing with OpenTelemetry.</li>
            <li>NATS for inter-service communication: retries, idempotency, state consistency; PostgreSQL, Redis, NATS KV, ClickHouse.</li>
            <li>Performance optimization (latency, bottlenecks, caching, concurrency, pprof); code review, architecture discussions; regularly stood in for the team lead.</li>
        </ul>
        <p><strong>Health & Beauty Center "Estetik"</strong> — Software Engineer · 2022 — 2024</p>
        <ul>
            <li>Moved integration and business logic from 1C into Go services with HTTP/REST APIs without stopping ongoing processes.</li>
            <li>Replaced commercial software with an in-house service, dropping a paid license.</li>
            <li>Bots for appointment confirmation, internal requests and approvals (Go, Python); async report generation service with retries.</li>
            <li>Sped up Go backend services: background processing, reworked PostgreSQL interaction.</li>
        </ul>
        <p><strong>Krasny Yar, Vash KPI, Apogey</strong> — 1C Developer · 2019 — 2023</p>
        <ul>
            <li>Turnkey access control system at a grain plant: plate recognition cameras, truck scales, barriers integrated into a fully automated process — grain theft dropped sharply, monthly discrepancies went to nearly zero.</li>
            <li>Hardware adapters (RS-232/RS-485, Modbus, TCP/IP), including reverse-engineering undocumented protocols; offline mode with later sync.</li>
            <li>On-premise handwritten text recognition for internal documents; network administration and security.</li>
        </ul>

        <h3>🛠 Skills</h3>
        <p>Go, PostgreSQL, PostGIS, Microservices, Event-driven architecture, NATS JetStream, Kafka, RabbitMQ, Redis, ClickHouse, Elasticsearch, gRPC, Protobuf, REST, GraphQL, WebSocket, Distributed Systems, Highload, System Design, Docker, Kubernetes, OpenTelemetry, Prometheus, Grafana, pprof, Concurrency, GitLab CI/CD, Unit Testing, Linux, Bash, Python, Lua, Algorithms, AI Agents, MCP, Information Security</p>

        <h3>📦 Projects</h3>
        <ul>
            <li><a href="https://github.com/romus204/tree-sitter-manager.nvim" target="_blank">tree-sitter-manager.nvim</a> — owner</li>
        </ul>

        <h3>🌐 Languages</h3>
        <p>Russian — native, English — B1</p>

        <h3>📫 How to Reach Me</h3>
        <ul>
            <li>Email: <a href="mailto:chesnakov.work@mail.ru">chesnakov.work@mail.ru</a><br></li>
            <li>Phone: <a href="tel:+79538515758">+7 953 851 5758</a><br></li>
            <li>Telegram: <a href="https://t.me/roman_chesnakov_work" target="_blank">@roman_chesnakov_work</a><br></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/roman-chesnakov" target="_blank">Roman Chesnakov</a><br></li>
            <li>GitHub: <a href="https://github.com/romus204" target="_blank">romus204</a></li>
        </ul>
    `,
    ru: `
        <h2>Привет! Я Роман Чеснаков</h2>
        <p><strong>Senior Backend-разработчик (Go)</strong></p>
        <p>5+ лет опыта на Go, общий опыт в IT — 8+ лет. Специализируюсь на высоконагруженных распределённых системах и микросервисной event-driven архитектуре. Активно использую AI-инструменты в разработке (MCP, Agent Skills, субагенты). Изучаю кибербезопасность, участвую в CTF и регулярно провожу пентест собственной инфраструктуры. Имею домашний HomeLab для прокачки навыков DevOps.</p>
        <p><strong>Основной стек</strong>: Go, PostgreSQL, NATS JetStream, Redis, ClickHouse, Docker, Kubernetes, OpenTelemetry, Prometheus.</p>

        <h3>💼 Опыт работы</h3>
        <p><strong>МАГ Девелопмент (группа KDV)</strong> — Golang-разработчик · фев 2024 — н.в.<br>
        Платформа доставки последней мили: жизненный цикл заказов, маршрутизация, назначение курьеров, стоимость доставки и телеметрия.</p>
        <ul>
            <li>Участвовал в декомпозиции крупного монолита на микросервисы: выделение bounded contexts, API-контракты, перенос бизнес-логики.</li>
            <li>Разработал сервис автоматического распределения заказов между курьерами с предсказуемой работой при параллельной обработке событий.</li>
            <li>Построение и оптимизация маршрутов: Dijkstra, A*, Bellman-Ford, приближённые подходы к задаче коммивояжёра.</li>
            <li>Разработал сервис расчёта стоимости доставки (временные слоты, переменная стоимость, тарификация) и сервис пуш-уведомлений, устойчивый к недоступности провайдеров.</li>
            <li>Разрабатывал сервис телеметрии и наблюдаемость: бизнес- и технические метрики, распределённая трассировка на OpenTelemetry.</li>
            <li>NATS для межсервисного взаимодействия: повторная обработка, идемпотентность, согласованность состояния; PostgreSQL, Redis, NATS KV, ClickHouse.</li>
            <li>Оптимизация производительности (latency, узкие места, кэширование, конкурентность, pprof); code review, архитектурные решения; регулярно заменял лида.</li>
        </ul>
        <p><strong>Центр здоровья и красоты «Эстетик»</strong> — Инженер-программист · 2022 — 2024</p>
        <ul>
            <li>Вынес интеграционную и прикладную логику из 1С во внешние сервисы на Go с HTTP/REST API без остановки текущих процессов.</li>
            <li>Заменил коммерческое ПО собственным сервисом — компания отказалась от платной лицензии.</li>
            <li>Боты для подтверждения записи к врачу, внутренних заявок и согласований (Go, Python); сервис асинхронной генерации отчётов с повторами.</li>
            <li>Ускорил backend-сервисы на Go: фоновые задачи, переработка взаимодействия с PostgreSQL.</li>
        </ul>
        <p><strong>Красный ЯР, Ваш KPI, Апогей</strong> — Программист 1С · 2019 — 2023</p>
        <ul>
            <li>Внедрил СКУД на зерновом заводе под ключ: камеры распознавания госномеров, весы, шлагбаумы в сквозном автоматическом процессе — воровство резко сократилось, расхождения снизились практически до нуля.</li>
            <li>Адаптеры к оборудованию (RS-232/RS-485, Modbus, TCP/IP), в т.ч. восстановление недокументированных протоколов; автономный режим узлов с синхронизацией.</li>
            <li>Распознавание рукописного текста во внутреннем контуре без облаков; администрирование и безопасность сетей.</li>
        </ul>

        <h3>🛠 Навыки</h3>
        <p>Go, PostgreSQL, PostGIS, Microservices, Event-driven architecture, NATS JetStream, Kafka, RabbitMQ, Redis, ClickHouse, Elasticsearch, gRPC, Protobuf, REST, GraphQL, WebSocket, Distributed Systems, Highload, System Design, Docker, Kubernetes, OpenTelemetry, Prometheus, Grafana, pprof, Concurrency, GitLab CI/CD, Unit Testing, Linux, Bash, Python, Lua, Algorithms, AI Agents, MCP, Information Security</p>

        <h3>📦 Проекты</h3>
        <ul>
            <li><a href="https://github.com/romus204/tree-sitter-manager.nvim" target="_blank">tree-sitter-manager.nvim</a> — owner</li>
        </ul>

        <h3>🌐 Языки</h3>
        <p>Русский — родной, английский — B1</p>

        <h3>📫 Как со мной связаться</h3>
        <ul>
            <li>Email: <a href="mailto:chesnakov.work@mail.ru">chesnakov.work@mail.ru</a><br></li>
            <li>Телефон: <a href="tel:+79538515758">+7 953 851 5758</a><br></li>
            <li>Telegram: <a href="https://t.me/roman_chesnakov_work" target="_blank">@roman_chesnakov_work</a><br></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/roman-chesnakov" target="_blank">Roman Chesnakov</a><br></li>
            <li>GitHub: <a href="https://github.com/romus204" target="_blank">romus204</a></li>
        </ul>
    `
};

// 导航栏切换
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Tab 切换
const tabSections = document.querySelectorAll('.tab-section');
const tabTriggers = document.querySelectorAll('[data-tab-target]');
const tabNavLinks = document.querySelectorAll('.tab-link');

function activateTab(targetId) {
    const targetSection = document.getElementById(targetId);
    if (!targetSection) return;

    tabSections.forEach(section => {
        if (section.id === targetId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    tabNavLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.tabTarget === targetId);
    });

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    navMenu.classList.remove('active');
}

tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        const targetId = trigger.getAttribute('data-tab-target');
        if (!targetId) return;
        e.preventDefault();
        activateTab(targetId);
    });
});

// 语言切换
const langToggle = document.getElementById('langToggle');
let currentLang = 'zh';

const translations = {
    zh: {
        'brand.name': 'AI Robot',
        'nav.home': '首页',
        'nav.about': '关于',
        'nav.features': '功能',
        'nav.tech': '技术',
        'nav.contact': '联系',
        'hero.titleHighlight': 'AI机器人',
        'hero.titleMain': '开启智能未来',
        'hero.subtitle': '融合人工智能与创新科技，打造下一代智能助手',
        'hero.btnExplore': '探索更多',
        'hero.btnExperience': '立即体验',
        'about.title': '关于AI机器人',
        'about.subtitle': '革命性的智能助手，重新定义人机交互',
        'about.cards.learning.title': '智能学习',
        'about.cards.learning.desc': '采用深度学习算法，持续学习并优化，提供更精准的服务',
        'about.cards.speed.title': '极速响应',
        'about.cards.speed.desc': '毫秒级响应速度，实时处理您的需求，提升工作效率',
        'about.cards.security.title': '安全可靠',
        'about.cards.security.desc': '企业级安全防护，保护您的数据隐私和信息安全',
        'features.title': '核心功能',
        'features.subtitle': '强大的功能，满足您的各种需求',
        'features.items.dialogue.title': '智能对话',
        'features.items.dialogue.desc': '自然语言处理，理解上下文，进行流畅对话',
        'features.items.analysis.title': '数据分析',
        'features.items.analysis.desc': '快速分析大量数据，生成可视化报告',
        'features.items.creative.title': '创意生成',
        'features.items.creative.desc': 'AI驱动的创意工具，激发无限灵感',
        'features.items.multilang.title': '多语言支持',
        'features.items.multilang.desc': '支持全球多种语言，打破沟通壁垒',
        'features.items.automation.title': '自动化任务',
        'features.items.automation.desc': '智能自动化，解放双手，提高效率',
        'features.items.crossplatform.title': '跨平台',
        'features.items.crossplatform.desc': '支持多平台使用，随时随地访问',
        'tech.title': '技术架构',
        'tech.subtitle': '前沿技术，驱动未来',
        'tech.metrics.ml': '机器学习',
        'tech.metrics.nlp': '自然语言处理',
        'tech.metrics.cv': '计算机视觉',
        'tech.metrics.nn': '神经网络',
        'tech.stack.title': '多层架构',
        'tech.stack.desc': 'AI Robot 采用数据→感知→认知→部署的多层体系，确保从数据采集到智能服务全链路可控。',
        'tech.stack.data.title': '数据层',
        'tech.stack.data.desc': '多源传感器与业务系统实时汇聚，支持结构化与非结构化数据。',
        'tech.stack.data.item1': 'Kafka + MQTT 流式通道',
        'tech.stack.data.item2': '湖仓一体存储架构',
        'tech.stack.data.item3': '内置数据脱敏策略',
        'tech.stack.cognitive.title': '认知层',
        'tech.stack.cognitive.desc': '多模型协同推理，融合 NLP、CV 与多模态感知。',
        'tech.stack.cognitive.item1': 'Transformer + GNN 混合模型',
        'tech.stack.cognitive.item2': 'AutoML 自动超参优化',
        'tech.stack.cognitive.item3': '知识图谱实时更新',
        'tech.stack.service.title': '服务层',
        'tech.stack.service.desc': '基于微服务与 Serverless 架构，按需弹性扩缩。',
        'tech.stack.service.item1': 'Kubernetes 智能调度',
        'tech.stack.service.item2': '边缘+云协同部署',
        'tech.stack.service.item3': '灰度发布与A/B测试',
        'tech.pipeline.title': '智能工作流',
        'tech.pipeline.step1.title': '数据采集',
        'tech.pipeline.step1.desc': '多源实时数据进入消息总线，自动完成清洗与标准化。',
        'tech.pipeline.step2.title': '模型训练',
        'tech.pipeline.step2.desc': 'AutoML 管理训练任务，结合 GPU 集群快速收敛。',
        'tech.pipeline.step3.title': '智能推理',
        'tech.pipeline.step3.desc': '根据场景自动选择最佳模型，输出解释型推理结果。',
        'tech.pipeline.step4.title': '部署反馈',
        'tech.pipeline.step4.desc': '服务网格统一发布，监控闭环反馈模型，再训练持续迭代。',
        'contact.title': '联系我们',
        'contact.subtitle': '让我们一起探索AI的无限可能',
        'contact.form.name': '您的姓名',
        'contact.form.email': '您的邮箱',
        'contact.form.message': '您的消息',
        'contact.form.submit': '发送消息',
        'footer.brand': 'AI Robot',
        'footer.tagline': '引领智能未来，创造无限可能',
        'footer.linksTitle': '快速链接',
        'footer.contactTitle': '联系方式',
        'footer.email': '邮箱: contact@airobot.com',
        'footer.phone': '电话: +86 123 4567 8900',
        'footer.copy': '© 2024 AI Robot. 版权所有。',
        'modal.featuresTitle': '核心特性',
        'contact.alert': '请填写所有必填字段',
        'contact.status.opening': '正在打开 Gmail...',
        'contact.status.opened': '已打开邮箱'
    },
    en: {
        'brand.name': 'AI Robot',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.features': 'Features',
        'nav.tech': 'Technology',
        'nav.contact': 'Contact',
        'hero.titleHighlight': 'AI Robot',
        'hero.titleMain': 'Unlock the Intelligent Future',
        'hero.subtitle': 'Blend AI with cutting-edge innovation to build the next-generation assistant',
        'hero.btnExplore': 'Discover More',
        'hero.btnExperience': 'Try Now',
        'about.title': 'About AI Robot',
        'about.subtitle': 'A revolutionary assistant redefining human-computer interaction',
        'about.cards.learning.title': 'Smart Learning',
        'about.cards.learning.desc': 'Powered by deep learning to continuously optimize and deliver precise services',
        'about.cards.speed.title': 'Lightning Speed',
        'about.cards.speed.desc': 'Millisecond-level responses that handle your needs in real time',
        'about.cards.security.title': 'Trusted Security',
        'about.cards.security.desc': 'Enterprise-grade protection that safeguards your data and privacy',
        'features.title': 'Core Capabilities',
        'features.subtitle': 'Robust features for every scenario',
        'features.items.dialogue.title': 'Intelligent Dialogue',
        'features.items.dialogue.desc': 'Understands context with NLP for natural conversations',
        'features.items.analysis.title': 'Data Analytics',
        'features.items.analysis.desc': 'Processes massive datasets and produces visual insights',
        'features.items.creative.title': 'Creative Generation',
        'features.items.creative.desc': 'AI-powered tools that spark limitless ideas',
        'features.items.multilang.title': 'Multilingual Support',
        'features.items.multilang.desc': 'Communicate globally without language barriers',
        'features.items.automation.title': 'Automation',
        'features.items.automation.desc': 'Smart workflows that free your hands and boost efficiency',
        'features.items.crossplatform.title': 'Cross-Platform',
        'features.items.crossplatform.desc': 'Access on any device, anywhere and anytime',
        'tech.title': 'Technical Architecture',
        'tech.subtitle': 'Cutting-edge technology powering the future',
        'tech.metrics.ml': 'Machine Learning',
        'tech.metrics.nlp': 'Natural Language Processing',
        'tech.metrics.cv': 'Computer Vision',
        'tech.metrics.nn': 'Neural Networks',
        'tech.stack.title': 'Layered Stack',
        'tech.stack.desc': 'Data → Perception → Cognition → Deployment ensures a fully controlled pipeline.',
        'tech.stack.data.title': 'Data Layer',
        'tech.stack.data.desc': 'Aggregates structured and unstructured inputs from sensors and systems.',
        'tech.stack.data.item1': 'Kafka + MQTT streaming channels',
        'tech.stack.data.item2': 'Lakehouse storage architecture',
        'tech.stack.data.item3': 'Built-in data masking policies',
        'tech.stack.cognitive.title': 'Cognitive Layer',
        'tech.stack.cognitive.desc': 'Multi-model reasoning that fuses NLP, CV and multimodal sensing.',
        'tech.stack.cognitive.item1': 'Transformer + GNN hybrid models',
        'tech.stack.cognitive.item2': 'AutoML hyperparameter tuning',
        'tech.stack.cognitive.item3': 'Real-time knowledge graph updates',
        'tech.stack.service.title': 'Service Layer',
        'tech.stack.service.desc': 'Microservices and serverless design with elastic scaling.',
        'tech.stack.service.item1': 'Kubernetes intelligent scheduling',
        'tech.stack.service.item2': 'Edge + cloud collaborative deployment',
        'tech.stack.service.item3': 'Progressive releases & A/B testing',
        'tech.pipeline.title': 'Intelligent Pipeline',
        'tech.pipeline.step1.title': 'Data Ingestion',
        'tech.pipeline.step1.desc': 'Streams data into the bus and auto-cleans in real time.',
        'tech.pipeline.step2.title': 'Model Training',
        'tech.pipeline.step2.desc': 'AutoML orchestrates GPU clusters for fast convergence.',
        'tech.pipeline.step3.title': 'Smart Inference',
        'tech.pipeline.step3.desc': 'Picks the best model per scenario with explainable outputs.',
        'tech.pipeline.step4.title': 'Deploy & Feedback',
        'tech.pipeline.step4.desc': 'Service mesh rollout with monitored feedback loops.',
        'contact.title': 'Contact Us',
        'contact.subtitle': "Let's explore the limitless possibilities of AI together",
        'contact.form.name': 'Your Name',
        'contact.form.email': 'Your Email',
        'contact.form.message': 'Your Message',
        'contact.form.submit': 'Send Message',
        'footer.brand': 'AI Robot',
        'footer.tagline': 'Leading the intelligent future',
        'footer.linksTitle': 'Quick Links',
        'footer.contactTitle': 'Contact Info',
        'footer.email': 'Email: contact@airobot.com',
        'footer.phone': 'Phone: +86 123 4567 8900',
        'footer.copy': '© 2024 AI Robot. All rights reserved.',
        'modal.featuresTitle': 'Key Capabilities',
        'contact.alert': 'Please fill in all required fields',
        'contact.status.opening': 'Opening Gmail...',
        'contact.status.opened': 'Email opened'
    }
};

const emailTemplates = {
    zh: {
        subject: (name) => `来自 ${name} 的咨询 - AI Robot`,
        body: (name, email, message) =>
            `您好，\n\n我是 ${name}，邮箱：${email}\n\n我的消息：\n${message}\n\n期待您的回复！\n\n此致\n${name}`
    },
    en: {
        subject: (name) => `Inquiry from ${name} - AI Robot`,
        body: (name, email, message) =>
            `Hello,\n\nThis is ${name}, email: ${email}\n\nMessage:\n${message}\n\nLooking forward to your reply!\n\nBest regards,\n${name}`
    }
};

function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = translations[lang][key];
        if (text) {
            if (el.dataset.i18nHtml === 'true') {
                el.innerHTML = text;
            } else {
                el.textContent = text;
            }
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const text = translations[lang][key];
        if (text) {
            el.setAttribute('placeholder', text);
        }
    });

    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

    if (langToggle) {
        langToggle.textContent = lang === 'zh' ? 'EN' : '中';
        langToggle.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
    }
}

function getLocalizedValue(value, lang = currentLang) {
    if (typeof value === 'string') {
        return value;
    }
    if (value && typeof value === 'object') {
        return value[lang] || value.zh || value.en || '';
    }
    return '';
}

if (langToggle) {
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        applyTranslations(currentLang);
        if (window.activeModalDetail && window.modalInstance?.classList.contains('active')) {
            renderModal(window.activeModalDetail);
        }
    });
}

applyTranslations(currentLang);

// 导航栏滚动效果
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.9)';
    }
    
    lastScroll = currentScroll;
});

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察所有卡片和功能项
document.querySelectorAll('.about-card, .feature-item, .tech-item, .tech-card, .pipeline-step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 技术进度条动画
const techProgressBars = document.querySelectorAll('.tech-progress');
const techObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const fill = progressBar.querySelector('.tech-fill');
            const progress = progressBar.getAttribute('data-progress');
            
            setTimeout(() => {
                fill.style.width = progress + '%';
            }, 200);
            
            techObserver.unobserve(progressBar);
        }
    });
}, { threshold: 0.5 });

techProgressBars.forEach(bar => {
    techObserver.observe(bar);
});

// 功能详情数据
const featureDetails = {
    dialogue: {
        icon: '💬',
        title: {
            zh: '智能对话',
            en: 'Intelligent Dialogue'
        },
        description: {
            zh: '我们的AI机器人采用最先进的自然语言处理技术，能够理解复杂的上下文关系，进行流畅、自然的对话交流。无论是日常咨询、技术支持还是创意讨论，都能为您提供专业、准确的回应。',
            en: 'Our AI robot leverages state-of-the-art NLP to understand complex context and deliver fluent, natural conversations for support, consulting, or ideation.'
        },
        features: {
            zh: [
                '支持多轮对话，理解上下文语境',
                '情感识别，能够感知用户情绪',
                '个性化回复，根据用户习惯调整',
                '多场景适配，适用于各种对话场景',
                '实时学习，不断提升对话质量'
            ],
            en: [
                'Multi-turn conversations with contextual memory',
                'Emotion detection that senses user sentiment',
                'Personalized replies tuned to user habits',
                'Flexible for service, support, and creative scenes',
                'Continuous learning to improve response quality'
            ]
        }
    },
    analysis: {
        icon: '📊',
        title: {
            zh: '数据分析',
            en: 'Data Analytics'
        },
        description: {
            zh: '强大的数据处理能力，能够快速分析海量数据，识别关键模式和趋势。通过智能算法生成直观的可视化报告，帮助您做出更明智的决策。',
            en: 'Powerful processing analyzes massive datasets, uncovers key patterns, and generates visual reports to support smarter decisions.'
        },
        features: {
            zh: [
                '支持多种数据格式导入',
                '自动识别数据模式和异常',
                '生成专业的数据可视化图表',
                '提供数据洞察和建议',
                '支持实时数据监控和分析'
            ],
            en: [
                'Ingests diverse data formats',
                'Automatically detects patterns and anomalies',
                'Produces professional visualization dashboards',
                'Delivers actionable insights and suggestions',
                'Offers real-time monitoring and analytics'
            ]
        }
    },
    creative: {
        icon: '🎨',
        title: {
            zh: '创意生成',
            en: 'Creative Generation'
        },
        description: {
            zh: 'AI驱动的创意工具，能够激发无限灵感。无论是文案创作、设计构思还是内容策划，都能为您提供新颖独特的创意方案。',
            en: 'AI-powered creative tools spark limitless inspiration for copywriting, design concepts, and content planning.'
        },
        features: {
            zh: [
                '多领域创意生成（文案、设计、策划等）',
                '风格多样化，满足不同需求',
                '快速迭代，提供多个方案选择',
                '结合最新趋势和热点',
                '支持创意优化和改进建议'
            ],
            en: [
                'Generates ideas across copy, design, and strategy',
                'Multiple styles to fit any brief',
                'Rapid iteration with many options',
                'Aligned with the latest trends and topics',
                'Provides optimization and refinement tips'
            ]
        }
    },
    multilang: {
        icon: '🌐',
        title: {
            zh: '多语言支持',
            en: 'Multilingual Support'
        },
        description: {
            zh: '打破语言壁垒，支持全球主要语言。无论是中文、英文、日文还是其他语言，都能提供准确、流畅的交流体验。',
            en: 'Break language barriers with accurate, fluent communication across major global languages.'
        },
        features: {
            zh: [
                '支持50+种全球主要语言',
                '精准的翻译和本地化',
                '理解不同语言的文化背景',
                '实时语言切换',
                '保持原意的准确传达'
            ],
            en: [
                'Supports 50+ major languages',
                'High-quality translation and localization',
                'Understands cultural nuances',
                'Instant language switching',
                'Keeps the original intent intact'
            ]
        }
    },
    automation: {
        icon: '🔧',
        title: {
            zh: '自动化任务',
            en: 'Automation'
        },
        description: {
            zh: '智能自动化系统，能够处理重复性任务，解放您的双手。通过简单的配置，即可实现复杂的工作流程自动化。',
            en: 'Intelligent automation tackles repetitive work. Configure once to orchestrate complex workflows.'
        },
        features: {
            zh: [
                '自定义工作流程',
                '定时任务执行',
                '多平台任务联动',
                '智能错误处理',
                '任务执行状态监控'
            ],
            en: [
                'Custom workflow orchestration',
                'Scheduled task execution',
                'Cross-platform automation links',
                'Smart error handling and recovery',
                'Live task status monitoring'
            ]
        }
    },
    crossplatform: {
        icon: '📱',
        title: {
            zh: '跨平台',
            en: 'Cross-Platform'
        },
        description: {
            zh: '支持Windows、Mac、iOS、Android等多个平台，让您随时随地访问AI机器人。数据云端同步，无缝切换设备。',
            en: 'Available on Windows, Mac, iOS, Android, and web with seamless cloud sync for anytime access.'
        },
        features: {
            zh: [
                '支持Web、桌面、移动端',
                '响应式设计，适配各种屏幕',
                '云端数据同步',
                '离线功能支持',
                '统一的用户体验'
            ],
            en: [
                'Web, desktop, and mobile apps',
                'Responsive layouts for every screen',
                'Cloud-synced data across devices',
                'Offline-ready experience',
                'Consistent UI everywhere'
            ]
        }
    }
};

// 关于详情数据
const aboutDetails = {
    learning: {
        icon: '🧠',
        title: {
            zh: '智能学习引擎',
            en: 'Intelligent Learning Engine'
        },
        description: {
            zh: '机器人通过持续训练的神经网络，自动吸收并分析用户交互数据，理解偏好与习惯，提供越来越精准的建议与服务。',
            en: 'Continuously trained neural networks absorb user interactions, understand preferences, and deliver increasingly precise suggestions.'
        },
        features: {
            zh: [
                '自适应学习机制，针对不同用户定制策略',
                '自动汇总经验，持续优化模型表现',
                '支持离线知识库，本地化快速响应',
                '可配置的学习策略，满足不同业务需求',
                '实时监控学习质量，保证输出可信'
            ],
            en: [
                'Adaptive strategies tailored to every user',
                'Aggregated experience improves models over time',
                'Offline knowledge base for instant local replies',
                'Configurable learning policies for any business',
                'Real-time quality monitoring ensures reliability'
            ]
        }
    },
    speed: {
        icon: '⚡',
        title: {
            zh: '极速响应系统',
            en: 'Hyper-speed Response'
        },
        description: {
            zh: '依托分布式计算架构与缓存机制，AI 机器人可在毫秒级完成理解、计算与反馈，保障高并发场景下的使用体验。',
            en: 'Distributed computing and smart caching deliver millisecond understanding, computation, and feedback even under heavy concurrency.'
        },
        features: {
            zh: [
                '多节点负载均衡，保障高并发稳定性',
                '智能缓存热点请求，显著降低延迟',
                '异步处理引擎，提升处理吞吐量',
                '性能自我诊断，及时预警性能下降',
                '边缘计算部署，贴近用户快速响应'
            ],
            en: [
                'Multi-node load balancing for stable concurrency',
                'Hot-request caching drastically lowers latency',
                'Async execution engine boosts throughput',
                'Self-diagnostics warn about performance drops',
                'Edge deployment keeps responses close to users'
            ]
        }
    },
    security: {
        icon: '🔒',
        title: {
            zh: '安全可信防护',
            en: 'Trusted Security Shield'
        },
        description: {
            zh: '采用企业级加密传输与访问控制策略，为机器人提供全链路的安全保障，确保数据隐私与系统可靠性。',
            en: 'Enterprise-grade encryption and access control secure every link of the pipeline, protecting privacy and system reliability.'
        },
        features: {
            zh: [
                '端到端加密传输与多重身份认证',
                '权限精细化管理，防止越权访问',
                '实时风控监测，识别潜在攻击行为',
                '定期安全扫描与补丁更新',
                '符合 GDPR 及多项国际安全标准'
            ],
            en: [
                'End-to-end encryption with multi-factor auth',
                'Fine-grained permissions stop privilege abuse',
                'Real-time risk control detects attacks instantly',
                'Regular security scans and patch updates',
                'Complies with GDPR and global security standards'
            ]
        }
    }
};

// 功能弹窗
const featureItems = document.querySelectorAll('.feature-item');
const modal = document.getElementById('featureModal');
const modalClose = document.querySelector('.modal-close');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalFeatures = document.getElementById('modalFeatures');
window.modalInstance = modal;
window.activeModalDetail = null;

function renderModal(detail) {
    if (!detail) return;
    modalIcon.textContent = detail.icon;
    modalTitle.textContent = getLocalizedValue(detail.title);
    modalDescription.textContent = getLocalizedValue(detail.description);
    const features = detail.features?.[currentLang] || [];
    const heading = translations[currentLang]['modal.featuresTitle'] || '';
    modalFeatures.innerHTML = `
        <h3>${heading}</h3>
        <ul>
            ${features.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
}

// 打开弹窗
function openModal(detail) {
    if (!detail) return;
    window.activeModalDetail = detail;
    renderModal(detail);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 关闭弹窗
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    window.activeModalDetail = null;
}

// 为每个功能项添加点击事件
featureItems.forEach(item => {
    item.addEventListener('click', () => {
        const featureKey = item.getAttribute('data-feature');
        const detail = featureDetails[featureKey];
        openModal(detail);
    });
});

// 关于模块点击事件
const aboutCards = document.querySelectorAll('.about-card');
aboutCards.forEach(card => {
    card.addEventListener('click', () => {
        const aboutKey = card.getAttribute('data-about');
        const detail = aboutDetails[aboutKey];
        openModal(detail);
    });
});

// 关闭按钮事件
modalClose.addEventListener('click', closeModal);

// 点击遮罩层关闭
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ESC键关闭
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// 表单提交 - 打开 Google 邮箱编辑器
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 获取表单数据
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const message = document.getElementById('contactMessage').value.trim();
        
        // 验证表单
        if (!name || !email || !message) {
            alert(translations[currentLang]['contact.alert']);
            return;
        }
        
        // 构建邮件内容
        const recipient = 'contact@airobot.com'; // 收件人邮箱
        const template = emailTemplates[currentLang];
        const subject = encodeURIComponent(template.subject(name));
        const body = encodeURIComponent(template.body(name, email, message));
        
        // 构建 Google 邮箱链接
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${subject}&body=${body}`;
        
        // 打开邮箱客户端
        const gmailWindow = window.open(gmailLink, '_blank');
        if (!gmailWindow) {
            // 回退到 mailto
            window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
        }
        
        // 显示成功提示
        const button = contactForm.querySelector('button');
        button.textContent = translations[currentLang]['contact.status.opening'];
        button.style.background = 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)';
        
        setTimeout(() => {
            button.textContent = translations[currentLang]['contact.status.opened'];
            setTimeout(() => {
                button.textContent = translations[currentLang]['contact.form.submit'];
                button.style.background = '';
                contactForm.reset();
            }, 2000);
        }, 500);
    });
}

// 鼠标跟随效果（可选）
document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    document.body.appendChild(cursor);
    
    setTimeout(() => {
        cursor.remove();
    }, 500);
});

// 添加光标轨迹样式
const style = document.createElement('style');
style.textContent = `
    .cursor-trail {
        position: fixed;
        width: 4px;
        height: 4px;
        background: var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.6;
        animation: fadeOut 0.5s ease-out forwards;
    }
    
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(style);


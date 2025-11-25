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
        title: '智能对话',
        description: '我们的AI机器人采用最先进的自然语言处理技术，能够理解复杂的上下文关系，进行流畅、自然的对话交流。无论是日常咨询、技术支持还是创意讨论，都能为您提供专业、准确的回应。',
        features: [
            '支持多轮对话，理解上下文语境',
            '情感识别，能够感知用户情绪',
            '个性化回复，根据用户习惯调整',
            '多场景适配，适用于各种对话场景',
            '实时学习，不断提升对话质量'
        ]
    },
    analysis: {
        icon: '📊',
        title: '数据分析',
        description: '强大的数据处理能力，能够快速分析海量数据，识别关键模式和趋势。通过智能算法生成直观的可视化报告，帮助您做出更明智的决策。',
        features: [
            '支持多种数据格式导入',
            '自动识别数据模式和异常',
            '生成专业的数据可视化图表',
            '提供数据洞察和建议',
            '支持实时数据监控和分析'
        ]
    },
    creative: {
        icon: '🎨',
        title: '创意生成',
        description: 'AI驱动的创意工具，能够激发无限灵感。无论是文案创作、设计构思还是内容策划，都能为您提供新颖独特的创意方案。',
        features: [
            '多领域创意生成（文案、设计、策划等）',
            '风格多样化，满足不同需求',
            '快速迭代，提供多个方案选择',
            '结合最新趋势和热点',
            '支持创意优化和改进建议'
        ]
    },
    multilang: {
        icon: '🌐',
        title: '多语言支持',
        description: '打破语言壁垒，支持全球主要语言。无论是中文、英文、日文还是其他语言，都能提供准确、流畅的交流体验。',
        features: [
            '支持50+种全球主要语言',
            '精准的翻译和本地化',
            '理解不同语言的文化背景',
            '实时语言切换',
            '保持原意的准确传达'
        ]
    },
    automation: {
        icon: '🔧',
        title: '自动化任务',
        description: '智能自动化系统，能够处理重复性任务，解放您的双手。通过简单的配置，即可实现复杂的工作流程自动化。',
        features: [
            '自定义工作流程',
            '定时任务执行',
            '多平台任务联动',
            '智能错误处理',
            '任务执行状态监控'
        ]
    },
    crossplatform: {
        icon: '📱',
        title: '跨平台',
        description: '支持Windows、Mac、iOS、Android等多个平台，让您随时随地访问AI机器人。数据云端同步，无缝切换设备。',
        features: [
            '支持Web、桌面、移动端',
            '响应式设计，适配各种屏幕',
            '云端数据同步',
            '离线功能支持',
            '统一的用户体验'
        ]
    }
};

// 关于详情数据
const aboutDetails = {
    learning: {
        icon: '🧠',
        title: '智能学习引擎',
        description: '机器人通过持续训练的神经网络，自动吸收并分析用户交互数据，理解偏好与习惯，提供越来越精准的建议与服务。',
        features: [
            '自适应学习机制，针对不同用户定制策略',
            '自动汇总经验，持续优化模型表现',
            '支持离线知识库，本地化快速响应',
            '可配置的学习策略，满足不同业务需求',
            '实时监控学习质量，保证输出可信'
        ]
    },
    speed: {
        icon: '⚡',
        title: '极速响应系统',
        description: '依托分布式计算架构与缓存机制，AI 机器人可在毫秒级完成理解、计算与反馈，保障高并发场景下的使用体验。',
        features: [
            '多节点负载均衡，保障高并发稳定性',
            '智能缓存热点请求，显著降低延迟',
            '异步处理引擎，提升处理吞吐量',
            '性能自我诊断，及时预警性能下降',
            '边缘计算部署，贴近用户快速响应'
        ]
    },
    security: {
        icon: '🔒',
        title: '安全可信防护',
        description: '采用企业级加密传输与访问控制策略，为机器人提供全链路的安全保障，确保数据隐私与系统可靠性。',
        features: [
            '端到端加密传输与多重身份认证',
            '权限精细化管理，防止越权访问',
            '实时风控监测，识别潜在攻击行为',
            '定期安全扫描与补丁更新',
            '符合 GDPR 及多项国际安全标准'
        ]
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

// 打开弹窗
function openModal(detail) {
    if (!detail) return;
    
    modalIcon.textContent = detail.icon;
    modalTitle.textContent = detail.title;
    modalDescription.textContent = detail.description;
    
    // 生成功能列表
    modalFeatures.innerHTML = `
        <h3>核心特性</h3>
        <ul>
            ${detail.features.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 关闭弹窗
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
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
            alert('请填写所有必填字段');
            return;
        }
        
        // 构建邮件内容
        const recipient = 'contact@airobot.com'; // 收件人邮箱
        const subject = encodeURIComponent(`来自 ${name} 的咨询 - AI Robot`);
        const body = encodeURIComponent(
            `您好，\n\n` +
            `我是 ${name}，邮箱：${email}\n\n` +
            `我的消息：\n${message}\n\n` +
            `期待您的回复！\n\n` +
            `此致\n${name}`
        );
        
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
        const originalText = button.textContent;
        button.textContent = '正在打开 Gmail...';
        button.style.background = 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)';
        
        setTimeout(() => {
            button.textContent = '已打开邮箱';
            setTimeout(() => {
                button.textContent = originalText;
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


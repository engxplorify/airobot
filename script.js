// 语言数据
const translations = {
    zh: {
        title: '天文探索 - 探索宇宙的奥秘',
        logo: '天文探索',
        'logo.subtitle': 'ASTRONOMY EXPLORATION',
        'nav.home': '主页',
        'nav.about': '关于我',
        'nav.projects': '项目介绍',
        'nav.contact': '联系我',
        'hero.title1': '探索宇宙',
        'hero.title2': '发现无限可能',
        'hero.subtitle': '在浩瀚的星空中，寻找属于你的那颗星',
        'hero.btn1': '开始探索',
        'hero.btn2': '了解更多',
        'feature.obs.title': '天文观测',
        'feature.obs.desc': '探索遥远星系，观测宇宙奇观',
        'feature.photo.title': '星空摄影',
        'feature.photo.desc': '捕捉星空的美丽瞬间',
        'feature.planet.title': '行星研究',
        'feature.planet.desc': '深入了解太阳系的行星',
        'feature.universe.title': '宇宙探索',
        'feature.universe.desc': '追寻宇宙的起源与未来',
        'about.title': '关于我',
        'about.subtitle': '天文爱好者',
        'about.p1': '我是一名热爱天文学的探索者，对宇宙的奥秘充满好奇。从孩提时代起，我就被夜空中闪烁的星星所吸引，这份热情一直伴随着我成长。',
        'about.p2': '我致力于分享天文知识，记录观测经历，并与同样热爱天文的伙伴们交流学习。我相信，在探索宇宙的过程中，我们不仅能了解宇宙，更能了解自己。',
        'about.skills.title': '技能与兴趣',
        'about.skills.s1': '天文观测',
        'about.skills.s2': '星空摄影',
        'about.skills.s3': '天体物理',
        'about.skills.s4': '数据处理',
        'about.skills.s5': '科学传播',
        'projects.title': '项目介绍',
        'projects.p1.title': '月球观测项目',
        'projects.p1.desc': '长期跟踪观测月球表面变化，记录月相变化规律，分析月球地质特征。',
        'projects.p1.tag1': '观测',
        'projects.p1.tag2': '记录',
        'projects.p1.tag3': '分析',
        'projects.p2.title': '深空天体摄影',
        'projects.p2.desc': '使用专业设备拍摄深空天体，包括星云、星系、星团等，记录宇宙的壮美。',
        'projects.p2.tag1': '摄影',
        'projects.p2.tag2': '深空',
        'projects.p2.tag3': '后期',
        'projects.p3.title': '卫星追踪系统',
        'projects.p3.desc': '开发实时卫星追踪系统，预测卫星过境时间，帮助天文爱好者观测人造卫星。',
        'projects.p3.tag1': '开发',
        'projects.p3.tag2': '追踪',
        'projects.p3.tag3': '预测',
        'projects.p4.title': '行星数据可视化',
        'projects.p4.desc': '收集整理行星数据，通过可视化方式展示太阳系各行星的特征和轨道信息。',
        'projects.p4.tag1': '数据',
        'projects.p4.tag2': '可视化',
        'projects.p4.tag3': '教育',
        'contact.title': '联系我',
        'contact.subtitle': '让我们一起探索宇宙',
        'contact.desc': '如果您对天文学感兴趣，或者想要交流观测经验，欢迎与我联系！',
        'contact.email.label': '邮箱',
        'contact.social.label': '社交媒体',
        'contact.social.desc': '关注我的天文分享账号',
        'contact.location.label': '位置',
        'contact.location.desc': '中国 · 北京',
        'contact.form.name': '姓名',
        'contact.form.namePlaceholder': '请输入您的姓名',
        'contact.form.email': '邮箱',
        'contact.form.emailPlaceholder': '请输入您的邮箱',
        'contact.form.subject': '主题',
        'contact.form.subjectPlaceholder': '请输入邮件主题',
        'contact.form.message': '留言',
        'contact.form.messagePlaceholder': '请输入您的留言...',
        'contact.form.submit': '发送消息',
        'footer.brand': '天文探索',
        'footer.text': '探索无限，发现可能.'
    },
    en: {
        title: 'Astronomy Exploration - Discover the Universe',
        logo: 'Astro Explore',
        'logo.subtitle': 'ASTRONOMY EXPLORATION',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.title1': 'Explore the Universe',
        'hero.title2': 'Discover Infinite Possibilities',
        'hero.subtitle': 'In the vast starry sky, find your own star',
        'hero.btn1': 'Start Exploring',
        'hero.btn2': 'Learn More',
        'feature.obs.title': 'Astronomical Observation',
        'feature.obs.desc': 'Explore distant galaxies and observe cosmic wonders',
        'feature.photo.title': 'Astrophotography',
        'feature.photo.desc': 'Capture the beautiful moments of the starry sky',
        'feature.planet.title': 'Planetary Research',
        'feature.planet.desc': 'Deep understanding of planets in the solar system',
        'feature.universe.title': 'Universe Exploration',
        'feature.universe.desc': 'Pursue the origin and future of the universe',
        'about.title': 'About Me',
        'about.subtitle': 'Astronomy Enthusiast',
        'about.p1': 'I am an explorer who loves astronomy and is full of curiosity about the mysteries of the universe. Since childhood, I have been attracted by the twinkling stars in the night sky, and this passion has accompanied me throughout my growth.',
        'about.p2': 'I am committed to sharing astronomical knowledge, recording observation experiences, and exchanging and learning with partners who also love astronomy. I believe that in the process of exploring the universe, we can not only understand the universe, but also understand ourselves.',
        'about.skills.title': 'Skills & Interests',
        'about.skills.s1': 'Astronomical Observation',
        'about.skills.s2': 'Astrophotography',
        'about.skills.s3': 'Astrophysics',
        'about.skills.s4': 'Data Processing',
        'about.skills.s5': 'Science Communication',
        'projects.title': 'Projects',
        'projects.p1.title': 'Lunar Observation Project',
        'projects.p1.desc': 'Long-term tracking and observation of lunar surface changes, recording lunar phase change patterns, and analyzing lunar geological features.',
        'projects.p1.tag1': 'Observation',
        'projects.p1.tag2': 'Recording',
        'projects.p1.tag3': 'Analysis',
        'projects.p2.title': 'Deep Sky Astrophotography',
        'projects.p2.desc': 'Using professional equipment to photograph deep sky objects, including nebulae, galaxies, star clusters, etc., recording the magnificence of the universe.',
        'projects.p2.tag1': 'Photography',
        'projects.p2.tag2': 'Deep Sky',
        'projects.p2.tag3': 'Post-processing',
        'projects.p3.title': 'Satellite Tracking System',
        'projects.p3.desc': 'Develop a real-time satellite tracking system to predict satellite transit times and help astronomy enthusiasts observe artificial satellites.',
        'projects.p3.tag1': 'Development',
        'projects.p3.tag2': 'Tracking',
        'projects.p3.tag3': 'Prediction',
        'projects.p4.title': 'Planetary Data Visualization',
        'projects.p4.desc': 'Collect and organize planetary data, and display the characteristics and orbital information of planets in the solar system through visualization.',
        'projects.p4.tag1': 'Data',
        'projects.p4.tag2': 'Visualization',
        'projects.p4.tag3': 'Education',
        'contact.title': 'Contact Me',
        'contact.subtitle': 'Let\'s Explore the Universe Together',
        'contact.desc': 'If you are interested in astronomy or want to exchange observation experiences, please feel free to contact me!',
        'contact.email.label': 'Email',
        'contact.social.label': 'Social Media',
        'contact.social.desc': 'Follow my astronomy sharing account',
        'contact.location.label': 'Location',
        'contact.location.desc': 'Beijing, China',
        'contact.form.name': 'Name',
        'contact.form.namePlaceholder': 'Please enter your name',
        'contact.form.email': 'Email',
        'contact.form.emailPlaceholder': 'Please enter your email',
        'contact.form.subject': 'Subject',
        'contact.form.subjectPlaceholder': 'Please enter the subject',
        'contact.form.message': 'Message',
        'contact.form.messagePlaceholder': 'Please enter your message...',
        'contact.form.submit': 'Send Message',
        'footer.brand': 'Astronomy Exploration',
        'footer.text': 'Explore infinitely, discover possibilities.'
    }
};

// 当前语言
let currentLang = localStorage.getItem('language') || 'zh';

// Tab切换功能
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // 初始化语言
    updateLanguage(currentLang);

    // 语言切换按钮
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            currentLang = currentLang === 'zh' ? 'en' : 'zh';
            localStorage.setItem('language', currentLang);
            updateLanguage(currentLang);
            langToggle.querySelector('.lang-text').textContent = currentLang === 'zh' ? 'EN' : '中';
        });
    }

    // 初始化：显示主页
    showTab('home');

    // 为每个导航链接添加点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetTab = this.getAttribute('data-tab');
            showTab(targetTab);
        });
    });

    function showTab(tabName) {
        // 移除所有活动状态
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // 激活选中的tab
        const activeLink = document.querySelector(`[data-tab="${tabName}"]`);
        const activeContent = document.getElementById(tabName);

        if (activeLink && activeContent) {
            activeLink.classList.add('active');
            activeContent.classList.add('active');
        }

        // 滚动到顶部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // 表单提交处理
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // 这里可以添加实际的表单提交逻辑
            console.log('表单数据:', formData);
            
            // 显示成功消息
            const successMsg = currentLang === 'zh' ? '感谢您的留言！我会尽快回复您。' : 'Thank you for your message! I will reply to you as soon as possible.';
            alert(successMsg);
            
            // 重置表单
            contactForm.reset();
        });
    }

    // 主页按钮点击事件
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(button => {
        button.addEventListener('click', function() {
            const btnText = this.getAttribute('data-i18n');
            if (btnText === 'hero.btn1') {
                showTab('projects');
            } else if (btnText === 'hero.btn2') {
                showTab('about');
            }
        });
    });

    // 添加滚动时的导航栏效果
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.85)';
        }
        
        lastScroll = currentScroll;
    });

    // 添加平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// 更新语言
function updateLanguage(lang) {
    // 更新所有带有data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // 更新标题
    if (translations[lang] && translations[lang]['title']) {
        document.title = translations[lang]['title'];
    }

    // 更新placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // 更新语言切换按钮文本
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.querySelector('.lang-text').textContent = lang === 'zh' ? 'EN' : '中';
    }
}


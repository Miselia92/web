export type Language = 'en' | 'zh';

export const LANGUAGES = {
    en: 'English',
    zh: '中文',
} as const;

export const DEFAULT_LANGUAGE: Language = 'en';

export const UI_TRANSLATIONS = {
    en: {
        nav: {
            projects: 'Projects',
            writing: 'Writing',
            connect: 'Connect',
            about: 'About',
            biography: 'Biography',
        },
        categories: {
            photography: 'Photography',
            'video-art': 'Video Art',
            documentary: 'Documentary',
            printmaking: 'Printmaking',
            others: 'Others',
        },
        common: {
            readMore: 'Read More',
            backToHome: 'Back to Home',
            back: 'Back',
            language: 'Language',
        },
    },
    zh: {
        nav: {
            projects: '作品',
            writing: '文章',
            connect: '聯繫方式',
            about: '關於',
            biography: '簡歷',
        },
        categories: {
            photography: '攝影',
            'video-art': '錄像',
            documentary: '紀錄片',
            printmaking: '版畫',
            others: '其他',
        },
        common: {
            readMore: '閱讀更多',
            backToHome: '返回首頁',
            back: '返回',
            language: '語言',
        },
    },
} as const;

export function getTranslation(lang: Language) {
    return UI_TRANSLATIONS[lang] || UI_TRANSLATIONS[DEFAULT_LANGUAGE];
}

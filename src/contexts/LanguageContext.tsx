
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh-TW';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.courses': 'Courses',
    'nav.blog': 'Blog',
    'nav.signup': 'Sign up',
    
    // Hero Section
    'hero.badge': 'AI in Business',
    'hero.title': 'AI: The Future of Learning',
    'hero.subtitle': 'How artificial intelligence is personalizing and transforming business automation.',
    'hero.chooseProgram': 'Choose program',
    'hero.partners': 'Partners',
    'hero.students': 'Students',
    'hero.instructors': 'Instructors',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Choose your path to AI mastery and business automation excellence',
    'services.training.title': 'Expert-Led AI Training',
    'services.training.description': 'Comprehensive learning materials designed by industry experts',
    'services.training.benefit1': 'Actionable Courses',
    'services.training.benefit2': 'Practical Frameworks',
    'services.training.benefit3': 'Team Upskilling',
    'services.training.button': 'View Courses',
    'services.automation.title': 'Bespoke Automation Solutions',
    'services.automation.description': 'Custom-built automation systems tailored to your business needs',
    'services.automation.benefit1': 'Increase Efficiency',
    'services.automation.benefit2': 'Reduce Errors',
    'services.automation.benefit3': 'Scale Operations',
    'services.automation.button': 'Get Free Consultation',
    
    // Technology Section
    'tech.title': 'Powered by Leading Technologies',
    'tech.subtitle': 'We master the tools that drive modern business automation',
    'tech.n8n': 'Workflow Automation',
    'tech.make': 'Integration Platform',
    'tech.zapier': 'App Connections',
    'tech.python': 'Data Processing',
    'tech.javascript': 'Web Development',
    'tech.openai': 'AI Integration',
    
    // Journey Section
    'journey.title': 'Your Automation Journey',
    'journey.subtitle': 'Our proven 4-step process ensures successful automation implementation',
    'journey.step1.title': 'Discovery Call',
    'journey.step1.description': 'We understand your needs and identify automation opportunities',
    'journey.step2.title': 'Strategy & Design',
    'journey.step2.description': 'Create a detailed blueprint tailored to your business processes',
    'journey.step3.title': 'Build & Integrate',
    'journey.step3.description': 'Develop and seamlessly integrate your custom automation solution',
    'journey.step4.title': 'Launch & Support',
    'journey.step4.description': 'Deploy your solution and provide ongoing support and optimization',
    
    // Learning Materials
    'learning.title': 'Featured Learning Materials',
    'learning.subtitle': 'Expert-crafted courses designed to accelerate your AI and automation journey',
    'learning.startLearning': 'Start Learning',
    'learning.beginner': 'Beginner',
    'learning.intermediate': 'Intermediate',
    'learning.advanced': 'Advanced',
    'learning.marketing': 'Marketing',
    'learning.development': 'Development',
    'learning.ai': 'AI',
    'learning.migration': 'Migration',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Join hundreds of businesses that have transformed their operations with AI Formula',
    
    // Contact Section
    'contact.title': 'Ready to Transform Your Business?',
    'contact.subtitle': "Let's discuss how AI Formula can help you master AI and automate your business processes",
    'contact.form.title': 'Get In Touch',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.message': 'How can we help?',
    'contact.form.messagePlaceholder': 'Tell us about your automation needs or learning goals...',
    'contact.form.send': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Location',
    'contact.why.title': 'Why Choose AI Formula?',
    'contact.why.benefit1': 'Expert-led training with proven methodologies',
    'contact.why.benefit2': 'Custom automation solutions tailored to your needs',
    'contact.why.benefit3': 'Ongoing support and optimization',
    'contact.why.benefit4': 'ROI-focused approach with measurable results',
  },
  'zh-TW': {
    // Navigation
    'nav.home': '首頁',
    'nav.about': '關於我們',
    'nav.courses': '課程',
    'nav.blog': '部落格',
    'nav.signup': '註冊',
    
    // Hero Section
    'hero.badge': '商業AI',
    'hero.title': 'AI：學習的未來',
    'hero.subtitle': '人工智慧如何個人化並轉型商業自動化。',
    'hero.chooseProgram': '選擇課程',
    'hero.partners': '合作夥伴',
    'hero.students': '學員',
    'hero.instructors': '講師',
    
    // Services Section
    'services.title': '我們的服務',
    'services.subtitle': '選擇您通往AI精通和商業自動化卓越的道路',
    'services.training.title': '專家主導的AI培訓',
    'services.training.description': '由行業專家設計的全面學習材料',
    'services.training.benefit1': '實用課程',
    'services.training.benefit2': '實務框架',
    'services.training.benefit3': '團隊技能提升',
    'services.training.button': '查看課程',
    'services.automation.title': '客製化自動化解決方案',
    'services.automation.description': '為您的業務需求量身打造的自動化系統',
    'services.automation.benefit1': '提高效率',
    'services.automation.benefit2': '減少錯誤',
    'services.automation.benefit3': '擴大營運',
    'services.automation.button': '獲得免費諮詢',
    
    // Technology Section
    'tech.title': '由領先技術驅動',
    'tech.subtitle': '我們精通推動現代商業自動化的工具',
    'tech.n8n': '工作流程自動化',
    'tech.make': '整合平台',
    'tech.zapier': '應用程式連接',
    'tech.python': '數據處理',
    'tech.javascript': '網頁開發',
    'tech.openai': 'AI整合',
    
    // Journey Section
    'journey.title': '您的自動化之旅',
    'journey.subtitle': '我們經過驗證的4步驟流程確保成功的自動化實施',
    'journey.step1.title': '探索會議',
    'journey.step1.description': '我們了解您的需求並識別自動化機會',
    'journey.step2.title': '策略與設計',
    'journey.step2.description': '創建針對您業務流程的詳細藍圖',
    'journey.step3.title': '建構與整合',
    'journey.step3.description': '開發並無縫整合您的客製自動化解決方案',
    'journey.step4.title': '啟動與支援',
    'journey.step4.description': '部署您的解決方案並提供持續的支援和優化',
    
    // Learning Materials
    'learning.title': '精選學習材料',
    'learning.subtitle': '專家製作的課程，旨在加速您的AI和自動化之旅',
    'learning.startLearning': '開始學習',
    'learning.beginner': '初級',
    'learning.intermediate': '中級',
    'learning.advanced': '高級',
    'learning.marketing': '行銷',
    'learning.development': '開發',
    'learning.ai': 'AI',
    'learning.migration': '遷移',
    
    // Testimonials
    'testimonials.title': '客戶見證',
    'testimonials.subtitle': '加入數百家已透過AI Formula轉型營運的企業',
    
    // Contact Section
    'contact.title': '準備好轉型您的業務了嗎？',
    'contact.subtitle': '讓我們討論AI Formula如何幫助您精通AI並自動化您的業務流程',
    'contact.form.title': '聯絡我們',
    'contact.form.name': '姓名',
    'contact.form.email': '電子郵件地址',
    'contact.form.message': '我們如何幫助您？',
    'contact.form.messagePlaceholder': '告訴我們您的自動化需求或學習目標...',
    'contact.form.send': '發送訊息',
    'contact.info.title': '聯絡資訊',
    'contact.info.email': '電子郵件',
    'contact.info.phone': '電話',
    'contact.info.location': '地點',
    'contact.why.title': '為什麼選擇AI Formula？',
    'contact.why.benefit1': '具有成熟方法論的專家主導培訓',
    'contact.why.benefit2': '針對您需求量身定制的自動化解決方案',
    'contact.why.benefit3': '持續的支援和優化',
    'contact.why.benefit4': '專注於ROI的可衡量結果方法',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

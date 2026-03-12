export type Lang = "ko" | "en" | "ja";

export type ResumeContent = {
  nav: {
    profile: string;
    portfolio: string;
  };
  hero: {
    name: string;
    role: string;
    summary: string;
    email: string;
    phone: string;
    address: string;
    github: string;
    birth: string;
  };
  sectionTitles: {
    education: string;
    experience: string;
    awards: string;
    skills: string;
  };
  education: Array<{
    school: string;
    major: string;
    period: string;
    detail?: string;
  }>;
  experience: Array<{
    title: string;
    company: string;
    period: string;
    duration?: string;
    bullets: string[];
  }>;
  awards: Array<{
    title: string;
    organization: string;
    detail: string;
  }>;
  skillLabels: {
    frontendBackend: string;
    ai: string;
    design: string;
  };
  skills: {
    frontendBackend: string[];
    ai: string[];
    design: string[];
  };
};
export const resumeContent: Record<Lang, ResumeContent> = {
  ko: {
    nav: {
      profile: "Profile",
      portfolio: "Portfolio",
    },
    hero: {
      name: "이동훈",
      role: "Frontend / Full Stack Developer",
      summary:
        "웹 애플리케이션 개발과 사용자 경험 개선에 관심이 있는 개발자입니다. React, Next.js, TypeScript 기반의 프론트엔드와 FastAPI 기반 백엔드 경험을 가지고 있으며, AI 프로젝트와 해커톤 경험도 보유하고 있습니다.",
      email: "ldh7588@gmail.com",
      phone: "+82 10-5516-2468",
      address: "한국",
      github: "https://github.com/bluelemon61",
      birth: "2001.03.30",
    },
    sectionTitles: {
      education: "학력",
      experience: "경험",
      awards: "수상",
      skills: "기술 스택",
    },
    education: [
      {
        school: "부산대학교",
        major: "정보컴퓨터공학부",
        period: "2020.03 ~ 2026.08",
        detail: "졸업예정 / GPA 3.84 / 4.5",
      },
      {
        school: "시즈오카대학, 일본",
        major: "정보과학과",
        period: "2025.10 ~ 2026.03",
        detail: "교환학생",
      },
    ],
    experience: [
      {
        title: "인턴 · Front-End",
        company: "㈜소프트스퀘어드",
        period: "2025.01 ~ 2025.02",
        duration: "2개월",
        bullets: [
          "SI 프로젝트 3건의 QC 및 하자보수 수행",
          "React 기반 프론트엔드 업무 담당",
        ],
      },
      {
        title: "인턴 · Full Stack Developer",
        company: "㈜폭씨",
        period: "2024.07 ~ 2024.08",
        duration: "2개월",
        bullets: [
          "기존 프로젝트 유지보수 및 신규 프로젝트 프로토타입 개발",
          "React 프론트엔드, FastAPI 백엔드, Flutter 개발 경험",
        ],
      },
    ],
    awards: [
      {
        title: "캡스톤디자인 - 소프트웨어·인공지능 분과 은상",
        organization: "부산대학교 정보컴퓨터공학부",
        detail: "딥러닝 모델을 활용한 자연스러운 이미지 번역 및 텍스트 합성",
      },
      {
        title: "KHUthon 2024 최우수상",
        organization: "경희대학교",
        detail:
          "컴퓨팅 자원 절약을 도와주는 AI 비서 데스크탑 앱 / Electron, Next.js",
      },
      {
        title: "공사현장 안전 데이터 AI 해커톤 대상",
        organization: "NIA & 일주지앤에스",
        detail: "PyTorch, EfficientNet 기반 분류 모델 학습",
      },
    ],
    skillLabels: {
      frontendBackend: "Frontend & Backend",
      ai: "AI",
      design: "Design",
    },
    skills: {
      frontendBackend: [
        "TypeScript",
        "Tailwind CSS",
        "React",
        "Next.js",
        "FastAPI",
      ],
      ai: ["PyTorch", "Python"],
      design: ["Figma"],
    },
  },
  en: {
    nav: {
      profile: "Profile",
      portfolio: "Portfolio",
    },
    hero: {
      name: "Donghoon Lee",
      role: "Frontend / Full Stack Developer",
      summary:
        "A developer interested in web application development and improving user experience. Experienced in frontend development using React, Next.js, and TypeScript, backend development with FastAPI, and AI projects including hackathons.",
      email: "ldh7588@gmail.com",
      phone: "+82 10-5516-2468",
      address: "Republic of Korea",
      github: "https://github.com/bluelemon61",
      birth: "2001.03.30",
    },
    sectionTitles: {
      education: "Education",
      experience: "Experience",
      awards: "Awards",
      skills: "Technical Skills",
    },
    education: [
      {
        school: "Pusan National University, Republic of Korea",
        major: "School of Computer Science and Engineering",
        period: "2020.03 ~ 2026.08",
        detail: "Expected Graduation / GPA 3.84 / 4.5",
      },
      {
        school: "Shizuoka University, Japan",
        major: "Department of Information Science",
        period: "2025.10 ~ 2026.03",
        detail: "Exchange Student",
      },
    ],
    experience: [
      {
        title: "Intern · Front-End",
        company: "Soft Squared",
        period: "2025.01 ~ 2025.02",
        duration: "2 months",
        bullets: [
          "Performed QC and defect fixes for three SI projects",
          "Responsible for React-based frontend development",
        ],
      },
      {
        title: "Intern · Full Stack Developer",
        company: "Foxee",
        period: "2024.07 ~ 2024.08",
        duration: "2 months",
        bullets: [
          "Maintained an existing project and developed a prototype for a new project",
          "Experience with React frontend, FastAPI backend, and Flutter development",
        ],
      },
    ],
    awards: [
      {
        title: "Capstone Design - Silver Prize (Software & AI Division)",
        organization:
          "Pusan National University, School of Computer Science and Engineering",
        detail:
          "Natural image translation and text synthesis using deep learning models",
      },
      {
        title: "KHUthon 2024 Top Excellence Award",
        organization: "Kyung Hee University",
        detail:
          "Desktop AI assistant application for saving computing resources / Electron, Next.js",
      },
      {
        title: "Grand Prize, Construction Site Safety Data AI Hackathon",
        organization: "NIA & ILJOO GnS",
        detail: "Trained classification models using PyTorch and EfficientNet",
      },
    ],
    skillLabels: {
      frontendBackend: "Frontend & Backend",
      ai: "AI",
      design: "Design",
    },
    skills: {
      frontendBackend: [
        "TypeScript",
        "Tailwind CSS",
        "React",
        "Next.js",
        "FastAPI",
      ],
      ai: ["PyTorch", "Python"],
      design: ["Figma"],
    },
  },
  ja: {
    nav: {
      profile: "Profile",
      portfolio: "Portfolio",
    },
    hero: {
      name: "イ・ドンフン",
      role: "Frontend / Full Stack Developer",
      summary:
        "Webアプリケーション開発とユーザー体験の改善に関心を持つ開発者です。React・Next.js・TypeScriptを用いたフロントエンド開発、FastAPIを用いたバックエンド開発、さらにAIプロジェクトやハッカソンの経験があります。",
      email: "ldh7588@gmail.com",
      phone: "+82 10-5516-2468",
      address: "韓国",
      github: "https://github.com/bluelemon61",
      birth: "2001.03.30",
    },
    sectionTitles: {
      education: "学歴",
      experience: "経験",
      awards: "受賞",
      skills: "技術スタック",
    },
    education: [
      {
        school: "釜山大学校、韓国",
        major: "情報コンピュータ工学部",
        period: "2020.03 ~ 2026.08",
        detail: "卒業予定 / GPA 3.84 / 4.5",
      },
      {
        school: "静岡大学",
        major: "情報科学科",
        period: "2025.10 ~ 2026.03",
        detail: "交換留学",
      },
    ],
    experience: [
      {
        title: "インターン · Front-End",
        company: "Soft Squared",
        period: "2025.01 ~ 2025.02",
        duration: "2ヶ月",
        bullets: [
          "SIプロジェクト3件のQCおよび不具合修正を担当",
          "Reactベースのフロントエンド開発を担当",
        ],
      },
      {
        title: "インターン · Full Stack Developer",
        company: "Foxee",
        period: "2024.07 ~ 2024.08",
        duration: "2ヶ月",
        bullets: [
          "既存プロジェクトの保守および新規プロジェクトのプロトタイプ開発",
          "Reactフロントエンド、FastAPIバックエンド、Flutter開発を経験",
        ],
      },
    ],
    awards: [
      {
        title: "キャップストーンデザイン 銀賞（ソフトウェア・AI部門）",
        organization: "釜山大学校 情報コンピュータ工学部",
        detail:
          "ディープラーニングモデルを用いた自然な画像翻訳およびテキスト合成",
      },
      {
        title: "KHUthon 2024 最優秀賞",
        organization: "慶熙大学校",
        detail:
          "計算資源の節約を支援するAIアシスタントデスクトップアプリ / Electron, Next.js",
      },
      {
        title: "工事現場安全データAIハッカソン 大賞",
        organization: "NIA & ILJOO GnS",
        detail: "PyTorch・EfficientNetを用いた分類モデルの学習",
      },
    ],
    skillLabels: {
      frontendBackend: "Frontend & Backend",
      ai: "AI",
      design: "Design",
    },
    skills: {
      frontendBackend: [
        "TypeScript",
        "Tailwind CSS",
        "React",
        "Next.js",
        "FastAPI",
      ],
      ai: ["PyTorch", "Python"],
      design: ["Figma"],
    },
  },
};

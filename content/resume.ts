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
        "웹 애플리케이션 개발과 인프라 영역에 관심이 있는 개발자입니다. React, Next.js, TypeScript 기반의 프론트엔드와 FastAPI 기반 백엔드 경험을 가지고 있으며, AI 프로젝트와 해커톤 경험도 보유하고 있습니다.",
      email: "ldh7588@gmail.com",
      phone: "010-5516-2468",
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
        school: "시즈오카대학",
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
        organization: "부산대학교 정보컴퓨터공학부, 2025.10",
        detail: "딥러닝 모델을 활용한 자연스러운 이미지 번역 및 텍스트 합성",
      },
      {
        title: "KHUthon 2024 최우수상",
        organization: "경희대학교, 2024.05",
        detail:
          "컴퓨팅 자원 절약을 도와주는 AI 비서 데스크탑 앱 / Electron, Next.js",
      },
      {
        title: "공사현장 안전 데이터 AI 해커톤 대상",
        organization: "NIA & ㈜일주지앤에스, 2023.12",
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
      name: "Donghun Lee",
      role: "Frontend / Full Stack Developer",
      summary:
        "I am a developer interested in web application development and infrastructure. I have experience building frontend applications with React, Next.js, and TypeScript, as well as backend services using FastAPI. I have also participated in AI projects and hackathons.",
      email: "ldh7588@gmail.com",
      phone: "+82 10-5516-2468",
      address: "South Korea",
      github: "https://github.com/bluelemon61",
      birth: "2001.03.30",
    },
    sectionTitles: {
      education: "Education",
      experience: "Experience",
      awards: "Awards",
      skills: "Skills",
    },
    education: [
      {
        school: "Pusan National University",
        major: "Computer Science and Engineering",
        period: "2020.03 ~ 2026.08",
        detail: "Expected Graduation / GPA 3.84 / 4.5",
      },
      {
        school: "Shizuoka University",
        major: "Computer Science",
        period: "2025.10 ~ 2026.03",
        detail: "Exchange Student",
      },
    ],
    experience: [
      {
        title: "Intern · Front-End",
        company: "Soft Squared Inc.",
        period: "2025.01 ~ 2025.02",
        duration: "2 months",
        bullets: [
          "Performed QC and maintenance for three SI projects",
          "Worked on React-based frontend development",
        ],
      },
      {
        title: "Intern · Full Stack Developer",
        company: "Foxee Inc.",
        period: "2024.07 ~ 2024.08",
        duration: "2 months",
        bullets: [
          "Maintained existing projects and developed prototypes for new services",
          "Experience with React frontend, FastAPI backend, and Flutter development",
        ],
      },
    ],
    awards: [
      {
        title: "Capstone Design - Silver Prize (Software & AI Division)",
        organization:
          "Pusan National University, School of Computer Science, 2025.10",
        detail:
          "Natural image translation and text synthesis using deep learning models",
      },
      {
        title: "KHUthon 2024 Grand Prize",
        organization: "Kyung Hee University, 2024.05",
        detail:
          "AI assistant desktop app to reduce computing resource usage / Electron, Next.js",
      },
      {
        title: "AI Hackathon Grand Prize for Construction Site Safety Data",
        organization: "NIA & ILJOO GnS, 2023.12",
        detail: "Trained classification model using PyTorch and EfficientNet",
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
      profile: "プロフィール",
      portfolio: "ポートフォリオ",
    },
    hero: {
      name: "Lee Donghoon",
      role: "イ・ドンフン - Frontend / Full Stack Developer",
      summary:
        "Webアプリケーション開発とインフラ領域に関心を持つエンジニアです。React、Next.js、TypeScriptを用いたフロントエンド開発と、FastAPIを用いたバックエンド開発の経験があります。また、AIプロジェクトやハッカソンへの参加経験もあります。",
      email: "ldh7588@gmail.com",
      phone: "070-5570-4066",
      address: "韓国",
      github: "https://github.com/bluelemon61",
      birth: "2001.03.30",
    },
    sectionTitles: {
      education: "学歴",
      experience: "経験",
      awards: "受賞",
      skills: "スキル",
    },
    education: [
      {
        school: "釜山大学",
        major: "情報コンピューター工学部",
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
        company: "SoftSquared",
        period: "2025.01 ~ 2025.02",
        duration: "2ヶ月",
        bullets: [
          "SIプロジェクト3件のQCおよび保守対応を担当",
          "Reactベースのフロントエンド開発業務を担当",
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
        title: "キャップストーンデザイン ソフトウェア・AI部門 銀賞",
        organization: "釜山大学 情報コンピューター工学部, 2025.10",
        detail:
          "ディープラーニングモデルを活用した自然な画像翻訳およびテキスト合成",
      },
      {
        title: "KHUthon 2024 最優秀賞",
        organization: "慶熙大学, 2024.05",
        detail:
          "計算資源の節約を支援するAIアシスタントデスクトップアプリ / Electron, Next.js",
      },
      {
        title: "建設現場安全データAIハッカソン 大賞",
        organization: "NIA & ILJOO GnS, 2023.12",
        detail: "PyTorch、EfficientNetベースの分類モデル学習",
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

import type { Lang } from "@/lib/i18n";

export type PortfolioDetailBlock =
  | {
      type: "text";
      title?: string;
      content: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    };

export type PortfolioProject = {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  details: PortfolioDetailBlock[];
};

export type PortfolioContent = {
  title: string;
  description: string;
  projects: PortfolioProject[];
};

export const portfolioContent: Record<Lang, PortfolioContent> = {
  ko: {
    title: "포트폴리오",
    description:
      "주요 프로젝트를 카드 형태로 정리했으며, 각 카드를 클릭하면 상세 내용과 이미지를 함께 확인할 수 있습니다.",
    projects: [
      {
        title: "TMOJI",
        subtitle: "폰트 스타일을 유지하는 이미지 번역 AI 서비스",
        description:
          "이미지 속 텍스트를 번역하면서도 원본의 폰트, 색상, 레이아웃을 최대한 자연스럽게 유지하도록 설계한 졸업과제 프로젝트입니다.",
        techStack: [
          "React",
          "TypeScript",
          "Vite",
          "Python",
          "FastAPI",
          "PyTorch",
          "Celery",
          "Redis",
          "PostgreSQL",
          "Docker",
          "AWS EC2",
          "CloudFront",
        ],
        githubUrl:
          "https://github.com/pnucse-capstone2025/Capstone-2025-team-10",
        demoUrl: "https://github.com/PNU-CSE-Graduation-TMOJI/tmoji-web",
        image:
          "https://github.com/pnucse-capstone2025/Capstone-2025-team-10/raw/main/img/banner.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "기존 이미지 번역 서비스는 번역된 텍스트가 원본 이미지의 폰트, 색상, 배치와 자연스럽게 어우러지지 않아 시각적 이질감이 생기는 문제가 있었습니다.\n\n이 프로젝트는 단순한 OCR + 기계 번역 수준을 넘어서, 번역 후의 텍스트를 원본 이미지의 스타일에 맞춰 자연스럽게 재합성하는 것을 목표로 한 졸업과제입니다.",
          },
          {
            type: "text",
            title: "What I Built",
            content:
              "저는 주로 서비스 개발 파트를 담당했습니다.\n\n프론트엔드는 Vite + React + TypeScript로 구현했고, 빌드 결과물은 AWS CloudFront를 통해 배포했습니다. 백엔드는 Python과 FastAPI 기반의 REST API로 구성했으며, RDBMS와 Redis를 사용해 데이터를 관리했습니다. 또한 Docker로 각 서비스를 컨테이너화하여 AWS EC2 환경에 배포했습니다.\n\nAI 모델은 별도의 서버에서 동작하도록 분리했고, 백엔드 서버가 이를 호출하여 작업을 관리하도록 구성했습니다. 고부하 상황에서도 안정적으로 처리할 수 있도록 Celery와 Redis를 이용한 비동기 분산 처리 구조를 설계했습니다.",
          },
          {
            type: "text",
            title: "AI / System Point",
            content:
              "OCR 기반 텍스트 인식에 더해, 확산 모델 기반 TextCtrl을 활용하여 문자 스타일과 글리프를 학습하고 번역 후 텍스트를 자연스럽게 이미지에 합성할 수 있도록 했습니다.\n\n또한 영어·일본어·한국어에 대응할 수 있도록 다국어 폰트를 이용해 모델을 재학습했고, 실사용 가능한 서비스 형태를 목표로 프론트엔드, 백엔드, AI 모델 서버를 분리한 시스템을 구성했습니다. ELB 기반의 라우팅 및 포트 연결 구조도 설계하며 실제 운영을 고려한 인프라 구조를 경험했습니다.",
          },
          {
            type: "image",
            src: "https://github.com/pnucse-capstone2025/Capstone-2025-team-10/raw/main/img/sample.gif",
            alt: "TMOJI 메인 화면",
            caption: "TMOJI 메인 화면",
          },
          {
            type: "image",
            src: "https://github.com/pnucse-capstone2025/Capstone-2025-team-10/raw/main/img/system.png",
            alt: "TMOJI 처리 흐름",
            caption: "이미지 번역 및 비동기 처리 흐름",
          },
          {
            type: "text",
            title: "My Contribution",
            content:
              "이 프로젝트에서 저는 완성된 AI 모델을 실제로 검증할 수 있는 웹 애플리케이션 구현, 프론트엔드와 백엔드 개발, AI 모델 서버와의 연동, 그리고 배포 구조 설계에 집중했습니다.\n\n특히 단일 서버에서 모든 기능을 처리하는 방식이 아니라, 서비스 서버와 AI 작업 서버를 분리하고 비동기 스케줄링 구조를 설계함으로써 실용성과 확장성을 고려한 시스템을 구현한 점이 큰 경험이었습니다.",
          },
          {
            type: "text",
            title: "Repository",
            content:
              "Main Repository\nhttps://github.com/pnucse-capstone2025/Capstone-2025-team-10\n\nFrontend\nhttps://github.com/PNU-CSE-Graduation-TMOJI/tmoji-web\n\nBackend\nhttps://github.com/PNU-CSE-Graduation-TMOJI/tmoji-server",
          },
        ],
      },
      {
        title: "AI Model Serving",
        subtitle: "딥러닝 모델 웹 배포 프로젝트",
        description:
          "딥러닝 모델을 웹에서 시연할 수 있도록 만든 AI 서비스 프로젝트입니다.",
        techStack: [
          "Next.js",
          "Django",
          "PyTorch",
          "TypeScript",
          "UI/UX Design",
          "API Design",
          "DB Design",
          "Docker",
          "AWS",
        ],
        githubUrl: "https://github.com/2024-PNU-SW-StudyGroup/Group-11",
        demoUrl: "https://pnu-aid.com/camp1",
        image: "/projects/aid-camp1-main.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "동아리 내부 AI 대회의 일부로 진행한 프로젝트로, 딥러닝 모델을 웹으로 배포해 사용자가 직접 결과를 확인할 수 있도록 만든 AI 웹 서비스입니다.\n\n동아리 대회 운영 웹 서비스의 한 축으로 개발되었으며, 이후 다른 기능과 함께 하나의 서비스로 통합 배포되었습니다.",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "Next.js, Django, PyTorch를 사용했으며 프로젝트에서 총괄 역할을 맡았습니다.\n\n특히 UI/UX 설계, API 명세서 작성, DB 설계, PR 리뷰에 집중적으로 참여했습니다. 단순한 모델 배포가 아니라, 웹 서비스 형태로 안정적으로 연결되도록 전체 흐름을 조율하는 역할을 담당했습니다.",
          },
          {
            type: "image",
            src: "/projects/aid-camp-system-diagram.png",
            alt: "AID 지옥캠프 시스템 다이어그램",
            caption: "전체 서비스 시스템 다이어그램",
          },
          {
            type: "image",
            src: "/projects/aid-camp1-main.png",
            alt: "AI model serving 메인 화면",
            caption: "AI model serving 서비스 화면",
          },
          {
            type: "text",
            title: "Points",
            content:
              "AI 모델 자체뿐 아니라, 이를 웹 서비스로 전달하기 위한 사용자 경험과 서버 구조를 함께 고민한 프로젝트였습니다.\n\n모델 서빙, API 설계, 데이터 구조 설계, 협업 리뷰 프로세스를 함께 경험했다는 점에서 의미가 컸습니다.",
          },
        ],
      },
      {
        title: "대회 진행 · 접수 웹 애플리케이션",
        subtitle: "Kaggle 스타일 AI 대회 운영 SPA",
        description:
          "AI 대회의 진행, 접수, 제출 흐름을 웹에서 관리할 수 있도록 만든 단일 페이지 애플리케이션입니다.",
        techStack: [
          "Next.js",
          "React",
          "TypeScript",
          "PostgreSQL",
          "Auth.js",
          "Docker",
          "AWS",
        ],
        githubUrl: "https://github.com/PNU-AID/jiok-camp-server",
        demoUrl: "https://pnu-aid.com/camp2",
        image: "/projects/aid-camp2-main.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "동아리 내부 AI 대회를 Kaggle과 비슷한 방식으로 운영할 수 있도록 개발한 단일 페이지 애플리케이션입니다.\n\n대회 진행, 참가 접수, 결과 제출 등 운영 흐름을 웹에서 처리할 수 있도록 구성했습니다.",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "총괄, 프론트엔드, 인증 로직을 담당했습니다.\n\nNext.js와 PostgreSQL을 이용해 개발했으며, Auth.js를 활용해 로그인 구조를 설계했습니다. 또한 TypeScript를 통해 커스텀 모달 창을 구현하고, 타입이 정의된 API hooks를 개발하여 오타와 실수를 줄이면서 빠르게 개발할 수 있도록 했습니다.",
          },
          {
            type: "image",
            src: "/projects/aid-camp-system-diagram.png",
            alt: "대회 운영 웹 구조",
            caption: "대회 운영 서비스 웹 구조",
          },
          {
            type: "image",
            src: "/projects/aid-camp-network.png",
            alt: "대회 운영 서비스 네트워크 구성",
            caption: "네트워크 매핑",
          },
          {
            type: "image",
            src: "/projects/aid-camp-cicd.png",
            alt: "대회 운영 서비스 CI CD",
            caption: "CI / CD 구성",
          },
          {
            type: "image",
            src: "/projects/aid-camp2-main.png",
            alt: "대회 진행 접수 애플리케이션 화면",
            caption: "대회 진행 · 접수 애플리케이션 메인 화면",
          },
          {
            type: "text",
            title: "Points",
            content:
              "서비스 운영 관점에서 인증, 제출 흐름, UI 상호작용, 타입 안전성을 함께 고려한 프로젝트였습니다.\n\n단순 기능 구현을 넘어서 실제 운영 가능한 구조를 만들기 위해 Docker와 AWS 기반 배포까지 연결한 점이 강점입니다.",
          },
        ],
      },
      {
        title: "AID 동아리 홈페이지",
        subtitle: "GitHub Pages 기반 동아리 소개 웹사이트",
        description:
          "백엔드 서버 없이 운영 비용을 줄이면서 제작한 동아리 소개용 웹사이트입니다.",
        techStack: [
          "Next.js",
          "React",
          "TypeScript",
          "GitHub Pages",
          "Notion API",
          "GitHub Actions",
        ],
        githubUrl: "https://github.com/PNU-AID/homepage",
        demoUrl: "https://pnu-aid.github.io/homepage/",
        image: "/projects/aid-homepage-main.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "부산대학교 정보컴퓨터공학부 AI 동아리 AID를 소개하기 위한 홈페이지 프로젝트입니다.\n\n동아리 소개, 활동 기록, 구성원 안내 등 필요한 정보를 전달하면서도 서버 운영 비용을 최소화하는 방향으로 설계했습니다.",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "백엔드 서버를 두지 않고 최소한의 기능만으로 프론트엔드 중심 구조를 설계했으며, GitHub Pages를 통해 정적 호스팅했습니다.\n\n데이터 저장소로는 Notion API를 사용했고, 브라우저 환경에서 발생하는 CORS 문제를 해결하기 위해 GitHub Actions를 활용한 방식으로 대응했습니다.",
          },
          {
            type: "image",
            src: "/projects/aid-homepage-main.png",
            alt: "AID 동아리 홈페이지 메인 화면",
            caption: "AID 동아리 홈페이지 메인 화면",
          },
          {
            type: "text",
            title: "Points",
            content:
              "단순히 화면만 만드는 데서 끝나지 않고, 비용 절감과 운영 편의성까지 고려한 점이 핵심이었습니다.\n\n정적 사이트 호스팅, 외부 API 활용, CORS 우회 및 자동화 경험을 함께 담은 프로젝트입니다.",
          },
        ],
      },
      {
        title: "동아리마트",
        subtitle: "대학교 동아리 등록 및 모집 웹 서비스",
        description:
          "학교 동아리 정보를 쉽게 탐색하고 지원할 수 있도록 제작한 웹 프로젝트입니다.",
        techStack: [
          "Next.js",
          "React",
          "TypeScript",
          "Prisma",
          "NextAuth",
          "Figma",
          "GitHub Actions",
          "AWS",
        ],
        githubUrl: "https://github.com/ggomabbang/dongarimart",
        image: "/projects/dongarimart-main.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "개발에 관심이 있는 동기 3명과 함께 학교 동아리를 등록하고 부원을 모집할 수 있는 웹 서비스를 개발했습니다.\n\n일반 학생은 부산대학교 홈페이지에서 찾기 어려운 동아리 정보를 쉽게 확인하고 지원할 수 있고, 동아리 관계자는 홍보와 모집 공고 등록을 간편하게 진행할 수 있도록 설계했습니다.",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "프로젝트에서 Full-stack 및 프로젝트 리더 역할을 맡았습니다.\n\n직접 Figma로 웹페이지를 설계하고 Next.js 기반 React 프론트엔드를 구현했습니다. 또한 Prisma, Next.js API, NextAuth를 활용한 백엔드 구조를 구상하고 백엔드 담당과 협력하여 구현을 진행했습니다.\n\n이 과정에서 GitHub 협업, GitHub Actions를 활용한 빌드 자동화, AWS 배포 경험을 쌓았습니다.",
          },
          {
            type: "image",
            src: "/projects/dongarimart-architecture.png",
            alt: "동아리마트 아키텍처",
            caption: "동아리마트 서비스 아키텍처",
          },
          {
            type: "image",
            src: "/projects/dongarimart-main.png",
            alt: "동아리마트 메인 화면",
            caption: "동아리마트 메인 화면",
          },
          {
            type: "image",
            src: "/projects/dongarimart-list.png",
            alt: "동아리마트 목록 화면",
            caption: "동아리 탐색 및 목록 화면",
          },
          {
            type: "text",
            title: "Points",
            content:
              "단순한 학교 커뮤니티 성격의 프로젝트가 아니라, 실제 사용자를 기준으로 정보 탐색과 지원 흐름을 고려해 설계했다는 점이 강점이었습니다.\n\n특히 디자인, 프론트엔드 구현, 인증 및 API 연동 구조 이해, 배포 경험까지 폭넓게 경험할 수 있었던 프로젝트입니다.",
          },
        ],
      },
    ],
  },

  en: {
    title: "Portfolio",
    description:
      "Selected projects are presented as cards, and each card can be expanded to view detailed content with images.",
    projects: [
      {
        title: "TMOJI",
        subtitle: "AI image translation service that preserves font style",
        description:
          "A graduation project that translates text inside images while preserving the original font style, color, and layout as naturally as possible.",
        techStack: [
          "React",
          "TypeScript",
          "Vite",
          "Python",
          "FastAPI",
          "PyTorch",
          "Celery",
          "Redis",
          "PostgreSQL",
          "Docker",
          "AWS EC2",
          "CloudFront",
        ],
        githubUrl:
          "https://github.com/pnucse-capstone2025/Capstone-2025-team-10",
        demoUrl: "https://github.com/PNU-CSE-Graduation-TMOJI/tmoji-web",
        image: "/projects/tmoji-main.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "Existing image translation services often produce visually awkward results because the translated text does not blend naturally with the original font, color, and layout of the image.\n\nThis graduation project aimed to go beyond simple OCR and machine translation by rebuilding translated text so that it matches the visual style of the original image more naturally.",
          },
          {
            type: "text",
            title: "What I Built",
            content:
              "I mainly took charge of the service development side.\n\nThe frontend was implemented with Vite, React, and TypeScript, and the built files were distributed through AWS CloudFront. The backend was designed as a REST API using Python and FastAPI, while data was managed with an RDBMS and Redis. Each part of the system was containerized with Docker and deployed on AWS EC2.\n\nThe AI model was separated onto its own server, and the backend was responsible for calling and managing AI tasks. To keep the system stable under heavy load, I designed an asynchronous distributed processing structure using Celery and Redis.",
          },
          {
            type: "text",
            title: "AI / System Point",
            content:
              "In addition to OCR-based text recognition, the project used TextCtrl based on diffusion models to learn text style and glyph features, allowing translated text to be synthesized back into the image more naturally.\n\nThe model was retrained with multilingual fonts to support English, Japanese, and Korean. To make the service practical, the frontend, backend, and AI model server were separated, and the infrastructure was designed with routing and port connections in mind for real deployment scenarios.",
          },
          {
            type: "image",
            src: "/projects/tmoji-main.png",
            alt: "TMOJI main page",
            caption: "Main page of TMOJI",
          },
          {
            type: "image",
            src: "/projects/tmoji-flow.png",
            alt: "TMOJI processing flow",
            caption: "Image translation and asynchronous processing flow",
          },
          {
            type: "text",
            title: "My Contribution",
            content:
              "My contribution focused on implementing the web application used to validate the completed AI model, building the frontend and backend, integrating the AI model server, and designing the deployment structure.\n\nA key learning point was designing a practical and scalable system by separating the service server from the AI task server and managing requests through asynchronous scheduling rather than processing everything on a single server.",
          },
          {
            type: "text",
            title: "Repository",
            content:
              "Main Repository\nhttps://github.com/pnucse-capstone2025/Capstone-2025-team-10\n\nFrontend\nhttps://github.com/PNU-CSE-Graduation-TMOJI/tmoji-web\n\nBackend\nhttps://github.com/PNU-CSE-Graduation-TMOJI/tmoji-server",
          },
        ],
      },
      {
        title: "Dongari Mart",
        subtitle: "University club registration and recruitment web service",
        description:
          "A web project designed to help students explore club information and apply more easily.",
        techStack: [
          "Next.js",
          "React",
          "TypeScript",
          "Prisma",
          "NextAuth",
          "Figma",
          "GitHub Actions",
          "AWS",
        ],
        githubUrl: "https://github.com/ggomabbang/dongarimart",
        image: "/projects/dongarimart-main.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "This project was developed by a team of three to create a web service where university clubs can register their information and recruit new members.\n\nIt was designed so that general students can easily find club information that is difficult to discover through the university website, while club managers can promote their clubs and post recruitment notices more conveniently.",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "I took the roles of both Full-stack developer and project leader.\n\nI designed the interface in Figma and implemented the frontend using React based on Next.js. I also planned the backend structure using Prisma, Next.js API, and NextAuth, and collaborated with the backend developer on implementation.\n\nThrough this project, I gained experience in GitHub-based collaboration, build automation with GitHub Actions, and deployment on AWS.",
          },
          {
            type: "image",
            src: "/projects/dongarimart-architecture.png",
            alt: "Dongari Mart architecture",
            caption: "Service architecture of Dongari Mart",
          },
          {
            type: "image",
            src: "/projects/dongarimart-main.png",
            alt: "Dongari Mart main page",
            caption: "Main page of Dongari Mart",
          },
          {
            type: "image",
            src: "/projects/dongarimart-list.png",
            alt: "Dongari Mart club list page",
            caption: "Club browsing and listing page",
          },
          {
            type: "text",
            title: "Points",
            content:
              "This project was not just a simple campus community site, but a service designed around actual user flows such as discovering information and applying to clubs.\n\nIt was especially valuable because it allowed me to gain broad experience across design, frontend implementation, authentication, API integration, and deployment.",
          },
        ],
      },
      {
        title: "AID Club Homepage",
        subtitle: "Club introduction website hosted on GitHub Pages",
        description:
          "A club introduction website built to reduce operating cost without using a separate backend server.",
        techStack: [
          "Next.js",
          "React",
          "TypeScript",
          "GitHub Pages",
          "Notion API",
          "GitHub Actions",
        ],
        githubUrl: "https://github.com/PNU-AID/homepage",
        demoUrl: "https://pnu-aid.github.io/homepage/",
        image: "/projects/aid-homepage-main.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "This project is a homepage built to introduce AID, the AI club of the School of Computer Science and Engineering at Pusan National University.\n\nThe site was designed to provide key information such as club introduction, activities, and member guidance while minimizing server operating cost.",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "I designed the project as a frontend-focused service without a separate backend server and hosted it through GitHub Pages.\n\nThe content was managed using the Notion API, and I addressed browser-side CORS issues by using GitHub Actions as part of the workflow.",
          },
          {
            type: "image",
            src: "/projects/aid-homepage-main.png",
            alt: "AID club homepage main page",
            caption: "Main page of the AID club homepage",
          },
          {
            type: "text",
            title: "Points",
            content:
              "The core value of this project was not only building a website, but also considering cost efficiency and operational convenience.\n\nIt reflects my experience with static site hosting, external API integration, and automation-based handling of CORS limitations.",
          },
        ],
      },
      {
        title: "AI Model Serving",
        subtitle: "Web deployment project for deep learning models",
        description:
          "An AI web service project that makes deep learning models available for users directly in the browser.",
        techStack: [
          "Next.js",
          "Django",
          "PyTorch",
          "TypeScript",
          "UI/UX Design",
          "API Design",
          "DB Design",
          "Docker",
          "AWS",
        ],
        githubUrl: "https://github.com/2024-PNU-SW-StudyGroup/Group-11",
        demoUrl: "https://pnu-aid.com/camp1",
        image: "/projects/aid-camp1-main.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "This project was developed as part of an internal AI competition in the club, with the goal of deploying deep learning models to the web so that users could test them directly.\n\nIt was developed as one part of a larger competition management service and later integrated into a unified platform.",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "The project was built with Next.js, Django, and PyTorch, and I took the lead role.\n\nI focused mainly on UI/UX design, API specification writing, database design, and PR review. Rather than treating it as a model-only task, I worked on coordinating the full service flow so the AI model could be delivered as a usable web experience.",
          },
          {
            type: "image",
            src: "/projects/aid-camp-system-diagram.png",
            alt: "System diagram of AID competition platform",
            caption: "Overall system diagram of the platform",
          },
          {
            type: "image",
            src: "/projects/aid-camp1-main.png",
            alt: "AI model serving main page",
            caption: "Main page of the AI model serving service",
          },
          {
            type: "text",
            title: "Points",
            content:
              "This project was meaningful because it required considering not only the AI model itself, but also user experience and backend structure for serving it as a web product.\n\nIt gave me hands-on experience in model serving, API design, data structure planning, and collaborative review processes.",
          },
        ],
      },
      {
        title: "Competition Management & Submission App",
        subtitle: "Kaggle-style SPA for AI competition operation",
        description:
          "A single-page application for handling competition operation, registration, and submission workflows on the web.",
        techStack: [
          "Next.js",
          "React",
          "TypeScript",
          "PostgreSQL",
          "Auth.js",
          "Docker",
          "AWS",
        ],
        githubUrl: "https://github.com/PNU-AID/jiok-camp-server",
        demoUrl: "https://pnu-aid.com/camp2",
        image: "/projects/aid-camp2-main.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "This single-page application was developed so that an internal AI competition could be operated in a Kaggle-like way.\n\nIt supports core workflows such as competition progress, participant registration, and submission handling through the web.",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "I was responsible for project coordination, frontend development, and authentication logic.\n\nThe service was built with Next.js and PostgreSQL, and the authentication flow was designed with Auth.js. I also implemented custom modal components with TypeScript and built type-safe API hooks, which helped reduce mistakes and improve development speed.",
          },
          {
            type: "image",
            src: "/projects/aid-camp-web-structure.png",
            alt: "Web structure of competition service",
            caption: "Web structure of the competition service",
          },
          {
            type: "image",
            src: "/projects/aid-camp-network.png",
            alt: "Network mapping of competition service",
            caption: "Network mapping",
          },
          {
            type: "image",
            src: "/projects/aid-camp-cicd.png",
            alt: "CI CD of competition service",
            caption: "CI / CD configuration",
          },
          {
            type: "image",
            src: "/projects/aid-camp2-main.png",
            alt: "Competition management and submission app main page",
            caption: "Main page of the competition management app",
          },
          {
            type: "text",
            title: "Points",
            content:
              "This project focused on practical service operation, combining authentication, submission flow, interactive UI, and type safety.\n\nIts strength lies in going beyond feature implementation to connect the application to a deployable structure using Docker and AWS.",
          },
        ],
      },
    ],
  },

  ja: {
    title: "ポートフォリオ",
    description:
      "主なプロジェクトをカード形式で整理し、各カードをクリックすると画像付きの詳細内容を確認できます。",
    projects: [
      {
        title: "TMOJI",
        subtitle: "フォントスタイルを保持する画像翻訳AIサービス",
        description:
          "画像内テキストを翻訳しながら、元画像のフォント、色、レイアウトをできるだけ自然に維持することを目指した卒業課題プロジェクトです。",
        techStack: [
          "React",
          "TypeScript",
          "Vite",
          "Python",
          "FastAPI",
          "PyTorch",
          "Celery",
          "Redis",
          "PostgreSQL",
          "Docker",
          "AWS EC2",
          "CloudFront",
        ],
        githubUrl:
          "https://github.com/pnucse-capstone2025/Capstone-2025-team-10",
        demoUrl: "https://github.com/PNU-CSE-Graduation-TMOJI/tmoji-web",
        image: "/projects/tmoji-main.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "既存の画像翻訳サービスでは、翻訳後の文字が元画像のフォント、色、レイアウトと自然に調和せず、視覚的な違和感が生じるという課題がありました。\n\nこの卒業課題では、単純なOCRと機械翻訳にとどまらず、翻訳後の文字を元画像のスタイルに合わせて自然に再合成することを目標にしました。",
          },
          {
            type: "text",
            title: "What I Built",
            content:
              "私は主にサービス開発パートを担当しました。\n\nフロントエンドは Vite・React・TypeScript で実装し、ビルド後の成果物は AWS CloudFront を通じて配信しました。バックエンドは Python と FastAPI による REST API として構成し、RDBMS と Redis を用いてデータを管理しました。さらに各サービスを Docker でコンテナ化し、AWS EC2 上にデプロイしました。\n\nAIモデルは別サーバーで動作するよう分離し、バックエンドがそれを呼び出して管理する構成にしました。高負荷時にも安定して処理できるよう、Celery と Redis を用いた非同期分散処理構成を設計しました。",
          },
          {
            type: "text",
            title: "AI / System Point",
            content:
              "OCRによる文字認識に加えて、拡散モデルベースの TextCtrl を活用し、文字スタイルやグリフを学習することで、翻訳後のテキストを画像へ自然に合成できるようにしました。\n\nまた、英語・日本語・韓国語に対応するため多言語フォントでモデルを再学習しました。実用的なサービスを目指し、フロントエンド、バックエンド、AIモデルサーバーを分離した構成を採用し、ELB を含むルーティングやポート接続も考慮したインフラ設計を経験しました。",
          },
          {
            type: "image",
            src: "/projects/tmoji-main.png",
            alt: "TMOJI メイン画面",
            caption: "TMOJI メイン画面",
          },
          {
            type: "image",
            src: "/projects/tmoji-flow.png",
            alt: "TMOJI 処理フロー",
            caption: "画像翻訳および非同期処理フロー",
          },
          {
            type: "text",
            title: "My Contribution",
            content:
              "このプロジェクトでは、完成したAIモデルを実際に検証できるWebアプリケーションの実装、フロントエンドとバックエンドの開発、AIモデルサーバーとの連携、そしてデプロイ構成の設計に注力しました。\n\n特に、単一サーバーですべてを処理するのではなく、サービスサーバーとAIタスクサーバーを分離し、非同期スケジューリング構造を設計したことで、実用性と拡張性を意識したシステム構築を経験できた点が大きな学びでした。",
          },
          {
            type: "text",
            title: "Repository",
            content:
              "Main Repository\nhttps://github.com/pnucse-capstone2025/Capstone-2025-team-10\n\nFrontend\nhttps://github.com/PNU-CSE-Graduation-TMOJI/tmoji-web\n\nBackend\nhttps://github.com/PNU-CSE-Graduation-TMOJI/tmoji-server",
          },
        ],
      },
      {
        title: "동아리마트",
        subtitle: "大学サークル登録・募集Webサービス",
        description:
          "大学サークルの情報を探しやすくし、応募まで行いやすくするために制作したWebプロジェクトです。",
        techStack: [
          "Next.js",
          "React",
          "TypeScript",
          "Prisma",
          "NextAuth",
          "Figma",
          "GitHub Actions",
          "AWS",
        ],
        githubUrl: "https://github.com/ggomabbang/dongarimart",
        image: "/projects/dongarimart-main.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "開発に関心のある同期3人と一緒に、大学のサークルが情報を登録し、新入部員を募集できるWebサービスを開発しました。\n\n一般学生は大学ホームページでは探しにくいサークル情報を簡単に確認でき、サークル運営側は広報や募集公告をより手軽に掲載できるように設計しました。",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "私はFull-stackおよびプロジェクトリーダーを担当しました。\n\nFigmaで画面を設計し、Next.jsベースのReactでフロントエンドを実装しました。また、Prisma、Next.js API、NextAuthを用いたバックエンド構成を考え、バックエンド担当者と協力して実装を進めました。\n\nこのプロジェクトを通じて、GitHubを用いた協業、GitHub Actionsによるビルド自動化、AWSデプロイの経験を得ました。",
          },
          {
            type: "image",
            src: "/projects/dongarimart-architecture.png",
            alt: "동아리마트 アーキテクチャ",
            caption: "동아리마트 のサービスアーキテクチャ",
          },
          {
            type: "image",
            src: "/projects/dongarimart-main.png",
            alt: "동아리마트 メイン画面",
            caption: "동아리마트 メイン画面",
          },
          {
            type: "image",
            src: "/projects/dongarimart-list.png",
            alt: "동아리마트 一覧画面",
            caption: "サークル一覧・検索画面",
          },
          {
            type: "text",
            title: "Points",
            content:
              "単なる学内コミュニティサイトではなく、実際の利用者を想定した情報探索と応募フローを意識して設計した点が強みでした。\n\n特に、デザイン、フロントエンド実装、認証とAPI連携、デプロイまで幅広く経験できたプロジェクトです。",
          },
        ],
      },
      {
        title: "AID 동아리 홈페이지",
        subtitle: "GitHub Pagesベースのサークル紹介サイト",
        description:
          "バックエンドサーバーを使わず、運用コストを抑えて制作したサークル紹介サイトです。",
        techStack: [
          "Next.js",
          "React",
          "TypeScript",
          "GitHub Pages",
          "Notion API",
          "GitHub Actions",
        ],
        githubUrl: "https://github.com/PNU-AID/homepage",
        demoUrl: "https://pnu-aid.github.io/homepage/",
        image: "/projects/aid-homepage-main.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "釜山大学校 情報コンピュータ工学部のAIサークル AID を紹介するためのホームページプロジェクトです。\n\nサークル紹介、活動記録、メンバー案内などの情報を提供しつつ、サーバー運用コストを最小限に抑えることを意識して設計しました。",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "バックエンドサーバーを置かないフロントエンド中心の構成を設計し、GitHub Pagesで静的ホスティングを行いました。\n\nデータ管理にはNotion APIを利用し、ブラウザ環境で発生するCORS問題にはGitHub Actionsを活用して対応しました。",
          },
          {
            type: "image",
            src: "/projects/aid-homepage-main.png",
            alt: "AID サークルホームページ メイン画面",
            caption: "AID サークルホームページのメイン画面",
          },
          {
            type: "text",
            title: "Points",
            content:
              "単にWebサイトを作るだけではなく、コスト効率と運用のしやすさまで考慮した点がこのプロジェクトの核心でした。\n\n静的サイトホスティング、外部API連携、CORS制約への自動化ベースの対応を経験できたプロジェクトです。",
          },
        ],
      },
      {
        title: "AI Model Serving",
        subtitle: "ディープラーニングモデルのWeb配布プロジェクト",
        description:
          "ディープラーニングモデルをWeb上で直接体験できるようにしたAIサービスプロジェクトです。",
        techStack: [
          "Next.js",
          "Django",
          "PyTorch",
          "TypeScript",
          "UI/UX Design",
          "API Design",
          "DB Design",
          "Docker",
          "AWS",
        ],
        githubUrl: "https://github.com/2024-PNU-SW-StudyGroup/Group-11",
        demoUrl: "https://pnu-aid.com/camp1",
        image: "/projects/aid-camp1-main.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "サークル内AI大会の一環として進めたプロジェクトで、ディープラーニングモデルをWeb上に公開し、利用者が直接試せるようにしたAI Webサービスです。\n\n大会運営サービスの一部として開発され、その後は他機能と統合して一つのプラットフォームとして公開されました。",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "Next.js、Django、PyTorchを使用し、私は総括役を担当しました。\n\n特にUI/UX設計、API仕様書の作成、DB設計、PRレビューに重点的に関わりました。単なるモデル公開ではなく、AIモデルを実際に使えるWebサービスとして届けるための全体フローを調整しました。",
          },
          {
            type: "image",
            src: "/projects/aid-camp-system-diagram.png",
            alt: "AID 大会プラットフォームのシステム図",
            caption: "プラットフォーム全体のシステム図",
          },
          {
            type: "image",
            src: "/projects/aid-camp1-main.png",
            alt: "AI model serving メイン画面",
            caption: "AI model serving のサービス画面",
          },
          {
            type: "text",
            title: "Points",
            content:
              "このプロジェクトは、AIモデルそのものだけでなく、それをWebプロダクトとして届けるためのユーザー体験とバックエンド構成まで考える必要があった点が大きな学びでした。\n\nモデルサービング、API設計、データ構造設計、レビューを含む協業プロセスを実践できたプロジェクトです。",
          },
        ],
      },
      {
        title: "大会進行・受付Webアプリケーション",
        subtitle: "Kaggle風AI大会運営SPA",
        description:
          "AI大会の進行、受付、提出フローをWeb上で管理できるようにしたシングルページアプリケーションです。",
        techStack: [
          "Next.js",
          "React",
          "TypeScript",
          "PostgreSQL",
          "Auth.js",
          "Docker",
          "AWS",
        ],
        githubUrl: "https://github.com/PNU-AID/jiok-camp-server",
        demoUrl: "https://pnu-aid.com/camp2",
        image: "/projects/aid-camp2-main.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "サークル内AI大会をKaggleに近い形で運営できるように開発したシングルページアプリケーションです。\n\n大会進行、参加受付、結果提出などの主要フローをWeb上で扱えるように構成しました。",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "私は総括、フロントエンド、認証ロジックを担当しました。\n\nNext.jsとPostgreSQLを用いて開発し、Auth.jsを使ってログイン構成を設計しました。また、TypeScriptによりカスタムモーダルを実装し、型安全なAPI hooksを構築することで、ミスを減らしつつ開発速度を高めました。",
          },
          {
            type: "image",
            src: "/projects/aid-camp-web-structure.png",
            alt: "大会運営サービスのWeb構造",
            caption: "大会運営サービスのWeb構造",
          },
          {
            type: "image",
            src: "/projects/aid-camp-network.png",
            alt: "大会運営サービスのネットワーク構成",
            caption: "ネットワークマッピング",
          },
          {
            type: "image",
            src: "/projects/aid-camp-cicd.png",
            alt: "大会運営サービスのCI CD",
            caption: "CI / CD 構成",
          },
          {
            type: "image",
            src: "/projects/aid-camp2-main.png",
            alt: "大会進行 受付アプリケーション画面",
            caption: "大会進行・受付アプリケーションのメイン画面",
          },
          {
            type: "text",
            title: "Points",
            content:
              "このプロジェクトでは、認証、提出フロー、UIの相互作用、型安全性を含め、実際のサービス運用を意識した構成を重視しました。\n\n単なる機能実装に留まらず、DockerとAWSを用いてデプロイ可能な構成までつなげた点が強みです。",
          },
        ],
      },
    ],
  },
};

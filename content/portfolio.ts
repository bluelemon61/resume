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
        demoUrl: "https://tmoji.org/",
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
              "OCR 기반 텍스트 인식에 더해, 확산 모델 기반 TextCtrl을 활용하여 문자 스타일과 글리프를 학습하고 번역 후 텍스트를 자연스럽게 이미지에 합성할 수 있도록 했습니다.\n\n또한 영어·일본어·한국어에 대응할 수 있도록 다국어 폰트를 이용해 모델을 재학습했고, 실사용 가능한 서비스 형태를 목표로 프론트엔드, 백엔드, AI 모델 서버를 분리한 시스템을 구성했습니다. nginx를 이용하여 라우팅 및 포트 연결 구조도 설계하며 실제 운영을 고려한 인프라 구조를 경험했습니다.",
          },
          {
            type: "image",
            src: "https://github.com/pnucse-capstone2025/Capstone-2025-team-10/raw/main/img/sample.gif",
            alt: "TMOJI 이용 영상",
            caption: "TMOJI 이용 영상",
          },
          {
            type: "image",
            src: "/projects/tmoji-flow.png",
            alt: "TMOJI 화면 흐름 (텍스트 지정 → OCR → 번역확인 → 이미지 합성)",
            caption:
              "TMOJI 화면 흐름 (텍스트 지정 → OCR → 번역확인 → 이미지 합성)",
          },
          {
            type: "image",
            src: "/projects/tmoji-system.png",
            alt: "TMOJI 처리 흐름",
            caption: "이미지 번역 및 비동기 처리 흐름",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "프론트엔드: 이미지 영역 중 번역하고 싶은 텍스트를 지정하기 위한 UX 구현이 도전과제였습니다. 이미지 위에 선택 영역을 사각형 형태로 조절가능할 수 있도록 레이어를 추가하여 이미지의 해상도와 이미지 엘리먼트의 화면상 크기를 계산하여 사각형 영역을 조절할 수 있도록 설계하였습니다.\n\n백엔드-AI서버 연결: AI서버의 AI모델은 우분투 환경의 파이썬 프로그램으로 가동되는 방식이었습니다. 이를 백엔드 서버의 호출에 따라 추론 연산 결과를 응답하도록 하는 방식을 결정하는 것이 고민되었습니다. AI 서버의 포트 개방이 제한되어있었기 때문에, SSH 연결을 통해 직접 커맨드를 쏘는 방식으로 결정하여 백엔드 서버에서 비동기 큐를 통해 순차적으로 처리하는 방식으로 구현하였습니다.\n\nCI-CD: EC2 환경에 디플로이된 백엔드서버와 AI 서버의 SSH 통신을, CI-CD 파이프라인에도 적용하기 위해 어려움을 겪었습니다. 파이프라인의 끝단에 새롭게 Pull된 파일을 바탕으로 SSM 커맨드를 이용하여 도커를 재가동하는 단계가 포함되어있어, 해당 단계에서 github secrets에 저장된 ssh키와 커맨드를 ssm parameter로 옮겨 파일로 저장하는 과정을 추가하여 해결하였습니다.",
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
        title: "동아리 AI대회 우수작 시연 애플리케이션",
        subtitle: "딥러닝 모델 웹 배포 프로젝트",
        description:
          "동아리에서 개최된 AI대회의 우수 딥러닝 모델을 웹에서 시연할 수 있도록 만든 AI 서비스 프로젝트입니다.",
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
              "동아리 내부 AI 대회의 일부로 진행한 프로젝트로, 대회의 우수 딥러닝 모델을 웹으로 배포해 사용자가 직접 체험해볼 수 있도록 만든 AI 웹 서비스입니다.\n해당 대회는 리뷰 데이터를 학습하여 리뷰 텍스트를 읽어 별점을 예측하는 AI를 구현하는 것이 주제였습니다.\n특정 매장에 대한 리뷰를 채팅으로 올리면, 사용자가 리뷰와 남길 별점을 AI가 추론하여 채팅 옆에 표시되도록 설계한 프로젝트입니다.",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "Next.js, Django, PyTorch를 사용했으며 프로젝트에서 총괄 역할을 맡았습니다.\n특히 UI/UX 설계, API 명세서 작성, DB 설계, PR 리뷰에 집중적으로 참여했습니다. 단순한 모델 배포가 아니라, 웹 서비스 형태로 안정적으로 연결되도록 전체 흐름을 조율하는 역할을 담당했습니다.",
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
            title: "Challenges & Solutions",
            content:
              "채팅을 올린 후, 모델의 응답까지 기다리게 하는 비동기 처리를 구현하는 것이 챌린지였습니다. 백엔드에서 텍스트를 입력을 받은 후 AI의 추론결과를 응답하는 과정을, '1. 입력 및 모델 가동 2. 모델 연산 완료 여부 확인 3. 결과값 조회'의 세가지 API로 나누는 것으로 설계하였습니다. 또한 동시에 다건의 요청이 들어왔을 때의 과부화를 막는 것도 도전 과제였으며, 이를 비동기 큐 분산 라이브러리인 Celery를 도입하여 동시에 들어온 요청을 순차적으로 처리하도록 설계하였습니다.",
          },
          {
            type: "text",
            title: "Points",
            content:
              "AI 모델 자체뿐 아니라, 이를 웹 서비스로 전달하기 위한 사용자 경험과 서버 구조를 함께 고민한 프로젝트였습니다.\n모델 서빙, API 설계, 데이터 구조 설계, 협업 리뷰 프로세스를 함께 경험했다는 점에서 의미가 컸습니다.",
          },
        ],
      },
      {
        title: "동아리 AI대회 진행 · 접수 웹 애플리케이션",
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
              "동아리 내부 AI 대회를 Kaggle과 비슷한 방식으로 운영할 수 있도록 개발한 단일 페이지 애플리케이션입니다.\n\n대회 진행, 참가 접수, 결과 제출 등 운영 흐름을 웹에서 처리할 수 있도록 구성했습니다.\n관리자는 각 팀의 제출 타임라인 및 팀 계정 관리가 가능하며, 참가 팀은 결과 sheet 제출 및 점수 확인 그리고 랭킹을 확인할 수 있습니다.",
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
            type: "image",
            src: "/projects/aid-camp2-admin.png",
            alt: "대회 진행 접수 애플리케이션 관리자 화면",
            caption: "대회 진행 · 접수 애플리케이션 관리자 화면",
          },
          {
            type: "image",
            src: "/projects/aid-camp2-team.png",
            alt: "대회 진행 접수 애플리케이션 참가 팀 화면",
            caption: "대회 진행 · 접수 애플리케이션 참가 팀 화면",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "해당 서비스를 대회의 우수 AI 모델 시연 서비스와 통합하는 과정에서, 서로 다른 백엔드 서버를 하나의 도메인으로 통합하는 것이 챌린지가 되었습니다. 같은 프로젝트로 통합하기보다, 같은 DNS 서버의 sub 도메인을 다르게 두어, 이를 ELB를 통해 포트별 매핑을 하여 해결될 수 있도록 설계하였습니다.\n이후, 접속량이 많지않은 서비스임을 고려하여 ELB에서 발생하는 비용을 절감하고자, Nginx로 대체하여 마이그레이션하였습니다.",
          },
          {
            type: "text",
            title: "Points",
            content:
              "서비스 운영 관점에서 인증, 제출 흐름, UI 상호작용, 타입 안전성을 함께 고려한 프로젝트였습니다.단순 기능 구현을 넘어서 실제 운영 가능한 구조를 만들기 위해 Docker와 AWS 기반 배포까지 연결한 점이 강점입니다.",
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
        image: "/projects/aid-homepage-main-thumbnail.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "부산대학교 정보컴퓨터공학부 AI 동아리, AID를 소개하기 위한 홈페이지 프로젝트입니다.\n\n동아리 소개, 활동 기록, 구성원 안내 등 필요한 정보를 전달하면서도 서버 운영 비용을 최소화하는 방향으로 설계했습니다.",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "백엔드 서버를 두지 않고 최소한의 기능만으로 프론트엔드 중심 구조를 설계했으며, GitHub Pages를 통해 정적 호스팅했습니다.\n데이터 저장소로는 Notion API를 사용하여, 별도의 데이터베이스 서버 없이 동작하도록 구현하였습니다.",
          },
          {
            type: "image",
            src: "/projects/aid-homepage-main.png",
            alt: "AID 동아리 홈페이지 메인 화면",
            caption: "AID 동아리 홈페이지 메인 화면",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "Notion API를 배포된 프론트엔드환경에서 사용할 때, CORS 에러가 발생하여 백엔드 서버 또는 프록시서버가 필요하게 된 문제가 있었습니다. 이를 해결하기위해, Github Actions를 이용하여 매일 1회 Notion API를 통해 레포지토리의 정적 데이터 파일을 update하여 재배포하도록 설계하여 별도의 비용을 들이지 않고 우회할 수 있었습니다.",
          },
          {
            type: "text",
            title: "Points",
            content:
              "단순히 화면만 만드는 데서 끝나지 않고, 비용 절감과 운영 편의성까지 고려한 점이 핵심이었습니다.\n정적 사이트 호스팅, 외부 API 활용, CORS 우회 및 자동화 경험을 함께 담은 프로젝트입니다.",
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
            title: "Challenges & Solutions",
            content:
              "웹 애플리케이션 개발에 처음으로 착수하였던 프로젝트였습니다. 모바일 환경 등의 반응형 UI 구현을 직접 구현하면서 css 속성의 특징에 대해 배워보게 되었습니다. 또한, 각 페이지별로 코드를 새로 작성하여 개발하였으나, 이후 반복적으로 사용되는 컴포넌트의 모듈화의 필요성이 느껴서, 모듈화를 생각하며 개발하는 계기가 되었습니다.",
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
      "Major projects are organized in a card format. Click each card to view detailed descriptions and images.",
    projects: [
      {
        title: "TMOJI",
        subtitle: "AI Image Translation Service Preserving Font Style",
        description:
          "A graduation project designed to translate text in images while preserving the original font, color, and layout as naturally as possible.",
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
          "https://github.com/pnucse-capstone2025/Capstone-2025-team-10/blob/main/README-EN.md",
        demoUrl: "https://tmoji.org/",
        image:
          "https://github.com/pnucse-capstone2025/Capstone-2025-team-10/raw/main/img/banner.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "Many existing image translation services produce unnatural results because translated text does not visually match the original image’s font, color, and layout.\n\nThis project goes beyond simple OCR and machine translation by re-synthesizing translated text so that it naturally fits the style of the original image.",
          },
          {
            type: "text",
            title: "What I Built",
            content:
              "I mainly worked on the service development.\n\nThe frontend was implemented using Vite, React, and TypeScript, and the build output was deployed through AWS CloudFront. The backend was built as a REST API using Python and FastAPI, with PostgreSQL and Redis for data management. Each service was containerized with Docker and deployed on AWS EC2.\n\nThe AI model runs on a separate server, and the backend manages inference tasks by calling that server. To handle heavy workloads reliably, I designed an asynchronous distributed processing system using Celery and Redis.",
          },
          {
            type: "text",
            title: "AI / System Point",
            content:
              "In addition to OCR-based text recognition, we used the diffusion-based TextCtrl model to learn character styles and glyphs, enabling translated text to be naturally synthesized back into the image.\n\nTo support English, Japanese, and Korean, the model was retrained with multilingual fonts. The system architecture separates the frontend, backend, and AI model servers to build a practical service structure. I also designed routing and port connections using nginx to simulate a real production environment.",
          },
          {
            type: "image",
            src: "https://github.com/pnucse-capstone2025/Capstone-2025-team-10/raw/main/img/sample.gif",
            alt: "TMOJI usage demo",
            caption: "TMOJI usage demo",
          },
          {
            type: "image",
            src: "/projects/tmoji-flow.png",
            alt: "TMOJI UI flow (text selection → OCR → translation review → image synthesis)",
            caption:
              "TMOJI UI flow (text selection → OCR → translation review → image synthesis)",
          },
          {
            type: "image",
            src: "/projects/tmoji-system.png",
            alt: "TMOJI processing pipeline",
            caption: "Image translation and asynchronous processing pipeline",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "Frontend: Implementing the UX for selecting text regions within an image was a challenge. I implemented an adjustable rectangular overlay layer and calculated the relationship between the image resolution and the rendered image size to accurately control the selection area.\n\nBackend-AI integration: The AI model runs as a Python program on an Ubuntu environment. Because direct port access to the AI server was restricted, we decided to execute commands through SSH. The backend processes tasks sequentially using an asynchronous queue.\n\nCI-CD: Integrating SSH communication between the backend and AI server into the CI/CD pipeline was also challenging. The pipeline restarts Docker containers via SSM commands after pulling new code. We solved this by transferring SSH keys stored in GitHub Secrets into SSM parameters during deployment.",
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
        title: "AI Competition Model Demo Application",
        subtitle: "Deep Learning Model Web Deployment Project",
        description:
          "An AI service that allows users to experience award-winning deep learning models from a club AI competition through the web.",
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
        githubUrl:
          "https://github.com/PNU-AID/jiok-camp-server/blob/main/README-EN.md",
        demoUrl: "https://pnu-aid.com/camp1",
        image: "/projects/aid-camp1-main.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "This project was conducted as part of an internal AI competition in our club. It provides a web service that allows users to directly experience top-performing deep learning models.\nThe competition task was to train an AI model that predicts star ratings based on review text.\nWhen a user submits a review through the chat interface, the AI predicts the rating and displays it next to the message.",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "I served as the project lead.\nUsing Next.js, Django, and PyTorch, I focused on UI/UX design, API specification writing, database design, and PR reviews. My role was to coordinate the overall system flow so the model could be delivered as a stable web service rather than just a standalone model.",
          },
          {
            type: "image",
            src: "/projects/aid-camp-system-diagram.png",
            alt: "AID competition system diagram",
            caption: "Overall service system diagram",
          },
          {
            type: "image",
            src: "/projects/aid-camp1-main.png",
            alt: "AI model serving main screen",
            caption: "AI model serving interface",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "Handling asynchronous responses from the AI model was the main challenge. The process was separated into three APIs: (1) input and model execution, (2) checking inference completion, and (3) retrieving the result.\nTo prevent overload from multiple simultaneous requests, we introduced Celery as an asynchronous task queue so requests could be processed sequentially.",
          },
          {
            type: "text",
            title: "Points",
            content:
              "This project focused not only on the AI model itself but also on designing the user experience and server architecture needed to deliver it as a web service. It provided experience in model serving, API design, data structure design, and collaborative development workflows.",
          },
        ],
      },
      {
        title: "AI Competition Management & Registration Web Application",
        subtitle: "Kaggle-style AI Competition Management SPA",
        description:
          "A single-page web application designed to manage the workflow of an AI competition, including registration, submissions, and rankings.",
        techStack: [
          "Next.js",
          "React",
          "TypeScript",
          "PostgreSQL",
          "Auth.js",
          "Docker",
          "AWS",
        ],
        githubUrl:
          "https://github.com/PNU-AID/jiok-camp-server/blob/main/README-EN.md",
        demoUrl: "https://pnu-aid.com/camp2",
        image: "/projects/aid-camp2-main.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "A single-page application designed to operate an internal AI competition in a Kaggle-like format.\n\nThe system manages the entire competition workflow including registration, result submissions, and rankings. Administrators can manage team accounts and submission timelines, while participants can upload result sheets, check scores, and view rankings.",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "I was responsible for project leadership, frontend development, and authentication logic.\n\nThe application was developed using Next.js and PostgreSQL, and Auth.js was used to design the authentication system. I also implemented custom modal components with TypeScript and developed typed API hooks to reduce errors and improve development efficiency.",
          },
          {
            type: "image",
            src: "/projects/aid-camp-system-diagram.png",
            alt: "Competition management system structure",
            caption: "Competition management service architecture",
          },
          {
            type: "image",
            src: "/projects/aid-camp-network.png",
            alt: "Competition service network structure",
            caption: "Network mapping",
          },
          {
            type: "image",
            src: "/projects/aid-camp-cicd.png",
            alt: "Competition service CI CD",
            caption: "CI / CD architecture",
          },
          {
            type: "image",
            src: "/projects/aid-camp2-main.png",
            alt: "Competition registration application screen",
            caption: "Competition management main screen",
          },
          {
            type: "image",
            src: "/projects/aid-camp2-admin.png",
            alt: "Competition admin screen",
            caption: "Competition management admin screen",
          },
          {
            type: "image",
            src: "/projects/aid-camp2-team.png",
            alt: "Competition team interface",
            caption: "Competition participant interface",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "While integrating this service with the AI model demo service, managing multiple backend servers under a single domain became a challenge. Instead of merging them into a single project, we separated them into subdomains and mapped ports through an AWS ELB.\nLater, considering the relatively low traffic of the service, we migrated from ELB to an nginx-based configuration to reduce operational costs.",
          },
          {
            type: "text",
            title: "Points",
            content:
              "This project focused on real service operation aspects such as authentication flows, submission workflows, UI interactions, and type safety. It also included deployment using Docker and AWS to create a production-ready structure.",
          },
        ],
      },
      {
        title: "AID Club Homepage",
        subtitle: "GitHub Pages Based Club Introduction Website",
        description:
          "A club introduction website designed to minimize operational costs by running without a backend server.",
        techStack: [
          "Next.js",
          "React",
          "TypeScript",
          "GitHub Pages",
          "Notion API",
          "GitHub Actions",
        ],
        githubUrl: "https://github.com/PNU-AID/homepage/blob/main/README-EN.md",
        demoUrl: "https://pnu-aid.github.io/homepage/",
        image: "/projects/aid-homepage-main-thumbnail.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "A website created to introduce AID, the AI club of the School of Computer Science at Pusan National University.\n\nThe site was designed to deliver information such as club introduction, activity records, and member details while minimizing server operation costs.",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "I designed a frontend-centered architecture without a backend server and hosted it using GitHub Pages.\nThe site uses the Notion API as its data source so that it can operate without a dedicated database server.",
          },
          {
            type: "image",
            src: "/projects/aid-homepage-main.png",
            alt: "AID club homepage main screen",
            caption: "AID club homepage main screen",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "Using the Notion API in a deployed frontend environment caused CORS errors, which would normally require a backend or proxy server.\nTo avoid additional infrastructure costs, I implemented a GitHub Actions workflow that updates static data files from the Notion API once per day and redeploys the site automatically.",
          },
          {
            type: "text",
            title: "Points",
            content:
              "The key focus of this project was not only building the UI but also considering cost reduction and operational convenience. It includes experience with static hosting, external API integration, CORS workarounds, and automation.",
          },
        ],
      },
      {
        title: "DongariMart",
        subtitle: "University Club Registration & Recruitment Web Service",
        description:
          "A web project designed to help students easily explore and apply to university clubs.",
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
              "A web service developed with three teammates to allow university clubs to register and recruit members.\n\nStudents can easily browse club information that is difficult to find on the university website, while club representatives can conveniently post recruitment announcements.",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "I served as both a full-stack developer and project leader.\n\nI designed the UI using Figma and implemented the frontend using Next.js and React. I also designed the backend structure using Prisma, Next.js API routes, and NextAuth while collaborating with the backend developer.\n\nThrough this project, I gained experience with GitHub collaboration, GitHub Actions CI pipelines, and AWS deployment.",
          },
          {
            type: "image",
            src: "/projects/dongarimart-architecture.png",
            alt: "DongariMart architecture",
            caption: "DongariMart service architecture",
          },
          {
            type: "image",
            src: "/projects/dongarimart-main.png",
            alt: "DongariMart main screen",
            caption: "DongariMart main screen",
          },
          {
            type: "image",
            src: "/projects/dongarimart-list.png",
            alt: "DongariMart club list",
            caption: "Club browsing interface",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "This was my first full web application project. While implementing responsive UI for mobile environments, I learned about the behavior of CSS properties in practice.\nAdditionally, I initially developed each page independently, but later realized the importance of modularizing reusable components, which influenced how I structure projects today.",
          },
          {
            type: "text",
            title: "Points",
            content:
              "Rather than a simple campus community project, the service was designed with real users in mind, focusing on information discovery and application workflows.\n\nIt provided experience across design, frontend implementation, authentication, API integration, and deployment.",
          },
        ],
      },
    ],
  },
  ja: {
    title: "ポートフォリオ",
    description:
      "主要なプロジェクトをカード形式で整理しており、各カードをクリックすると詳細内容と画像をあわせて確認できます。",
    projects: [
      {
        title: "TMOJI",
        subtitle: "フォントスタイルを維持する画像翻訳AIサービス",
        description:
          "画像内のテキストを翻訳しながら、元画像のフォント、色、レイアウトをできる限り自然に維持するよう設計した卒業研究プロジェクトです。",
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
          "https://github.com/pnucse-capstone2025/Capstone-2025-team-10/blob/main/README-EN.md",
        demoUrl: "https://tmoji.org/",
        image:
          "https://github.com/pnucse-capstone2025/Capstone-2025-team-10/raw/main/img/banner.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "既存の画像翻訳サービスでは、翻訳後のテキストが元画像のフォント、色、配置と自然に調和せず、視覚的な違和感が生じるという問題がありました。\n\nこのプロジェクトは、単なるOCR＋機械翻訳のレベルを超えて、翻訳後のテキストを元画像のスタイルに合わせて自然に再合成することを目標とした卒業研究です。",
          },
          {
            type: "text",
            title: "What I Built",
            content:
              "私は主にサービス開発部分を担当しました。\n\nフロントエンドはVite + React + TypeScriptで実装し、ビルド成果物はAWS CloudFrontを通じて配信しました。バックエンドはPythonとFastAPIベースのREST APIとして構成し、RDBMSとRedisを使ってデータを管理しました。また、各サービスをDockerでコンテナ化し、AWS EC2環境へデプロイしました。\n\nAIモデルは別サーバーで動作するよう分離し、バックエンドサーバーがそれを呼び出して処理を管理する構成にしました。高負荷の状況でも安定して処理できるよう、CeleryとRedisを用いた非同期分散処理構造を設計しました。",
          },
          {
            type: "text",
            title: "AI / System Point",
            content:
              "OCRベースの文字認識に加え、拡散モデルベースのTextCtrlを活用して文字スタイルやグリフを学習し、翻訳後のテキストを自然に画像へ合成できるようにしました。\n\nまた、英語・日本語・韓国語に対応できるよう、多言語フォントを用いてモデルを再学習しました。実運用可能なサービス形態を目指し、フロントエンド、バックエンド、AIモデルサーバーを分離したシステムを構成しました。さらに、nginxを利用してルーティングやポート接続構造も設計し、実際の運用を考慮したインフラ構成を経験しました。",
          },
          {
            type: "image",
            src: "https://github.com/pnucse-capstone2025/Capstone-2025-team-10/raw/main/img/sample.gif",
            alt: "TMOJIデモ動画",
            caption: "TMOJIデモ動画",
          },
          {
            type: "image",
            src: "/projects/tmoji-flow.png",
            alt: "TMOJI画面フロー（テキスト指定 → OCR → 翻訳確認 → 画像合成）",
            caption:
              "TMOJI画面フロー（テキスト指定 → OCR → 翻訳確認 → 画像合成）",
          },
          {
            type: "image",
            src: "/projects/tmoji-system.png",
            alt: "TMOJIシステム構成",
            caption: "TMOJIシステム構成",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "フロントエンド：画像内の翻訳したいテキスト領域を指定するためのUX実装が課題でした。画像の上に選択領域を矩形として調整できるレイヤーを追加し、画像の解像度と画像要素の画面上のサイズを計算して、矩形領域を正確に調整できるよう設計しました。\n\nバックエンド-AIサーバー連携：AIサーバーのAIモデルはUbuntu環境上のPythonプログラムとして動作していました。これをバックエンドサーバーからの呼び出しに応じて推論結果を返す方式にする必要がありましたが、AIサーバーのポート開放に制限があったため、SSH接続で直接コマンドを実行する方式を採用しました。バックエンドサーバー側では、非同期キューを通じて順次処理する形で実装しました。\n\nCI-CD：EC2環境にデプロイされたバックエンドサーバーとAIサーバー間のSSH通信を、CI-CDパイプラインにも適用する必要がありました。パイプラインの最後には、新しくpullされたファイルをもとにSSMコマンドでDockerを再起動する工程が含まれていたため、その段階でGitHub Secretsに保存したSSHキーとコマンドをSSM Parameterへ移し、ファイルとして保存する処理を追加することで解決しました。",
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
        title: "サークルAI大会優秀作デモアプリケーション",
        subtitle: "ディープラーニングモデルWebデプロイプロジェクト",
        description:
          "サークルで開催されたAI大会の優秀なディープラーニングモデルを、Web上で体験できるようにしたAIサービスプロジェクトです。",
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
        githubUrl:
          "https://github.com/PNU-AID/jiok-camp-server/blob/main/README-EN.md",
        demoUrl: "https://pnu-aid.com/camp1",
        image: "/projects/aid-camp1-main.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "サークル内AI大会の一部として行ったプロジェクトであり、大会の優秀なディープラーニングモデルをWeb上で公開し、ユーザーが直接体験できるようにしたAI Webサービスです。\nこの大会のテーマは、レビューのデータを学習し、レビュー文を読んで星評価を予測するAIを実装することでした。\n特定の店舗に対するレビューをチャット形式で投稿すると、ユーザーが付けるであろう評価をAIが推論し、チャットの横に表示するよう設計したプロジェクトです。",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "Next.js、Django、PyTorchを使用し、プロジェクト全体の統括を担当しました。\n特にUI/UX設計、API仕様書の作成、DB設計、PRレビューに重点的に参加しました。単なるモデル配布ではなく、Webサービスとして安定的に連携するよう全体の流れを調整する役割を担いました。",
          },
          {
            type: "image",
            src: "/projects/aid-camp-system-diagram.png",
            alt: "AID地獄キャンプのシステムダイアグラム",
            caption: "サービス全体のシステムダイアグラム",
          },
          {
            type: "image",
            src: "/projects/aid-camp1-main.png",
            alt: "AI model servingメイン画面",
            caption: "AI model servingサービス画面",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "チャットを投稿した後、モデルの応答まで待機させる非同期処理を実装することが課題でした。バックエンドでテキスト入力を受けた後、AIの推論結果を返す流れを、1. 入力受付およびモデル起動、2. モデル演算完了の確認、3. 結果値の取得、の3つのAPIに分けて設計しました。また、同時に複数のリクエストが入った際の過負荷を防ぐことも課題であり、これに対して非同期キュー分散ライブラリであるCeleryを導入し、同時に入ってきたリクエストを順次処理するよう設計しました。",
          },
          {
            type: "text",
            title: "Points",
            content:
              "AIモデルそのものだけでなく、それをWebサービスとして提供するためのユーザー体験とサーバー構造をあわせて検討したプロジェクトでした。\nモデルサービング、API設計、データ構造設計、協業レビューのプロセスまで経験できた点に大きな意味がありました。",
          },
        ],
      },
      {
        title: "サークルAI大会運営・受付Webアプリケーション",
        subtitle: "KaggleスタイルAI大会運営SPA",
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
        githubUrl:
          "https://github.com/PNU-AID/jiok-camp-server/blob/main/README-EN.md",
        demoUrl: "https://pnu-aid.com/camp2",
        image: "/projects/aid-camp2-main.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "サークル内AI大会をKaggleのような方式で運営できるように開発したシングルページアプリケーションです。\n\n大会の進行、参加受付、結果提出などの運営フローをWeb上で処理できるように構成しました。\n管理者は各チームの提出タイムラインやチームアカウントを管理でき、参加チームは結果sheetの提出、点数確認、ランキング確認ができます。",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "統括、フロントエンド、認証ロジックを担当しました。\n\nNext.jsとPostgreSQLを用いて開発し、Auth.jsを活用してログイン構造を設計しました。また、TypeScriptを通じてカスタムモーダルを実装し、型定義されたAPI hooksを開発することで、タイプミスや実装ミスを減らしながら迅速に開発できるようにしました。",
          },
          {
            type: "image",
            src: "/projects/aid-camp-system-diagram.png",
            alt: "大会運営Web構造",
            caption: "大会運営サービスWeb構造",
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
            alt: "大会運営サービスCI CD",
            caption: "CI / CD構成",
          },
          {
            type: "image",
            src: "/projects/aid-camp2-main.png",
            alt: "大会進行受付アプリケーション画面",
            caption: "大会進行・受付アプリケーションメイン画面",
          },
          {
            type: "image",
            src: "/projects/aid-camp2-admin.png",
            alt: "大会進行受付アプリケーション管理者画面",
            caption: "大会進行・受付アプリケーション管理者画面",
          },
          {
            type: "image",
            src: "/projects/aid-camp2-team.png",
            alt: "大会進行受付アプリケーション参加チーム画面",
            caption: "大会進行・受付アプリケーション参加チーム画面",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "このサービスを大会の優秀AIモデルデモサービスと統合する過程で、異なるバックエンドサーバーを1つのドメインに統合することが課題となりました。同じプロジェクトとして統合するのではなく、同じDNSサーバー上でサブドメインを分け、それをELBでポートごとにマッピングする方式で解決できるよう設計しました。\nその後、アクセス数が多くないサービスであることを考慮し、ELBで発生するコストを削減するため、Nginxへ置き換えてマイグレーションしました。",
          },
          {
            type: "text",
            title: "Points",
            content:
              "サービス運用の観点から、認証、提出フロー、UIインタラクション、型安全性をあわせて考慮したプロジェクトでした。単なる機能実装を超えて、実際に運用可能な構造を作るためにDockerとAWSベースのデプロイまでつなげた点が強みです。",
          },
        ],
      },
      {
        title: "AIDサークルホームページ",
        subtitle: "GitHub Pagesベースのサークル紹介Webサイト",
        description:
          "バックエンドサーバーなしで運用コストを抑えながら制作したサークル紹介用Webサイトです。",
        techStack: [
          "Next.js",
          "React",
          "TypeScript",
          "GitHub Pages",
          "Notion API",
          "GitHub Actions",
        ],
        githubUrl: "https://github.com/PNU-AID/homepage/blob/main/README-EN.md",
        demoUrl: "https://pnu-aid.github.io/homepage/",
        image: "/projects/aid-homepage-main-thumbnail.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "釜山大学情報コンピューター工学部のAIサークル、AIDを紹介するためのホームページプロジェクトです。\n\nサークル紹介、活動記録、構成員案内など必要な情報を伝えつつ、サーバー運用コストを最小化する方向で設計しました。",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "バックエンドサーバーを置かず、最小限の機能だけでフロントエンド中心の構成を設計し、GitHub Pagesを通じて静的ホスティングしました。\nデータ保存先としてはNotion APIを使用し、別途データベースサーバーなしで動作するよう実装しました。",
          },
          {
            type: "image",
            src: "/projects/aid-homepage-main.png",
            alt: "AIDサークルホームページメイン画面",
            caption: "AIDサークルホームページメイン画面",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "Notion APIをデプロイされたフロントエンド環境で使用する際、CORSエラーが発生し、バックエンドサーバーまたはプロキシサーバーが必要になるという問題がありました。これを解決するために、Github Actionsを利用して毎日1回Notion APIを通じてリポジトリの静的データファイルを更新し、再デプロイするよう設計することで、別途費用をかけずに回避できました。",
          },
          {
            type: "text",
            title: "Points",
            content:
              "単に画面を作るだけで終わらず、コスト削減と運用のしやすさまで考慮した点が重要でした。\n静的サイトホスティング、外部API活用、CORS回避、運用自動化の経験を含むプロジェクトです。",
          },
        ],
      },
      {
        title: "サークルマート",
        subtitle: "大学サークル登録・募集Webサービス",
        description:
          "大学のサークル情報を簡単に探して応募できるように制作したWebプロジェクトです。",
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
              "開発に関心のある同期3人と一緒に、大学のサークルを登録し、部員を募集できるWebサービスを開発しました。\n\n一般学生は釜山大学のホームページでは見つけにくいサークル情報を簡単に確認して応募でき、サークル関係者は広報や募集告知の登録を手軽に行えるよう設計しました。",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "プロジェクトではFull-stackおよびプロジェクトリーダーの役割を担当しました。\n\n自らFigmaでWebページを設計し、Next.jsベースのReactフロントエンドを実装しました。また、Prisma、Next.js API、NextAuthを活用したバックエンド構造を構想し、バックエンド担当者と協力して実装を進めました。\n\nこの過程で、GitHubでの協業、GitHub Actionsを活用したビルド自動化、AWSデプロイの経験を積みました。",
          },
          {
            type: "image",
            src: "/projects/dongarimart-architecture.png",
            alt: "サークルマートアーキテクチャ",
            caption: "サークルマートサービスアーキテクチャ",
          },
          {
            type: "image",
            src: "/projects/dongarimart-main.png",
            alt: "サークルマートメイン画面",
            caption: "サークルマートメイン画面",
          },
          {
            type: "image",
            src: "/projects/dongarimart-list.png",
            alt: "サークルマート一覧画面",
            caption: "サークル探索および一覧画面",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "Webアプリケーション開発に初めて本格的に取り組んだプロジェクトでした。モバイル環境などに対応するレスポンシブUIを直接実装しながら、CSSプロパティの特性について実践的に学ぶことができました。また、当初は各ページごとにコードを新しく書いて開発していましたが、その後、繰り返し使われるコンポーネントをモジュール化する必要性を実感し、モジュール化を意識して開発するきっかけになりました。",
          },
          {
            type: "text",
            title: "Points",
            content:
              "単なる学内コミュニティ向けプロジェクトではなく、実際の利用者を基準に情報探索と応募フローを考慮して設計した点が強みでした。\n\n特に、デザイン、フロントエンド実装、認証およびAPI連携構造の理解、デプロイ経験まで幅広く経験できたプロジェクトです。",
          },
        ],
      },
    ],
  },
};

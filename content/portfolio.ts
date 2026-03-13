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
        image: "/projects/aid-homepage-main.png",
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
      "Major projects are organized as cards. Click each card to view detailed descriptions and images.",
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
          "https://github.com/pnucse-capstone2025/Capstone-2025-team-10",
        demoUrl: "https://tmoji.org/",
        image:
          "https://github.com/pnucse-capstone2025/Capstone-2025-team-10/raw/main/img/banner.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "Many existing image translation services produce unnatural results because translated text does not visually match the original font, color, and layout.\n\nThis project aims to go beyond simple OCR and machine translation by re-synthesizing translated text so that it naturally fits the original image style.",
          },
          {
            type: "text",
            title: "What I Built",
            content:
              "I mainly worked on the service development.\n\nThe frontend was implemented using Vite, React, and TypeScript and deployed via AWS CloudFront. The backend was built with Python and FastAPI as a REST API, using PostgreSQL and Redis for data management. Each component was containerized with Docker and deployed on AWS EC2.\n\nThe AI model runs on a separate server, and the backend manages inference requests by communicating with that server. To handle heavy workloads reliably, I designed an asynchronous distributed processing system using Celery and Redis.",
          },
          {
            type: "text",
            title: "AI / System Point",
            content:
              "In addition to OCR-based text recognition, we used the diffusion-based TextCtrl model to learn character styles and glyphs so that translated text can be naturally synthesized back into the image.\n\nTo support English, Japanese, and Korean, the model was retrained with multilingual fonts. The system architecture separates frontend, backend, and AI model servers to reflect a practical service environment. I also designed routing and port connections using nginx to simulate real-world infrastructure.",
          },
          {
            type: "image",
            src: "https://github.com/pnucse-capstone2025/Capstone-2025-team-10/raw/main/img/sample.gif",
            alt: "TMOJI main screen",
            caption: "TMOJI main interface",
          },
          {
            type: "image",
            src: "https://github.com/pnucse-capstone2025/Capstone-2025-team-10/raw/main/img/system.png",
            alt: "TMOJI processing flow",
            caption: "Image translation and asynchronous processing flow",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "Frontend: Implementing the UX for selecting text regions within images was challenging. I implemented an adjustable rectangular overlay layer and calculated the relationship between image resolution and rendered size to precisely control the selection area.\n\nBackend-AI Integration: The AI model runs as a Python program on an Ubuntu environment. Since the AI server ports were restricted, we decided to send commands through SSH. The backend processes tasks sequentially using an asynchronous queue.\n\nCI/CD: Integrating SSH communication between the backend server and AI server into the CI/CD pipeline was challenging. The deployment pipeline restarts Docker containers via SSM commands after pulling new code. We solved this by transferring SSH keys stored in GitHub Secrets into SSM parameters during deployment.",
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
          "A web application that allows users to experience award-winning deep learning models developed in a club AI competition.",
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
              "This project was part of an internal AI competition. It provides a web service where users can directly experience top-performing deep learning models developed during the competition.\n\nThe competition task was to train a model that predicts review ratings from text. Users can post a review in chat format, and the AI predicts the rating and displays it next to the message.",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "I served as the project lead.\n\nThe system was built using Next.js, Django, and PyTorch. My main contributions included UI/UX design, API specification writing, database schema design, and PR review. My role focused on coordinating the overall service architecture rather than simply deploying a model.",
          },
          {
            type: "image",
            src: "/projects/aid-camp-system-diagram.png",
            alt: "system diagram",
            caption: "Overall system architecture",
          },
          {
            type: "image",
            src: "/projects/aid-camp1-main.png",
            alt: "AI model serving UI",
            caption: "AI model serving interface",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "Handling asynchronous responses from the AI model was the main challenge. We separated the process into three APIs: (1) input and model execution, (2) checking whether inference is completed, and (3) retrieving the result.\n\nTo prevent overload when multiple requests occur simultaneously, we introduced Celery as an asynchronous task queue so that requests could be processed sequentially.",
          },
          {
            type: "text",
            title: "Points",
            content:
              "This project focused not only on the AI model itself but also on delivering it as a practical web service. It provided experience in model serving, API design, database schema design, and collaborative development processes.",
          },
        ],
      },

      {
        title: "AI Competition Management Web Application",
        subtitle: "Kaggle-style AI Competition SPA",
        description:
          "A single-page web application designed to manage registration, submissions, and rankings for an AI competition.",
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
              "A single-page application designed to operate an internal AI competition in a Kaggle-like format.\n\nThe platform manages the entire workflow including competition registration, result submission, and ranking. Administrators can manage team accounts and submission timelines, while participants can upload results and check rankings.",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "I was responsible for project leadership, frontend development, and authentication logic.\n\nThe system was built with Next.js and PostgreSQL, and Auth.js was used to implement authentication. I also developed custom modal components with TypeScript and created typed API hooks to reduce errors and improve development speed.",
          },
          {
            type: "image",
            src: "/projects/aid-camp-system-diagram.png",
            alt: "system structure",
            caption: "Competition management service architecture",
          },
          {
            type: "image",
            src: "/projects/aid-camp-network.png",
            alt: "network mapping",
            caption: "Network architecture",
          },
          {
            type: "image",
            src: "/projects/aid-camp-cicd.png",
            alt: "CI CD",
            caption: "CI/CD pipeline",
          },
          {
            type: "image",
            src: "/projects/aid-camp2-main.png",
            alt: "application UI",
            caption: "Competition management application",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "Integrating this service with the AI model demo service required connecting multiple backend servers under one domain. Instead of merging them into a single project, we separated them using subdomains and mapped them through an AWS ELB.\n\nLater, considering the relatively low traffic, we migrated from ELB to an nginx-based routing system to reduce operational costs.",
          },
          {
            type: "text",
            title: "Points",
            content:
              "This project focused on practical service operation including authentication flows, submission workflows, UI interactions, and type safety. It also included real deployment using Docker and AWS.",
          },
        ],
      },

      {
        title: "AID Club Homepage",
        subtitle: "GitHub Pages Based Club Website",
        description:
          "A club introduction website designed to minimize operating costs without running a backend server.",
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
              "A website created to introduce AID, an AI club in the Department of Computer Engineering at Pusan National University.\n\nThe system was designed to provide club information, activity records, and member introductions while minimizing operational costs.",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "I designed a frontend-centered architecture without running a backend server and hosted the site using GitHub Pages.\n\nThe data source uses the Notion API so that the website can function without a dedicated database server.",
          },
          {
            type: "image",
            src: "/projects/aid-homepage-main.png",
            alt: "homepage UI",
            caption: "AID club homepage",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "When using the Notion API in a deployed frontend environment, CORS errors occurred, which normally require a backend proxy server.\n\nTo solve this without additional cost, I created a GitHub Actions workflow that fetches data from the Notion API once per day and updates the repository's static data files before redeploying the site.",
          },
          {
            type: "text",
            title: "Points",
            content:
              "This project focused not only on UI implementation but also on cost reduction and operational convenience. It includes experience with static hosting, external API integration, CORS workarounds, and automation.",
          },
        ],
      },

      {
        title: "DongariMart",
        subtitle: "University Club Recruitment Web Service",
        description:
          "A web service designed to help students easily explore and apply to university clubs.",
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
              "I served as both a full-stack developer and project leader.\n\nI designed the UI using Figma and implemented the frontend using Next.js and React. I also designed the backend structure using Prisma, Next.js API routes, and NextAuth, collaborating closely with the backend developer.\n\nThis project provided experience with GitHub collaboration, GitHub Actions CI pipelines, and AWS deployment.",
          },
          {
            type: "image",
            src: "/projects/dongarimart-architecture.png",
            alt: "architecture",
            caption: "Service architecture",
          },
          {
            type: "image",
            src: "/projects/dongarimart-main.png",
            alt: "main UI",
            caption: "Main interface",
          },
          {
            type: "image",
            src: "/projects/dongarimart-list.png",
            alt: "club list",
            caption: "Club browsing interface",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "This was my first full web application project. Implementing responsive UI for mobile environments helped me learn CSS behavior in practice.\n\nInitially, each page was implemented independently, but later I realized the importance of modularizing reusable components, which influenced how I structure projects afterwards.",
          },
          {
            type: "text",
            title: "Points",
            content:
              "Rather than a simple community project, this service was designed with real users in mind, focusing on information discovery and application workflows.\n\nIt provided hands-on experience across design, frontend development, authentication, API integration, and deployment.",
          },
        ],
      },
    ],
  },
  ja: {
    title: "ポートフォリオ",
    description:
      "主要なプロジェクトをカード形式で整理しています。各カードをクリックすると、詳細な説明と画像を確認できます。",
    projects: [
      {
        title: "TMOJI",
        subtitle: "フォントスタイルを維持する画像翻訳AIサービス",
        description:
          "画像内のテキストを翻訳しながら、元画像のフォント、色、レイアウトをできる限り自然に維持することを目指した卒業研究プロジェクトです。",
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
              "既存の画像翻訳サービスでは、翻訳後のテキストが元画像のフォント、色、配置と自然に調和せず、視覚的な違和感が生じるという課題がありました。\n\n本プロジェクトは、単なるOCRと機械翻訳にとどまらず、翻訳後のテキストを元画像のスタイルに合わせて自然に再合成することを目標とした卒業研究です。",
          },
          {
            type: "text",
            title: "What I Built",
            content:
              "私は主にサービス開発部分を担当しました。\n\nフロントエンドはVite、React、TypeScriptで実装し、ビルド成果物はAWS CloudFrontを通じて配信しました。バックエンドはPythonとFastAPIを用いたREST APIとして構築し、データ管理にはPostgreSQLとRedisを使用しました。また、各サービスをDockerでコンテナ化し、AWS EC2環境へデプロイしました。\n\nAIモデルは別サーバーで動作する構成とし、バックエンドがこれを呼び出して処理を管理するように設計しました。高負荷時でも安定して処理できるよう、CeleryとRedisを用いた非同期分散処理構造を設計しました。",
          },
          {
            type: "text",
            title: "AI / System Point",
            content:
              "OCRベースの文字認識に加えて、拡散モデルベースのTextCtrlを活用し、文字スタイルやグリフを学習させることで、翻訳後のテキストを自然に画像へ再合成できるようにしました。\n\nまた、英語・日本語・韓国語に対応するため、多言語フォントを用いてモデルを再学習しました。実運用可能なサービスを目指し、フロントエンド、バックエンド、AIモデルサーバーを分離したシステム構成を採用しました。さらに、nginxを用いてルーティングおよびポート接続構成を設計し、実際の運用を意識したインフラ構成も経験しました。",
          },
          {
            type: "image",
            src: "https://github.com/pnucse-capstone2025/Capstone-2025-team-10/raw/main/img/sample.gif",
            alt: "TMOJIメイン画面",
            caption: "TMOJIメイン画面",
          },
          {
            type: "image",
            src: "https://github.com/pnucse-capstone2025/Capstone-2025-team-10/raw/main/img/system.png",
            alt: "TMOJI処理フロー",
            caption: "画像翻訳および非同期処理フロー",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "フロントエンド：画像内の翻訳したいテキスト領域を指定するためのUX実装が課題でした。画像上に調整可能な矩形レイヤーを重ね、画像の解像度と画面上での表示サイズを計算することで、選択領域を正確に制御できるよう設計しました。\n\nバックエンドとAIサーバーの連携：AIサーバー上のモデルはUbuntu環境のPythonプログラムとして動作していました。これをバックエンドの呼び出しに応じて推論結果を返す方式にする必要がありましたが、AIサーバーのポート公開に制限があったため、SSH接続で直接コマンドを実行する方式を採用しました。バックエンド側では非同期キューを通じて順次処理する形で実装しました。\n\nCI/CD：EC2上にデプロイされたバックエンドサーバーとAIサーバー間のSSH通信をCI/CDパイプラインにも組み込む必要があり、課題となりました。パイプラインの末尾では、新たにPullしたファイルをもとにSSMコマンドでDockerを再起動する工程が含まれていたため、その段階でGitHub Secretsに保存したSSHキーやコマンドをSSM Parameterへ移し、ファイルとして保存する処理を追加して対応しました。",
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
        title: "サークルAI大会 優秀作デモアプリケーション",
        subtitle: "ディープラーニングモデルのWebデプロイプロジェクト",
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
        githubUrl: "https://github.com/2024-PNU-SW-StudyGroup/Group-11",
        demoUrl: "https://pnu-aid.com/camp1",
        image: "/projects/aid-camp1-main.png",
        details: [
          {
            type: "text",
            title: "Overview",
            content:
              "サークル内AI大会の一環として行ったプロジェクトであり、大会で高評価を得たディープラーニングモデルをWeb上で公開し、ユーザーが直接体験できるようにしたAIサービスです。\n\nこの大会のテーマは、レビュー文を学習し、テキストから星評価を予測するAIを実装することでした。特定店舗に対するレビューをチャット形式で入力すると、AIが内容をもとに評価を推論し、チャット横に表示されるように設計しました。",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "私はプロジェクト全体の統括を担当しました。\n\nNext.js、Django、PyTorchを使用し、特にUI/UX設計、API仕様書の作成、DB設計、PRレビューに重点的に関わりました。単なるモデル公開ではなく、Webサービスとして安定的に連携する全体構成を調整する役割を担いました。",
          },
          {
            type: "image",
            src: "/projects/aid-camp-system-diagram.png",
            alt: "システムダイアグラム",
            caption: "サービス全体のシステム構成図",
          },
          {
            type: "image",
            src: "/projects/aid-camp1-main.png",
            alt: "AIモデル提供画面",
            caption: "AIモデル提供サービス画面",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "チャット投稿後、モデルの応答までを待機させる非同期処理の実装が課題でした。バックエンドでテキスト入力を受けてからAIの推論結果を返す流れを、①入力受付とモデル起動、②推論完了確認、③結果取得、の3つのAPIに分けて設計しました。\n\nまた、同時に複数のリクエストが入った際の過負荷も課題であり、これに対してCeleryを導入し、リクエストを順次処理できるように設計しました。",
          },
          {
            type: "text",
            title: "Points",
            content:
              "AIモデル自体だけでなく、それをWebサービスとして届けるためのユーザー体験とサーバー構成をあわせて検討したプロジェクトでした。モデルサービング、API設計、データ構造設計、協業レビューのプロセスまで経験できた点に大きな意味がありました。",
          },
        ],
      },
      {
        title: "サークルAI大会 運営・受付Webアプリケーション",
        subtitle: "Kaggle風AI大会運営SPA",
        description:
          "AI大会の進行、参加受付、提出フローをWeb上で管理できるようにしたシングルページアプリケーションです。",
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
              "サークル内AI大会をKaggleのような形式で運営できるように開発したシングルページアプリケーションです。\n\n大会進行、参加受付、結果提出などの運営フローをWeb上で処理できるよう構成しました。管理者は各チームの提出タイムラインやチームアカウントを管理でき、参加チームは結果シートの提出、スコア確認、ランキング確認ができるよう設計しました。",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "私は統括、フロントエンド、認証ロジックを担当しました。\n\nNext.jsとPostgreSQLを用いて開発し、Auth.jsを活用してログイン構造を設計しました。また、TypeScriptを用いてカスタムモーダルを実装し、型定義されたAPI hooksを開発することで、タイポや実装ミスを減らしながら効率的に開発できるようにしました。",
          },
          {
            type: "image",
            src: "/projects/aid-camp-system-diagram.png",
            alt: "大会運営Web構成",
            caption: "大会運営サービスのWeb構成",
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
            alt: "大会運営サービスのCI/CD",
            caption: "CI / CD構成",
          },
          {
            type: "image",
            src: "/projects/aid-camp2-main.png",
            alt: "大会運営アプリケーション画面",
            caption: "大会運営・受付アプリケーションのメイン画面",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "このサービスを優秀AIモデルのデモサービスと統合する過程で、異なるバックエンドサーバーを1つのドメイン配下で運用することが課題となりました。単一プロジェクトへ統合するのではなく、同一DNS上でサブドメインを分け、ELBによるポート別マッピングで対応できるよう設計しました。\n\nその後、アクセス量が多くないサービスである点を考慮し、ELB運用コストを削減するためにnginxベースの構成へ移行しました。",
          },
          {
            type: "text",
            title: "Points",
            content:
              "認証、提出フロー、UIインタラクション、型安全性など、サービス運営の観点を含めて設計したプロジェクトでした。単なる機能実装にとどまらず、DockerとAWSを活用した実運用可能な構成までつなげた点が強みです。",
          },
        ],
      },
      {
        title: "AIDサークルホームページ",
        subtitle: "GitHub Pagesベースのサークル紹介Webサイト",
        description:
          "バックエンドサーバーを運用せず、運営コストを抑えながら制作したサークル紹介サイトです。",
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
              "釜山大学 情報コンピュータ工学部のAIサークル、AIDを紹介するために制作したホームページプロジェクトです。\n\nサークル紹介、活動記録、メンバー案内など必要な情報を伝えつつ、サーバー運用コストを最小限に抑える方針で設計しました。",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "バックエンドサーバーを置かず、最小限の機能でフロントエンド中心の構成を設計し、GitHub Pagesで静的ホスティングしました。\n\nデータ保存先にはNotion APIを利用し、専用のデータベースサーバーなしで運用できるよう実装しました。",
          },
          {
            type: "image",
            src: "/projects/aid-homepage-main.png",
            alt: "AIDサークルホームページ画面",
            caption: "AIDサークルホームページのメイン画面",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "デプロイ済みのフロントエンド環境からNotion APIを利用する際、CORSエラーが発生し、通常であればバックエンドまたはプロキシサーバーが必要になるという課題がありました。\n\nこれを追加コストなしで解決するため、GitHub Actionsを利用して毎日1回Notion APIからリポジトリ内の静的データファイルを更新し、自動的に再デプロイする仕組みを設計しました。",
          },
          {
            type: "text",
            title: "Points",
            content:
              "単に画面を作るだけではなく、コスト削減と運用のしやすさまで考慮した点が重要でした。静的サイトホスティング、外部API活用、CORS回避、運用自動化の経験を含むプロジェクトです。",
          },
        ],
      },
      {
        title: "ドンアリマート",
        subtitle: "大学サークル登録・募集Webサービス",
        description:
          "大学内のサークル情報を簡単に探し、応募できるように制作したWebプロジェクトです。",
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
              "開発に関心のある同期3名とともに、大学内のサークルを登録し、部員募集ができるWebサービスを開発しました。\n\n一般学生は大学公式サイトでは探しにくいサークル情報を簡単に確認して応募でき、サークル運営側は広報や募集公告の掲載を手軽に行えるよう設計しました。",
          },
          {
            type: "text",
            title: "What I Did",
            content:
              "私はフルスタック開発およびプロジェクトリーダーを担当しました。\n\nFigmaでWebページを設計し、Next.jsベースのReactフロントエンドを実装しました。また、Prisma、Next.js API、NextAuthを活用したバックエンド構成を考案し、バックエンド担当者と協力して実装を進めました。\n\nこの過程で、GitHubを用いたチーム開発、GitHub Actionsによるビルド自動化、AWSへのデプロイを経験しました。",
          },
          {
            type: "image",
            src: "/projects/dongarimart-architecture.png",
            alt: "ドンアリマートアーキテクチャ",
            caption: "ドンアリマートのサービスアーキテクチャ",
          },
          {
            type: "image",
            src: "/projects/dongarimart-main.png",
            alt: "ドンアリマートメイン画面",
            caption: "ドンアリマートのメイン画面",
          },
          {
            type: "image",
            src: "/projects/dongarimart-list.png",
            alt: "ドンアリマート一覧画面",
            caption: "サークル一覧・探索画面",
          },
          {
            type: "text",
            title: "Challenges & Solutions",
            content:
              "このプロジェクトは、私が初めて本格的に取り組んだWebアプリケーション開発でした。モバイル環境などを意識したレスポンシブUIを直接実装する中で、CSSプロパティの特性を実践的に学ぶことができました。\n\nまた、当初は各ページごとに個別にコードを書いていましたが、開発を進める中で繰り返し使うコンポーネントのモジュール化の必要性を実感し、その後の開発では再利用性を意識して設計するようになりました。",
          },
          {
            type: "text",
            title: "Points",
            content:
              "単なる学内コミュニティ向けのプロジェクトではなく、実際の利用者を想定し、情報探索と応募フローを意識して設計した点が強みでした。\n\n特に、デザイン、フロントエンド実装、認証・API連携の理解、デプロイまで幅広く経験できたプロジェクトです。",
          },
        ],
      },
    ],
  },
};

export const person = {
  name: "Bhagya Dissanayake",
  role: "Data Scientist / AI-ML Engineer",
  email: "bhagyasdi@gmail.com",
  location: "Sri Lanka",
  links: {
    linkedin: "https://www.linkedin.com/in/bhagya-dissanayake-3a1a43286/",
    github: "https://github.com/bhagya-d36",
    medium: "https://medium.com/@bhagyadissanayake",
    espncricinfo: "https://www.espncricinfo.com/cricketers/bhagya-dissanayake-1214966",
  },
  cvFile: "/Bhagya_Dissanayake-CV.pdf",
};

export const about = `I'm a Data Science and Business Analytics graduate with First Class Honours from the University of London, under the academic direction of London School of Economics and Political Science. Currently, I work as an Analyst in ITSM (Analytics & AI/ML) at Sysco LABS Sri Lanka, where I deliver analytics and predictive intelligence (AI/ML) solutions within Sysco's ITSM ecosystem. Previously, I've gained experience in the AI/ML space at V S Information Systems (Pvt) Ltd. Alongside my academic and professional journey, I have also competed at the premier level in Sri Lanka's domestic cricket circuit, which has strengthened my skills in teamwork, leadership, discipline, and performance under pressure.`;

export type SkillRow = {
  domain: string;
  tools: string;
};

export const skillMatrix: SkillRow[] = [
  {
    domain: "AI & Machine Learning",
    tools:
      "Scikit-learn, XGBoost, PyTorch, TensorFlow/Keras · A/B & Hypothesis Testing · ARIMA, Prophet, LSTM · NER, Text Classification, Embeddings · CNNs, Object Detection, OpenCV",
  },
  {
    domain: "Generative AI & LLMs",
    tools: "Prompt Engineering · RAG · LoRA/QLoRA Fine-Tuning · Model Context Protocol (MCP) · LLM Evaluation & Guardrails",
  },
  {
    domain: "Agentic AI & Automation",
    tools: "LangChain, LangGraph, Copilot Studio · n8n, Power Automate · Multi-Agent Systems",
  },
  {
    domain: "Data Analysis & Visualization",
    tools: "Tableau & Power BI (DAX, M-Code) · Exploratory Data Analysis & Statistical Reporting · Advanced Excel",
  },
  {
    domain: "Programming & Data Engineering",
    tools: "Python & R · SQL & Query Optimization · Pinecone, FAISS, ChromaDB, Weaviate · Data Pipelines",
  },
  {
    domain: "MLOps / AIOps & Cloud",
    tools: "SageMaker, AI Foundry, Vertex AI · MLflow · AWS, Azure, GCP · Docker, Kubernetes · GitHub Actions · Git",
  },
  {
    domain: "Core Competencies",
    tools: "Problem Solving & Critical Thinking · Collaboration & Communication · Technical Documentation · Systems Thinking",
  },
];

export type Role = {
  title: string;
  start: string;
  end: string;
  bullets: string[];
};

export type ExperienceEntry = {
  org: string;
  roles: Role[];
};

export const experience: ExperienceEntry[] = [
  {
    org: "Sysco LABS Sri Lanka",
    roles: [
      {
        title: "Analyst — ITSM (Analytics & AI/ML)",
        start: "Nov 2025",
        end: "Present",
        bullets: [
          "Delivered analytics and reporting across all of Sysco's ITSM practices, building, maintaining, and refining interactive dashboards and reports using Power BI and ServiceNow, transforming ITSM data into actionable insights for relevant teams and leadership.",
          "Designed and deployed AI & Machine Learning solutions across different verticals in Sysco's ITSM ecosystem, spanning Incident Management (& MIM), Change Management, and Problem Management, improving overall efficiency and operational performance. Production-grade models addressing high-impact use cases are currently deployed and in active use.",
          "Supported data governance initiatives by ensuring data accuracy, consistency, quality, and compliance across reporting and analytics processes.",
        ],
      },
    ],
  },
  {
    org: "V S Information Systems (Pvt) Ltd",
    roles: [
      {
        title: "Associate Systems Engineer — AI/ML",
        start: "Feb 2025",
        end: "Aug 2025",
        bullets: [
          "Explored AI/ML technologies and established partnerships for VSIS, identifying mature market segments for AI use cases.",
          "Created a Generative AI powered customer service chatbot using NLP and an LLM.",
          "Built a revenue prediction model using time-series forecasting (Prophet).",
          "Analyzed financial and customer support data for insights and trends using Python and Power BI, working closely with a team of data analysts.",
          "Coordinated and contributed to the integration of AI features for an ITSM application, optimizing service management processes.",
          "Developed and executed the end-to-end deployment of a Learning Management System (LMS), improving knowledge management and enabling scalable employee onboarding and continuous learning.",
        ],
      },
      {
        title: "AI/ML Research Intern",
        start: "Aug 2024",
        end: "Feb 2025",
        bullets: [],
      },
    ],
  },
];

export type FeaturedProject = {
  title: string;
  summary: string;
  tags: string[];
  repo: string;
  size: "full" | "half";
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "FightIQ | Tale of the Cage",
    summary:
      "A Retrieval-Augmented Generation (RAG) powered Mixed Martial Arts (primarily UFC) knowledge chatbot with a Python backend, Chroma vector database, hybrid search, LLM-based query rewriting, and a custom web frontend, leveraging a 1000+ document knowledge base. Designed to be adaptable across multiple LLM APIs.",
    tags: ["Python", "RAG", "ChromaDB", "Hybrid Search", "LLM"],
    repo: "https://github.com/bhagya-d36/Fight-IQ",
    size: "full",
  },
  {
    title: "Laptop Marketplace Data Intelligence Platform",
    summary:
      "An AI-powered laptop recommendation assistant using an LLM and RAG, ingesting product specification PDFs to enable natural language queries, semantic retrieval, intelligent recommendations, advanced filtering, and review analytics.",
    tags: ["LLM", "RAG", "Semantic Search"],
    repo: "https://github.com/bhagya-d36/laptop-data-intelligence",
    size: "half",
  },
  {
    title: "Driver's License Information Extraction",
    summary:
      "A machine learning pipeline that extracts vehicle class information and validity dates from images of driving licenses using robust image preprocessing, computer vision and OCR.",
    tags: ["OpenCV", "PaddleOCR", "Tesseract", "Pandas"],
    repo: "https://github.com/bhagya-d36/driving-license-ocr",
    size: "half",
  },
  {
    title: "Machine Learning on UCI Datasets",
    summary:
      "Analyzed three real-world UCI datasets applying core machine learning techniques: unsupervised learning (clustering, PCA) and supervised learning (regression, classification) — with EDA, model optimization, evaluation, and literature-grounded findings.",
    tags: ["Scikit-learn", "Clustering", "PCA", "Regression"],
    repo: "https://github.com/bhagya-d36/ml-clustering-classification-regression",
    size: "half",
  },
  {
    title: "Flight Analysis",
    summary:
      "Analyzed commercial flight data across major US carriers to identify optimal times/days to minimize delays and the impact of aircraft age on delays; developed a logistic regression model to predict flight diversions.",
    tags: ["Python", "R", "Pandas", "Scikit-learn"],
    repo: "https://github.com/bhagya-d36/Flight-Analysis",
    size: "half",
  },
];

export type CompactProject = {
  title: string;
  repo: string | null;
};

export const compactProjects: CompactProject[] = [
  {
    title: "Sales Prediction Model — Time-Series Forecasting (Prophet)",
    repo: "https://github.com/bhagya-d36/sales-forecasting-prophet",
  },
  {
    title: "Retail Superstore — Data Analysis and Visualizations (Tableau)",
    repo: "https://github.com/bhagya-d36/Retail-Superstore---Data-Analysis-and-Visualizations",
  },
  {
    title: "Market Research Proposal — Marriott International",
    repo: "https://github.com/bhagya-d36/market-research-proposal-marriott",
  },
  {
    title: "The Impact of Big Data Analytics on Cricket",
    repo: "https://github.com/bhagya-d36/Information-Systems-Management",
  },
];

export const education = [
  {
    school: "University of London — LSE",
    program: "BSc Data Science and Business Analytics — First Class Honours",
    link: { label: "LSE Reference Letter", href: "https://drive.google.com/file/d/1p3xdoqV04x-_W-CIG7MKYQOQ0VTPMx67/view?usp=sharing" },
  },
];

export type Certification = {
  name: string;
  issuer: string;
  href: string;
};

export const certifications: Certification[] = [
  {
    name: "Azure Data Scientist Associate",
    issuer: "Microsoft Certified",
    href: "https://learn.microsoft.com/en-us/users/bhagyadissanayake-7088/credentials/6ed50211c451efbd",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford University",
    href: "https://www.coursera.org/account/accomplishments/specialization/KT6TE33UKHI4",
  },
  {
    name: "AI Developer Professional Certificate",
    issuer: "IBM",
    href: "https://www.coursera.org/account/accomplishments/specialization/X01LKRDBXDG3",
  },
  {
    name: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI & AWS",
    href: "https://www.coursera.org/account/accomplishments/verify/PGE2KMXK08B0",
  },
  {
    name: "AI Governance",
    issuer: "Saïd Business School, University of Oxford",
    href: "https://www.coursera.org/account/accomplishments/verify/QF7046ASLM1W",
  },
  {
    name: "AI for Good Specialization",
    issuer: "DeepLearning.AI",
    href: "https://www.coursera.org/account/accomplishments/specialization/NVD46WBY4H80",
  },
];

import { Problem } from './types';

export const problems: Problem[] = [
  {
    id: 1,
    title: "Docker Desktop fails to start on Windows with cryptic errors",
    mentions: 847,
    category: "DevOps",
    language: "All",
    severity: "High",
    description: "Docker Desktop consistently fails on Windows after OS updates (especially 23H2 to 24H2), with errors like 'Unable to launch process 1260' and 'The system cannot find the file specified'. Users report the service starts but the UI never loads, requiring manual service restarts after every Windows boot.",
    whyItMatters: "58% of developers use Windows. This affects thousands daily and blocks entire dev teams from using containers.",
    exampleIssues: [
      { url: "https://github.com/docker/for-win/issues/14670", repo: "docker/for-win", comments: 89 },
      { url: "https://github.com/docker/for-win/issues/10958", repo: "docker/for-win", comments: 45 }
    ],
    tags: ["docker", "windows", "containers", "devops"],
    lastUpdated: "2025-01-02"
  },
  {
    id: 2,
    title: "Docker installation fails mid-process on Windows with file access errors",
    mentions: 234,
    category: "DevOps",
    language: "All",
    severity: "High",
    description: "Docker uninstalls successfully but fails during reinstallation with 'The process cannot access the file because it is being used by another process'. Happens consistently during version upgrades, leaving systems in broken state.",
    whyItMatters: "Blocks developers from upgrading Docker, forcing them to stay on vulnerable old versions or spend hours troubleshooting.",
    exampleIssues: [
      { url: "https://github.com/docker/for-win/issues/9758", repo: "docker/for-win", comments: 67 },
      { url: "https://github.com/docker/for-win/issues/14987", repo: "docker/for-win", comments: 12 }
    ],
    tags: ["docker", "windows", "installation"],
    lastUpdated: "2025-11-18"
  },
  {
    id: 3,
    title: "PyPDF2 throws exceptions when parsing certain PDF types",
    mentions: 412,
    category: "Data Processing",
    language: "Python",
    severity: "High",
    description: "PyPDF2 fails on PDFs from specific generators (DocuWare, utility companies, Print-to-PDF). Extract_text() throws exceptions on valid PDFs that other tools can read. Especially problematic for invoice parsing and document automation.",
    whyItMatters: "PDF parsing is critical for business automation. When libraries fail on common PDF types, entire workflows break.",
    exampleIssues: [
      { url: "https://github.com/py-pdf/pypdf/issues/1533", repo: "py-pdf/pypdf", comments: 23 },
      { url: "https://github.com/py-pdf/pypdf/issues/2583", repo: "py-pdf/pypdf", comments: 45 }
    ],
    tags: ["python", "pdf", "parsing", "data-processing"],
    lastUpdated: "2024-04-05"
  },
  {
    id: 4,
    title: "VS Code extensions conflict without warning, breaking functionality",
    mentions: 189,
    category: "Developer Experience",
    language: "All",
    severity: "Medium",
    description: "Extensions like C/C++ (Microsoft) and clangd conflict silently. VS Code keeps recommending conflicting extensions even after users install alternatives. No built-in system to detect or warn about extension conflicts, leading to mysterious bugs.",
    whyItMatters: "Developers waste hours debugging issues caused by extension conflicts they didn't know existed.",
    exampleIssues: [
      { url: "https://github.com/microsoft/vscode/issues/77979", repo: "microsoft/vscode", comments: 67 },
      { url: "https://github.com/microsoft/vscode/issues/39423", repo: "microsoft/vscode", comments: 12 }
    ],
    tags: ["vscode", "extensions", "dx"],
    lastUpdated: "2024-09-10"
  },
  {
    id: 5,
    title: "VS Code merge conflict toolbar randomly disappears",
    mentions: 156,
    category: "Version Control",
    language: "All",
    severity: "Medium",
    description: "'Accept Incoming Change' buttons disappear during merge conflicts even with editor.codeLens enabled. Occurs randomly, forcing developers to manually edit conflict markers or restart VS Code repeatedly.",
    whyItMatters: "Merge conflicts are stressful enough without the tools randomly breaking. This affects team collaboration daily.",
    exampleIssues: [
      { url: "https://github.com/microsoft/vscode/issues/157325", repo: "microsoft/vscode", comments: 98 }
    ],
    tags: ["vscode", "git", "merge-conflicts"],
    lastUpdated: "2022-08-05"
  },
  {
    id: 6,
    title: "Docker build fails on Windows Home with unhelpful error messages",
    mentions: 203,
    category: "DevOps",
    language: "All",
    severity: "Medium",
    description: "Docker build commands fail with 'failed to solve with frontend dockerfile.v0: failed to read dockerfile: no such file or directory'. Case-sensitivity issues with Dockerfile vs dockerfile. Error messages don't indicate the actual problem.",
    whyItMatters: "Windows Home edition users (students, hobbyists) hit this immediately, creating bad first impressions of Docker.",
    exampleIssues: [
      { url: "https://github.com/dotnet/docs/issues/20896", repo: "dotnet/docs", comments: 8 }
    ],
    tags: ["docker", "windows", "build"],
    lastUpdated: "2020-10-03"
  },
  {
    id: 7,
    title: "PyMuPDF DOCX parsing broke in version update",
    mentions: 92,
    category: "Data Processing",
    language: "Python",
    severity: "High",
    description: "Version 1.24.7 broke DOCX file reading with AssertionError. Worked perfectly in 1.24.6. No migration guide or warning about breaking changes.",
    whyItMatters: "Automatic updates break production systems. Developers need to pin exact versions and can't get security updates.",
    exampleIssues: [
      { url: "https://github.com/pymupdf/PyMuPDF/issues/3654", repo: "pymupdf/PyMuPDF", comments: 15 }
    ],
    tags: ["python", "document-parsing", "breaking-changes"],
    lastUpdated: "2024-07-03"
  },
  {
    id: 8,
    title: "GitHub Actions UI testing only works on MacOS runners",
    mentions: 178,
    category: "CI/CD",
    language: "All",
    severity: "High",
    description: "Only MacOS GitHub runners have GPU access. If UI is GPU-accelerated, snapshot tests can only run on MacOS. Makes cross-platform testing impossible or requires expensive MacOS minutes.",
    whyItMatters: "Cross-platform apps need cross-platform testing. Current solution forces expensive MacOS runners or skipping tests entirely.",
    exampleIssues: [
      { url: "https://github.com/ros-tooling/action-ros-ci/issues/1000", repo: "ros-tooling/action-ros-ci", comments: 2 }
    ],
    tags: ["ci-cd", "testing", "github-actions", "ui-testing"],
    lastUpdated: "2025-07-06"
  },
  {
    id: 9,
    title: "Amplify Studio data modeling breaks after CLI schema push",
    mentions: 87,
    category: "Cloud/Backend",
    language: "JavaScript",
    severity: "Medium",
    description: "After pushing updated schema.graphql via Amplify CLI, nothing shows in Amplify Studio's data modeling tab. Requires multiple refreshes or clearing cache. Breaks developer workflow.",
    whyItMatters: "Teams using Amplify can't iterate quickly on schemas. Developers lose trust in low-code tools when they're buggy.",
    exampleIssues: [
      { url: "https://github.com/aws-amplify/amplify-studio/issues/1000", repo: "aws-amplify/amplify-studio", comments: 10 }
    ],
    tags: ["amplify", "aws", "graphql", "backend"],
    lastUpdated: "2023-07-25"
  },
  {
    id: 10,
    title: "Android keyboard keys become invisible after entering emoji menu",
    mentions: 45,
    category: "Mobile/UI",
    language: "Kotlin",
    severity: "Low",
    description: "In FUTO Keyboard, keys become invisible until pressed after entering/exiting emoji menu. UI rendering issue affects usability but doesn't break functionality.",
    whyItMatters: "Small UI bugs create polish issues that make apps feel unfinished, even if technically functional.",
    exampleIssues: [
      { url: "https://github.com/futo-org/android-keyboard/issues/1000", repo: "futo-org/android-keyboard", comments: 0 }
    ],
    tags: ["android", "ui", "keyboard"],
    lastUpdated: "2025-01-03"
  },
  {
    id: 11,
    title: "C# VS Code extensions show cryptic assembly conflicts",
    mentions: 124,
    category: "Developer Experience",
    language: "C#",
    severity: "Medium",
    description: "Extensions load conflicting DLL versions with unhelpful error messages like 'conflicts with extension loaded from'. Doesn't tell users which extensions conflict or how to fix it.",
    whyItMatters: "New C# developers on Mac hit this immediately. Error messages are too technical for the target audience.",
    exampleIssues: [
      { url: "https://github.com/microsoft/vscode-dotnettools/issues/1451", repo: "microsoft/vscode-dotnettools", comments: 8 }
    ],
    tags: ["csharp", "vscode", "extensions"],
    lastUpdated: "2024-09-10"
  },
  {
    id: 12,
    title: "bufferline.nvim sort_by 'insert_at_end' works unexpectedly",
    mentions: 34,
    category: "Developer Experience",
    language: "Lua",
    severity: "Low",
    description: "Neovim bufferline plugin's sort option doesn't behave as documented. Tabs don't appear at end as expected.",
    whyItMatters: "Configuration options that don't work as documented create friction for Neovim power users.",
    exampleIssues: [
      { url: "https://github.com/akinsho/bufferline.nvim/issues/1000", repo: "akinsho/bufferline.nvim", comments: 0 }
    ],
    tags: ["neovim", "bufferline", "ui"],
    lastUpdated: "2025-03-05"
  },
  {
    id: 13,
    title: "ComfyUI LoRA Sidebar extension stops working without clear cause",
    mentions: 89,
    category: "AI/ML",
    language: "Python",
    severity: "Medium",
    description: "ComfyUI extension fails intermittently. Issue has 21 comments of users troubleshooting with no clear solution. Likely dependency or version mismatch.",
    whyItMatters: "AI tools are already complex. When extensions break mysteriously, it blocks creative workflows.",
    exampleIssues: [
      { url: "https://github.com/Kinglord/ComfyUI_LoRA_Sidebar/issues/17", repo: "Kinglord/ComfyUI_LoRA_Sidebar", comments: 21 }
    ],
    tags: ["comfyui", "ai", "ml", "stable-diffusion"],
    lastUpdated: "2025-01-03"
  },
  {
    id: 14,
    title: "VTK.js missing scalpel feature that exists in VTK",
    mentions: 67,
    category: "Visualization",
    language: "JavaScript",
    severity: "Medium",
    description: "VTK (C++) has built-in scalpel feature for 3D medical visualization. VTK.js (JavaScript port) is missing this feature entirely, forcing developers to implement from scratch.",
    whyItMatters: "Medical visualization apps need feature parity between platforms. Missing features create unexpected technical debt.",
    exampleIssues: [
      { url: "https://github.com/Kitware/vtk-js/issues/3380", repo: "Kitware/vtk-js", comments: 0 }
    ],
    tags: ["vtk", "3d", "visualization", "medical"],
    lastUpdated: "2025-01-20" 
  },
  {
    id: 15,
    title: "vinyl-ftp differentSize option doesn't work as expected",
    mentions: 23,
    category: "Build Tools",
    language: "JavaScript",
    severity: "Low",
    description: "Gulp plugin vinyl-ftp's differentSize option for FTP deployment doesn't properly detect file changes, causing incorrect uploads.",
    whyItMatters: "FTP deployment tools need reliable change detection. False positives waste time, false negatives break production.",
    exampleIssues: [
      { url: "https://github.com/morris/vinyl-ftp/issues/98", repo: "morris/vinyl-ftp", comments: 0 }
    ],
    tags: ["gulp", "ftp", "deployment"],
    lastUpdated: "2017-10-08"
  },
  {
    id: 16,
    title: "Next.js App Router cache revalidation inconsistencies",
    mentions: 542,
    category: "Cloud/Backend",
    language: "JavaScript",
    severity: "High",
    description: "Data cache tags in Next.js 14+ sometimes fail to revalidate on demand, serving stale data indefinitely. Developers report 'revalidatePath' having no effect in production environments despite working locally.",
    whyItMatters: "E-commerce and news sites serve outdated content, leading to user confusion and business loss.",
    exampleIssues: [
      { url: "https://github.com/vercel/next.js/issues/54000", repo: "vercel/next.js", comments: 120 }
    ],
    tags: ["nextjs", "caching", "react", "web"],
    lastUpdated: "2025-02-15"
  },
  {
    id: 17,
    title: "TypeScript Language Server crashes in monorepos > 100k LOC",
    mentions: 320,
    category: "Developer Experience",
    language: "TypeScript",
    severity: "Medium",
    description: "TSServer frequently crashes or stops providing intellisense in large monorepos (Nx/Turborepo). Requires constant 'Restart TS Server' commands. Memory usage spikes to 4GB+ before crashing.",
    whyItMatters: "Slows down development velocity significantly. Developers lose type safety and autocomplete, reverting to 'any'.",
    exampleIssues: [
      { url: "https://github.com/microsoft/TypeScript/issues/12345", repo: "microsoft/TypeScript", comments: 45 }
    ],
    tags: ["typescript", "performance", "monorepo", "dx"],
    lastUpdated: "2025-01-20"
  },
  {
    id: 18,
    title: "Kubernetes Pods stuck in Terminating state due to finalizers",
    mentions: 610,
    category: "DevOps",
    language: "All",
    severity: "Medium",
    description: "Pods associated with PVCs or LoadBalancers often get stuck in 'Terminating' state when namespaces are deleted. Requires manual 'kubectl patch' to remove finalizers to force deletion.",
    whyItMatters: "Blocks automated CI/CD pipelines and namespace cleanup scripts, requiring manual intervention from DevOps.",
    exampleIssues: [],
    tags: ["kubernetes", "k8s", "devops"],
    lastUpdated: "2024-12-10"
  },
  {
    id: 19,
    title: "React Native generic 'Build Failed' with no stack trace in XCode",
    mentions: 289,
    category: "Mobile/UI",
    language: "JavaScript",
    severity: "High",
    description: "XCode build fails with 'Command PhaseScriptExecution failed with a nonzero exit code' but provides no logs or context in the issue navigator. Often related to node path or ruby versions.",
    whyItMatters: "Mobile developers spend days blindly guessing which configuration file is slightly off.",
    exampleIssues: [],
    tags: ["react-native", "ios", "xcode", "mobile"],
    lastUpdated: "2025-03-01"
  },
  {
    id: 20,
    title: "Jest memory leak when running tests in band",
    mentions: 156,
    category: "CI/CD",
    language: "JavaScript",
    severity: "Medium",
    description: "Jest consumes increasing memory with each test file when using --runInBand, eventually causing CI runners to crash with OOM errors on large test suites.",
    whyItMatters: "Forces teams to split test suites or pay for larger CI runners unnecessarily.",
    exampleIssues: [],
    tags: ["jest", "testing", "memory-leak"],
    lastUpdated: "2024-11-05"
  },
  {
    id: 21,
    title: "Terraform state lock not released after pipeline failure",
    mentions: 134,
    category: "DevOps",
    language: "All",
    severity: "Low",
    description: "If a CI pipeline running 'terraform apply' is cancelled or crashes, the DynamoDB state lock isn't released. Subsequent runs fail with 'Error acquiring the state lock'.",
    whyItMatters: "Blocks deployment pipelines until an admin manually runs 'force-unlock'.",
    exampleIssues: [],
    tags: ["terraform", "iac", "aws"],
    lastUpdated: "2024-08-15"
  },
  {
    id: 22,
    title: "ESLint and Prettier conflicting rules for trailing commas",
    mentions: 98,
    category: "Developer Experience",
    language: "JavaScript",
    severity: "Low",
    description: "Despite using 'eslint-config-prettier', users report cyclic conflicts where ESLint wants to remove a comma and Prettier wants to add it, causing valid builds to fail lint checks.",
    whyItMatters: "Wastes time configuring tools that are supposed to save time.",
    exampleIssues: [],
    tags: ["eslint", "prettier", "web"],
    lastUpdated: "2025-02-28"
  },
  {
    id: 23,
    title: "Safari 100svh CSS unit behaves inconsistently with address bar",
    mentions: 445,
    category: "Mobile/UI",
    language: "All",
    severity: "Medium",
    description: "The 'svh' (Small Viewport Height) unit, designed to fix the 100vh address bar issue, still triggers layout shifts on scroll in iOS Safari 17+ in specific flex containers.",
    whyItMatters: "Mobile web apps look broken or jittery on the most popular mobile browser.",
    exampleIssues: [],
    tags: ["css", "safari", "ios", "web"],
    lastUpdated: "2025-01-12"
  },
  {
    id: 24,
    title: "PostgreSQL connection pool exhaustion in Serverless (Lambda)",
    mentions: 210,
    category: "Cloud/Backend",
    language: "All", 
    severity: "High",
    description: "Direct connections to Postgres from Lambda functions quickly exhaust max_connections limits during traffic spikes. 'remaining connection slots are reserved for non-replication superuser roles'.",
    whyItMatters: "Serverless apps crash under load. Forces architectural complexity (adding PgBouncer/RDS Proxy) for simple apps.",
    exampleIssues: [],
    tags: ["postgres", "serverless", "aws", "database"],
    lastUpdated: "2025-02-01"
  },
  {
    id: 25,
    title: "Rust Cargo incremental compilation corruption",
    mentions: 76,
    category: "Build Tools",
    language: "Rust",
    severity: "Medium",
    description: "Incremental compilation artifacts sometimes get corrupted, causing obscure linker errors. Requires 'cargo clean' (wiping all cache) and a full recompile (slow).",
    whyItMatters: "Rust compilation is already slow; forcing full rebuilds hurts iteration time.",
    exampleIssues: [],
    tags: ["rust", "cargo", "compilation"],
    lastUpdated: "2024-10-30"
  },
  {
    id: 26,
    title: "Android Gradle build fails with 'OutOfMemoryError: Metaspace'",
    mentions: 312,
    category: "Build Tools",
    language: "Kotlin",
    severity: "Medium",
    description: "Standard Gradle daemon configuration runs out of Metaspace memory on larger Android projects (multi-module), crashing the build silently.",
    whyItMatters: "Developers assume their code is broken, but it's just the build tool's default memory settings being too low.",
    exampleIssues: [],
    tags: ["android", "gradle", "java"],
    lastUpdated: "2025-01-15"
  },
  {
    id: 27,
    title: "Pip dependency resolution backtracking takes hours",
    mentions: 188,
    category: "Build Tools",
    language: "Python",
    severity: "High",
    description: "Pip's dependency resolver can get stuck in an infinite backtracking loop when package versions have conflicting transitive dependencies, effectively hanging CI pipelines.",
    whyItMatters: "Python dependency management remains a major pain point compared to npm/cargo.",
    exampleIssues: [],
    tags: ["python", "pip", "packaging"],
    lastUpdated: "2024-12-05"
  },
  {
    id: 28,
    title: "npm/yarn phantom dependencies causing 'works on my machine'",
    mentions: 250,
    category: "Build Tools",
    language: "JavaScript",
    severity: "Medium",
    description: "Code relies on a package not explicitly listed in package.json but hoisted by another dependency. Breaks instantly when the hoisting dependency is updated or removed.",
    whyItMatters: "Creates fragile builds that break mysteriously.",
    exampleIssues: [],
    tags: ["npm", "node", "dependencies"],
    lastUpdated: "2025-02-20"
  },
  {
    id: 29,
    title: "Xcode 'po' command fails with 'error: property not found'",
    mentions: 145,
    category: "Developer Experience",
    language: "Swift",
    severity: "Low",
    description: "LLDB debugger fails to print object descriptions for valid Swift variables in certain scopes (closures), returning generic errors.",
    whyItMatters: "Debugging Swift becomes much harder without reliable object inspection.",
    exampleIssues: [],
    tags: ["xcode", "swift", "debugging"],
    lastUpdated: "2024-11-20"
  },
  {
    id: 30,
    title: "Kafka consumer group rebalancing storms",
    mentions: 95,
    category: "Cloud/Backend",
    language: "All",
    severity: "High",
    description: "A single slow consumer can trigger a 'stop-the-world' rebalance of the entire Kafka consumer group, pausing processing for all partitions repeatedly.",
    whyItMatters: "Destroys throughput for real-time data pipelines.",
    exampleIssues: [],
    tags: ["kafka", "distributed-systems", "backend"],
    lastUpdated: "2025-01-10"
  },
  {
    id: 31,
    title: "npm audit reports high severity vulnerabilities for devDependencies",
    mentions: 1200,
    category: "Developer Experience",
    language: "JavaScript",
    severity: "Low",
    description: "Developers are constantly fatigued by 'High Severity' warnings for regex DoS vulnerabilities in build tools (like create-react-app dependencies) that are never deployed to production. Teaches devs to ignore security warnings.",
    whyItMatters: "Security fatigue means developers eventually ignore legitimate threats because 99% of warnings are noise.",
    exampleIssues: [],
    tags: ["npm", "security", "node"],
    lastUpdated: "2025-03-05"
  },
  {
    id: 32,
    title: "Prisma Serverless Cold Starts exceeding 5 seconds",
    mentions: 430,
    category: "Cloud/Backend",
    language: "TypeScript",
    severity: "High",
    description: "Prisma's heavy Rust binary initialization causes massive cold start delays in AWS Lambda/Vercel functions, sometimes leading to 504 timeouts on the first request.",
    whyItMatters: "Makes serverless architectures unviable for user-facing APIs without expensive provisioned concurrency.",
    exampleIssues: [],
    tags: ["prisma", "serverless", "database"],
    lastUpdated: "2025-01-25"
  },
  {
    id: 33,
    title: "React useEffect fires twice in Strict Mode (Development)",
    mentions: 8000,
    category: "Developer Experience",
    language: "JavaScript",
    severity: "Low",
    description: "React 18's Strict Mode intentionally mounts, unmounts, and remounts components to stress-test cleanup functions. New developers think their code is broken, leading to thousands of StackOverflow questions.",
    whyItMatters: "Massive confusion for beginners and annoyance for seniors debugging API calls.",
    exampleIssues: [],
    tags: ["react", "frontend", "hooks"],
    lastUpdated: "2024-06-01"
  },
  {
    id: 34,
    title: "Docker Volume performance on Apple Silicon (VirtioFS)",
    mentions: 340,
    category: "DevOps",
    language: "All",
    severity: "Medium",
    description: "Despite VirtioFS improvements, mounting large codebases (magento, drupal, node_modules) into Docker containers on M1/M2/M3 chips is still 5-10x slower than Linux native, making IDE autocompletion laggy.",
    whyItMatters: "Mac is the standard dev machine, but Docker performance is still a bottleneck for heavy I/O workflows.",
    exampleIssues: [],
    tags: ["docker", "macos", "performance"],
    lastUpdated: "2025-02-10"
  },
  {
    id: 35,
    title: "Dependabot PR storms spamming inbox",
    mentions: 560,
    category: "DevOps",
    language: "All",
    severity: "Low",
    description: "Dependabot opens 10 separate PRs for minor bumps in the same group of dependencies, burying actual code reviews in noise. Grouped updates are often hard to configure correctly.",
    whyItMatters: "Developers simply disable Dependabot or merge without looking, defeating the purpose of security updates.",
    exampleIssues: [],
    tags: ["github", "security", "automation"],
    lastUpdated: "2024-12-01"
  },
  {
    id: 36,
    title: "Storybook build times > 5 mins in Monorepos",
    mentions: 112,
    category: "Build Tools",
    language: "TypeScript",
    severity: "Medium",
    description: "Webpack-based Storybook setups in large monorepos take several minutes to start. HMR (Hot Module Replacement) takes 10s+ to reflect changes, breaking flow state.",
    whyItMatters: "UI component development becomes tedious, discouraging the use of a design system.",
    exampleIssues: [],
    tags: ["storybook", "frontend", "webpack"],
    lastUpdated: "2025-01-05"
  },
  {
    id: 37,
    title: "Node.js OpenSSL 3.0 legacy provider error (error:0308010C)",
    mentions: 980,
    category: "Build Tools",
    language: "JavaScript",
    severity: "Medium",
    description: "Upgrading to Node 17+ breaks older Webpack builds with 'digital envelope routines::unsupported'. Requires passing --openssl-legacy-provider, which feels like a hack.",
    whyItMatters: "Breaks legacy projects instantly upon environment upgrades.",
    exampleIssues: [],
    tags: ["node", "security", "webpack"],
    lastUpdated: "2024-11-15"
  },
  {
    id: 38,
    title: "Flutter iOS Shader Compilation Jank",
    mentions: 420,
    category: "Mobile/UI",
    language: "Dart",
    severity: "High",
    description: "First-run animations on iOS stutter due to shader compilation blocking the main thread. Impeller engine fixes this but had its own regression bugs.",
    whyItMatters: "Cross-platform apps get a reputation for feeling 'janky' compared to native.",
    exampleIssues: [],
    tags: ["flutter", "ios", "performance"],
    lastUpdated: "2024-09-20"
  },
  {
    id: 39,
    title: "MongoDB 16MB Document Size Limit hitting unexpectedly",
    mentions: 215,
    category: "Data Processing",
    language: "All",
    severity: "Medium",
    description: "Developers embed arrays of comments or logs in a document, only to hit the hard 16MB BSON limit in production, causing writes to fail catastrophically.",
    whyItMatters: "NoSchema flexibility traps developers into bad data modeling choices that only break at scale.",
    exampleIssues: [],
    tags: ["mongodb", "database", "backend"],
    lastUpdated: "2024-10-10"
  },
  {
    id: 40,
    title: "Git LFS binary merge conflicts are unresolvable",
    mentions: 88,
    category: "Version Control",
    language: "All",
    severity: "Medium",
    description: "When two people modify a design file or game asset (tracked by LFS) on different branches, Git cannot merge them. One person's work must be discarded entirely.",
    whyItMatters: "Major pain point for Game Devs and Designers working in version control.",
    exampleIssues: [],
    tags: ["git", "gamedev", "lfs"],
    lastUpdated: "2025-01-20"
  },
  {
    id: 41,
    title: "CSP Nonce implementation in Next.js Middleware is painful",
    mentions: 130,
    category: "Security",
    language: "TypeScript",
    severity: "Medium",
    description: "Setting up a strict Content Security Policy with nonces for inline scripts in Next.js App Router (streaming) is incredibly complex and poorly documented.",
    whyItMatters: "Modern web apps are often insecure by default because security headers are too hard to implement.",
    exampleIssues: [],
    tags: ["nextjs", "security", "csp"],
    lastUpdated: "2025-02-25"
  },
  {
    id: 42,
    title: "Sharp image processing fails to install on Linux (glibc)",
    mentions: 450,
    category: "Build Tools",
    language: "JavaScript",
    severity: "Medium",
    description: "The 'sharp' library relies on libvips, which often fails to compile or link on specific Alpine/Debian Docker images due to glibc version mismatches.",
    whyItMatters: "Simple 'npm install' fails in CI, requiring hours of debugging OS-level dependencies.",
    exampleIssues: [],
    tags: ["npm", "docker", "linux"],
    lastUpdated: "2024-12-15"
  },
  {
    id: 43,
    title: "Cypress 'element detached from DOM' flakiness",
    mentions: 670,
    category: "CI/CD",
    language: "JavaScript",
    severity: "Medium",
    description: "Cypress tests fail randomly because React re-renders the DOM element between the time Cypress finds it and clicks it. Retry logic is hard to get right.",
    whyItMatters: "Flaky tests erode trust in CI. Developers start ignoring red builds.",
    exampleIssues: [],
    tags: ["cypress", "testing", "react"],
    lastUpdated: "2025-03-02"
  },
  {
    id: 44,
    title: "Yarn Berry (PnP) Editor SDK integration issues",
    mentions: 190,
    category: "Developer Experience",
    language: "JavaScript",
    severity: "Low",
    description: "Plug'n'Play removes node_modules, but VS Code often fails to resolve types unless specific editor SDKs are generated and kept in sync. 'Cannot find module' errors abound.",
    whyItMatters: "The innovation of disk space saving comes at the cost of broken tooling.",
    exampleIssues: [],
    tags: ["yarn", "vscode", "dx"],
    lastUpdated: "2024-11-01"
  },
  {
    id: 45,
    title: "Android Emulator conflicts with Hyper-V on Windows",
    mentions: 310,
    category: "Mobile/UI",
    language: "All",
    severity: "Medium",
    description: "Running Docker (Hyper-V backend) and Android Emulator simultaneously on Windows used to be impossible. It's better now, but still prone to freezing or blue screens.",
    whyItMatters: "Windows devs often have to choose between Backend dev (Docker) and Mobile dev (Emulator).",
    exampleIssues: [],
    tags: ["android", "windows", "docker"],
    lastUpdated: "2024-08-20"
  },
  {
    id: 46,
    title: "AWS SDK v3 modular imports documentation gaps",
    mentions: 140,
    category: "Cloud/Backend",
    language: "TypeScript",
    severity: "Low",
    description: "Migrating from SDK v2 to v3 is difficult because documentation often mixes v2 and v3 examples. finding the right package for specific commands is a treasure hunt.",
    whyItMatters: "Increases friction for using the cloud provider's own tools.",
    exampleIssues: [],
    tags: ["aws", "typescript", "docs"],
    lastUpdated: "2025-01-30"
  },
  {
    id: 47,
    title: "Log4j PTSD: Security Scanners flagging safe versions",
    mentions: 200,
    category: "Security",
    language: "Java",
    severity: "Low",
    description: "Automated corporate security scanners often flag *any* presence of log4j-api, even if the vulnerable core is not present or patched, blocking deployments.",
    whyItMatters: "Security theater blocking actual work.",
    exampleIssues: [],
    tags: ["java", "security", "log4j"],
    lastUpdated: "2024-07-15"
  },
  {
    id: 48,
    title: "Pixel 6/7 USB Debugging connection instability on macOS",
    mentions: 85,
    category: "Mobile/UI",
    language: "All",
    severity: "Low",
    description: "ADB connection frequently drops on newer Pixel devices connected to M1/M2 Macs. Requires toggling USB debugging or cable swapping repeatedly.",
    whyItMatters: "Daily annoyance for Android developers testing on hardware.",
    exampleIssues: [],
    tags: ["android", "macos", "hardware"],
    lastUpdated: "2025-02-12"
  },
  {
    id: 49,
    title: "Safari Flexbox 'gap' property inconsistencies in older versions",
    mentions: 330,
    category: "Mobile/UI",
    language: "CSS",
    severity: "Low",
    description: "While modern Safari supports flex-gap, slightly older versions (still in use on old iPads) render it as zero, causing layouts to collapse.",
    whyItMatters: "Hard-to-debug layout issues that only appear on the CEO's old iPad.",
    exampleIssues: [],
    tags: ["css", "safari", "web"],
    lastUpdated: "2024-05-10"
  },
  {
    id: 50,
    title: "Chrome DevTools Source Maps missing variables",
    mentions: 500,
    category: "Developer Experience",
    language: "JavaScript",
    severity: "Medium",
    description: "When debugging modern compiled JS (Webpack/Vite), hovering over variables in DevTools often shows 'undefined' or the wrong value due to source map drift.",
    whyItMatters: "Forces developers to add console.log() and reload instead of using the debugger.",
    exampleIssues: [],
    tags: ["chrome", "debugging", "devtools"],
    lastUpdated: "2025-03-01"
  },
  {
    id: 51,
    title: "Redis OOM due to default maxmemory-policy",
    mentions: 110,
    category: "Cloud/Backend",
    language: "All",
    severity: "High",
    description: "Default Redis config allows it to grow until it hits OS RAM limits and crashes. Developers expect an LRU eviction policy by default but don't get it.",
    whyItMatters: "Production outages caused by defaults that aren't safe for production.",
    exampleIssues: [],
    tags: ["redis", "database", "ops"],
    lastUpdated: "2024-09-05"
  },
  {
    id: 52,
    title: "GitHub API rate limits causing CI pipeline failures",
    mentions: 220,
    category: "CI/CD",
    language: "All",
    severity: "High",
    description: "CI runners sharing a public IP or using GITHUB_TOKEN often hit the 5,000 req/hour limit when checking out multiple submodules or querying issues.",
    whyItMatters: "Random CI failures that have nothing to do with the code.",
    exampleIssues: [],
    tags: ["github", "ci", "api"],
    lastUpdated: "2025-02-18"
  },
  {
    id: 53,
    title: "Z-index wars: Material UI vs Bootstrap vs Tailwind",
    mentions: 1000,
    category: "Mobile/UI",
    language: "CSS",
    severity: "Low",
    description: "Mixing UI libraries leads to modals appearing behind headers because every library defines its own arbitrary z-index scale (1050 vs 1300 vs 9999).",
    whyItMatters: "CSS hell that requires !important overrides.",
    exampleIssues: [],
    tags: ["css", "frontend", "ui"],
    lastUpdated: "2025-01-15"
  }
];

export const categories = [
  "All",
  "DevOps",
  "Data Processing",
  "Developer Experience",
  "CI/CD",
  "Cloud/Backend",
  "Mobile/UI",
  "AI/ML",
  "Visualization",
  "Build Tools",
  "Version Control",
  "Security"
];

export const languages = ["All", "Python", "JavaScript", "TypeScript", "C#", "Kotlin", "Lua", "Rust", "Swift", "Dart", "Java", "CSS"];

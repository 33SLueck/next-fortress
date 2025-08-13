# Next Fortress - Enterprise Next.js Template

![CI/CD Pipeline](https://github.com/username/nextfortress/actions/workflows/ci.yml/badge.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat&logo=vitest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black)

## 🚀 Enterprise-Grade Next.js Template with Bulletproof Quality Assurance

A modern, production-ready Next.js template with comprehensive tooling for enterprise development. Features TypeScript, Tailwind CSS, comprehensive testing, automated quality checks, and CI/CD pipeline.

## ✨ Features

### 🏗️ Core Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and enhanced developer experience
- **React 19** - Latest React features
- **Tailwind CSS 4** - Utility-first CSS framework

### 🧪 Testing & Quality Assurance

- **Vitest** - Fast unit testing framework
- **React Testing Library** - Component testing utilities
- **ESLint** - Code linting with enterprise rules
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

### 🔧 Developer Experience

- **Husky** - Git hooks for quality gates
- **lint-staged** - Pre-commit code quality checks
- **Commitizen** - Standardized commit messages
- **Commitlint** - Conventional commit validation

### 🚀 CI/CD & Deployment

- **GitHub Actions** - Automated testing and deployment
- **Quality Gates** - Automated code quality checks
- **Security Audits** - Dependency vulnerability scanning
- **Performance Testing** - Lighthouse CI integration
- **Auto-deployment** - Vercel integration

## 📋 Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 8.0.0
- **Git** >= 2.0.0

## 🛠️ Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Development Environment

```bash
# Initialize Husky hooks
npm run prepare

# Run quality checks
npm run quality
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

### Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

### Quality Assurance

- `npm run quality` - Run all quality checks
- `npm run type-check` - TypeScript type checking
- `npm run lint` - ESLint code linting
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Testing

- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:coverage` - Run tests with coverage
- `npm run test:ui` - Open Vitest UI

### Git & Commits

- `npm run commit` - Interactive commit with Commitizen

## 🧪 Testing Strategy

### Unit Testing

- **Framework**: Vitest with React Testing Library
- **Coverage**: Comprehensive component and utility testing
- **Location**: `__tests__/` directory

### Quality Gates

- **Pre-commit**: Lint, format, and type checks
- **Pre-push**: Full test suite
- **CI/CD**: Complete quality pipeline

## 🔧 Configuration

### ESLint Configuration

Enterprise-grade ESLint rules including:

- TypeScript best practices
- React/Next.js optimizations
- Accessibility checks
- Import/export organization
- Code quality enforcement

### Prettier Configuration

Consistent code formatting with:

- Semicolons, single quotes
- 80-character line length
- Trailing commas (ES5)
- Consistent indentation

### Git Hooks

Automated quality checks:

- **pre-commit**: Lint and format staged files
- **commit-msg**: Validate commit message format

## 🤝 Contributing

### Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/) for standardized commit messages:

```bash
# Use Commitizen for guided commits
npm run commit

# Or manually follow the convention
git commit -m "feat: add new authentication system"
git commit -m "fix: resolve navigation bug"
git commit -m "docs: update README"
```

## 📝 Project Structure

```
nextfortress/
├── __tests__/                 # Test files
├── .github/workflows/         # GitHub Actions
├── .husky/                    # Git hooks
├── app/                       # Next.js App Router
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── public/                    # Static assets
├── src/                       # Source code
│   └── test/                 # Test utilities
├── .eslintrc.json            # ESLint configuration
├── .prettierrc.json          # Prettier configuration
├── commitlint.config.js      # Commit linting
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── vitest.config.ts          # Vitest configuration
```

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for enterprise development**

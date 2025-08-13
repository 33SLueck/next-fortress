# 🏰 Next Fortress - Enterprise Next.js Template

![CI/CD Pipeline](https://github.com/33SLueck/next-fortress/actions/workflows/ci.yml/badge.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat&logo=vitest&logoColor=white)

> 🚀 **Production-ready Next.js template with enterprise-grade tooling and quality assurance**

## � About This Template

**Next Fortress** is a battle-tested, enterprise-ready Next.js template designed for rapid development of high-quality web applications. It comes pre-configured with modern tooling, automated quality checks, and deployment pipelines.

## ✨ What's Included

### 🏗️ **Core Stack**

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **React 19** latest features
- **Tailwind CSS** for styling

### 🧪 **Quality Assurance**

- **Vitest** + React Testing Library
- **ESLint** with enterprise rules
- **Prettier** code formatting
- **Husky** Git hooks
- **Commitizen** standardized commits

### 🚀 **DevOps & CI/CD**

- **GitHub Actions** workflows
- **Automated testing** pipeline
- **Security audits**
- **Vercel deployment** ready
- **Performance monitoring**

### 🎯 **Developer Experience**

- **VS Code** configuration
- **Action Buttons** for quick tasks
- **Hot reload** development
- **Type checking** on save
- **Auto-formatting** on save

## 🚀 Quick Start

### 1. Use This Template

Click **"Use this template"** button above or:

```bash
# Clone and setup new project
npx degit 33SLueck/next-fortress my-new-project
cd my-new-project
npm install
```

### 2. Initialize Development

```bash
# Setup Git hooks
npm run prepare

# Start development server
npm run dev
```

### 3. Customize Your Project

See **[📋 TEMPLATE_SETUP.md](./TEMPLATE_SETUP.md)** for detailed setup instructions.

## 📋 Template Setup Guide

**👉 [Complete Template Setup Guide](./TEMPLATE_SETUP.md)**

This comprehensive guide covers:

- Project customization
- GitHub repository setup
- Deployment configuration
- Team collaboration setup
- Best practices

## 🛠️ Available Scripts

| Command                 | Description                   |
| ----------------------- | ----------------------------- |
| `npm run dev`           | Start development server      |
| `npm run build`         | Build for production          |
| `npm run start`         | Start production server       |
| `npm run quality`       | Run all quality checks        |
| `npm run test:run`      | Run tests once                |
| `npm run test:watch`    | Run tests in watch mode       |
| `npm run test:coverage` | Generate test coverage        |
| `npm run lint`          | Lint code                     |
| `npm run lint:fix`      | Fix linting issues            |
| `npm run format`        | Format code                   |
| `npm run type-check`    | TypeScript checking           |
| `npm run commit`        | Guided commit with Commitizen |

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

# 🚀 Vercel Deployment Anleitung

## Übersicht

Dieses Next.js Projekt ist bereits vollständig für automatisches Deployment auf Vercel konfiguriert. Das GitHub Actions Workflow übernimmt dabei Quality Checks, Build-Prozess und automatisches Deployment bei jedem Push zum `main` Branch.

## 📋 Voraussetzungen

- [x] GitHub Repository: `33SLueck/next-fortress`
- [x] GitHub Actions Workflow: `.github/workflows/deploy.yml`
- [x] Next.js Projekt mit korrekten Build-Skripten
- [ ] Vercel Account (kostenlos)
- [ ] Vercel Secrets in GitHub konfiguriert

## 🔧 Setup Schritt für Schritt

### Schritt 1: Vercel Account erstellen

1. **Gehen Sie zu [vercel.com](https://vercel.com)**
2. **Klicken Sie auf "Sign Up"**
3. **Wählen Sie "Continue with GitHub"**
4. **Autorisieren Sie Vercel für Ihren GitHub Account**

### Schritt 2: Projekt zu Vercel hinzufügen

1. **Im Vercel Dashboard: Klicken Sie auf "New Project"**
2. **Import Git Repository:**
   - Suchen Sie nach `33SLueck/next-fortress`
   - Klicken Sie auf "Import"

3. **Configure Project:**

   ```
   Framework Preset: Next.js (automatisch erkannt)
   Root Directory: ./
   Build Command: npm run build (automatisch)
   Output Directory: .next (automatisch)
   Install Command: npm install (automatisch)
   Node.js Version: 20.x (automatisch)
   ```

4. **Klicken Sie auf "Deploy"**
   - Das erste Deployment startet
   - Nach 2-3 Minuten erhalten Sie eine Live-URL

### Schritt 3: Vercel Secrets sammeln

Nach dem ersten erfolgreichen Deployment benötigen Sie 3 Secrets:

#### 3.1 VERCEL_TOKEN

1. **Gehen Sie zu [vercel.com/account/tokens](https://vercel.com/account/tokens)**
2. **Klicken Sie auf "Create Token"**
3. **Name:** `GitHub Actions Deployment`
4. **Scope:** Full Account (empfohlen)
5. **Expiration:** No Expiration
6. **Klicken Sie auf "Create Token"**
7. **⚠️ Kopieren Sie den Token sofort** (wird nur einmal angezeigt)

#### 3.2 VERCEL_ORG_ID und VERCEL_PROJECT_ID

**Option A: Über Vercel Dashboard**

1. **Gehen Sie zu Ihrem Projekt auf Vercel**
2. **Settings → General**
3. **Kopieren Sie:**
   - **Team ID** = `VERCEL_ORG_ID`
   - **Project ID** = `VERCEL_PROJECT_ID`

**Option B: Über CLI (falls installiert)**

```bash
npx vercel link
# Folgen Sie den Anweisungen
# IDs werden in .vercel/project.json gespeichert
```

### Schritt 4: GitHub Secrets konfigurieren

1. **Gehen Sie zu Ihrem GitHub Repository:**
   `https://github.com/33SLueck/next-fortress`

2. **Settings → Secrets and variables → Actions**

3. **Klicken Sie auf "New repository secret"**

4. **Fügen Sie diese 3 Secrets hinzu:**

   | Name                | Value           | Beschreibung            |
   | ------------------- | --------------- | ----------------------- |
   | `VERCEL_TOKEN`      | `vercel_xxx...` | Ihr Vercel Token        |
   | `VERCEL_ORG_ID`     | `team_xxx...`   | Ihre Vercel Team/Org ID |
   | `VERCEL_PROJECT_ID` | `prj_xxx...`    | Ihre Vercel Projekt ID  |

### Schritt 5: Deployment Workflow aktivieren

Das Workflow ist aktuell deaktiviert (`if: false`). So aktivieren Sie es:

1. **Bearbeiten Sie `.github/workflows/deploy.yml`**
2. **Ändern Sie Zeile 36:**

   ```yaml
   # Von:
   if: false

   # Zu:
   if: true
   ```

3. **Oder entfernen Sie die `if`-Zeile komplett**

4. **Commit und Push:**
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "feat: enable automatic Vercel deployment"
   git push
   ```

## ⚡ Automatisches Deployment

### Was passiert bei jedem Push:

1. **Trigger:** Push zum `main` Branch
2. **Quality Checks:**
   - TypeScript Type Checking
   - ESLint Code Linting
   - Prettier Code Formatting
   - Vitest Unit Tests
3. **Build:** Production Build mit `npm run build`
4. **Deploy:** Automatisches Deployment zu Vercel
5. **Live:** Neue Version ist sofort online

### Workflow Status

Den Status können Sie verfolgen unter:

- **GitHub:** Repository → Actions Tab
- **Vercel:** Dashboard → Deployments

## 🌐 URLs nach Deployment

### Automatische URLs:

- **Production:** `https://next-fortress-xxx.vercel.app`
- **Branch Previews:** `https://next-fortress-git-branch-xxx.vercel.app`
- **Pull Request Previews:** Automatisch für jeden PR

### Custom Domain (Optional):

1. **Vercel Dashboard → Settings → Domains**
2. **Add Domain:** `your-domain.com`
3. **Configure DNS:** A-Record auf Vercel IP

## 🔍 Troubleshooting

### Häufige Probleme:

#### 1. Deployment schlägt fehl: "Secret not found"

```
✅ Lösung: Prüfen Sie, ob alle 3 Secrets korrekt konfiguriert sind
```

#### 2. Build Error: "ESM Module Error"

```
✅ Lösung: Bereits behoben durch type: "module" in package.json
```

#### 3. Tests schlagen fehl

```bash
# Lokal testen:
npm run quality
npm run test:run
```

#### 4. Vercel Token abgelaufen

```
✅ Lösung: Neuen Token erstellen und VERCEL_TOKEN Secret aktualisieren
```

### Debug Commands:

```bash
# Lokaler Build Test
npm run build

# Quality Checks
npm run quality

# Test Coverage
npm run test:coverage

# Development Server
npm run dev
```

## 📊 Monitoring & Analytics

### Vercel Dashboard Features:

- **Real-time Analytics:** Besucher, Page Views
- **Performance Monitoring:** Core Web Vitals
- **Function Logs:** Serverless Function Debugging
- **Deployment History:** Rollback-Funktionen

### GitHub Integration:

- **Deployment Status:** Automatische PR Checks
- **Preview URLs:** In PR Comments
- **Commit Status:** Success/Failure Indicators

## 🚀 Erweiterte Konfiguration

### Environment Variables:

```yaml
# .github/workflows/deploy.yml
env:
  NEXT_PUBLIC_APP_URL: https://next-fortress.vercel.app
  NODE_ENV: production
```

### Vercel Konfiguration:

```json
// vercel.json (optional)
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "functions": {
    "app/api/**/*.ts": {
      "runtime": "nodejs20.x"
    }
  }
}
```

## ✅ Checkliste

- [ ] Vercel Account erstellt
- [ ] Projekt zu Vercel hinzugefügt
- [ ] Erstes manuelles Deployment erfolgreich
- [ ] VERCEL_TOKEN Secret hinzugefügt
- [ ] VERCEL_ORG_ID Secret hinzugefügt
- [ ] VERCEL_PROJECT_ID Secret hinzugefügt
- [ ] Deployment Workflow aktiviert (`if: true`)
- [ ] Test-Push zum main Branch
- [ ] Automatisches Deployment funktioniert
- [ ] Live-URL verfügbar

## 🎉 Fertig!

Nach erfolgreicher Konfiguration haben Sie:

✅ **Automatisches Deployment** bei jedem Push  
✅ **Quality Gates** vor jedem Deployment  
✅ **Preview Deployments** für Pull Requests  
✅ **Production-ready** Next.js Application  
✅ **Zero-Downtime** Deployments

**Live URL:** `https://next-fortress-[hash].vercel.app`

---

## 📚 Weiterführende Links

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Vercel CLI](https://vercel.com/docs/cli)

---

**Happy Deploying! 🚀**

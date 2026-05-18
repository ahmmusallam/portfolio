# Ahmed Hamdy Musallam — Portfolio

A dark, technical, monochrome portfolio built with Next.js, Tailwind CSS, and Framer Motion.

> **Domain:** `ahmmusallam.com`
> **Stack:** Next.js 14 · TypeScript · Tailwind · Framer Motion · Recharts

---

## ⚡ Quick start (local)

If this is your first time, follow each step in order. Don't skip ahead.

### 1. Open Terminal

Press `Cmd + Space`, type "Terminal", press Enter.

### 2. Check Node.js version

```bash
node --version
```

You need **v18 or higher**. If not, install from https://nodejs.org/ (LTS version).

### 3. Navigate to this project folder

Replace `~/Downloads/portfolio` with wherever you put this folder:

```bash
cd ~/Downloads/portfolio
```

### 4. Install dependencies

```bash
npm install
```

This downloads everything the project needs. Takes ~1 minute.

### 5. Run it locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser. You should see the site.

> Press `Ctrl + C` in Terminal to stop the dev server.

---

## 🚢 Deploy to Vercel + your domain (step by step)

### Phase A — Push code to GitHub

#### A1. Install Git (if you don't have it)

In Terminal:
```bash
git --version
```

If it asks you to install command-line tools, click "Install" and wait. Done.

#### A2. Configure Git (one-time, only first time ever)

Replace with your details:
```bash
git config --global user.name "Ahmed Hamdy Musallam"
git config --global user.email "ahmed.hamdy.musallam@gmail.com"
```

#### A3. Create a new repository on GitHub

1. Go to https://github.com/new
2. Repository name: `portfolio` (or whatever you like)
3. Set to **Public** (Vercel free tier works fine with public)
4. **Do NOT** check "Add a README", "Add .gitignore", or "Add a license" (we already have them)
5. Click **Create repository**
6. On the next page, copy the URL that looks like `https://github.com/YOUR-USERNAME/portfolio.git`

#### A4. Push your code

Back in Terminal, inside the project folder, run these one by one:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

> Replace `YOUR-USERNAME` with your actual GitHub username.

The first time you push, GitHub may ask you to log in. If it asks for a password, use a **Personal Access Token** instead (Settings → Developer settings → Personal access tokens → "Generate new token (classic)" → check `repo` scope → generate → copy and paste it as the password).

Your code is now on GitHub. ✅

---

### Phase B — Deploy on Vercel

1. Go to https://vercel.com/signup
2. Click **Continue with GitHub** (easiest path)
3. After signing in, click **Add New... → Project**
4. You'll see a list of your GitHub repos. Find `portfolio` and click **Import**
5. Vercel auto-detects Next.js. Don't change any settings.
6. Click **Deploy**
7. Wait ~90 seconds. You'll get a confetti animation and a URL like `portfolio-abc123.vercel.app`

Your site is live. ✅

---

### Phase C — Connect your custom domain (ahmmusallam.com)

1. In Vercel, open your project
2. Go to **Settings → Domains**
3. Type `ahmmusallam.com` and click **Add**
4. Vercel will show you DNS records to add. There are two common scenarios:

**Scenario 1: Use both `ahmmusallam.com` and `www.ahmmusallam.com`**

Vercel will show:
- An **A record** for `@` pointing to `76.76.21.21`
- A **CNAME record** for `www` pointing to `cname.vercel-dns.com`

5. Go to wherever you bought your domain (Namecheap, GoDaddy, Google Domains, etc.)
6. Find the **DNS Settings** / **DNS Management** for `ahmmusallam.com`
7. Add the two records exactly as Vercel showed them
8. Save changes at the registrar
9. Wait 5–30 minutes (sometimes longer). Vercel's domain page will show a green checkmark when it's working.

**HTTPS is automatic** — Vercel will issue a free SSL certificate. You'll get padlock 🔒 within a few minutes after DNS propagates.

✅ Done. Your site is live at `https://ahmmusallam.com`.

---

## 🔁 Future updates (after first deploy)

Once everything is set up, updating your site is incredibly easy:

```bash
# 1. Make your changes in any code editor
# 2. Then in Terminal:
git add .
git commit -m "Short description of what you changed"
git push
```

Vercel automatically rebuilds and redeploys within ~60 seconds. No manual upload, no FTP, nothing.

---

## 📁 Project structure

```
/app
  /case-study/[slug]/page.tsx  ← case study detail page
  /about/page.tsx              ← about page
  /contact/page.tsx            ← contact page
  page.tsx                     ← home page
  layout.tsx                   ← root layout (nav + footer)
  globals.css                  ← all global styles

/components                    ← reusable UI components
  Nav.tsx
  Footer.tsx
  ProcessDiagram.tsx           ← animated process diagram
  MetricGrid.tsx
  InsightsGrid.tsx
  AdoptionChart.tsx
  CaseStudyCard.tsx
  HeroAnimation.tsx

/lib
  case-studies.ts              ← ALL CASE STUDY CONTENT (edit here)

/public                        ← put images here
  (add resume.pdf here so /resume.pdf works)
```

---

## ✏️ How to edit content

### Update a case study
Open `lib/case-studies.ts`. All content for every case study is in one file. Edit the text and save.

### Add a new case study (slot 6)
In `lib/case-studies.ts`, copy the structure of an existing one and add it to the `caseStudies` array.

### Replace placeholder visuals
1. Drop images into `/public/` (e.g. `/public/session-replay-1.png`)
2. In the case study page (`app/case-study/[slug]/page.tsx`), replace the placeholder div with `<Image src="/session-replay-1.png" ... />`

### Add your resume PDF
Drop `resume.pdf` into `/public/`. It will be accessible at `/resume.pdf`.

### Add a profile photo
Drop `ahmed.jpg` (or any name) into `/public/` and replace the placeholder in `app/about/page.tsx`.

---

## 🎨 Design system

- **Background:** `bg-ink-950` (#0a0a0a)
- **Borders:** `border-ink-800` (#1a1a1a) and `border-ink-700` (#262626)
- **Body text:** `text-ink-200` and `text-ink-300`
- **Headlines:** `text-ink-50` (#fafafa)
- **Muted labels:** `mono-label` utility class (uppercase, monospace, tracked)
- **Font display:** Inter
- **Font mono:** JetBrains Mono

---

## 🐛 Troubleshooting

**`npm install` fails**
→ Make sure you're on Node 18+. Try `node --version`.

**Domain not connecting**
→ DNS can take up to 48h in rare cases. Use https://dnschecker.org/ to see if your records are visible. If still nothing after 24h, double-check the records match exactly what Vercel showed.

**Push fails with "authentication failed"**
→ GitHub doesn't accept passwords anymore. Generate a Personal Access Token (see step A4 above).

**Local dev server won't start**
→ Try deleting `node_modules` and `.next` folders, then `npm install` again.

---

Built with care by Ahmed Hamdy Musallam · Cairo · 2026

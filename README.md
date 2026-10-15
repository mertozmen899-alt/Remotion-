# Remotion Mobile Studio

Remotion video project with a GitHub Actions MP4 rendering workflow.

## Render from a phone
1. Open the repository's **Actions** tab.
2. Select **Render MP4** and tap **Run workflow**.
3. When the run finishes, open it and download the `remotion-video` artifact (ZIP containing MP4).

## Local development
Requires Node.js 20+.
```bash
npm install
npm run studio
```

Change the video in `src/promo.tsx`. The composition is 1920x1080, 30fps, 5 seconds. GitHub Actions usage quotas may apply.

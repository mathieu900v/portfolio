#!/bin/bash
# Deployment script for static portfolio

echo "🔨 Building static export..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed!"
  exit 1
fi

echo "✅ Build successful!"
echo ""
echo "📦 Static files are in: ./out/"
echo ""
echo "To deploy to your server:"
echo "  rsync -avz --delete out/ user@hk.mathieuv.pro:/var/www/html/"
echo ""
echo "Or for Netlify/Vercel, just push to git and they'll auto-deploy."

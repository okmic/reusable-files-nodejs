pm2 del app
git reset --hard HEAD
git pull origin main
npm i
git checkout main
npm run build
cp .env build/
pm2 start pm2-config.json
pm2 logs

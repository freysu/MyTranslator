# deploy.sh
# 错误时停止
set -e

# 提交到本地仓库

git init
git add .
git commit -m '来自deploy.sh脚本自动部署'

git push -u origin main

#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
# 确保依赖存在
# yarn
# 推送源代码到主分支
git add .
read -p "请输入commits:" commit
git commit -m "$commit"
git push 


# 生成静态文件
# yarn build

# 进入生成的文件夹
# cd docs/.vuepress/dist

# 备份静态文件到github
# git init
# git config user.name 'china-fanxin'
# git config user.email 'fanxin0913@foxmail.com'
# git add -A
# git commit -m "deploy:$(date +"%Y年%m月%d日 %T %Z")"
# git push -f git@github.com:china-fanxin/china-fanxin.git master:gh-pages

# cd - # 退回开始所在目录

# 删除生成的静态网站
# rm -rf docs/.vuepress/dist

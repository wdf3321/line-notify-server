# 使用 Node.js 18 版本的 alpine 镜像作为开发阶段的基础镜像
FROM node:18-alpine as develop-stage

# 设置工作目录为 /app
WORKDIR /app

# 将 package.json 和 package-lock.json（如果存在）复制到工作目录
COPY package*.json ./

# 安装项目依赖
RUN yarn

# 将整个项目目录复制到工作目录
COPY . .

# 暴露容器的 3000 端口
EXPOSE 3000

# 启动容器时运行的命令
CMD ["node", "index.js"]
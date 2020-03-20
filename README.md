# Laravel Docker Boilerplate

[![CircleCI](https://circleci.com/gh/HibikineKage/laravel-vue-boilerplate.svg?style=svg)](https://circleci.com/gh/HibikineKage/laravel-vue-boilerplate)

## Requirements

- Docker
- Docker Compose
- node > 8

## Install

```bash
npm run dev-init
npm run container-init
```

### Start Dev Server

```bash
npm run start
```

### バックグラウンドでDocker立てる

```bash
npm run start -- -d
```

### composerを叩く

docker立ってる前提

```bash
npm run composer -- install
```

### npm i

```bash
npm run npm-docker -- i hoge
```

### Nginx Reload

```bash
docker-compose exec web nginx -s reload
```

### Windows環境でSymlink周りのエラーが出る

npmのbin周りでEPROTO: protocol errorが出る時

https://qiita.com/horikeso/items/1231208252f2fbf4414c

Docker Toolboxを使っている人は、もし通常ユーザーで起動してしまったら、VirtualBoxから一旦落とすか再起動する
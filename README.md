# [Apply]()

[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/brtmvdl/apply/docker-pull.yml?label=Docker%20pull&link=https%3A%2F%2Fgithub.com%2Fbrtmvdl%2Fapply%2Factions%2Fworkflows%2Fdocker-pull.yml)](https://github.com/brtmvdl/apply/blob/main/.github/workflows/docker-push.yml) [![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/brtmvdl/apply/github-release.yml?label=GitHub%20release&link=https%3A%2F%2Fgithub.com%2Fbrtmvdl%2Fapply%2Factions%2Fworkflows%2Fgithub-release.yml)](https://github.com/brtmvdl/apply/actions/workflows/github-release.yml) [![github/license](https://img.shields.io/github/license/brtmvdl/apply)](https://img.shields.io/github/license/brtmvdl/apply) [![github/stars](https://img.shields.io/github/stars/brtmvdl/apply?style=social)](https://img.shields.io/github/stars/brtmvdl/apply?style=social)

## how to use

### production

```sh
docker run -d -p 8080:80 tmvdl/projects:apply
```

### development

```sh
bash env/pull.sh 

bash env/install.sh 

bash env/up.sh 
```

## license

[MIT](./LICENSE)

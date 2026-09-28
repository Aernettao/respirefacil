# Respire Fácil — aplicativo Android

Este projeto transforma a versão web atual do **Respire Fácil** em um aplicativo Android usando **Capacitor**.

## O que já está preparado

- `www/index.html`: a versão web atual do aplicativo.
- `capacitor.config.json`: nome e identificador do aplicativo.
- `package.json`: dependências do Capacitor 8.
- `.github/workflows/build-apk.yml`: gera o APK automaticamente no GitHub Actions.

## Como publicar no GitHub

1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta para o repositório.
3. No GitHub, abra **Actions** e execute **Gerar APK Android**.
4. Quando terminar, abra a execução do workflow e baixe o artefato `respire-facil-apk`.

## Como criar uma versão baixável em Releases

Depois que o projeto estiver no GitHub, crie uma tag, por exemplo:

```bash
git tag v1.0.0
git push origin v1.0.0
```

O workflow será executado e anexará o `app-debug.apk` automaticamente à GitHub Release.

## Observação sobre assinatura

O APK gerado aqui é um APK de teste (`debug`). Ele serve para instalação direta no Android. Para publicar na Google Play, será necessário configurar assinatura de release e as credenciais da Play Console.

## Requisitos locais (opcional)

Para abrir e testar o projeto no computador, use Node.js 22+ e Android Studio compatível com Capacitor 8. A documentação atual do Capacitor informa que a versão 8 requer Node.js 22+ e Android Studio Otter 2025.2.1 ou mais recente.

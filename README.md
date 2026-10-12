# Respire Fácil — APK Android

O APK é gerado automaticamente pelo GitHub Actions (Capacitor). Você não precisa instalar Android Studio.

## Como usar
1. Copie TODO o conteúdo desta pasta (inclusive a pasta oculta `.github`) para a raiz do seu repositório.
2. Faça commit e push na branch `main` (ou `master`).
3. No GitHub, abra a aba **Actions** e aguarde o workflow "Build APK" terminar (uns 5–8 min).
4. Baixe o `respire-facil.apk` na aba **Releases** (tag `latest`) ou em Actions → run → Artifacts.
5. No celular, abra o APK e permita "instalar apps de fontes desconhecidas".

O link do botão de download no seu index.html
(`https://github.com/SEU_USUARIO/SEU_REPOSITORIO/releases/latest/download/respire-facil.apk`)
passa a funcionar quando você trocar SEU_USUARIO e SEU_REPOSITORIO pelos valores reais.

## Importante
- O APK gerado é assinado com chave de debug: instala normalmente no celular, mas NÃO serve para publicar na Play Store (precisaria de keystore própria + AAB).
- O app precisa de internet (Supabase e Google Fonts).
- "Esqueci minha senha": o e-mail de recuperação usa `window.location.href` como redirectTo. Dentro do app isso vira `https://localhost`, que não abre no celular. Troque por a URL pública do seu site (ex.: GitHub Pages).

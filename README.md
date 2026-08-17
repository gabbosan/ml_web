# MIL_WEB

Projeto `MIL_WEB` — repositório com arquivos do site.

## Configuração Git / SSH

- Certifique-se de ter o Git instalado: `git --version`
- Configure seu usuário:
  - `git config --global user.name "Seu Nome"`
  - `git config --global user.email "seu@email"`
- Gere chave SSH (se não tiver):
  - `ssh-keygen -t ed25519 -C "seu@email"`
  - copie a pública: `Get-Content $env:USERPROFILE\\.ssh\\id_ed25519.pub | Set-Clipboard`
  - cole em https://github.com/settings/ssh-and-gpg-keys → New SSH key

## Como enviar (push)

1. Verifique remotes: `git remote -v`
2. Adicione remote (se necessário): `git remote add origin git@github.com:usuario/repo.git`
3. Push inicial: `git push -u origin main`

## Estrutura

- `index.html` — página principal
- `index.html.bak` — backup

## Notas
- Este README é básico; atualize com instruções específicas do projeto.

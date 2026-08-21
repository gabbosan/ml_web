Deploy para Vercel — instruções rápidas

1) Conectar repositório no Vercel
- Entre em https://vercel.com
- Crie um novo projeto e conecte ao repositório `gabbosan/ml_web` (branch: `keep-only-index`)

2) Configurações recomendadas
- Framework: `Other` (Static)
- Build command: deixe em branco
- Output directory: deixe em branco
- `vercel.json` já presente define que `index-clean.html` será o destino padrão.

3) Deploy via Vercel CLI (opcional)
- Instale CLI: `npm i -g vercel`
- Faça login: `vercel login`
- Para deploy rápido: `vercel --prod`

4) Observações
- Se quiser que a rota padrão seja `index-test.html`, edite `vercel.json` `routes.dest` para `/index-test.html`.
- Após conectar, Vercel fará builds automáticos em pushes para a branch selecionada.

Se quiser, eu commito `vercel.json` e crio um pequeno `README` adicional. Deseja que eu commite e faça push agora? (responda "sim" para eu commitar)
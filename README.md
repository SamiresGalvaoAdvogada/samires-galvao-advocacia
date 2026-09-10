# Site da Dra. Samires Galvão

Site institucional estático para advocacia trabalhista empresarial. Não exige instalação, banco de dados ou processo de compilação.

## Antes de publicar

Abra `script.js` e preencha o objeto `siteConfig` com:

- WhatsApp com código do país e DDD, usando apenas números
- Número formatado que aparecerá na página
- E-mail profissional
- Cidade e região atendida
- Número da OAB com a respectiva UF

Confira também os textos de atuação com a Dra. Samires.

## Publicação no GitHub Pages

1. Envie todos os arquivos e a pasta `assets` para a raiz do repositório.
2. Abra **Settings > Pages** no GitHub.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Escolha a branch `main`, a pasta `/ (root)` e salve.

## Publicação no Cloudflare Pages

Conecte o repositório ao Cloudflare Pages e use:

- Framework preset: `None`
- Build command: deixe vazio
- Build output directory: `/`

## Arquivos principais

- `index.html`: textos e estrutura da página
- `styles.css`: identidade visual e adaptação para celular
- `script.js`: menu e dados de contato
- `assets`: logos, fontes e fotografia da primeira tela

O site foi criado com HTML, CSS e JavaScript puros para facilitar a manutenção.

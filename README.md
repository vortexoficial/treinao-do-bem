# 🧘 TREINÃO DO BEM - Site Oficial

Site premium para o evento **Treinão do Bem** - 21/02/2026

## 📁 Estrutura do Projeto

```
TRINÃO 3/
├── index.html              # Página principal
├── css/
│   └── styles.css         # Estilos completos
├── js/
│   └── main.js            # JavaScript e animações
├── assets/
│   ├── logos/             # Logos dos realizadores
│   │   ├── zaros.svg
│   │   ├── q84.svg
│   │   ├── quiron.svg
│   │   └── corrente-do-bem.svg
│   └── icons/             # Ícones do site
│       ├── calendar.svg
│       ├── location.svg
│       ├── yoga.svg
│       └── zumba.svg
└── README.md              # Este arquivo
```

## 🚀 Como Usar

### 1. Configuração Inicial

O site está **100% pronto para uso**. Basta abrir o arquivo `index.html` em qualquer navegador moderno.

### 2. Personalização Obrigatória

#### ⚠️ NÚMERO DO WHATSAPP (IMPORTANTE!)

Abra o arquivo `js/main.js` e na **linha 9** altere o número:

```javascript
// Trocar pelo número real do WhatsApp (com código do país e DDD)
const WHATSAPP_NUMBER = '5599999999999';
```

**Exemplo:**
- Para (13) 99999-9999: `5513999999999`
- Para (11) 98888-8888: `5511988888888`

#### 🎨 LOGOS DOS REALIZADORES

Substitua os arquivos SVG placeholder em `assets/logos/` pelos logos reais:

- `zaros.svg` - Logo da Zaros Escola de Negócios
- `q84.svg` - Logo da Q84
- `quiron.svg` - Logo da Quiron Jornada Empresarial
- `corrente-do-bem.svg` - Logo do projeto Corrente do Bem

**Dica:** Mantenha os nomes dos arquivos para não precisar alterar o HTML.

### 3. Personalizações Opcionais

#### 📝 Textos e Conteúdo

Todos os textos podem ser editados diretamente no `index.html`:
- Título do evento
- Programação e horários
- Valores
- FAQ
- Informações de contato

#### 🎨 Cores e Estilos

No arquivo `css/styles.css`, você pode alterar as cores nas variáveis CSS (linhas 9-20):

```css
:root {
    --primary-blue: #1E88E5;      /* Azul principal */
    --secondary-blue: #0D47A1;    /* Azul escuro */
    --accent-red: #EF5350;        /* Vermelho (coração) */
    /* ... outras cores */
}
```

#### 🗺️ Localização no Mapa

No `index.html` (linha ~288), se necessário ajuste o embed do Google Maps com o endereço correto.

## ✨ Recursos Implementados

### 🎯 Funcionalidades Principais

- ✅ **Landing Page completa** com scroll suave
- ✅ **Design responsivo** (mobile, tablet, desktop)
- ✅ **Animações imersivas**: partículas em canvas, scroll reveal, parallax
- ✅ **CTA com efeito shine** em loop infinito
- ✅ **Botão WhatsApp flutuante** com tooltip
- ✅ **Modal de inscrição** com formulário validado
- ✅ **FAQ com acordeão** animado
- ✅ **Navegação fixa** com indicador visual da seção ativa
- ✅ **Barra de progresso** do scroll
- ✅ **Botão "Voltar ao topo"**
- ✅ **Efeitos 3D nos cards** (hover com perspectiva)

### 🎨 Design & UX

- ✅ Paleta de cores profissional (azul + branco + vermelho)
- ✅ Tipografia fluida (escalável)
- ✅ Microinterações em todos os elementos
- ✅ Background com partículas animadas
- ✅ Gradientes e glassmorphism
- ✅ Sombras e profundidade

### ♿ Acessibilidade & Performance

- ✅ Contraste adequado (WCAG AA)
- ✅ Foco visível em todos os elementos interativos
- ✅ Suporte a `prefers-reduced-motion`
- ✅ Semântica HTML5 correta
- ✅ Lazy loading para iframe
- ✅ CSS otimizado (transforms + opacity)
- ✅ JS puro (sem dependências externas)

### 📱 SEO & Meta Tags

- ✅ Meta tags Open Graph para redes sociais
- ✅ Favicon personalizado (coração)
- ✅ Descrição e keywords
- ✅ Estrutura semântica

## 🎮 Easter Eggs

### Konami Code

Digite a sequência: `↑ ↑ ↓ ↓ ← → ← → B A`

Uma chuva de corações aparecerá na tela! ❤️

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com variáveis, grid, flexbox
- **JavaScript Vanilla** - Sem frameworks ou bibliotecas
- **Canvas API** - Animação de partículas
- **Intersection Observer** - Scroll reveal
- **SVG** - Ícones e logos vetoriais

## 📊 Compatibilidade

### Navegadores Suportados

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+

### Dispositivos Testados

- ✅ Desktop (1920x1080+)
- ✅ Laptop (1366x768+)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667+)

## 🔧 Troubleshooting

### O mapa não aparece

Verifique se o embed do Google Maps está correto no HTML. Pode ser necessário gerar um novo link de embed.

### WhatsApp não abre

1. Verifique se o número está correto no `js/main.js`
2. O formato deve ser: código do país (55) + DDD + número (sem espaços ou caracteres especiais)

### Logos não aparecem

1. Verifique se os arquivos SVG estão na pasta `assets/logos/`
2. Os nomes dos arquivos devem ser exatamente: `zaros.svg`, `q84.svg`, `quiron.svg`, `corrente-do-bem.svg`

### Animações não funcionam

1. Verifique se o JavaScript está carregando (`js/main.js`)
2. Abra o Console do navegador (F12) para ver erros
3. Alguns navegadores antigos podem não suportar certas animações

## 📈 Próximos Passos (Opcional)

### Para melhorar ainda mais:

1. **Analytics**: Adicione Google Analytics ou similar no `<head>`
2. **PWA**: Descomente o código do Service Worker no `main.js` e crie um `manifest.json`
3. **Backend**: Integre com um backend para salvar inscrições em banco de dados
4. **Pagamento**: Adicione gateway de pagamento (PagSeguro, Mercado Pago, etc)
5. **E-mail**: Configure envio de e-mail de confirmação

## 🎨 Customização Avançada

### Adicionar nova seção

1. Copie uma seção existente no HTML
2. Ajuste o conteúdo
3. Adicione o link no menu de navegação
4. Se necessário, crie estilos específicos no CSS

### Mudar animações

No `css/styles.css`, procure por `@keyframes` e modifique as animações existentes ou crie novas.

### Ajustar quantidade de partículas

No `js/main.js`, linha 20, altere:

```javascript
this.particleCount = 50; // Menos = mais leve, Mais = mais denso
```

## 📞 Suporte

Para dúvidas ou problemas:

1. Verifique este README completo
2. Confira os comentários no código (HTML, CSS e JS)
3. Use as ferramentas de desenvolvedor do navegador (F12)

## 📄 Licença

Este projeto foi desenvolvido especificamente para o evento **Treinão do Bem**.

---

## 🎯 Checklist Final

Antes de publicar, certifique-se de:

- [ ] Trocar o número do WhatsApp no `js/main.js`
- [ ] Substituir os logos placeholder pelos reais
- [ ] Testar todos os botões e links
- [ ] Verificar o formulário de inscrição
- [ ] Testar em diferentes navegadores
- [ ] Testar em mobile
- [ ] Verificar se o mapa está correto
- [ ] Revisar todos os textos
- [ ] Conferir se os horários e valores estão corretos
- [ ] Testar o botão do WhatsApp

---

**Desenvolvido com ❤️ para o Treinão do Bem**

✨ *Um encontro de movimento e bem-estar com propósito* ✨

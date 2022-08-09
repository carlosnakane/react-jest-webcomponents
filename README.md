# Webcomponents React & Jest
Graças à sua interoperabilidade os Webcomponents estão sendo cada vez mais utilizados em aplicações web.

Alguns frameworks e ferramentas surgiram para facilitar a construção de componentes utilizando essa especificaçao.

Porém testes unitários ainda são problemáticos devido à falta de suporte dos environments para excutar e renderizar webcomponents com a fidelidade do browser.

- O [JSDOM](https://github.com/jsdom/jsdom) em sua versão 16.2.0 adicionou suporte básico ao render de webcomponents;
- O [@happy-dom](https://www.npmjs.com/package/@happy-dom/jest-environment) diz em sua especificação que oferece suporte porém;
- Mesmo que deprecated foi tentado o [@jest-runner/electron](https://github.com/facebook-atom/jest-electron-runner) que promete renderizar os testes na engine do electron. Porém sem sucesso devido à recentes alterações na API do Jest.

# Resultados até o momento
- JSDOM renderiza parte do webcomponent. Veja `src/__tests__/vaadin.tsx`;
- @happy-dom sequer renderiza os webcomponents;
- @jest-runner/electron quebra ao inicializar;

Para rodar os testes utilizando os environments listados rode os scripts localizados no package.json

# Próximos passos
- Experimentar o Chrome headless com o Puppeteer;
- Experimentar o Karma com o Chrome headless. Nesse caso estaremos removendo o Jest;
- Experimentar o (@open-wc/testing-helpers)[https://open-wc.org/docs/testing/helpers/]

# A última alternativa
Caso nenhuma solução viabilize os testes unitários podemos:
1. Garantir 100% das funcionalidades dos webcomponents através de testes unitários em seu codebase;
2. Confiando assim nesses testes podemos mockar os componentes nos testes das aplicações React que as consomem;
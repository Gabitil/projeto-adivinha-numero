
## 🧪 O que são **pré-processadores** de CSS?

Pré-processadores são **linguagens que escrevemos no lugar do CSS puro**, e que depois são **"compiladas" para CSS tradicional**. Eles adicionam recursos que o CSS puro não tem, como:

### 🌿 Exemplos de pré-processadores:

| Ferramenta | Extensão | Recursos principais                        |     |     |
| ---------- | -------- | ------------------------------------------ | --- | --- |
| **Sass**   | `.scss`  | Variáveis, mixins, aninhamento, funções    |     |     |
| **Less**   | `.less`  | Similar ao Sass, mas com sintaxe diferente |     |     |
| **Stylus** | `.styl`  | Sintaxe minimalista e flexível             |     |     |
## 🔍 Exemplo de código com pré-processador (Sass)

```scss
// estilo.scss
$cor-primaria: #3498db;

body {
  font-family: Arial, sans-serif;

  .container {
    background-color: $cor-primaria;
    padding: 1rem;

    button {
      color: white;
      border: none;
      padding: 0.5rem;
    }
  }
}
```

Após compilar com Sass (`sass estilo.scss estilo.css`), vira:

```css
body {
  font-family: Arial, sans-serif;
}

body .container {
  background-color: #3498db;
  padding: 1rem;
}

body .container button {
  color: white;
  border: none;
  padding: 0.5rem;
}

```



## ⚙️ O que são **pós-processadores** de CSS?

Diferente dos pré-processadores (que criam CSS a partir de outra linguagem), os **pós-processadores** **recebem um arquivo CSS pronto** e **transformam ou melhoram esse código automaticamente** antes de ser enviado ao navegador.


### ⚡ Exemplo mais comum:

- **PostCSS**: usa plugins para:
    
    - Adicionar prefixos de navegador automaticamente (`-webkit-`, `-moz-`, etc)
        
    - Minificar CSS
        
    - Usar sintaxe futura do CSS (como variáveis nativas ou nesting)

## 🔧 Exemplo prático: `autoprefixer` com PostCSS

### 📄 Arquivo original (`style.css`):

```css
.container {
  display: flex;
  user-select: none;
}

```

Esse CSS **funciona nos navegadores modernos**, mas navegadores mais antigos **precisam de prefixos**, como:

- `-webkit-user-select`
    
- `-ms-user-select`
    

---

### 📤 O que o PostCSS com `autoprefixer` vai gerar:

```css
.container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

```

Ou seja, o **mesmo CSS**, mas com **compatibilidade automática** para vários navegadores — você não precisa escrever manualmente.



# 🧪 Comandos Git - Guia Rápido

## 📦 Inicialização (já feito)
```bash
git init
git add .
git commit -m "commit inicial"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
git push -u origin main
```

---

## 🔄 Ciclo de Atualização do Projeto

### 1. Verificar status atual
```bash
git status
```

### 2. Trazer atualizações do repositório remoto
```bash
git pull
```

### 3. Adicionar mudanças ao stage
```bash
git add .
# ou para adicionar apenas um arquivo específico:
git add nome-do-arquivo.ext
```

### 4. Criar commit com mensagem descritiva
```bash
git commit -m "Descreva aqui a mudança feita"
```

### 5. Enviar mudanças para o GitHub
```bash
git push
```

---

## 🌿 Trabalhando com Branches

### Criar nova branch e mudar para ela
```bash
git checkout -b nome-da-branch
```

### Enviar branch para o GitHub
```bash
git push origin nome-da-branch
```

---

## 📚 Histórico e Comparação

### Ver histórico dos commits
```bash
git log --oneline
```

### Ver mudanças nos arquivos antes do commit
```bash
git diff
```

---

## 🧹 Outros Comandos Úteis

### Remover um arquivo do Git (sem apagar localmente)
```bash
git rm --cached nome-do-arquivo.ext
```

### Clonar um repositório
```bash
git clone https://github.com/usuario/repositorio.git
```

---

## 🛠️ Problemas comuns

**Erro: Permission denied (publickey)**  
🔧 Configure sua chave SSH ou use HTTPS no `git remote`.

**Erro: repositório não encontrado**  
🔧 Verifique se o nome do repositório e o usuário estão corretos no `git remote`.

---

✅ **Dica Final:** Commits pequenos e frequentes são mais fáceis de revisar e ajudam a rastrear problemas!

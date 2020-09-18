# Mineração de Repositórios

#### GitHub API (v4) | GraphQL

Os dados são coletados da API do GitHub, em seguida são processados (para formatações e cálculos) e finalmente salvos em um arquivo `.csv` na pasta `files`.

> Este processo é realizado a cada requisição devido à páginação da API. O arquivo vai sendo incrementado com novos dados até que a mineração termine.

- Há um arquivo `repositories.csv` dentro da pasta com os resultados da mineração.

## Instruções

Para baixar as dependências do projeto utilize o comando:

```bash
$ yarn
```

ou

```bash
$ npm install
```

Abra o arquivo `.env` na raiz do projeto e insira um valor para a variável `ACCESS_TOKEN`.

```bash
ACCESS_TOKEN=abc123token456example
```

> **OBS:** Este deve ser o seu token de acesso pessoal gerado pelo GitHub nas configurações de desenvolvedor.

Para iniciar a mineração de dados utilize o comando:

```bash
$ yarn start
```

ou

```bash
$ npm start
```

São aceitos alguns parâmetros como:

- Quantidade máxima de páginas (maximum)
- Quantidade de registros por página (limit)
- Número da página inicial (initial)
- Cursor do último registro da página anterior (cursor)
- Nome do arquivo `.csv` que será criado (filename)
- Depuração habilitada/desabilitada (debug)

Os valores padrões de cada parâmetro são:

```js
maximum = 100
limit = 10
initial = 1
cursor = null,
filename = 'repos',
debug = false,
```

> **OBS:** Todos os parâmetros são opcionais.

## Exemplos

Um exemplo utilizando todos os parâmetros:

- maximum (-m)
- limit (-l)
- initial (-i)
- cursor (-c)
- filename (-f)
- debug (--debug)

```bash
$ yarn start -m 200 -l 5 -i 2 -c Y3Vyc29yOjEw -f file1 --debug
```

> Utilizam-se as flags com hífens (-) e a inicial da variável, separando o valor com um espaço em branco ou um sinal de igualdade (=). O parâmetro `debug` não recebe valor.

A flag **debug** produzirá a seguinte saída no terminal:

```bash
End cursor: Y3Vyc29yOjEw
```

> Este é um exemplo de cursor referente ao último registro da página atual que será utilizado para buscar os registros da próxima página.

Esta é a saída do terminal para cada requisição realizada com sucesso:

```bash
Buscando dados... Progresso: 1/100

Formatando dados...
Salvando no arquivo...

Dados coletados.
```

Esta é a saída do terminal para cada requisição que falhar:

```bash
Buscando dados... Progresso: 1/100
Request failed with status code 502

Tentando novamente...
```

## ๐ก Github - Flow

> ๐ค git์ฌ์ฉ์ค๋ช์ ์๋๋ค ๐ค

### 1. ์กฐ์ง Repository ์์ฑ ๋ฐ ๋ก์ปฌ ์ฐ๊ฒฐ ๐

> - ๊ฐ ํ์์ ๊นํ๋ธ ๊ณ์  ์ด๋ฉ์ผ๋ก ๋ ํ์งํ ๋ฆฌ์ ์ด๋
> - ๊ฐ ํ์๋ค์ ๋ ํ์งํ ๋ฆฌ๋ฅผ ๊ฐ ๊ฐ์ธ์ ๋ ํ์งํ ๋ฆฌ์ ํฌํฌ

1. ๋ก์ปฌ๋ ํฌ์งํ ๋ฆฌ ์์ฑ - `git init`
2. ํฌํฌํ ๋ ํ์งํ ๋ฆฌ๋ฅผ ๋ก์ปฌ๊ณผ ์ฐ๊ฒฐ - `git remote add ๋ณ์นญ ์๊ฒฉ๋ ํฌ์ฃผ์`
   > ๋ณดํต ๋ณ์นญ์ origin์ด๋ผ๊ณ  ํ๋ค.
3. ํฌํฌํด์จ ๋ ํ์งํ ๋ฆฌ ๋ธ๋์น๋ช์ master ์์ main ์ผ๋ก ๋ณ๊ฒฝ - `git branch -m main`
4. ํฌํฌํด์จ ๋ ํ์งํ ๋ฆฌ ๋ด์ฉ์ pull - `git pull ๋ณ์นญ main`

### 2. ์กฐ์ง Repository ๋ฐ์ ๐

> - ๊ฐ ๊ฐ์ธ์ ๊นํ๋ธ์ ๋ฐ์ํ ์ปค๋ฐ&ํธ์ ์ฌํญ๋ค์ PullRequest๋ฅผ ํตํด ์กฐ์ง ๋ ํ์งํ ๋ฆฌ์ ๋ฐ์

1. ๋ณ๊ฒฝ์ฌํญ์ add๋ก ๋ด์์ฃผ๊ธฐ - `git add ๋ณ์นญ ๋ธ๋์น๋ช`
2. ์ปค๋ฐํ๊ธฐ - `git commit -m "commit message"`
3. ๊ฐ์ธ ๋ ํ์งํ ๋ฆฌ์ ๋ฐ์ - `git push ๋ณ์นญ ๋ธ๋์น๋ช`
4. ์กฐ์ง ๋ ํ์งํ ๋ฆฌ์ ๋ฐ์ - `pull request`
5. ์ด์์ด ์์ผ๋ฉด merge, Confilct ๋ฐ์์ ํด๊ฒฐํ๊ณ  merge

### 3. ๋ค๋ฅธ ํ์์ด 1,2 ๋ฒ์ ์ํํ์ ๊ฒฝ์ฐ๋ฅผ ๋๋นํด ํญ์ ๋ณ๊ฒฝ์ฌํญ์ ๋ก์ปฌ์ ๋ฐ์ํด์ค์ผํฉ๋๋ค. ๐

1. ํฌํฌํด์จ ๊ฐ์ธ ๋ ํฌ์์ - `fetch upstream`์ ์ํ
2. ์ดํ pull ์ ํตํด ๋ก์ปฌ์ ๋ฐ์ - `git pull ๋ณ์นญ main`

### ๐ก :: Commit Type ::

- feat : ์๋ก์ด ๊ธฐ๋ฅ ์ถ๊ฐ
- fix : ๋ฒ๊ทธ ์์ 
- docs : ๋ฌธ์ ์์ 
- refactor : ์ฝ๋ ๋ฆฌํฉํ ๋ง
- test : ํ์คํธ ์ฝ๋, ๋ฆฌํฉํ ๋ง ํ์คํธ ์ฝ๋ ์ถ๊ฐ
- chore : ๋น๋ ์์ 

### ๐ก :: Branch๋ช ::

`Commit Type/์ด์๋ช`

ex) feat/Login

### ๐ก :: Commit Message ::

`Commit Type/์ด์๋ช : Commit Message`

ex) feat/Login : ๋ก๊ทธ์ธ ๊ธฐ๋ฅ ์ถ๊ฐ
ex) fix/Login : ์์ ์ฐ๋ ์คํจ ์์ธ ์ ๊ฑฐ
โโ**Master ๋ธ๋์น๋ก mergeํ๊ธฐ์ ์ PR์ฌ๋ ค์ ๊ฒํ ๋ฐ๊ธฐ**โโ

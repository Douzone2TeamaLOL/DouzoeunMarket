# π Dou-Zoeun-Market

---

## π₯ νλ‘μ νΈ μκ°

> λμ‘΄ μ±μ©νμ ν 2κΈ° 2ν λ¦¬μ‘νΈλ‘ λ§λλ μ€κ³ κ±°λ μΉνμ΄μ§
> μ€κ³ κ±°λ νλ«νΌμ νλ‘ νΈλ λ¦¬μ‘νΈ, μλ²λ nodejsλ₯Ό νμ©ν΄ κ΅¬νν΄λ³΄λ νλ‘μ νΈ

### π¨βπ» 1. κΈ°μ μ€ν π©βπ»

<img src="https://img.shields.io/badge/React-61dafb?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Redux-7944b6?style=flat-square&logo=Redux&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-FFD400?style=flat-square&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/Node.JS-12317833?style=flat-square&logo=Node.js&logoColor=white"/>

### β‘οΈ 2. νλ‘μ νΈ μ μ νμ ν΄

#### 1. π₯ AQuery Tool - ERD μ μ ν΄ π₯

### [ERD λ³΄λ¬κ°κΈ° (λΉλ°λ²νΈ : 76v0yb)](https://aquerytool.com/aquerymain/index/?rurl=88b8059d-c68c-4dc1-992d-da0e0ec50b40)

#### 2. π₯ Draw.io - μ€ν λ¦¬λ³΄λ μ μ ν΄ π₯

### [μ€ν λ¦¬λ³΄λ λ³΄λ¬κ°κΈ°](https://github.com/Dev-lemongrab/Dou-Zoeun-Market/blob/main/StoryBoard.md)

#### 3. π₯ κΈ°λ₯ κ°λ° μ½λ κ³΅μ  λ° νμ ν΄ π₯

### [λΈμ λ³΄λ¬κ°κΈ°](https://pyrite-waiter-664.notion.site/Douzone-Team2-3d30df53aac3483e9722011bfcb80eb8)

- λΈμ λ©μΈ νλ©΄

  1.  μ§μ²λλ³ κΈ°λ₯ 2) μ­ν λ³ κΈ°λ₯ 3) μ€κ³λ 4) νμλ‘ 5) λ¬Έμκ³΅μ  6) μ½λ λ° μ€λͺ κ³΅μ 
      <img src= https://velog.velcdn.com/images/oh_yunseong/post/6f378023-2d4d-4c83-af45-e90f0184dda3/image.png width="600">

#### 4. π₯ GitFlow π₯

### [2ν GitFlow λ³΄λ¬κ°κΈ°](https://github.com/Dev-lemongrab/Dou-Zoeun-Market/blob/main/GitFlow.md)

---

## π νλ‘μ νΈ μ€κ³λ

### 1. SPA μ€κ³λ

```javascript

π index.js

    π App.js

        π Header.js (nav)

            π Login.js

π‘ λ©μΈνμ΄μ§

        π MainPage.js

            π MainCarousel.js

            π Product.js (μ μ²΄ μν)

            π useFetch.js

                π ProductItem.js

                π‘ μν μμΈνμ΄μ§

                    π ProductDetail.js

                        π DetailCarousel.js

                        π Tabs

                        π Location.js

                        π QnA.js

                            π Pagination.js

                        π‘ κ²°μ νμ΄μ§

                        π Transaction.js

                            π PointModal.js

                            π DaumPost.js

                            π Success.js

π‘ λ§μ΄νμ΄μ§

        π MyPage.js

            π Profile.js

            π Tabs

                πProduct.js (νλ§€μ€μΈ μν)

                    π useFetch.js

                    πProductItem.js

                πProduct.js (μ°ν μν)

                    π useFetch.js

                    πProductItem.js

                π Comment.js (κ±°λνκΈ°)

                    π CommentItem.js

                π Order.js (λ΄κ°μ£Όλ¬Ένμν)

                    π useFetch.js

                    πProductItem.js

π‘ μνλ±λ‘ λ° μμ 

        π ProductForm.js

            π ImgList.js

            π DaumPost.js

        π ChangeProductForm.js

            π ImgList.js

            π DaumPost.js

π‘ μλ¬νμ΄μ§

      π Error403.js

π‘ νΈν°

      π Footer.js


```

### 2. λ¦¬λμ€ μ€κ³λ

```javascript

store
	π store μμ±createStore(reducer)
reducer
	π state μ€μ  : λ‘κ·ΈμΈ μ¬μ©μ μλ³ κ°

```

### 3. Node.JS μ€κ³λ

```javascript
	server.js
			π LoginRouter.js

                    π passport

            π LogoutRouter.js

			π MyPageRouter.js

			π ProudctFormRouter.js

            π ProductRouter.js

            π KakaopayRouter.js

            π Sequelize

               π models
                    (Category.js, User.js, Poduct.js, ...)


```

## νλ‘μ νΈ κΈ°λ₯ μ€λͺ

### 1. λ©μΈνμ΄μ§

- μν μΉ΄λλ₯Ό λ¬΄νμ€ν¬λ‘€λ‘ κ΅¬ν
- νμ΄μ§ μλ¨μΌλ‘ μ΄λνλ λ²νΌ μ μ π
- κ²μκΈ°λ₯ + νλ²μ΄λΌλ κ²μν κ²μ λν΄μλ κ²μμ΄ μλμμ±
- μΈμ  μ¬λ Έλμ§ νμΈν΄μ μΌμλ³λ‘ νμ(ex. ~μΌ μ  ~μκ° μ )
- μΆμ²μ μΈκ° μ΄μμ΄λ©΄ HOTνμ, μ¬λ¦°μ§ 24μκ° μ΄λ΄λΌλ©΄ new νμ μμ±

### 2. λ‘κ·ΈμΈνμ΄μ§

  <img src="https://img.shields.io/badge/Passport-61213120?style=flat-square&logo=Passport&logoColor=white"/>

- passportλ₯Ό νμ©ν μμλ‘κ·ΈμΈ κ΅¬ν
  - μλΉμ€μ κ³΅μμ DBμ μ¬μ©μκ° μμΌλ©΄ νμκ°μ ν λ‘κ·ΈμΈ
  - μλ£λλ©΄ μ§μ ν΄ λμ callback ν¨μμμ μΏ ν€λ₯Ό μμ±ν ν λ©μΈνμ΄μ§λ‘ μ΄λ
  - Passport.sessionμ ν΅ν΄ sessionμλ λ±λ‘λλ€.
- λ¦¬μ‘νΈμμ λ¦¬λμ€λ₯Ό ν΅ν΄ λ‘κ·ΈμΈ κ°μ stateλ‘ λΆλ¬μ¬ μ μκ² μ€μ 

### 3. λ΄ μμ  νμ΄μ§

- νμμ λ³΄ μμ (λλ€μ, νλ‘νμ¬μ§ λ³κ²½)
- μμ μ΄ μ¬λ¦° μν κ°μμ μν μ‘°ν κ°λ₯
- μμ μ΄ μ°ν λͺ©λ‘ μ‘°ν κ°λ₯
- κ²°μ μλ£ μ΄νμλ κ²°μ ν μ¬μ©μμ νν΄ νλ§€μ κ±°λνκΈ° λ° λ³μ  λΆμ¬ κ°λ₯
- νμνν΄ κΈ°λ₯(νμμ λ³΄ νμΈ ν)

### 4. μ ν μμΈ νμ΄μ§

- μν μ λ³΄ μ‘°ν(μ¬μ§, μνμν, κ±°λμ₯μ λ±)
- μ μ λ³ μ°νκΈ° κΈ°λ₯κ³Ό
- λ¨μ΄ μ¬λ¦° κ²μλ¬Όμ΄λ©΄ κ²°μ νκΈ° νΉμ λ΄κ° μ¬λ¦° κ²μλ¬Όμ΄λ©΄ μμ νκΈ°λ‘ λΌμ°ν
- μν λ¬Έμ κΈ°λ₯
- κ±°λμ₯μ μ§λμ νμΌλ‘ νμ(μΉ΄μΉ΄μ€ μ§λμ μλκ²½λ λ³ν APIμ¬μ©)

### 5. κ²°μ  νμ΄μ§

- μΉ΄μΉ΄μ€ κ²°μ  API μ¬μ©

### 6. μνλ±λ‘, μμ , μ­μ 

- μν λ±λ‘
  - μ νμ΄λ¦, κ°κ²©, μ€λͺ κΈΈμ΄ λ° μ ν¨μ±κ²μ¬
- λ΄κ° λ±λ‘ν μνμ΄λ©΄ μ΄λμλ  κ·Έ μνμ μμΈ μ λ³΄μμ μμ , μ­μ  κ°λ₯

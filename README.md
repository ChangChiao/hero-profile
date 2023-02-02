# Hero List Homework

## Demo
👉 [Demo網址](https://hero-profile.vercel.app/#/heroes)


## 系統說明

`Node版本: v16.13.1`

- 安裝： `pnpm install`
- 執行： `pnpm run dev`




## 專案架構

```

 src
    | --- components (頁面子元件)
    | --- pages      (頁面元件)
    | --- type       (資料型別)
    | --- utils      (共用函式及api函式)

         
```

## 第三方 library
- @emotion: CSS-in-JS library
- axios: api請求工具
- react-router-dom: 處理react路由


## 寫註解的原則
該段程式碼的邏輯較為複雜，寫註解可幫助team member快速理解商業邏輯，有利後續維護

## 遇到的困難
hero list component會因為切換路由param而重新渲染，加上React.memo有解決重新渲染的問題，不過hero list閃爍的問題依然沒有解決，
將網頁部署到vercel就沒有閃爍的問題(production mode正常)，推測是react 18的strict mode在develop mode會render兩次造成的


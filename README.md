# hercs-module-function
自己用的模組化功能

## 待製作的功能
- 整合所有``/js``裡面的資料。
- 選單開關端口。(自訂開關物件，預設開關。開關訊號發送、已開啟時間。)
- 將``cursor.js``的設定模組化，使用變數設定。

## Varibale Settings
```
:root {
    // color-system
    --priamry-color: #24271C;
    --on-priamry-color: #D2CFC6;
    --priamry-container-color: #24271C;
    --on-priamry-container-color: #D2CFC6;
    // ccg
    --grid-cols: 12;
    --grid-gap-x: ;
    --grid-gap-y: ;
    // margin
    --margin: calc(5px + 1vw);
    --padding: calc(5px + 1vw);
    // font
    --header-1: calc(20px + 10vw);
    --header-2: calc(20px + 5vw);
    --header-3: calc(10px + 5vw);
    --header-4: calc(10px + 3vw);
    --header-5: calc(10px + 1vw);
    --header-6: calc(8px + .5vw);
    --p: calc(8px + .5vw);
    --text-decoration-size: 2px;
    --text-decoration-color: var(--base-color);
    --letter-spacing: auto;
    // border
    --border-size: ;
    --border-color: var(--base-color);
    --border-radius: ;
    // position-display
    --position-base: ;
    //height-width
    --width: 20px;
    --height: 20px;
}
```

### style.scss

```
<link rel="stylesheet" href="https://module-function.herc.se/scss/style.css">
```

### cursor.js

```
cursor((e) => {
            // function here, when mouse moveing.
            console.log(e);
        }, "body"); // defult give css variable to "body".
```



⚠ 會不定時更新，若無法使用請記得重新到此網站查閱。

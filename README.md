# hercs-module-function
自己用的模組化功能

請求任何使用權：[ [twitter](https://twitter.com/HERCS_ART/) ]、[ [email](mailto:hi@herc.se) ]。

## 待製作的功能
- 整合所有``/js``裡面的資料。
- 選單開關端口。(自訂開關物件，預設開關。開關訊號發送、已開啟時間。)
- 將``cursor.js``的設定模組化，使用變數設定。像滑順滾動模組依樣。
- 新增CSS完整文件。

## Get Started

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

## Varibale Settings
### _color-system.scss
```
--priamry-color: #24271C;
--on-priamry-color: #D2CFC6;
--priamry-container-color: #24271C;
--on-priamry-container-color: #D2CFC6;
```
### _ccg.scss
```
--grid-cols: 12;
--grid-gap-x: 0;
--grid-gap-y: 0;
```
### _margin.scss
```
--margin: calc(5px + 1vw);
--padding: calc(5px + 1vw);
```
### _font.scss
```
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
--font-weight: normal;
```
### _border.scss
```
--border-size: 0;
--border-color: var(--base-color);
--border-radius: 0;
```
### _position-display.scss
```
--position-base: 0;
```
### _height-width.scss
```
--width: 20px;
--height: 20px;
```

## 滑順滾動適配 (Windows Only)

### CDN
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.3/dist/locomotive-scroll.css">
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.3/dist/locomotive-scroll.min.js"></script>
```

### Javascript
```
if (document.querySelector('[data-scroll-container]') && navigator.platform == 'Win32') {
                var scroll = new LocomotiveScroll({
                    el: document.querySelector('[data-scroll-container]'),
                    smooth: true
                });
                setTimeout(() => {
                    scroll.update();
                    document.querySelector(".header").addEventListener('mousemove', () => {
                        scroll.update();
                    })
                }, 2000)
            }
```

⚠ 會不定時更新，若無法使用請記得重新到此網站查閱。

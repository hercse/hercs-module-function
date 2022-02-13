function menu(config) {
    var config = {
        "control": false, //css class 開關
        "transition": "0", //css過場變數
        "items": document.querySelectorAll("[data-menu]"),
        controller: document.querySelector("[data-menu-control]")
    }
    console.log(config);

    config.controller.addEventListener('click', (e) => {
        config.control = !config.control
            // console.log(config.control);
        run();
    })

    function run() {
        config.items.forEach(e => {
            // 功能：新增紀錄 config.control 上一個變更前的客戶端位置紀錄
            var m = {
                Time: {
                    "In": "",
                    "Out": ""
                },
                CubicBezier: {
                    "In": "a",
                    "Out": ""
                },
                Style: ``,
                Delay: {
                    In: "",
                    Out: ""
                }
            }

            // Time
            if (e.dataset.menuTime) {
                m.Time.In = e.dataset.menuTime
                m.Time.Out = e.dataset.menuTime

            } else if (e.dataset.menuTimeIn || e.dataset.menuTimeOut) {
                m.Time.In = e.dataset.menuTimeIn
                m.Time.Out = e.dataset.menuTimeOut
            }
            // cubic-bezier
            if (e.dataset.menuCubicBezier) {
                m.CubicBezier.In = e.dataset.menuCubicBezier
                m.CubicBezier.Out = e.dataset.menuCubicBezier

            } else if (e.dataset.menuCubicBezierIn || e.dataset.menuCubicBezierOut) {
                m.CubicBezier.In = e.dataset.menuCubicBezierIn
                m.CubicBezier.Out = e.dataset.menuCubicBezierOut
            }
            // Delay
            if (e.dataset.menuDelay) {
                m.Delay.In = e.dataset.menuDelay
                m.Delay.Out = e.dataset.menuDelay

            } else if (e.dataset.menuDelayIn || e.dataset.menuDelayOut) {
                m.Delay.In = e.dataset.menuDelayIn
                m.Delay.Out = e.dataset.menuDelayOut
            }
            // style
            if (e.dataset.menuStyle) {
                m.Style = e.dataset.menuStyle
            }
            // Output Preview
            console.log("Output Preview")
            console.log(m)

            // Then Run
            if (config.control == false) {
                e.setAttribute("style", `transition-timing-function:${m.CubicBezier.Out};transition-duration:${m.Time.Out}; transition-delay:${m.Delay.Out};`)
            }
            if (config.control == true) {
                e.setAttribute("style", `${m.Style}; transition-timing-function:${m.CubicBezier.In}; transition-duration:${m.Time.In}; transition-delay:${m.Delay.In};`)
            }

        });
    }
    run();
}

export { menu };
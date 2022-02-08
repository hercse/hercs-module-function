function cursor(code, element) {
    window.addEventListener('mousemove', (event) => {
        const cursor = {
            "X": event.clientX,
            "Y": event.clientY,
        }
        if (element) {
            // console.log(`指派給：${element}`);
            var element_style = document.querySelector(element).style;
            element_style.setProperty("--x", cursor.X + "px");
            element_style.setProperty("--y", cursor.Y + "px");
        }
        code(cursor);
    });

    // document.querySelectorAll(".post").forEach(e => {
    //     e.addEventListener('mousemove', (a) => {
    //         console.log(a);
    //     });
    //     e.addEventListener('mouseout', () => {

    //     });
    // })
}
export { cursor };
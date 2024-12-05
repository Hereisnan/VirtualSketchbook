document.addEventListener('DOMContentLoaded', function () {
    // 获取页面和控制它们的复选框
    // var coverCheckbox = document.getElementById('checkbox-cover');
    var page1Checkbox = document.getElementById('checkbox-page1');
    var page2Checkbox = document.getElementById('checkbox-page2');
    var page3Checkbox = document.getElementById('checkbox-page3');

    // 添加点击事件监听器到页面的标签
    // document.querySelector('.cover label').onclick = function() {
    //     coverCheckbox.checked = !coverCheckbox.checked;
    //     console.log("cover label") 
    // };

    document.querySelector('#page1 .next').onclick = function() {
        page1Checkbox.checked = true;
        console.log("page1 next")
    };
    document.querySelector('#page1 .prev').onclick = function() {
        page1Checkbox.checked = false;
        console.log("page1 prev")
    };

    document.querySelector('#page2 .next').onclick = function() {
        page2Checkbox.checked = true;
        console.log("page2 next")
    };
    document.querySelector('#page2 .prev').onclick = function() {
        page2Checkbox.checked = false;
        console.log("page2 prev")
    };

    document.querySelector('#page3 .next').onclick = function() {
        page3Checkbox.checked = true;
    };
    // Uncomment and edit if there is a previous label in page3
    // document.querySelector('#page3 .prev').onclick = function() {
    //     page3Checkbox.checked = false;
    // };
});

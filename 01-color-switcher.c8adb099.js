!function(){var t=document.querySelector("button[data-start]");t.addEventListener("click",(function(){o=setInterval((function(){document.body.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3),t.setAttribute("disabled","true"),e.removeAttribute("disabled")}));var e=document.querySelector("button[data-stop]"),o=null;e.addEventListener("click",(function(){clearInterval(o),t.removeAttribute("disabled"),e.setAttribute("disabled","true"),console.log(o)})),e.setAttribute("disabled","true")}();
//# sourceMappingURL=01-color-switcher.c8adb099.js.map

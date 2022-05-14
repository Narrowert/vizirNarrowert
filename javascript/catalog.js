const catalogBtn = document.querySelectorAll(".catalog-item__btn");
const catalogList = document.querySelectorAll(".catalog");

catalogBtn.forEach(function(item){
    item.addEventListener("click",function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if(!currentBtn.classList.contains("catalog-item__btn--active")){
            catalogBtn.forEach(function(item){
            item.classList.remove("catalog-item__btn--active");
        });
        catalogList.forEach(function(item){
            item.classList.remove("catalog--active");
        });

        currentBtn.classList.add('catalog-item__btn--active');
        currentTab.classList.add('catalog--active');
        };
    });
});
export {affichage as default}

const affichage = {
    showTab : function(id){
        if(id === undefined)return;
        // hide all tabs
        document.querySelectorAll(".tab").forEach(el=>{
            el.classList.add("w3-hide");
        })
        document.getElementById(id).classList.remove("w3-hide");
    }
};
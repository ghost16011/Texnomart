// pagination script

const pagination = (evt, page_number) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("perforators__cost-section__output-block__list");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("perforators__cost-section__output-block__product-pagination-block__label__page");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(page_number).style.display = "flex";
    evt.currentTarget.className += " active";
}


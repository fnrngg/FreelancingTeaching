function showForm(evt, formId) {
    var i, formContent, tablinks;
    formContent = document.getElementsByClassName("forms");
    for (i = 0; i < formContent.length; i++) {
        formContent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabsButton");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(formId).style.display = "block"
    evt.target.className += " active"
}
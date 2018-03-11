var aceEditer = ace.edit("source_code");
/*
set ace editer options
*/
aceEditer.setOptions({
    enableBadicAutocompletion : true,
    enableLiveAutocompletion : true,
    enableSnappets : true
});
/*
    run the code when "run button" is clicked,or ctrl-enter is pressed.
*/
$("#run_button").on("click",function(event){
        runCode();
});
aceEditer.commands,addCommand({
    bindKey:{win:"Ctrl-Enter",mac:"Ctrl-Enter"},
    exec : runCode
});

/*
    language settings
*/
function setEditerLanguage(language){
    var languageToMode = {
        ruby : "ruby",
        python : "python",
        C : "c_cpp"
    };
    var mode = languageToMode[language];
    aceEditer.getSession().setMode("ace/mode/" + mode);

}
$("#language").val("ruby");

setEditerLanguage("ruby");

$("#language").on("change",function(event){
        setEditerLanguage(this.value);
});

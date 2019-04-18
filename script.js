function nonSocial() {
    document.getElementById("sb").style.borderBottom = "dotted #f7f7f7";
    document.getElementById("nsb").style.borderBottom = "solid #f7f7f7";
        document.getElementById("social").innerHTML = "<a href=\"https://github.com/Edfame\"><img src=\"images/git.png\"></a>\n" +
            "\t\t\t\t\t<a href=\"https://www.linkedin.com/in/edfame/\"><img src=\"images/linkedin.png\"></a>";
        document.getElementById("nonSocial").innerHTML = "";
}

function social() {
        document.getElementById("sb").style.borderBottom = "solid #f7f7f7";
        document.getElementById("nsb").style.borderBottom = "dotted #f7f7f7";
        document.getElementById("nonSocial").innerHTML = "<a href=\"https://www.twitter.com/Edfame_\"><img src=\"images/twitter.png\"></a>\t\t\n" +
            "\t\t\t\t\t<a href=\"https://www.snapchat.com/add/edfame\"><img src=\"images/snap.png\"></a>\t\t\n" +
            "\t\t\t\t\t<a href=\"https://www.instagram.com/edfame_/\"><img src=\"images/insta.png\"></a>\t\t\t\t\n" +
            "\t\t\t\t\t<a href=\"https://www.mixer.com/Edfame\"><img src=\"images/mixer.svg\"></a>\t";
        document.getElementById("social").innerHTML = "";
}

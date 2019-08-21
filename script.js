function main() {

    document.getElementById("initDiv").innerHTML = "<h2 class=\"text\">In which way do you want to reach me?</h2>"+
                                                    "<button class =\"text\" id = \"nsb\"onclick=\"nonSocial()\">Non-Social</button>"+
                                                    "<button class =\"text\" id = \"sb\" onclick=\"social()\">Social</button>";

    document.getElementById("content").innerHTML = "";
}

function nonSocial() {

    document.getElementById("content").innerHTML = "<h1 class=\"text\">Non-Social.</h1>"+
                                                    "<a href=\"https://github.com/Edfame\"><img src=\"images/git.png\"></a>\n" +
                                                    "\t\t\t\t\t<a href=\"https://www.linkedin.com/in/edfame/\"><img src=\"images/linkedin.png\"></a>"+
                                                    "<div><button id=\"back\" class=\"text\" onclick=\"main()\">Back</button></div>";
    document.getElementById("initDiv").innerHTML = "";
}

function social() {

    document.getElementById("content").innerHTML = "<h1 class=\"text\">Social.</h1>"+
                                                    "<a href=\"https://www.twitter.com/Edfame_\"><img src=\"images/twitter.png\"></a>\t\t\n" +
                                                    "\t\t\t\t\t<a href=\"https://www.snapchat.com/add/edfame\"><img src=\"images/snap.png\"></a>\t\t\n" +
                                                    "\t\t\t\t\t<a href=\"https://www.instagram.com/edfame_/\"><img src=\"images/insta.png\"></a>\t\t\t\t\n" +
                                                    "\t\t\t\t\t<a href=\"https://www.mixer.com/Edfame\"><img src=\"images/mixer.svg\"></a>\t"+
                                                    "<div><button id=\"back\" class=\"text\" onclick=\"main()\">Back</button></div>";
    document.getElementById("initDiv").innerHTML = "";
}

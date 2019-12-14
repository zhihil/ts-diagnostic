import ProfileView from "./views/ProfileView";
import "dojo/domReady!";

function main() {
    const profileView = new ProfileView();
    const container = document.getElementById("container");

    container.appendChild(profileView.domNode);
    profileView.startup();
}

export default main;

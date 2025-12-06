document.getElementById("save-btn").addEventListener("click", function () {

    // get values from input fields
    let name = document.getElementById("edit-name").value;
    let username = document.getElementById("edit-username").value;
    let skills = document.getElementById("edit-skills").value;

    // save to localStorage
    localStorage.setItem("profile_name", name);
    localStorage.setItem("profile_username", username);
    localStorage.setItem("profile_skills", skills);

    // redirect back to profile page
    window.location.href = "profile.html";
});

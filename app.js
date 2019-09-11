//Init Github
const github = new GitHub;
//Init UUI
const ui = new UI

// search input
const searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;

    if(userText !== ''){
        //console.log(userText)
        //Make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message ==='Not Found'){
                //Show alert
                ui.showAlert('User not found', 'alert alert-danger')
            } else {
                //console.log(data)
                //Show profile
                ui.showProfile(data.profile)
                ui.showRepos(data.repos)
            }
        })
    } else {
        //Clear profile
        ui.clearProfile()
    }
})
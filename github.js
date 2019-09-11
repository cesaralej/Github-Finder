class GitHub{
    constructor(){
        this.client_id = 'f65f4a87384609ffb7f3';
        this.client_secret = '94af5de1767c37659ed3d7b13cb20a4d10ce6a99';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user) {
        //This method does not run both fetches on parallel
        /* const profileResponse = await fetch
        (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const reposResponse = await fetch
        (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json();
        const repos = await reposResponse.json(); */

        const [ profile, repos ] = await Promise.all([
            fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`).then(response => response.json()),
            fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`).then(response => response.json())
        ]);
        
        
        return {
            //profile: profileData -> we changed profileData to just profile
            //profile: profile -> In ES6, if both are named the same, you can just put it once
            profile,
            repos

        }
    }
}
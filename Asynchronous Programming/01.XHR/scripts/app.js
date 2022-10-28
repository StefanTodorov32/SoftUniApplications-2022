function loadRepos() {
   let url = "https://api.github.com/users/testnakov/repos"
   let http = new XMLHttpRequest();
   http.onreadystatechange = () =>{
      if (http.status === 200) {
         document.getElementById('res').innerHTML = http.responseText
      }
   }
   http.open("GET", url)
   http.send()
}
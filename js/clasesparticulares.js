if (document.getElementById("app")) {
    const app = new Vue({
        el: "#app",
        data: {
            cursos: [],
            errored: false,
            loading: true
        },
        created() {
            var url = 'https://npcacproyectoeducativo.herokuapp.com/cursos'
            this.fetchData(url)
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.cursos = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(curso) {
                const url = 'https://npcacproyectoeducativo.herokuapp.com/curso/' + curso;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) 
                    .then(res => {
                        location.reload();
                    })
            }
        }
    })
}



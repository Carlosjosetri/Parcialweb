document.forms.formB=addEventListener("submit",function (e) {
    e.preventDefault();
    let data={
        marca:document.querySelector("#marca").value,
        tipo:document.querySelector("#tipo").value,
        anios:document.querySelector("#anio").value
    }
    console.log(data);
    let url="/Botellas";
    Fetch(url,{
       method:"POST",
       body:JSON.stringify(data),
       headers:{
            "content-type":"aplication/json"
       }

    }).then(res => this.res.JSON)
    .catch(err=>this.console.error(err))
    .then(response=>{
        alert("insertado conexito");
    })
})
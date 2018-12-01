mostrar()
document.forms.formB=addEventListener("submit",function (e) {
    e.preventDefault();
    let data={
        marca:document.querySelector("#marca").value,
        tipo:document.querySelector("#tipo").value,
        anios:document.querySelector("#anio").value
    }
    console.log(data);
    let url="/Botellas";
    fetch(url,{
       method:"POST",
       body:JSON.stringify(data),
       headers:{
            "content-type":"aplication/json"
       }

    }).then(res => res.JSON)
    .catch(err=>this.console.error(err))
    .then(response=>{
        alert("insertado conexito");
        mostrar()
    })
})

function mostrar(){
    let url="/Botellas";
    fetch(url,{
        method:"GET",
        headers:{
             "content-type":"aplication/json"
        }
 
     }).then(res => res.JSON)
     .catch(err=>this.console.error(err))
     .then(response=>{
         let tbody=document.querySelector("#body");
         console.log(tbody);
         let filas="";
         response.forEach(element => {
             filas=filas+`<tr>
             <td> ${element.marca}</td>
             <td> ${element.tipo}</td>
             <td> ${element.anios}</td>
             <tr>`
         });
         tbody.innerHTML=filas;
         tbody.appendChild(filas);
     })

}
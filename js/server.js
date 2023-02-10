const cont  = document.querySelector('.cont');
const input = document.querySelector("input")
const btn = document.querySelector('button')
console.log(btn);
fetch('https://jsonplaceholder.typicode.com/posts').then(async(response)=>{
 window.data = await  response.json()
 return data
}).then((data)=>{
console.log(data);

for(let key in data){
    if(data[key].userId == 1)
    cont.innerHTML += `
    <div class = 'box'>
    <p>userId:${data[key].userId}</p>
    <p>id:${data[key].id}</p>
    <p>title:${data[key].body}</p>
    </div>
    `
}
})
function userSearch(){
    const value = input.value
cont.innerHTML = ''
    for(let key in data){
        console.log(data);
if(value == data[key].userId){
      cont.innerHTML += `
        <div class = 'box'>
        <p>userId:${data[key].userId}</p>
        <p>id:${data[key].id}</p>
        <p>title:${data[key].body}</p>
        </div>
        `
}

      
    }
}
btn.addEventListener('click',userSearch)



const submit = document.getElementById('submit');
let data = [];

submit.addEventListener('click', () => {
    const cardOwner = document.getElementById('cardOwner').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const date = document.getElementById('date').value;
    const cvv = document.getElementById('cvv').value;

    let obj = {
        cardOwner: cardOwner,
        cardNumber: cardNumber,
        date: date,
        cvv: cvv
    }

    // fetch(`http://localhost:8080/bucket?email=${localStorage.getItem('email')}`,{
    //     method : "GET",
    //     headers:{
    //         "Content-type":"application/json",
    //         "Authorization": localStorage.getItem('token')
    //     }
    // })
    // .then((res)=>{
    //     return res.json();
    // })
    // .then((response)=>{
    //     data = response;
    // })


    fetch(`http://localhost:8080/bucket/deleteAll?email=${localStorage.getItem('email')}`,{
        method:'DELETE',
        headers:{
            "Content-type":"application/json",
            "Authorization": localStorage.getItem('token')
        }
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        alert(data.msg)
    })
})





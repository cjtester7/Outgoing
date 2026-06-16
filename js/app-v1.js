let cars=[];
async function loadCars(){cars=await api('getCars');renderCars(cars);}
function renderCars(list){
 document.getElementById('carsContainer').innerHTML=list.map(c=>
 `<div class="card mb-2"><div class="card-body"><b>${c.Stock||''}</b><br>${c.Make||''} ${c.Model||''}</div></div>`).join('');
}
function showForm(){alert('Form implementation v1 placeholder');}
document.addEventListener('DOMContentLoaded',loadCars);
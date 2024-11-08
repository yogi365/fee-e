var formData = {};
var empDetails = [];
function addRecord(){
  formData.name=document.querySelector('#name').value;
  formData.dob=document.querySelector('#dob').value;
  formData.email=document.querySelector('#email').value;
  formData.contactNumber=document.querySelector('#contactNumber').value;
  formData.address=document.querySelector('#address').value;
  formData.empName=document.querySelector('#empName').value;
  formData.workExp=document.querySelector('#workExp').value;
  formData.techSkill=document.querySelector('#techSkill').value;

  empDetails.push(formData);
  localStorage.setItem('empDetails',JSON.stringify(empDetails));
  addRecordToTable(formData);
}

function addRecordToTable (formData){
    const tr = document.createElement('tr');
    for(key in formData){
        const td = document.createElement('td');
        td.innerText = formData[key];
        tr.append(td);
    }

    document.querySelector('empTable').append(tr);
}

function loadData(){
    if(localStorage.getItem('empDetails')){
        empDetails = JSON.parse(localStorage.getItem('empDetails'));
        empDetails.forEach(emp=>{
            addRecordToTable(emp)
        })
    }
}

window.addEventListener('load',loadData);


let currentData = [...appData];


const tableBody = document.getElementById('tableBody');
const modal = document.getElementById('formModal');
const btnAddNew = document.getElementById('btnAddNew');
const btnCloseModal = document.getElementById('btnCloseModal');
const btnCancel = document.getElementById('btnCancel');
const dataForm = document.getElementById('dataForm');

function renderTable() {
    tableBody.innerHTML = '';
    currentData.forEach((item, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${item.inputNameCF}</td>
                <td>${item.nputNameSP}</td>
                <td>${item.inputEmail}</td>
                <td>${item.inputDate}</td>
                <td>${item.inputLocation}</td>
               
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}


function clearErrors() {
    document.getElementById('errCF').innerText = '';
    document.getElementById('errSp').innerText = '';
    document.getElementById('errEmail').innerText = '';
    document.getElementById('errDate').innerText = '';
    document.getElementById('errLoc').innerText = '';
}

function openModal() {
    modal.classList.add('show');
    dataForm.reset();
    clearErrors(); 
}

function closeModal() {
    modal.classList.remove('show');
}

btnAddNew.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
btnCancel.addEventListener('click', closeModal);


dataForm.addEventListener('submit', function(event) {
    event.preventDefault();
   
    const Cf = document.getElementById('inputNameCF').value.trim();
    const name = document.getElementById('nputNameSP').value.trim();
    const email = document.getElementById('inputDate').value.trim();
    const Date = document.getElementById('inputPhone').value.trim();
    const inputLocation = document.getElementById('inputLocation').value.trim();

    let isValid = true;
    clearErrors(); 
    
    if (id === "") {
        document.getElementById('errCF').innerText =" .";
        isValid = false;
    }

   
    if (name === "") {
        document.getElementById('errSp').innerText = ".";
        isValid = false;
    } else if (name.length > 60) {
        document.getElementById('errSp').innerText = ".";
        isValid = false;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById('errEmail').innerText = ".";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('errEmail').innerText = ".";
        isValid = false;
    }

    
   
    if (!isValid) return;

    
    const newItem = {
       Conference name: Cf,
       Speakers:
      
        email: email,
     
        
    };

    
    currentData.push(newItem);

   
    renderTable();
    closeModal();
    alert("Thêm mới thành công!");
});


renderTable();
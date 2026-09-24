function loadDataFromServer() {
    fetch('/api/items')
    .then(response => response.json())
    .then(data => {
        const list = document.querySelector('#list-container');
        list.textContent = ' ';
        const ul = document.createElement('ul');
        ul.id = 'list-ul';
        data.forEach( item => {
            ul.appendChild(addPokemon(item));
        });
        list.appendChild(ul);
    });
}


loadDataFromServer();

function addPokemon(item) {
        const li = document.createElement('li');
        li.textContent = `Pokedex#: ${item.pokedex_number} | Name: ${item.name} | Type: ${item.type} | Species: ${item.species}`;

        //delete button
        const delbutton = document.createElement('button');
        delbutton.textContent = 'Delete';
        delbutton.classList.add('delete');
        delbutton.addEventListener('click', () => {
            li.remove();
            fetch('/api/items/' + item.pokedex_number, {
                method: 'DELETE'
            }).then(response => {
                 if (response.ok) return response.text();
            }).then(data => 
                toaster.show('remove', `Pokemon #${item.pokedex_number} Removed...`, 2000))

        });
        
        //edit button
        const editbutton = document.createElement('button');
        editbutton.textContent = 'Edit';
        editbutton.classList.add('edit');
        editbutton.addEventListener('click', () => {
        editPokemonData(item);
        addbutton.textContent = 'Update';

          function editPokemonData(item) {
                document.querySelector('#number').value = item.pokedex_number;
                document.querySelector('#name').value = item.name;
                document.querySelector('#type').value = item.type;
                document.querySelector('#species').value = item.species;
                document.querySelector('#evolutions').value = item.evolutions;
        }
    });
        li.appendChild(delbutton);
        li.appendChild(editbutton);
        return(li)
}

//reset button
const resbutton = document.getElementById('resetPokedex');
resbutton.addEventListener('click', () => {
    fetch('/api/reset', {
        method: 'POST'
        }).then(response => {
           if (response.ok) return response.text();
           throw new Error('Failed to reset database.');
        }).then(data => {
            toaster.show('update', 'Pokedex Reset...', 3500)
            loadDataFromServer();
        })
        .catch(error => console.error('Error:', error));
});

//add button
const addbutton = document.getElementById('addPokemon');
addbutton.addEventListener('click', () => {
    if (addbutton.textContent == 'Add Pokemon'){
        fetch('/api/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(addPokemonData())
    
        }).then(response => response.json())
          .then(data => {
            toaster.show('add', `Pokemon #${data.pokedex_number} Added...`, 3500);
            const list = document.querySelector('#list-ul');
            list.appendChild(addPokemon(data));
            document.querySelector('#characterForm').reset();
        });
      
    }else{
        const data = addPokemonData();
        addbutton.textContent = 'Add Pokemon';
        fetch('/api/items/' + data.pokedex_number, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
          .then(data => {
            toaster.show('edit', `Pokemon #${data.pokedex_number} Updated...`, 3500);
            loadDataFromServer();
        });
          document.querySelector('#characterForm').reset();
    }
    function addPokemonData(){
        return{
            pokedex_number: document.querySelector('#number').value,
            name:document.querySelector('#name').value,
            type:document.querySelector('#type').value,
            species:document.querySelector('#species').value,
            evolutions:document.querySelector('#evolutions').value 
        }
    }
});







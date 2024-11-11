async function addmovie(event) {
    event.preventDefault();
    const mname = document.getElementById("mname").value;
    const discrip = document.getElementById("mdesc").value;
    const posterlink = document.getElementById("milink").value;

    try {
        const response = await fetch('http://localhost:3000/movie/addmovie', {
            method: 'POST',mode:'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mname, discrip, posterlink }),
        });

        if (response.ok) {
            alert('Movie posted successfully!');
            window.location.href = 'adminMovie.html'; 
        } else {
            alert('Failed to add movie. Please try again.');
        }
    } catch (error) {
        console.error('Error posting movie:', error);
        alert('An error occurred while posting the movie.');
    }
}
async function removemovie(event) {
    event.preventDefault();
    const mname = document.getElementById("mname").value;

    try {
        const response = await fetch('http://localhost:4800/movie/removemovie', {
            method: 'Delete',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({mname}),
        });

        if (response.ok) {
            alert('Movie removed successfully!');
            window.location.href = 'adminMovie.html'; 
        } else {
            alert('Failed to remove movie. Please try again.');
        }
    } catch (error) {
        console.error('Error posting movie:', error);
        alert('An error occurred while posting the movie.');
    }
}

async function updatemovie(event) {
    event.preventDefault();
    const mname = document.getElementById("mname").value;
    const discrip = document.getElementById("mdesc").value;

    try {
        const response = await fetch('http://localhost:4800/movie/updatemovie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mname,discrip}),
        });

        if (response.ok) {
            alert('Movie Dicription updated successfully!');
            window.location.href = 'adminMovie.html'; 
        } else {
            alert('Failed to add movie. Please try again.');
        }
    } catch (error) {
        console.error('Error updating movie:', error);
        alert('An error occurred while updating the movie.');
    }
}
async function register(event) {
    event.preventDefault();

const userdata={
     fname : document.getElementById("fname").value,
     lname : document.getElementById("lname").value,
     email : document.getElementById("uiin").value,
     password1 : document.getElementById("passin").value,
     password2 : document.getElementById("conpass").value
    }
    try {
        const response = await fetch('http://localhost:4800/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userdata)
        });

        if (response.ok) {
            alert('user registered successfully!');
            window.location.href = 'Myseat.html'; 
        } else {
            alert('Failed to register user. Please try again.');
        }
    } catch (error) {
        console.error('Error posting movie:', error);
        alert('An error occurred while registering the user.');
    }
}



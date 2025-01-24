
async function fetchpost(){
  try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts') ;

      if(!response.ok){
        throw new error(`!Http ERROR STATUS: ${response.status}`);
     }
        const posts = await response.json();
        displayPosts(posts);
    }
   catch(error){
    console.error("Error Fetching Post", error);
    document.getElementById('post-container').innerHTML=`<p> Error loading post.Please try again later!</p>`

   }
  
}
 
function displayPosts(posts){
   const postContainer= document.getElementById('post-container')
   postContainer.innerHTML='';

   posts.slice(1,10).forEach(post=>{
    const postdiv = document.createElement('div');
    postdiv.classList.add('post');

    postdiv.innerHTML = ` <h2 class="post-title">${post.title}</h2
      <p class="post-body">${post.body}</p> `;

      postContainer.appendChild(postdiv);
    });
}

  // Fetch posts when the page loads
  fetchpost();

// Form Validation
//   const form = document.getElementById('gymForm');

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent form submission

//   // Clear previous error messages
//   document.querySelectorAll('.error').forEach((error) => (error.textContent = ''));
//   document.getElementById('formSuccess').textContent = '';

//   // Get form values
//   const name = document.getElementById('name').value.trim();
//   const age = document.getElementById('age').value.trim();
//   const gender = document.getElementById('gender').value.trim();
//   const locality = document.getElementById('locality').value.trim();

//   let isValid = true;

//   // Validate Name
//   if (!name) {
//     document.getElementById('nameError').textContent = 'Name is required.';
//     isValid = false;
//   }

//   // Validate Age
//   if (!age || isNaN(age) || age <= 0) {
//     document.getElementById('ageError').textContent = 'Enter a valid age.';
//     isValid = false;
//   }

//   // Validate Gender
//   if (!gender) {
//     document.getElementById('genderError').textContent = 'Gender is required.';
//     isValid = false;
//   }

//   // Validate Locality
//   if (!locality) {
//     document.getElementById('localityError').textContent = 'Locality is required.';
//     isValid = false;
//   }

//   // If all fields are valid, show success message
//   if (isValid) {
//     document.getElementById('formSuccess').textContent = 'Form submitted successfully!';
//     form.reset(); // Reset the form fields
//   }
// });


document.getElementById('gymForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Clear previous errors
    clearErrors();
  
    // Get input values
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const gender = document.getElementById('gender').value.trim();
    const locality = document.getElementById('locality').value.trim();
  
    let isValid = true;
  
    // Validate name
    if (name === '') {
      showError('nameError', 'Name is required.');
      isValid = false;
    } else if (name.length < 3) {
      showError('nameError', 'Name must be at least 3 characters long.');
      isValid = false;
    }
  
    // Validate age
    if (age === '') {
      showError('ageError', 'Age is required.');
      isValid = false;
    } else if (isNaN(age) || age <= 0) {
      showError('ageError', 'Please enter a valid age.');
      isValid = false;
    }
  
    // Validate gender
    if (gender === '') {
      showError('genderError', 'Gender is required.');
      isValid = false;
    } else if (!['male', 'female', 'other'].includes(gender.toLowerCase())) {
      showError('genderError', 'Gender must be "male", "female", or "other".');
      isValid = false;
    }
  
    // Validate locality
    if (locality === '') {
      showError('localityError', 'Locality is required.');
      isValid = false;
    }
  
    // If all validations pass
    if (isValid) {
      showSuccess('Form submitted successfully!');
      document.getElementById('gymForm').reset(); // Clear the form
    }
  });
  
  // Function to show error messages
  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
  }
  
  // Function to clear all error messages
  function clearErrors() {
    document.querySelectorAll('.error').forEach((errorElement) => {
      errorElement.textContent = '';
    });
    document.getElementById('formSuccess').textContent = ''; // Clear success message
  }
  
  // Function to show success message
  function showSuccess(message) {
    const successElement = document.getElementById('formSuccess');
    successElement.textContent = message;
  }
  
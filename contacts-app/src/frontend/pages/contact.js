const name1 = document.getElementById('contact-name');
const phoneNumber1 = document.getElementById('contact-phone');
const updateContact = (id, name, phoneNumber) => {
   fetch(`/api/contacts/${id}`, {
      method: 'PUT',
      body: {
         name,
         phoneNumber
      }
   })
      .then((res) => res.json())
      .then((res) => console.log(res));
};

window.handleContactRequest = (params) => {
   fetch(`/api/contacts/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
         console.log(data[0].name);

         document.body.innerHTML = `
      <header>
      <ul>
      <a href="/" data-navigo>Home</a>
      <a href="contacts" data-navigo>Contacts</a>
      <a href="picture" data-navigo>Picture</a>
      </ul>
      </header>
      <div class= "container">
      <h2> Modify contact of ${data[0].name}</h2>
      <form type="submit">
  <div class="form-row" >
    <div class="col">
      <input type="text" id="contact-name" class="form-control" placeholder="First name" value='${data[0].name}'>
    </div>
    <div class="col">
      <input type="text" id="contact-phone" class="form-control" placeholder="Phone name" value='${data[0].phoneNumber}'>
    </div>
    <div class="col">
    <button type="button" onClick="updateContact(${data[0].id}, ${name1}, ${phoneNumber1})" class="btn btn-info"> Update </button>
    </div>
  </div>
</form>
      </div>
      `;
      });

   // if any links are added to the dom, use this function
   // make the router handle those links.
   router.updatePageLinks();
};

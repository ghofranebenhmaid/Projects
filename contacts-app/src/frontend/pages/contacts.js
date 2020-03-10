//import { response } from 'express';

const deleteContact = (id) => {
   fetch(`/api/contacts/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then((res) => {
         console.log(res);
      });
};

window.handleContactsRequest = () => {
   document.body.innerHTML = `
        <header>
          <ul>
            <a href="/" data-navigo>Home</a>
            <a href="contacts" data-navigo>Contacts</a>
            <a href="picture" data-navigo>Picture</a>
          </ul>
        </header>
        <div class= 'container'>
        <button class="btn btn-primary load-contacts" aria-pressed="false">Load contacts</button>
        <div class="contacts-container">
        </div>
        </div>
      `;

   const container = document.querySelector('.contacts-container');
   const loadContactsBtn = document.querySelector('.load-contacts');

   function loadContacts() {
      fetch('/api/contacts')
         .then((res) => res.json())
         .then((data) => {
            console.log(data);

            data.forEach((element) => {
               const div = document.createElement('div');
               div.innerHTML = `<div>${element.name} </div>
               <div>
               <a href="contact/${element.id}">
               <button type="button" class="btn btn-info"> Info
               </button>
               </a>
               <button onClick='deleteContact(${element.id})' type="button" class="btn btn-outline-danger">Delete</button>
               </div>
               `;
               container.appendChild(div);
            });
         });
   }
   loadContactsBtn.addEventListener('click', function() {
      container.innerHTML = '';
      loadContacts();
   });

   // if any links are added to the dom, use this function
   // make the router handle those links.
   router.updatePageLinks();
};

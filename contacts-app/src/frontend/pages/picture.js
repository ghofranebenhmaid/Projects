window.handlePictureRequest = () => {
   document.body.innerHTML = `
    <header>
      <ul>
        <a href="/" data-navigo>Home</a>
        <a href="contacts" data-navigo>Contacts</a>
        <a href="picture" data-navigo>Picture</a>
      </ul>
    </header>
 <div class= 'container'>
    <img src="./unnamed.gif" alt="illusion">
    </div>
  `;

   // if any links are added to the dom, use this function
   // make the router handle those links.
   router.updatePageLinks();
};

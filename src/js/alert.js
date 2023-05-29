export default class AlertDismissable {

  // Private properties
  
  #alertDismissableList = document.querySelectorAll('.alert--dismissable');

  #closeButtonHTML = `
    <button class="button button--icon-only">
        <span class="icon icon-close" aria-label="Close" aria-hidden="true">
    </button>
  `;

  // Private methods

  #handleAlertClose = (alertDismissable) => {
    return (event) => {
      event.preventDefault();
      alertDismissable.classList.add('dismissed');

      const dismissed = document.querySelector('.dismissed');

      // Handle animation end
      dismissed.addEventListener('animationend', () => {
        alertDismissable.remove();
      });
    }
  }

  // Public methods

  init() {
  
    this.#alertDismissableList.forEach((alertDismissable) => {
      // Insert close button
      alertDismissable.insertAdjacentHTML('afterbegin', this.#closeButtonHTML);

      // Get close button and add event listener
      const alertCloseButton = alertDismissable.querySelector('button');
      alertCloseButton.addEventListener('click', this.#handleAlertClose(alertDismissable));
    });
    
  }
}
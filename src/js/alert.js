//////////////////////////////////////////////
// Alert
//////////////////////////////////////////////

export default class Alert {

    #alertDismissableList = document.querySelectorAll('.alert--dismissable');

    #closeButtonHTML = `
        <button class="button button--icon-only">
            <span class="icon icon-close" aria-label="Close" aria-hidden="true">
        </button>
    `;

    closeAlert(event, alertDismissable) {
        event.preventDefault();

        alertDismissable.classList.add('dismissed');

        const dismissed = document.querySelector('.dismissed');

        dismissed.addEventListener('animationend', () => {
            alertDismissable.remove();
        });
    }

    init() {
        this.#alertDismissableList.forEach((alertDismissable) => {

            alertDismissable.insertAdjacentHTML('afterbegin', this.#closeButtonHTML);

            const alertCloseButton = alertDismissable.querySelector('button');

            alertCloseButton.addEventListener('click', (event) => {
                this.closeAlert(event, alertDismissable);
            });

        });
    }
}
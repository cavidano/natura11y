import { delegateEvent } from './utilities/eventDelegation';

//////////////////////////////////////////////
// A. Form Input 
//////////////////////////////////////////////

export default class FormInput {

  // Private properties
  #formEntryList = document.querySelectorAll('.form-entry');
  #invalidClasses = ['is-invalid'];
  #formSubmitAttempted = false;

  // Private methods

  #isEmpty(value = null) {
    return value === '';
  }

  #setInvalid(field) {
    const entryRoot = field.closest('.form-entry');
    entryRoot.classList.add(...this.#invalidClasses);
    field.setAttribute('aria-invalid', 'true');
  }

  #setValid(field) {
    const entryRoot = field.closest('.form-entry');
    entryRoot.classList.remove(...this.#invalidClasses);
    field.removeAttribute('aria-invalid');
  }

  #checkIfEmpty(field) {
    if (this.#isEmpty(field.value)) {
      this.#setInvalid(field);
      return true;
    } else {
      this.#setValid(field);
      return false;
    }
  }

  #handleFocusIn(activeTarget) {
    return (event) => {
      event.target.closest(activeTarget).classList.add('active');
    };
  }

  #handleFocusOut(activeTarget) {
    return (event) => {
      event.target.closest(activeTarget).classList.remove('active');
    };
  }

  #handleInputChange(formEntryInput, isRequired) {
    if (this.#formSubmitAttempted && isRequired) {
      console.log("Cool", formEntryInput, isRequired)
      this.#checkIfEmpty(formEntryInput);
    }

    if (formEntryInput.value !== '') {
      formEntryInput.closest('.form-entry').classList.add('has-value');
    } else {
      formEntryInput.closest('.form-entry').classList.remove('has-value');
    }
  }

  #handleClickOnInputText(event) {
    const clickTarget = event.target.tagName;
    const clickInput = event.target
      .closest('.form-entry__field__input')
      .querySelector('input');

    if (clickTarget === 'SPAN') {
      clickInput.focus();
    }

    if (clickTarget === 'BUTTON') {
      return;
    }
  }
  
  #handleFormInputs(formEntry) {
    const inputSelectors = ['input', 'select', 'textarea'];
    const formEntryInputList = formEntry.querySelectorAll(inputSelectors.join(','));

    const isRequired = formEntry.hasAttribute('data-required');

    formEntryInputList.forEach((formEntryInput) =>
      this.#processFormEntryInput(formEntryInput, isRequired)
    );
  }

  #processFormEntryInput(formEntryInput, isRequired) {
    const isInputText = formEntryInput
      .closest('.form-entry')
      .querySelector('.form-entry__field__input');

    const activeTarget = '.form-entry';

    if (isRequired) {
      formEntryInput.setAttribute('required', 'true');
      formEntryInput.setAttribute('aria-required', 'true');
    }

    // Directly handle change events
    formEntryInput.addEventListener('change', () =>
      this.#handleInputChange(formEntryInput, isRequired)
    );

    if (isInputText) {
      isInputText.addEventListener('click', this.#handleClickOnInputText);
    }

    // Apply event delegation for focus in and out
    delegateEvent(document, 'focusin', '.form-entry input, .form-entry select, .form-entry textarea', this.#handleFocusIn(activeTarget));
    delegateEvent(document, 'focusout', '.form-entry input, .form-entry select, .form-entry textarea', this.#handleFocusOut(activeTarget));

  }

  // Public methods

  init() {
    this.#formEntryList.forEach((formEntry) =>
      this.#handleFormInputs(formEntry)
    );
  }
}

//////////////////////////////////////////////
// B. Form Submission 
//////////////////////////////////////////////

export class FormSubmission {

  // Private properties
  #formList = document.querySelectorAll('form[novalidate]');
  #invalidClasses = ['is-invalid'];
  #formSubmitAttempted = false;

  // Private methods

  #isEmpty(value = null) {
    return value === '';
  }

  #setInvalid(field) {
    const entryRoot = field.closest('.form-entry');
    entryRoot.classList.add(...this.#invalidClasses);
    field.setAttribute('aria-invalid', 'true');
  }

  #setValid(field) {
    const entryRoot = field.closest('.form-entry');
    entryRoot.classList.remove(...this.#invalidClasses);
    field.removeAttribute('aria-invalid');
  }

  #checkIfEmpty(field) {
    if (this.#isEmpty(field.value)) {
      this.#setInvalid(field);
      return true;
    } else {
      this.#setValid(field);
      return false;
    }
  }

  #createErrorMessage(desc, inst) {
    if (desc === null) {
      desc = 'This field is Required';
    }
    return `
      <small class="form-entry__feedback" role="alert">
        <span class="icon icon-warn" aria-hidden="true"></span>
        <span class="message">
          <strong>${desc}</strong> ${inst !== undefined ? inst : ''}
        </span>
      </small>
    `;
  }

  #processFormErrors(formErrorsList, errorsArray) {
    formErrorsList.forEach((formError) => {
      const formErrorEntry = formError.closest('.form-entry');
      const formErrorEntryLabel = formErrorEntry.querySelector('.form-entry__field__label');

      formErrorEntry.classList.add('is-invalid');
      formError.setAttribute('aria-describedby', 'error-message');

      const formEntryFeedback = formErrorEntry.querySelector('.form-entry__feedback');
      const formEntryHelp = formErrorEntry.querySelector('.form-entry__help');

      let entryHelpText;

      if (formEntryHelp) {
        entryHelpText = formEntryHelp.innerHTML.toString();
      }

      const errorMessage = formErrorEntry.getAttribute('data-error-message');
      const errorFeedback = [errorMessage, entryHelpText];

      errorsArray.push(errorFeedback);

      if (formEntryFeedback === null) {
        formErrorEntryLabel.insertAdjacentHTML(
          'afterend',
          this.#createErrorMessage(errorMessage, entryHelpText)
        );
      }
    });
  }

  #scrollToFirstError(form) {
    const firstError = form.querySelector('[class*="alert"], [class*="invalid"]');

    if (firstError) {
      if (firstError.hasAttribute('data-alert')) {
        firstError.style.display = 'block';
      }
      const myScroll = firstError.offsetTop - 16;

      window.scrollTo({
        top: myScroll,
        behavior: 'smooth',
      });
    }
  }

  #handleFormSubmission(form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      this.#formSubmitAttempted = true;

      const errorsArray = [];

      // Collect form input fields
      const inputFields = form.querySelectorAll('input, select, textarea');
      
      // Bind #checkIfEmpty method to each field's input event
      inputFields.forEach((field) => {
        field.addEventListener('input', () => this.#checkIfEmpty(field));
      });

      // Perform validation checks only on required fields
      inputFields.forEach((field) => {
        // Check if the field is required
        if (field.hasAttribute('required')) {
          this.#checkIfEmpty(field);
        }
      });

      const formErrorsList = form.querySelectorAll(':invalid');

      this.#processFormErrors(formErrorsList, errorsArray);

      if (errorsArray.length > 0) {
        event.preventDefault();
      }

      this.#scrollToFirstError(form);
    });
  }

  // Public methods

  init() {
    this.#formList.forEach((form) => this.#handleFormSubmission(form));
  }
}

//////////////////////////////////////////////
// C. Form File Upload
//////////////////////////////////////////////

export class FormFileUpload {

  // Private properties
  #fileUploadList = document.querySelectorAll('.file-upload');

  // Private methods

  #handleFileChange(fileUpload) {
    return function (event) {
      const [file] = event.target.files;
      const { name: fileName, size } = file;
      const fileSize = (size / 1000).toFixed(2);

      const dataHTML = `
        <span class="file-upload__data">
          <span class="file-name">${fileName}</span>
          <span class="file-size">${fileSize} kb</span>
        </span>
      `;

      const fileUploadData = fileUpload.querySelector('.file-upload__data');

      if (fileUploadData) {
        fileUploadData.remove();
      }

      fileUpload.insertAdjacentHTML('beforeend', dataHTML);
    };
  }

  dragOver(event) {
    event.target.closest('.form-entry').classList.add('active');
  }

  dragOff(event) {
    event.target.closest('.form-entry').classList.remove('active');
  }

  dropped(event) {
    event.target.closest('.form-entry').classList.remove('active');
  }

  #handleFileUpload(fileUpload) {
    const fileUploadInput = fileUpload.querySelector('input[type="file"]');

    fileUploadInput.addEventListener(
      'change',
      this.#handleFileChange(fileUpload)
    );

    fileUpload.addEventListener('dragenter', this.dragOver.bind(this));
    fileUpload.addEventListener('dragleave', this.dragOff.bind(this));
    fileUpload.addEventListener('dragend', this.dragOff.bind(this));
    fileUpload.addEventListener('drop', this.dropped.bind(this));
  }

  // Public methods

  init() {
    this.#fileUploadList.forEach((fileUpload) =>
      this.#handleFileUpload(fileUpload)
    );
  }
}

//////////////////////////////////////////////
// A. SCSS
//////////////////////////////////////////////

import './scss/natura11y.scss';

//////////////////////////////////////////////
// B. JS
//////////////////////////////////////////////

import Accordion from './js/accordion';
import AlertDismissable from './js/alert';
import Button from './js/button';
import Collapse from './js/collapse';
import FormInput, { FormSubmission, FormFileUpload } from './js/form';
import Lightbox from './js/lightbox';
import Modal from './js/modal';
import Navigation from './js/navigation';
import Table from './js/table';
import Tab from './js/tab';

//////////////////////////////////////////////
// C. Class Instantiation
//////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {

  const accordion = new Accordion();
  accordion.init();

  const alertDismissable = new AlertDismissable();
  alertDismissable.init();

  const button = new Button();
  button.init();

  const collapse = new Collapse();
  collapse.init();

  const formInput = new FormInput();
  formInput.init();

  const formSubmission = new FormSubmission();
  formSubmission.init();
  
  const formFileUpload = new FormFileUpload();
  formFileUpload.init();

  const lightbox = new Lightbox();
  lightbox.init();

  const modal = new Modal();
  modal.init();

  const navigation = new Navigation();
  navigation.init();

  const table = new Table();
  table.init();

  const tab = new Tab();
  tab.init();

});
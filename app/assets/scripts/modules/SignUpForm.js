import $ from 'jquery';
import StateData from '../json/states.json';
import DesignFormTemplate from '../templates/design-sign-up-form.hbs';
import DevelopFormTemplate from '../templates/develop-sign-up-form.hbs';
import Handlebars from 'handlebars';
import createHistory from 'history/createBrowserHistory'

class SingUpForm {
  constructor () {
    this.$signUpFormButton = $('[data-sign-up-form]');
    this.$signUpformContainer = $('[data-sign-up-form-container]');

    this.history = createHistory()

    this._clickJobTitle();
  }

  _clickJobTitle() {
    this.$signUpFormButton.on('click', (e) => {
      let jobTitle = $(e.currentTarget).data('sign-up-form');

      this._handleJobTitleSelection(jobTitle);
      this._updateUrl(jobTitle);

    });
  }

  _handleJobTitleSelection(jobTitle) {
    switch (jobTitle) {
      case 'developer':
        this._showDeveloperForm();
        break;
      case 'designer':
        this._showDesignerForm();
        break;
      default:
        console.log( 'Bad selection');
    }

    return null;
  }

  _updateUrl(jobTitle) {
    this.history.push('/index.html?title=' + jobTitle);
  }

  _showDeveloperForm() {
    this.$signUpformContainer.html(DevelopFormTemplate(StateData));
  }

  _showDesignerForm() {
    this.$signUpformContainer.html(DesignFormTemplate(StateData));
  }

}

export default SingUpForm;


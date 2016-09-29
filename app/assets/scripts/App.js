import SVGInjector from './modules/SVGInjector';
import SignUpForm from './modules/SignUpForm';
import CareerSignup from './modules/apps/CareerSignup/Index';

if (Modernizr.svg) {
  new SVGInjector();
}

new SignUpForm();

if (document.getElementById('careerSignUpApp')) {
  new CareerSignup();
}

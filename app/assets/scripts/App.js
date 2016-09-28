import SVGInjector from './modules/SVGInjector';
import SignUpForm from './modules/SignUpForm';

if (Modernizr.svg) {
  new SVGInjector();
}

new SignUpForm();

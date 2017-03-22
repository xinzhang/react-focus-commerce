import React from 'react';
import {shallow} from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';
import {LoginPage} from './LoginPage';

test ('LoginPage validations after enter the values', () => {
  const props = {
    account: jest.fn()
  }

  const loginPage = shallow(<LoginPage {...props}/>);

  expect(loginPage.find('[name="submit"]').length).toBe(1);
  expect(loginPage.find('[name="submit"]').prop('disabled')).toBe(true);

  //add the values
  expect(loginPage.find('#input-email').length).toBe(1);
  expect(loginPage.find('#input-password').length).toBe(1);

  var inputEmail = loginPage.find('#input-email');
  inputEmail.value = 'abc@test.com';
  //ReactTestUtils.Simulate.change(inputEmail);
  var inputPassword = loginPage.find('#input-password');
  inputPassword.value = 'pasword';

  //expect(loginPage.find('[name="submit"]').prop('disabled')).toBe(false);

});

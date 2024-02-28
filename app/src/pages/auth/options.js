import { translate } from "../../language/lang"

export const loginFormData = {
  btnText: translate('Login'),
  inputs: [
    {
      name: 'id',
      label: translate('Mobile Number / Email Id'),
      icon: 'phone',
      type: 'tel',
      value: '',
    },
    {
      name: 'pwd',
      label: translate('Password'),
      icon: 'lock',
      type: 'password',
      value: '',
    },
  ]
}

export const registerFormData = {
  btnText: translate('Register Now'),
  inputs: [
    {
      name: 'id',
      label: translate('Mobile Number / Email Id'),
      icon: 'phone',
      type: 'tel',
      value: '',
    },
    {
      name: 'pwd',
      label: translate('Password'),
      icon: 'lock',
      type: 'password',
      value: '',
    },
    {
      name: 'c-pwd',
      label: translate('Confirm Password'),
      icon: 'lock',
      type: 'password',
      value: '',
    },
  ]
}

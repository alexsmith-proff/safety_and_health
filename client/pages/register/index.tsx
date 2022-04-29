import { useRouter } from 'next/router';
import React, { useState } from 'react'
import validator from 'validator';

import st from './register.module.scss';

const RegisterPage:React.FC = () => {
    const router = useRouter()
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const [isEmailAlert, setIsEmailAlert] = useState<boolean>(false);
    const [isPasswordAlert, setIsPasswordAlert] = useState<boolean>(false);
    const [isConfirmPasswordAlert, setIsConfirmPasswordAlert] = useState<boolean>(false);
    const [isFirstNameAlert, setIsFirstNameAlert] = useState<boolean>(false);
    const [isLastNameAlert, setIsLastNameAlert] = useState<boolean>(false);
    const [isMessage, setIsMessage] = useState<boolean>(false);

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)

        // setEmail(e.target.value);
    }
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }
    const handleChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }

    const handleChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    }
    const handleCloseClick = () => {
      router.push('/')
    }

    const handleRegisterClick = async() => {
        setIsEmailAlert(false)
        setIsPasswordAlert(false)
        setIsFirstNameAlert(false)
        setIsLastNameAlert(false)
        setIsConfirmPasswordAlert(false)
        if(!validator.isEmail(email)){
            setIsEmailAlert(true)
        }else if(password.length < 5){
            setIsPasswordAlert(true)
        }else if(password != confirmPassword) {
            setIsConfirmPasswordAlert(true)
        }else if(firstName == '') {
            setIsFirstNameAlert(true)
        }else if(lastName == '') {
            setIsLastNameAlert(true)
        }else{
          try {
            // const response = await allEndpoints.auth.registration({
            //   "email": email,
            //   "password": password,
            //   "firstName": firstName,
            //   "lastName": lastName
            // })
            // navigate('/login')          
          } catch (e) {
            if(e.response.status === 422){
              console.log('status 422')
            }
            setIsMessage(true)
          }           
        } 
    }

  return (
    <div className={st.freespace}>
      <div className={st.form}>
        <div className={st.titlewrap}>
          <div className={st.title}>Регистрация</div>
          <button 
            className={st.loginbtn}
            onClick={() => router.push('/login')}
            >
            Войти
          </button>
        </div>
        <input className={st.input} type="text" value={email} onChange={handleChangeEmail} placeholder='E-mail' />
        <input className={st.input} type="password" value={password} onChange={handleChangePassword} placeholder='Пароль' />
        <input className={st.input} type="password" value={confirmPassword} onChange={handleChangeConfirmPassword} placeholder='Повторите пароль' />
        <input className={st.input} type="text" value={firstName} onChange={handleChangeFirstName} placeholder='Введите имя' />
        <input className={st.input} type="text" value={lastName} onChange={handleChangeLastName} placeholder='Введите фамилию' />
        <button className={st.registerbtn} onClick={handleRegisterClick}>Регистрация</button>
        {isMessage && <div className={st.message}>Ошибка регистрации</div>}

        <div className={st.close} onClick={handleCloseClick}>X</div>

        {isEmailAlert && <div className={st.alert + ' ' + st.mailalert}>Вы ввели некорректный email</div>}
        {isPasswordAlert && <div className={st.alert + ' ' + st.passwordalert}>Пароль должен содержать более 5 символов </div>}
        {isConfirmPasswordAlert && <div className={st.alert + ' ' + st.confirmpasswordalert}>Пароль не совпадает</div>}
        {isFirstNameAlert && <div className={st.alert + ' ' + st.firstnamealert}>Введите имя</div>}
        {isLastNameAlert && <div className={st.alert + ' ' + st.lastnamealert}>Введите фамилию</div>}
      </div>
    </div>
  )
}

export default RegisterPage
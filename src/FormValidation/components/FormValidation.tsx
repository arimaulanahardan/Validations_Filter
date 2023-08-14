import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  validateEmail,
  validateName,
  validatePassword,
  validateUserName,
} from "../utils/handleRegex";

const FormValidations: React.FC = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [userNameErr, setUserNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userNameSpecialCharErr, setUserNameSpecialCharErr] = useState(false);
  const [nameSpecialCharErr, setnameSpecialCharErr] = useState(false);
  const [emailSpecialCharErr, setEmailSpecialCharErr] = useState(false);
  const [pwdSpecialCharErr, setPwdSpecialCharErr] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);

    const containsSpecialChar = !validateName.test(newName);
    setnameSpecialCharErr(containsSpecialChar);

    const isValidLength = newName.length >= 3;

    if (isValidLength) {
      setNameErr(false);
    } else {
      setNameErr(true);
    }
  };

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUserName = e.target.value;
    setUserName(newUserName);

    const containsSpecialChar = !validateUserName.test(newUserName);
    setUserNameSpecialCharErr(containsSpecialChar);

    const isValidLength = newUserName.length >= 3;

    if (isValidLength) {
      setUserNameErr(false);
    } else {
      setUserNameErr(true);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const isValidEmail = !validateEmail.test(newEmail);
    setEmailSpecialCharErr(isValidEmail);

    const isValidLength = newEmail.length >= 3;

    if (isValidLength) {
      setEmailErr(false);
    } else {
      setEmailErr(true);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const isValidPassword = !validatePassword.test(newPassword);
    setPwdSpecialCharErr(isValidPassword);

    const isValidLength = newPassword.length >= 8;
    if (isValidLength) {
      setPwdError(false);
    } else {
      setPwdError(true);
    }
  };

  const validateAndAlert = (e: React.FormEvent) => {
    e.preventDefault();

    const isNameValid = name.length >= 3 && validateName.test(name);
    const isUserNameValid =
      userName.length >= 3 && validateUserName.test(userName);
    const isEmailValid = validateEmail.test(email);
    const isPasswordValid =
      password.length >= 8 && validatePassword.test(password);
    const areRequiredFieldsFilled = name && userName && email && password;

    setNameErr(!isNameValid);
    setUserNameErr(!isUserNameValid);
    setEmailErr(!isEmailValid);
    setPwdError(!isPasswordValid);

    if (
      isNameValid &&
      isUserNameValid &&
      isEmailValid &&
      isPasswordValid &&
      areRequiredFieldsFilled
    ) {
      alert(
        "Registration Successful!\n" +
          `Name: ${name}\n` +
          `User name: ${userName}\n` +
          `Email: ${email}`
      );
    }
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="w-96 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <div className="space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
            Create an account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your name"
                required
              />
              {nameErr && (
                <p className="text-red-600 italic mb-1 text-sm">
                  must be more than 3 letters
                </p>
              )}
              {nameSpecialCharErr && (
                <p className="text-red-600 italic mb-2 text-sm">
                  must not contain special characters and number
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={userName}
                onChange={handleUserNameChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              {userNameErr && (
                <p className="text-red-600 italic text-sm">
                  must be more than 3 letters
                </p>
              )}
              {userNameSpecialCharErr && (
                <p className="text-red-600 italic mb-2 text-sm">
                  shouldn't contain special characters except (.@_)
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              {emailErr && (
                <p className="text-red-600 italic mb-1 text-sm">
                  email is invalid
                </p>
              )}
              {emailSpecialCharErr && (
                <p className="text-red-600 italic mb-2 text-sm">
                  shouldn't contain special characters except (.@_)
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={handlePasswordChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}{" "}
                </button>
              </div>
              {pwdError && (
                <p className="text-red-600 italic mb-1 text-sm">
                  must be more than 8 letters
                </p>
              )}
              {pwdSpecialCharErr && (
                <p className="text-red-600 italic mb-2 text-sm">
                    must contain at least one special character
                </p>
              )}
            </div>
            <div className="text-center p-2">
              <button
                type="submit"
                className="w-5/6 text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={validateAndAlert}
              >
                Create an account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormValidations;

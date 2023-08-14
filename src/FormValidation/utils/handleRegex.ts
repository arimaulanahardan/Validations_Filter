export const validateName = new RegExp("^[a-zA-Z ]+$");

export const validateUserName = new RegExp("^[a-zA-Z0-9_@.]+$");

export const validateEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

export const validatePassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$");



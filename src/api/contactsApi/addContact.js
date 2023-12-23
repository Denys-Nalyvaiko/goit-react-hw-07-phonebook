import { API } from './apiConstants';
import { instance } from './defaultContactsInstance';

export const addContact = async contact => {
  console.log(contact);
  try {
    const data = await instance.post(API.ENDPOINT.CONTACTS, contact);
    console.log('api: ', data);
    return data;
  } catch (error) {
    console.log('error: ', error);
  }
};

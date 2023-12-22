import { API } from './apiConstants';
import { instance } from './defaultContactsInstance';

export const addContact = async contact => {
  const data = await instance.post(API.ENDPOINT.CONTACTS, contact);
  return data;
};

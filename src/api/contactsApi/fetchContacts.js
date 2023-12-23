import { API } from './apiConstants';
import { instance } from './defaultContactsInstance';

export const fetchContacts = async () => {
  const data = await instance.get(API.ENDPOINT.CONTACTS);
  return data;
};

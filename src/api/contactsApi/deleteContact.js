import { API } from './apiConstants';
import { instance } from './defaultContactsInstance';

export const deleteContact = async id => {
  const data = await instance.delete(`${API.ENDPOINT.CONTACTS}/${id}`);
  return data;
};

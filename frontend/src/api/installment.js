import axios from "axios";
import { BASE_URL } from "./config";

export function addInstallment(data) {
  return axios
    .post(`${BASE_URL}/installments`, {
        inst_ID: data.inst_ID,
        loan_ID: data.loan_ID,
        amount: data.amount,
        due_date: data.due_date,
        is_paid: data.is_paid,
        trans_ID: data.trans_ID,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => Promise.reject("Failed to add installment!"));
}

export const getInstallments = () => {
  return axios
    .get(`${BASE_URL}/installments`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => Promise.reject("Failed to get installments list!"));
};

export const getInstallment = (id) => {
  return axios
    .get(`${BASE_URL}/installments/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => Promise.reject("Failed to get installments with id =" + id + "!"));
};

export const updateInstallment = (data) => {
  console.log("update installment", { data });
  return axios
    .put(`${BASE_URL}/installments/${data.inst_ID}`, data)
    .then((response) => {
      return response.data;
    })
    .catch((err) =>
      Promise.reject("Failed to update intallment with id = " + data.inst_ID + "!")
    );
};

export const deleteInstallment = (id) => {
  console.log("update installment", { id });
  return axios
    .delete(`${BASE_URL}/installments/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) =>
      Promise.reject("Failed to delete installment with id = " + id + "!")
    );
};

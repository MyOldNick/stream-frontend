//Store
import { makeAutoObservable } from "mobx";
//Api
import { API } from "../constants/API";

class User {
  user = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  async authUser(data) {
    const json = JSON.stringify(data);

    const res = await fetch(`${API}auth`, {
      method: "POST",
      body: json,
      headers: {
        'Content-Type': 'application/json'
      },
    });

    const info = await res.json();

    if (info) {
      this.user = info

      return true
    }
  }

  async createUser(data) {
    const json = JSON.stringify(data);

    const { status } = await fetch(`${API}register`, {
      method: "POST",
      body: json,
      headers: {
        'Content-Type': 'application/json'
      },
    });

    return status
  }
}

export default new User();

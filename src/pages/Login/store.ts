import axios from 'axios';

export default {
  result: {},
  loginQuest: async (opt: object) => {
    let result = await axios.post("/login", {...opt})
    this.result = result;
  }

}

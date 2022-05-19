import { AxiosResponse } from 'axios';

import API from 'api';

import { DUMMY_END_POINT } from './endPoints';

class DemoService {
  static async demoCall(data: string): Promise<AxiosResponse> {
    try {
      const res = await API.post(DUMMY_END_POINT, data);
      return res.data ?? data;
    } catch (error) {
      throw error;
    }
  }
}

export default DemoService;

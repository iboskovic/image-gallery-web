import { BaseService } from "./baseService";

export class ImageService extends BaseService {
  // get images
  async getImages(searchParam: string): Promise<any> {
    const res = await this.instance.get(`&page=1&per_page=50&q=${searchParam}`);
    return res.data;
  }
}

import { ResData } from "../types/ResData";
import { BaseService } from "./baseService";

const { REACT_APP_KEY } = process.env;

export class ImageService extends BaseService {
  // get images
  async getImages(searchParam: string): Promise<ResData> {
    const res = await this.instance.get(
      `?key=${REACT_APP_KEY}&page=1&per_page=50&q=${searchParam}`
    );
    return res.data;
  }
}

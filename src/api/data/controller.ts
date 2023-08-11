import { Request, Response } from "express";
import {
  service_find,
  service_find_one,
  service_create,
  service_remove,
  service_update,
} from "./service";
export const getall = async (req: any, res: Response) => {
  try {
    const results = await service_find({}, {});
    const data: any = {};
    for (let index = 0; index < results.length; index++) {
      const el = results[index];
      data[el.type] = el;
    }
    return res.status(200).json({
      success: true,
      message: "Амжилттай",
      data: data,
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: error,
    });
  }
};

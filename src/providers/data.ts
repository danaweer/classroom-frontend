import { DataProvider, BaseRecord, GetListParams, GetListResponse } from "@refinedev/core";
import { MOCK_SUBJECTS } from "@/providers/constants";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({ resource }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource === "subjects") {
      return { data: MOCK_SUBJECTS as unknown as TData[], total: MOCK_SUBJECTS.length };
    }
    
    return {
      data: [],
      total: 0
    }
  },

  getOne: async () => {throw new Error("This function is not implemented yet")},
  create: async () => {throw new Error("This function is not implemented yet")},
  update: async () => {throw new Error("This function is not implemented yet")},
  deleteOne: async () => {throw new Error("This function is not implemented yet")},

  getApiUrl: () => '',
}

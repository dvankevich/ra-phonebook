// dataProvider.ts
import {
  fetchUtils,
  DataProvider,
  GetListParams,
  CreateParams,
  UpdateParams,
  DeleteParams,
} from "react-admin";

const apiUrl = "https://connections-api.goit.global";
const httpClient = fetchUtils.fetchJson;

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return new Headers({
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  });
};

export const dataProvider: DataProvider = {
  getList: async (resource: string, params: GetListParams) => {
    const { json } = await httpClient(`${apiUrl}/${resource}`, {
      headers: getAuthHeaders(),
    });
    return {
      data: json,
      total: json.length,
    };
  },

  getOne: async (resource: string, params: { id: string }) => {
    const { json } = await httpClient(`${apiUrl}/${resource}`, {
      headers: getAuthHeaders(),
    });
    const contact = json.find((item: { id: string }) => item.id === params.id);
    if (!contact) {
      throw new Error(`Contact with id ${params.id} not found`);
    }
    return { data: contact };
  },

  create: async (resource: string, params: CreateParams) => {
    const { json } = await httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
      headers: getAuthHeaders(),
    });
    return { data: { ...json } };
  },

  update: async (resource: string, params: UpdateParams) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(params.data),
      headers: getAuthHeaders(),
    });
    return { data: { ...json } };
  },

  delete: async (resource: string, params: DeleteParams) => {
    await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return { data: { id: params.id } };
  },

  getMany: async (resource: string, params: { ids: string[] }) => {
    const { json } = await httpClient(
      `${apiUrl}/${resource}?ids=${params.ids.join(",")}`,
      { headers: getAuthHeaders() },
    );
    return { data: json };
  },
};

//export default dataProvider;

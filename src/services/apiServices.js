import axios from "axios";

const apiAxios = async () => {
    return axios.create({
        baseURL: 'https://ajiji-api.iosx.in/',
    });
}

export const addNewItem = async (payload) => {
    try {
        const axiosInfo = await apiAxios()

        const { data = [] } = await axiosInfo.post(
            `api/v1/card/add`,
            // {
            //     name,
            //     description,
            //     image
            // },
            payload,
            {
                headers: { 
                    'Content-Type': 'application/json', 
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFqaWppLmNvbSIsImZpcnN0TmFtZSI6IkFkbWluIiwibGFzdE5hbWUiOiJBamlqaSIsInJvbGVzIjp7Il9pZCI6IjY0NmI2YjEzNDMzMjNkNGM0ODBmMjZjNyIsImNvZGUiOiJhZG1pbiIsIm5hbWUiOiJhZG1pbiJ9LCJjdXJyZW50RGF5IjoiIiwiaWF0IjoxNjg4MjQxNjIyLCJleHAiOjE2ODg4NDY0MjJ9.CzBrMfQmWb4Ivgf-zYPq6GJ6s42C0Ok6sEsenoo3rc4'
                  },
            }
        );
        return data;
    } catch (error) {
        throw Error(error.response.statusText);
    }
};

export const updateItembyid = async (payload) => {
    const { id } = payload

    try {
        const axiosInfo = await apiAxios()
        const { data = [] } = await axiosInfo.put(
            `api/v1/card/update`,
            payload,
            {
                headers: { 
                    'Content-Type': 'application/json', 
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFqaWppLmNvbSIsImZpcnN0TmFtZSI6IkFkbWluIiwibGFzdE5hbWUiOiJBamlqaSIsInJvbGVzIjp7Il9pZCI6IjY0NmI2YjEzNDMzMjNkNGM0ODBmMjZjNyIsImNvZGUiOiJhZG1pbiIsIm5hbWUiOiJhZG1pbiJ9LCJjdXJyZW50RGF5IjoiIiwiaWF0IjoxNjg4MjQxNjIyLCJleHAiOjE2ODg4NDY0MjJ9.CzBrMfQmWb4Ivgf-zYPq6GJ6s42C0Ok6sEsenoo3rc4'
                  },
            }
        );
        return data;
    } catch (error) {
        throw Error(error.response.statusText);
    }
};
export const deleteItembyid = async ({ id }) => {
    try {
        const axiosInfo = await apiAxios()
        const { data = [] } = await axiosInfo.delete(
            `api/v1/card/delete/${id}`,

            {
                headers: { 
                    'Content-Type': 'application/json', 
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFqaWppLmNvbSIsImZpcnN0TmFtZSI6IkFkbWluIiwibGFzdE5hbWUiOiJBamlqaSIsInJvbGVzIjp7Il9pZCI6IjY0NmI2YjEzNDMzMjNkNGM0ODBmMjZjNyIsImNvZGUiOiJhZG1pbiIsIm5hbWUiOiJhZG1pbiJ9LCJjdXJyZW50RGF5IjoiIiwiaWF0IjoxNjg4MjQxNjIyLCJleHAiOjE2ODg4NDY0MjJ9.CzBrMfQmWb4Ivgf-zYPq6GJ6s42C0Ok6sEsenoo3rc4'
                  },
            }
        );
        return data;
    } catch (error) {
        throw Error(error.response.statusText);
    }
};


export const changeItemStatusbyid = async (payload) => {
    const { id } = payload

    try {
        const axiosInfo = await apiAxios()
        const { data = [] } = await axiosInfo.put(
            `api/v1/card/status-change`,
            payload,
            {
                headers: { 
                    'Content-Type': 'application/json', 
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFqaWppLmNvbSIsImZpcnN0TmFtZSI6IkFkbWluIiwibGFzdE5hbWUiOiJBamlqaSIsInJvbGVzIjp7Il9pZCI6IjY0NmI2YjEzNDMzMjNkNGM0ODBmMjZjNyIsImNvZGUiOiJhZG1pbiIsIm5hbWUiOiJhZG1pbiJ9LCJjdXJyZW50RGF5IjoiIiwiaWF0IjoxNjg4MjQxNjIyLCJleHAiOjE2ODg4NDY0MjJ9.CzBrMfQmWb4Ivgf-zYPq6GJ6s42C0Ok6sEsenoo3rc4'
                  },
            }
        );
        return data;
    } catch (error) {
        throw Error(error.response.statusText);
    }
};


export const fetchItems = async () => {
    try {
        const axiosInfo = await apiAxios()
        const { data = [] } = await axiosInfo.get(`api/v1/card/list`,
            {
                headers: { 
                    'Content-Type': 'application/json', 
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFqaWppLmNvbSIsImZpcnN0TmFtZSI6IkFkbWluIiwibGFzdE5hbWUiOiJBamlqaSIsInJvbGVzIjp7Il9pZCI6IjY0NmI2YjEzNDMzMjNkNGM0ODBmMjZjNyIsImNvZGUiOiJhZG1pbiIsIm5hbWUiOiJhZG1pbiJ9LCJjdXJyZW50RGF5IjoiIiwiaWF0IjoxNjg4MjQxNjIyLCJleHAiOjE2ODg4NDY0MjJ9.CzBrMfQmWb4Ivgf-zYPq6GJ6s42C0Ok6sEsenoo3rc4'
                  },
            }
        );
        return data;
    } catch (error) {
        throw Error("Unable to fetch Items");
    }
};

export const fetchChallenges = async () => {
    try {
        const axiosInfo = await apiAxios()
        const { data = [] } = await axiosInfo.get(`api/v1/challenges/list`,
            {
                headers: { 
                    'Content-Type': 'application/json', 
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFqaWppLmNvbSIsImZpcnN0TmFtZSI6IkFkbWluIiwibGFzdE5hbWUiOiJBamlqaSIsInJvbGVzIjp7Il9pZCI6IjY0NmI2YjEzNDMzMjNkNGM0ODBmMjZjNyIsImNvZGUiOiJhZG1pbiIsIm5hbWUiOiJhZG1pbiJ9LCJjdXJyZW50RGF5IjoiIiwiaWF0IjoxNjg4MjQxNjIyLCJleHAiOjE2ODg4NDY0MjJ9.CzBrMfQmWb4Ivgf-zYPq6GJ6s42C0Ok6sEsenoo3rc4'
                  },
            }
        );
        return data;
    } catch (error) {
        throw Error("Unable to fetch Challenges");
    }
};





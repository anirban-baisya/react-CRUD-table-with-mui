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
            `create/product`,
            // {
            //     name,
            //     description,
            //     attributes,
            //     price,
            //     salePrice,
            //     stock,
            //     image
            // },
            payload,
            {
                headers: {},
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
            `update/productbyid/${id}`,
            payload,
            {
                headers: {},
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
            `delete/productbyid/${id}`,

            {
                headers: {},
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
                    'accessToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFqaWppLmNvbSIsImZpcnN0TmFtZSI6IkFkbWluIiwibGFzdE5hbWUiOiJBamlqaSIsInJvbGVzIjp7Il9pZCI6IjY0NmI2YjEzNDMzMjNkNGM0ODBmMjZjNyIsImNvZGUiOiJhZG1pbiIsIm5hbWUiOiJhZG1pbiJ9LCJjdXJyZW50RGF5IjoiIiwiaWF0IjoxNjg4MjAzMTUzLCJleHAiOjE2ODg4MDc5NTN9.kZvrgQQbwfTXqmbb0eY3hu4efs-73IIpf7wXS8qYQ1A'
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
                    'accessToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFqaWppLmNvbSIsImZpcnN0TmFtZSI6IkFkbWluIiwibGFzdE5hbWUiOiJBamlqaSIsInJvbGVzIjp7Il9pZCI6IjY0NmI2YjEzNDMzMjNkNGM0ODBmMjZjNyIsImNvZGUiOiJhZG1pbiIsIm5hbWUiOiJhZG1pbiJ9LCJjdXJyZW50RGF5IjoiIiwiaWF0IjoxNjg4MjAzMTUzLCJleHAiOjE2ODg4MDc5NTN9.kZvrgQQbwfTXqmbb0eY3hu4efs-73IIpf7wXS8qYQ1A'
                },
            }
        );
        return data;
    } catch (error) {
        throw Error("Unable to fetch Challenges");
    }
};





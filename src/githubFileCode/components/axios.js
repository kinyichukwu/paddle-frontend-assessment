import axios from "axios"

export const axiosOne = axios.create({
    baseURL: "https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc"
})

export const getPostsPage = async (pageParam = 1) => {
    const response = await axiosOne.get(`/posts?_page=${pageParam}`)
    return response.data
}
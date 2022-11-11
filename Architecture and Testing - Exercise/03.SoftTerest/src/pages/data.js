import * as api from '../api.js'

const endpoint = {
    'getAllIdea': 'data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    'createIdea': 'data/ideas',
    "ideaById": "data/ideas/"
}

export async function getAllIdea(){
    return api.get(endpoint.getAllIdea)
}
export async function createIdea(data){
    return api.post(endpoint.createIdea,data)
}
export async function getIdeaById(id){
    return api.get(endpoint.ideaById + id);
}
export async function deleteById(id) {
    return api.delete(endpoint.ideaById + id)
}
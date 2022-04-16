//example api request: replace with your API request here in folder API
import axios from 'axios'

// Getapi without token

export const getApi = async (url, data) => {
  console.log(url, data)
  try {
    let response = await axios.get(url + data)
    console.log(response, "response")
    if (response.status == 200) {
      return Promise.resolve({
        status: 'success',
        data: response.data
      })
    }
  } catch (e) {
    return Promise.reject(e)
  }
}

export const getApiWithToken = async (url, data, token) => {
  console.log(url, data)
  try {
    let response = await axios.get(url + data, {
      headers: {
        "Authorization":`Bearer ${token}`
      }
     })
    console.log(response, "response")
    if (response.status == 200) {
      return Promise.resolve({
        status: 'success',
        data: response.data
      })
    }
  } catch (e) {
    return Promise.reject(e)
  }
}


export const postApi = async (url, data) => {
  console.log(url, data)
  try {
    let response = await axios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json"
      }
    })
    console.log(response, "response")
    console.log(response.status, "response.status")

    if (response.status == 200) {
      return Promise.resolve({
        status: 'success',
        data: response.data
      })
    }
  } catch (e) {
    console.log(e);
    return Promise.reject(e)
  }
}

// PostApi with token
export const PostApi = async (url, data,bearertoken) => {
  console.log(url, data)
  try {
    let response = await axios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        "Authorization":`Bearer ${bearertoken}`
      }
    })
    console.log(response, "response")
    if (response.status == 200) {
      return Promise.resolve({
        status: 'success',
        data: response.data
      })
    }
  } catch (e) {
    return Promise.reject(e)
  }
}

// PostApi without token

export const PostApiWithOutToken = async (url, data) => {
  console.log(url, data)
  try {
    let response = await axios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json"
      }
    })


    if (response.status == 200) {
      return Promise.resolve({
        status: 'success',
        data: response.data
      })
    }
  } catch (e) {
    console.log(e);
    return Promise.reject(e)
  }
}


// Putapi with token


export const PutApi = async (url, data,bearertoken) => {
  console.log(url, data)
  try {
    let response = await axios.put(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        "Authorization":`Bearer ${bearertoken}`
      }
    })
    console.log(response, "response")
    if (response.status == 200) {
      return Promise.resolve({
        status: 'success',
        data: response.data
      })
    }
  } catch (e) {
    return Promise.reject(e)
  }
}


// Delete api with token
export const DeleteApi= async (url, data,bearertoken) => {
  console.log(url, data)
  try {
    let response = await axios.delete(url, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        "Authorization":`Bearer ${bearertoken}`
      },data
    })
    console.log(response, "response")
    if (response.status == 200) {
      return Promise.resolve({
        status: 'success',
        data: response.data
      })
    }
  } catch (e) {
    return Promise.reject(e)
  }
}
import http from './http-common-servicecall'

class ServiceCall{
    
    userSignUp(userDetails){
        return http.post("/userSignUp", userDetails, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }


    userSignIn(userLoginDetails){
        return http.post("/userSignIn", userLoginDetails, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }

    getProductDetails(id){
        return http.get("/product/"+id);
       
    }

    upateProductDetails(id, product){
        console.log(product)
        return http.post("/product/"+id, product, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
       
    }
}

export default new ServiceCall();
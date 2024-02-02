export const GetLocation = async() => {

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => { 
            console.log(position);
            resolve(position.coords);
        }, (err) => {
            reject(err);
        });
      });

}
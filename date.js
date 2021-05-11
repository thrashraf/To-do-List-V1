




module.exports.getDay = function (){

    const today = new Date()

    const option = {

        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    return day = today.toLocaleDateString('en-US',option);

    
}
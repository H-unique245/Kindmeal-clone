import axios from 'axios';

const getMealData =(page)=>{
    return axios(`https://www.kindmeal.my/resources/kindmeal_mobile_api-v2.8.php?action=deal_list`,{
        params:{
            page:page,
        }
    } )
}

// Deals details page api :
// https://www.kindmeal.my/resources/kindmeal_mobile_api-v2.7.php?action=deal_list&dealkeyword=BINGS&deallocation=724

// https://www.kindmeal.my/resources/kindmeal_mobile_api-v2.7.php?action=about

//https://www.kindmeal.my/resources/kindmeal_mobile_api-v2.7.php?action=help
const getMoments =(page)=>{
    return axios(`https://www.kindmeal.my/resources/kindmeal_mobile_api-v2.7.php?action=moment_list`,{
        params:{
            page:page,
        }
    } )
}
export {getMealData,getMoments};
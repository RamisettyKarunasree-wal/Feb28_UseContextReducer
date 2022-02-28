const ManageHobbies = (state, action) => {
  if (action.type == "add") {
    return [...state,action.hobbyVal];
  }
  if(action.type == "removeAll"){
    return [];
  }
  if(action.type=="removeHobby"){
      let modifiedState=state.filter((val,index)=>{
          if(index==action.ind){
              return false;
          }
          else{
              return true;
          }
      })
      return modifiedState;
  }
};
export default ManageHobbies;

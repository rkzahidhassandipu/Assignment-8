const getStoreLawyer = () => {
    const storeLawyer = localStorage.getItem("Law");
    console.log(storeLawyer)
    if (storeLawyer) {
      return JSON.parse(storeLawyer);
    } else {
      return [];
    }
  };
  
  const addToStoreDB = (id) => {
    const storeLawyerData = getStoreLawyer();
    if (storeLawyerData.includes(id)) {
      alert()
    }
    else{
      storeLawyerData.push(id)
      // console.log(storeLawyerData)
      const data = JSON.stringify(storeLawyerData);
      localStorage.setItem("Law", data)
    }
  };
  
  const removeFromStoreDB = (id) => {
    const storeLawyerData = getStoreLawyer();
    const updatedData = storeLawyerData.filter(item => item !== id);
    localStorage.setItem("Law", JSON.stringify(updatedData));
  };
  
  export {
    addToStoreDB,
    getStoreLawyer,
    removeFromStoreDB
  };
  
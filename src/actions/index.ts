export type fieldChangedType = typeof fieldChanged;
export const fieldChanged = (data) => {
  return {
    type: "FIELD_CHANGED",
    payload: data
  };
};

export type addDataType = typeof addData;
export const addData = () => {
  return {
    type: "ADD_DATA"
  };
};

export type removeDataType = typeof removeData;
export const removeData = post => {
  return {
    type: "REMOVE_DATA",
    data: post
  };
};

export type updateDataType = typeof updateData;
export const updateData = () => {
  return {
    type: "UPDATE_DATA"
  };
};

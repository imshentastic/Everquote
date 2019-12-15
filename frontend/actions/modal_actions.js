export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const CLOSE_CREATE_NOTEBOOKS_MODAL = 'CLOSE_CREATE_NOTEBOOKS_MODAL';

export const openModal = modal => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
export const closeCreateNotebooksModal = modal => {
  return {
    type: CLOSE_CREATE_NOTEBOOKS_MODAL,
    modal
  };
};

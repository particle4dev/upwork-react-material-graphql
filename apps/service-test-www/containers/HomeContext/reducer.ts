import { handleActions } from 'redux-actions';
import {
  UPDATE_DETAIL_DIALOG,
  ADD_NEW_ROW,
  REMOVE_ROW,
  SET_SELECT_ALL,
  UPDATE_DATA_ID,
  UPDATE_PREVIEW_DIALOG
} from './constants';
import tableData from './tabledata';

// The initial state of the App
export const initialState = {
  detailDialogStatus: false,
  isSelectALl: false,
  editAction: [],
  tableData,
  selectDataId: null,
  previewDialog: {
    open: false,
    position: null
  }
};

export default handleActions(
  {
    [UPDATE_DETAIL_DIALOG]: (state, { payload }) => {
      const { status } = payload;
      return Object.assign({}, state, {
        detailDialogStatus: status
      });
    },

    [SET_SELECT_ALL]: (state, { payload }) => {
      const { value } = payload;
      return Object.assign({}, state, {
        isSelectALl: value
      });
    },

    [ADD_NEW_ROW]: (state, { payload }) => {
      const { row } = payload;
      const { editAction } = state;

      if(editAction.indexOf(row) !== -1) {
        return state;
      }

      // Add new it from array
      return Object.assign({}, state, {
        editAction: [
          ...editAction,
          row
        ]
      });
    },

    [REMOVE_ROW]: (state, { payload }) => {
      const { row } = payload;
      const { editAction } = state;

      if(editAction.indexOf(row) === -1) {
        return state;
      }

      // remove it from array
      const newArray = editAction.filter(e => e !== row);
      return Object.assign({}, state, {
        editAction: [
          ...newArray,
        ]
      });
    },

    [UPDATE_DATA_ID]: (state, { payload }) => {
      const { id } = payload;

      if(id === state.selectDataId) {
        return state;
      }

      return Object.assign({}, state, {
        selectDataId: id
      });
    },

    [UPDATE_PREVIEW_DIALOG]: (state, { payload }) => {
      const { open, position } = payload;
      const previewDialog = {
        ...state.previewDialog,
        open
      };

      if(position) {
        previewDialog.position = position;
      }

      return Object.assign({}, state, {
        previewDialog
      });
    },
  },
  initialState
);

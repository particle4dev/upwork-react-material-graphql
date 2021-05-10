import { createAction } from 'redux-actions';
import {
  UPDATE_DETAIL_DIALOG,
  ADD_NEW_ROW,
  REMOVE_ROW,
  SET_SELECT_ALL,
  UPDATE_DATA_ID,
  UPDATE_PREVIEW_DIALOG,
} from './constants';

export const updateDetailDialog = createAction(UPDATE_DETAIL_DIALOG, (status: boolean) => ({
  status
}));

export const addNewRow = createAction(ADD_NEW_ROW, (row: string) => ({
  row
}));

export const removeRow = createAction(REMOVE_ROW, (row: string) => ({
  row
}));

export const setSelectAll = createAction(SET_SELECT_ALL, (value: boolean) => ({
  value
}));

export const updateDataId = createAction(UPDATE_DATA_ID, (id: string | null) => ({
  id
}));

export const updatePreviewDialog = createAction(UPDATE_PREVIEW_DIALOG, (open: boolean, position: HTMLElement | null) => ({
  open,
  position
}));

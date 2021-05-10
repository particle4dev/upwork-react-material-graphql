import {
  updateDetailDialog
} from '../actions';
import { UPDATE_DETAIL_DIALOG } from '../constants';

describe('containers/HomeContext/actions/updateDetailDialog', () => {
  const status = true;
  it('should updateDetailDialog should create updateDetailDialog action', () => {
    expect(updateDetailDialog(status)).toMatchSnapshot();
  });

  it('should return the correct type and the passed name', () => {
    const expectedResult = {
      type: UPDATE_DETAIL_DIALOG,
      payload: {
        status
      }
    };

    expect(updateDetailDialog(status)).toEqual(expectedResult);
  });
});

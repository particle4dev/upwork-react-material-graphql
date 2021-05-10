export default function detectBreakpoints(init = []) {
  const list = init;
  const key = {};

  return {
    push: (id: string, num: number) => {
      const length = list.length;
      let lastItem = 0;
      if(length > 0) {
        lastItem = list[length - 1];
      }
      key[id] = true;
      return list.push(num + lastItem);
    },

    hasKey: (id: string): boolean => {
      return !!key[id];
    },

    detect: (num: number) => {
      // FIXME: why we need to optimize this
      const length = list.length;
      let i = 0;
      for(; i < length; i+= 1) {
        if(list[i] > num) {
          break;
        }
      }
      // 20 is "+2" tag witdth
      if(num + 20 < list[i]) {
        i = i - 1;
      }

      if(i <= 0) {
        i = 1;
      }
      return i;
    },

    showList: () => {
      return list;
    },

    showKey: () => {
      return key;
    }
  };
}

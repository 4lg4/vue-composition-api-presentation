import {reactive, computed} from "@vue/composition-api";

export default ()=> {
  const state = reactive({
    inputValue: 'test',
    count: 0,
    double: computed(() => state.count * 2)
  });

  return state;
}

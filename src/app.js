import onChange from 'on-change';
import courses from './data';
import View from './View';
import filter from './filter';

export default () => {
  const state = {
      min: null,
      max: null,
    result: [],
    items: courses,
  };

  const view = new View();
  view.init();

  const watchedState = onChange(
    state,
    () => {
      const { items, max, min } = state;
      state.result = filter(items, [min, max]);
      view.renderData(state.items, state.result);
    },
  );

  const handleChange = ({ target: { name, value } }) => {
    watchedState[name] = value;
  };

  const inputs = document.querySelectorAll('input[type="number"]');
  inputs.forEach((input) => {
    input.addEventListener('input', handleChange);
  });

  document.addEventListener(
      'DOMContentLoaded',
      () => {
        const {min, max} = state
        state.result = filter(state.items, [state.min, state.max]);
        view.renderData(state.items, state.result)
      }
  );
};

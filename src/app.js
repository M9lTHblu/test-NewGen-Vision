import onChange from 'on-change';
import courses from './data';
import View from './View';
import filter from './filter';
import sort from './sort';

export default () => {
  const state = {
    sortParam: 'min',
    min: null,
    max: null,
    result: [],
    items: [],
  };

  const view = new View();
  view.init();

  const watchedState = onChange(
    state,
    () => {
      const filtered = filter(state.items, [state.min, state.max]);
      state.result = sort(state.sortParam, filtered);
      view.renderData(state.items, state.result);
    },
  );

  const handleChange = ({ target: { name, value } }) => {
    watchedState[name] = value;
  };

  view.getInputs().forEach((input) => {
    input.addEventListener('input', handleChange);
  });

  view.getSelect().addEventListener('change', handleChange);

  document.addEventListener(
    'DOMContentLoaded',
    () => {
      state.items = courses;
      const filtered = filter(state.items, [state.min, state.max]);
      state.result = sort(state.sortParam, filtered);
      view.renderData(state.items, state.result);
    },
  );
};

import { addTask } from './addTask.js';
import { sortTags } from './sortTags.js';
import { clearRestart } from './clearRestart.js';
import { search } from './search.js';
import { editTask } from './editTask.js';
import { revive } from './localStorage.js';

// import { choicerAddClass } from './choicerAddClass.js';
// import { choicerPick } from './choicerPick.js';

addTask();
clearRestart();
sortTags();
search();
editTask();

document.addEventListener('DOMContentLoaded', () => {
    revive();
  });
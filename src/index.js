import menu from './menu.json';
import menuItems from './menu-items.hbs';
import './styles.css';

const refs = {
  body: document.querySelector('body'),
  input: document.querySelector('.js-switch-input'),
  menuItem: document.querySelector('.js-menu'),
};

function buildMenuItem(menu) {
  const markup = menu.map(item => menuItems(item)).join('');
  refs.menuItem.insertAdjacentHTML('beforeend', markup);
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const baseTheme = () => {
  if (localStorage.getItem('Theme') == Theme.DARK) {
    refs.input.checked = true;
    refs.body.classList.add(localStorage.getItem('Theme'));
  }
};

refs.input.addEventListener('change', handleClick);

function handleClick() {
  if (refs.input.checked) {
    refs.body.classList.remove('light-theme');
    refs.body.classList.add('dark-theme');
    localStorage.removeItem('Theme');
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    refs.body.classList.remove('dark-theme');
    refs.body.classList.add('light-theme');
    localStorage.removeItem('Theme');
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}

baseTheme();
buildMenuItem(menu);


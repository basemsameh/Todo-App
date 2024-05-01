let numItems = document.querySelectorAll('span')[1];
let input = document.querySelector('input');
let tasks = document.querySelector('.tasks');
let clearCompleted = document.querySelectorAll('button')[4];
let sectionBtns = document.querySelector('section').children;
let theme = document.querySelector('button');

input.onblur = () => {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  let text = document.createTextNode(input.value);
  let img = document.createElement('img');
  img.src = 'images/icon-cross.svg';

  if (input.value !== '') {
    numItems.textContent = +numItems.textContent + 1;
    p.appendChild(btn);
    p.appendChild(text);
    p.appendChild(img);
    tasks.appendChild(p);
  }
  input.value = '';
  input.focus();

  btn.onclick = () => {
    if (btn.id === 'empty') {
      btn.id = 'done';
      p.style.textDecoration = 'line-through';
      p.style.color = '#9394a5';
    }
    else {
      btn.id = 'empty';
      p.style.textDecoration = 'none';
      if (theme.className === 'dark') {
        p.style.color = '#cacde8';
      }
      else p.style.color = '#000';
    }
  }

  img.onclick = () => {
    tasks.removeChild(p);
    numItems.textContent = +numItems.textContent - 1;
  }

  clearCompleted.onclick = () => {
    Array.from(tasks.children).forEach(e => {
      if (e.style.textDecoration === 'line-through') {
        numItems.textContent = +numItems.textContent - 1;
        tasks.removeChild(e);
      }
    })
  }
}

function upCrossImg() {
  document.querySelectorAll('img').forEach(img => {
    img.style.cssText = 'margin-top: -20px;';
  });
}

Array.from(sectionBtns).forEach(ele => {
  ele.onclick = () => {
    Array.from(sectionBtns).forEach(e => {
      e.classList.remove('active');
    })
    ele.classList.add('active');
    if (ele.textContent === 'Completed') {
      numItems.textContent = 0;
      upCrossImg();
      Array.from(tasks.children).forEach(e => {
        if (e.style.textDecoration === 'line-through') {
          numItems.textContent = +numItems.textContent + 1;
          e.style.display = 'block';
        }
        else {
          e.style.display = 'none';
        }
      })
    }
    else if (ele.textContent === 'Active') {
      numItems.textContent = 0;
      upCrossImg();
      Array.from(tasks.children).forEach(e => {
        if (e.style.textDecoration === 'line-through') {
          e.style.display = 'none';
        }
        else {
          numItems.textContent = +numItems.textContent + 1;
          e.style.display = 'block';
        }
      })
    }
    else {
      numItems.textContent = 0;
      upCrossImg();
      Array.from(tasks.children).forEach(e => {
        numItems.textContent = +numItems.textContent + 1;
        e.style.display = 'block';
      })
    }
  }
})

theme.onclick = () => {
  if (theme.className === 'dark') {
    theme.className = 'light';
    document.body.className = '';
    document.querySelector('header').className = '';
    document.querySelectorAll('div')[1].className = 'generate-light';
    document.querySelector('main').className = '';
    Array.from(tasks.children).forEach(e => {
      if (e.style.textDecoration === 'line-through') {
        e.style.color = '#9394a5';
      }
      else e.style.color = 'rgb(60 60 60)';
    })
  }
  else {
    theme.className = 'dark';
    document.body.className = 'bd-dark';
    document.querySelector('header').className = 'hd-dark';
    document.querySelectorAll('div')[1].className = 'generate-dark';
    document.querySelector('main').className = 'm-dark';
    Array.from(tasks.children).forEach(e => {
      if (e.style.textDecoration === 'line-through') {
        e.style.color = '#9394a5';
      }
      else e.style.color = 'rgb(202 205 232)';
    })
  }
}
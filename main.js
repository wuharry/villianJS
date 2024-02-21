import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { ApiClient } from '@localazy/api-client';

(function(){
  console.log('init');
  // document.querySelector('#app')
  
  const wordInput=document.querySelector('.wordInput')
  const wordForm=document.querySelector('.wordForm')
  const completeBtn=document.querySelector('.completeBtn')
  const LETTERARRAY=[];
  wordForm.addEventListener('submit',e=>{
    e.preventDefault();
    console.log('成功上岸');
    console.log(wordInput.value);
    LETTERARRAY.push(wordInput.value);
    wordInput.value='';
  })
  completeBtn.addEventListener('click',e=>{
    console.log(LETTERARRAY);
  })


  const translate=async()=>{
    const api = new ApiClient({ authToken: 'your-project-token' });       // Create Api client.
    const project = await api.projects.first();                           // Get Localazy project.
    const file = await api.import.json({ project, json });                // Import source keys.
    const fr = await api.export.json({ project, file, langs: ['en'] });   // Export translated keys.
console.log(fr);
  }
  
})()



